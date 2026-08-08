'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { FillBlankQuestion, LawDocument } from '@/types';
import { normalizeAnswer } from '@/lib/generators';
import { shuffle } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { PenLine, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

interface Props { questions: FillBlankQuestion[]; documents: LawDocument[] }

const ROUND_SIZE = 10;

export function FillBlankClient({ questions, documents }: Props) {
  const { gameHighScores, saveGameHighScore, addXP } = useAppStore((s) => ({
    gameHighScores: s.gameHighScores,
    saveGameHighScore: s.saveGameHighScore,
    addXP: s.addXP,
  }));

  const [docId, setDocId] = useState('all');
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [key, setKey] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const deck = useMemo(() => {
    const pool = docId === 'all' ? questions : questions.filter((q) => q.docId === docId);
    return shuffle(pool).slice(0, Math.min(pool.length, ROUND_SIZE));
  }, [questions, docId, key]);

  const q = deck[idx];
  const highScore = gameHighScores['fillBlank'] ?? 0;

  const isCorrect = submitted
    ? normalizeAnswer(input) === normalizeAnswer(q?.blank ?? '')
    : false;

  const handleSubmit = () => {
    if (submitted || !input.trim()) return;
    // Compute correct before setting submitted (isCorrect depends on submitted state)
    const correct = normalizeAnswer(input) === normalizeAnswer(q?.blank ?? '');
    setSubmitted(true);
    if (correct) {
      setScore((s) => s + 1);
      addXP(8, 'fillBlankCorrect');
    }
  };

  const next = () => {
    if (idx + 1 >= deck.length) {
      // score already incremented in handleSubmit — save directly
      saveGameHighScore('fillBlank', score);
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setInput('');
      setSubmitted(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const restart = () => {
    setIdx(0); setInput(''); setSubmitted(false); setScore(0); setDone(false); setKey((k) => k + 1);
  };

  if (done) {
    const finalScore = score;
    const pct = Math.round((finalScore / deck.length) * 100);
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-5xl">{pct >= 80 ? '🎯' : pct >= 50 ? '✍️' : '📖'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pct >= 80 ? 'Điền chuẩn!' : pct >= 50 ? 'Khá ổn!' : 'Cần xem lại!'}</h2>
        <div className="text-5xl font-bold text-indigo-600">{finalScore}<span className="text-2xl text-slate-400">/{deck.length}</span></div>
        {finalScore > 0 && finalScore >= highScore && <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block">🎉 Phá kỷ lục!</div>}
        <button onClick={restart} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Làm lại
        </button>
      </div>
    );
  }

  if (deck.length === 0) {
    return (
      <div className="max-w-lg mx-auto card p-12 text-center">
        <p className="text-4xl mb-3">📭</p>
        <p className="font-semibold text-slate-700">Chưa có câu hỏi điền chỗ trống cho bộ này.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up" key={key}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <PenLine className="w-5 h-5 text-teal-600" />Điền Chỗ Trống
        </h1>
        {highScore > 0 && <span className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-semibold"><Trophy className="w-3 h-3 inline mr-1" />Kỷ lục: {highScore}/{ROUND_SIZE}</span>}
      </div>

      {/* Doc filter */}
      <div className="flex gap-2 flex-wrap">
        {[{ id: 'all', icon: '📚', label: 'Tất cả' }, ...documents.map((d) => ({ id: d.id, icon: d.icon, label: d.shortTitle }))].map((d) => (
          <button key={d.id} onClick={() => { setDocId(d.id); restart(); }}
            className={cn('px-3 py-1 rounded-full text-xs font-semibold border transition-colors', docId === d.id ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-slate-600 border-slate-200')}>
            {d.icon} {d.label.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Câu {idx + 1}/{deck.length}</span><span>Đúng: {score}</span></div>
        <div className="progress-bar"><div className="progress-fill bg-teal-500" style={{ width: `${(idx / deck.length) * 100}%` }} /></div>
      </div>

      {q && (
        <div className="card p-5 space-y-5">
          <div>
            <span className="text-xs font-semibold text-teal-600 uppercase">{q.articleRef}</span>
            <p className="mt-2 text-slate-800 font-medium leading-relaxed text-lg">
              {q.sentence.split('___').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className={cn(
                      'inline-block min-w-[80px] border-b-2 mx-1 px-1 text-center font-bold',
                      submitted
                        ? isCorrect ? 'border-green-500 text-green-700' : 'border-red-400 text-red-600'
                        : 'border-indigo-400 text-indigo-600'
                    )}>
                      {submitted ? q.blank : (input || ' ')}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {!submitted ? (
            <div className="flex gap-2">
              <input
                ref={inputRef}
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Nhập câu trả lời..."
                className="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button onClick={handleSubmit} disabled={!input.trim()}
                className="px-4 py-2.5 bg-teal-600 text-white rounded-xl font-semibold text-sm hover:bg-teal-700 disabled:opacity-40 transition-colors">
                Kiểm tra
              </button>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn('rounded-xl p-4 border', isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')}
              >
                <p className={cn('font-semibold text-sm mb-1', isCorrect ? 'text-green-700' : 'text-red-600')}>
                  {isCorrect ? '✅ Chính xác!' : `❌ Đáp án đúng: "${q.blank}"`}
                </p>
                {q.hint && <p className="text-xs text-slate-500">📌 {q.hint}</p>}
                <button onClick={next} className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1">
                  {idx + 1 >= deck.length ? 'Xem kết quả' : <><ChevronRight className="w-4 h-4" />Câu tiếp</>}
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}
