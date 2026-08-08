'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { MatchPair, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Link, RotateCcw, Trophy } from 'lucide-react';

interface Props { pairs: MatchPair[]; documents: LawDocument[] }

const PAIRS_PER_ROUND = 6;

export function WordMatchClient({ pairs, documents }: Props) {
  const gameHighScores = useAppStore((s) => s.gameHighScores);
  const saveGameHighScore = useAppStore((s) => s.saveGameHighScore);
  const addXP = useAppStore((s) => s.addXP);

  const [docId, setDocId] = useState('all');
  const [key, setKey] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState(0);

  const highScore = gameHighScores['wordMatch'] ?? 0;

  const round = useMemo(() => {
    const pool = docId === 'all' ? pairs : pairs.filter((p) => p.docId === docId);
    return shuffle(pool).slice(0, Math.min(pool.length, PAIRS_PER_ROUND));
  }, [pairs, docId, key]);

  const terms = useMemo(() => shuffle(round.map((p) => p.term)), [round]);
  const defs = useMemo(() => shuffle(round.map((p) => p.definition)), [round]);

  const findPairByTerm = (term: string) => round.find((p) => p.term === term);
  const findPairByDef = (def: string) => round.find((p) => p.definition === def);

  const handleTermClick = (term: string) => {
    if (matched.has(term)) return;
    setSelectedTerm(term);
    if (selectedDef !== null) checkMatch(term, selectedDef);
  };

  const handleDefClick = (def: string) => {
    const defPair = findPairByDef(def);
    if (defPair && matched.has(defPair.term)) return;
    setSelectedDef(def);
    if (selectedTerm !== null) checkMatch(selectedTerm, def);
  };

  const checkMatch = (term: string, def: string) => {
    const pair = findPairByTerm(term);
    if (pair && pair.definition === def) {
      const newMatched = new Set(matched).add(term);
      setMatched(newMatched);
      setSelectedTerm(null);
      setSelectedDef(null);
      addXP(5, 'correctAnswer');
      if (newMatched.size === round.length) {
        const finalScore = round.length - errors;
        saveGameHighScore('wordMatch', Math.max(finalScore, 0));
        if (errors === 0) addXP(25, 'wordMatchBonus');
        setDone(true);
      }
    } else {
      setErrors((e) => e + 1);
      setWrong(`${term}||${def}`);
      setTimeout(() => {
        setWrong(null);
        setSelectedTerm(null);
        setSelectedDef(null);
      }, 600);
    }
  };

  const restart = () => {
    setSelectedTerm(null); setSelectedDef(null);
    setMatched(new Set()); setWrong(null); setDone(false);
    setErrors(0); setKey((k) => k + 1);
  };

  if (done) {
    const score = Math.max(round.length - errors, 0);
    const pct = Math.round((score / round.length) * 100);
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-5xl">{errors === 0 ? '🏆' : pct >= 50 ? '🔗' : '💪'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{errors === 0 ? 'Hoàn hảo!' : 'Hoàn thành!'}</h2>
        <div className="text-5xl font-bold text-violet-600">{score}<span className="text-2xl text-slate-400">/{round.length}</span></div>
        <p className="text-slate-500">{errors} lần nối sai</p>
        {errors === 0 && <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">⚡ Không sai lần nào! +25 XP</div>}
        <button onClick={restart} className="w-full py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Chơi lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up" key={key}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Link className="w-5 h-5 text-violet-600" />Nối Từ
        </h1>
        {highScore > 0 && <span className="text-xs bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full font-semibold"><Trophy className="w-3 h-3 inline mr-1" />Kỷ lục: {highScore}</span>}
      </div>

      <div className="flex gap-2 flex-wrap">
        {[{ id: 'all', icon: '📚', label: 'Tất cả' }, ...documents.map((d) => ({ id: d.id, icon: d.icon, label: d.shortTitle }))].map((d) => (
          <button key={d.id} onClick={() => { setDocId(d.id); restart(); }}
            className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docId === d.id ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-slate-600 border-slate-200')}>
            {d.icon} {d.label.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500 text-center">Bấm một cụm bên trái, rồi bấm định nghĩa tương ứng bên phải</p>
      <div className="text-xs text-right text-slate-400">Đã nối: {matched.size}/{round.length} · Sai: {errors}</div>

      <div className="grid grid-cols-2 gap-3">
        {/* Terms column */}
        <div className="space-y-2">
          {terms.map((term) => {
            const isMatched = matched.has(term);
            const isSelected = selectedTerm === term;
            const isWrong = wrong?.startsWith(term + '||');
            return (
              <AnimatePresence key={term}>
                {!isMatched ? (
                  <motion.button
                    layout
                    onClick={() => handleTermClick(term)}
                    animate={isWrong ? { x: [-6, 6, -6, 0] } : {}}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'w-full text-left px-3 py-3 rounded-xl border text-sm font-medium transition-all',
                      isSelected ? 'border-violet-500 bg-violet-50 text-violet-800 shadow-md' :
                      isWrong ? 'border-red-400 bg-red-50 text-red-700' :
                      'border-slate-200 bg-white hover:border-violet-300 text-slate-700'
                    )}
                  >
                    {term}
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.3 }}
                    className="w-full px-3 py-3 rounded-xl border border-green-300 bg-green-50 text-green-700 text-sm font-medium line-through"
                  >
                    {term}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Definitions column */}
        <div className="space-y-2">
          {defs.map((def) => {
            const pair = findPairByDef(def);
            const isMatched = pair ? matched.has(pair.term) : false;
            const isSelected = selectedDef === def;
            const isWrong = wrong?.endsWith('||' + def);
            return (
              <AnimatePresence key={def}>
                {!isMatched ? (
                  <motion.button
                    layout
                    onClick={() => handleDefClick(def)}
                    animate={isWrong ? { x: [-6, 6, -6, 0] } : {}}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'w-full text-left px-3 py-3 rounded-xl border text-xs leading-snug transition-all',
                      isSelected ? 'border-violet-500 bg-violet-50 text-violet-800 shadow-md' :
                      isWrong ? 'border-red-400 bg-red-50 text-red-700' :
                      'border-slate-200 bg-white hover:border-violet-300 text-slate-600'
                    )}
                  >
                    {def}
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.3 }}
                    className="w-full px-3 py-3 rounded-xl border border-green-300 bg-green-50 text-green-700 text-xs line-through"
                  >
                    {def}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </div>
  );
}
