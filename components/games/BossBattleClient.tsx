'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { QuizQuestion, LawDocument } from '@/types';
import { shuffle } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Star, Flame, RotateCcw } from 'lucide-react';

interface Props {
  doc: LawDocument;
  questions: QuizQuestion[];
}

const BOSS_MAX_HP = 100;
const PLAYER_MAX_HP = 100;
const DAMAGE = 10;

export function BossBattleClient({ doc, questions }: Props) {
  const bossHP = useAppStore((s) => s.bossHP);
  const bossDefeated = useAppStore((s) => s.bossDefeated);
  const updateBossHP = useAppStore((s) => s.updateBossHP);
  const defeatBoss = useAppStore((s) => s.defeatBoss);
  const addXP = useAppStore((s) => s.addXP);

  const isAlreadyDefeated = bossDefeated.includes(doc.id);
  const savedBossHP = bossHP[doc.id] ?? BOSS_MAX_HP;

  const [deck] = useState(() => shuffle(questions).slice(0, 10));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [currentBossHP, setCurrentBossHP] = useState(savedBossHP);
  const [playerHP, setPlayerHP] = useState(PLAYER_MAX_HP);
  const [result, setResult] = useState<'victory' | 'defeat' | null>(null);
  const [shakeTarget, setShakeTarget] = useState<'boss' | 'player' | null>(null);
  const [started, setStarted] = useState(false);

  const q = deck[idx];
  const isCorrect = selected === q?.correctAnswer;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.correctAnswer;

    if (correct) {
      addXP(5, 'correctAnswer');
      const newBossHP = Math.max(0, currentBossHP - DAMAGE);
      setCurrentBossHP(newBossHP);
      setShakeTarget('boss');
      updateBossHP(doc.id, newBossHP);
      if (newBossHP <= 0) {
        setTimeout(() => { defeatBoss(doc.id); setResult('victory'); }, 800);
        return;
      }
    } else {
      const newPlayerHP = Math.max(0, playerHP - DAMAGE);
      setPlayerHP(newPlayerHP);
      setShakeTarget('player');
      if (newPlayerHP <= 0) {
        setTimeout(() => setResult('defeat'), 800);
        return;
      }
    }
    setTimeout(() => setShakeTarget(null), 400);
  };

  const next = () => {
    if (idx + 1 >= deck.length) {
      // All questions done, boss still alive — save HP and end
      updateBossHP(doc.id, currentBossHP);
      setResult('defeat');
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIdx(0); setSelected(null);
    setCurrentBossHP(bossHP[doc.id] ?? BOSS_MAX_HP);
    setPlayerHP(PLAYER_MAX_HP);
    setResult(null); setShakeTarget(null); setStarted(false);
  };

  if (!started) {
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-5 animate-slide-up">
        <div className="text-6xl">{doc.icon}</div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Boss: {doc.shortTitle}</h2>
          <p className="text-sm text-slate-500 mt-1">{doc.title}</p>
        </div>
        {isAlreadyDefeated ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold">✅ Đã đánh bại Boss này!</p>
            <p className="text-sm text-green-600 mt-1">Thử sức lại để luyện tập thêm.</p>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-red-700">💀 Boss HP còn lại: {currentBossHP}/{BOSS_MAX_HP}</p>
            <div className="h-2 bg-red-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${(currentBossHP / BOSS_MAX_HP) * 100}%` }} />
            </div>
          </div>
        )}
        <div className="text-sm text-slate-500 space-y-1">
          <p>⚔️ Trả lời đúng → Boss mất {DAMAGE} HP</p>
          <p>🛡️ Trả lời sai → Bạn mất {DAMAGE} HP</p>
          <p>🏆 Hạ Boss về 0 HP → +150 XP</p>
        </div>
        <button onClick={() => setStarted(true)}
          className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
          <Flame className="w-5 h-5" />{isAlreadyDefeated ? 'Thử lại' : 'Tấn công!'}
        </button>
      </div>
    );
  }

  if (result === 'victory') {
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.5 }}
          className="text-6xl"
        >🏆</motion.div>
        <h2 className="text-2xl font-bold text-green-700">Boss bị đánh bại!</h2>
        <p className="text-slate-600">Bạn đã chinh phục <span className="font-bold">{doc.shortTitle}</span></p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-700 font-semibold">
          +150 XP · Boss bị đánh dấu hoàn thành ✅
        </div>
        <button onClick={restart} className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Thử lại Boss
        </button>
      </div>
    );
  }

  if (result === 'defeat') {
    return (
      <div className="max-w-lg mx-auto card p-8 text-center space-y-4 animate-slide-up">
        <div className="text-6xl">💀</div>
        <h2 className="text-2xl font-bold text-red-700">Bạn đã bị đánh bại!</h2>
        <p className="text-slate-600">Boss HP còn <span className="font-bold text-red-600">{currentBossHP}</span>. HP đã được lưu lại — quay lại tiếp tục!</p>
        <button onClick={restart} className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw className="w-4 h-4" />Thử lại
        </button>
      </div>
    );
  }

  const bossHPPct = (currentBossHP / BOSS_MAX_HP) * 100;
  const playerHPPct = (playerHP / PLAYER_MAX_HP) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-slide-up">
      {/* HP bars */}
      <div className="card p-4 space-y-3">
        {/* Boss HP */}
        <motion.div animate={shakeTarget === 'boss' ? { x: [-8, 8, -6, 6, 0] } : {}} transition={{ duration: 0.3 }}>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className="text-red-600">{doc.icon} Boss: {doc.shortTitle}</span>
            <span className="text-red-600">{currentBossHP}/{BOSS_MAX_HP} HP</span>
          </div>
          <div className="h-3 bg-red-100 rounded-full overflow-hidden">
            <motion.div animate={{ width: `${bossHPPct}%` }} transition={{ duration: 0.4 }}
              className={cn('h-full rounded-full', bossHPPct > 50 ? 'bg-red-500' : bossHPPct > 25 ? 'bg-orange-500' : 'bg-red-700')} />
          </div>
        </motion.div>

        {/* Player HP */}
        <motion.div animate={shakeTarget === 'player' ? { x: [-8, 8, -6, 6, 0] } : {}} transition={{ duration: 0.3 }}>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className="text-green-600"><Star className="w-3 h-3 inline" /> Bạn</span>
            <span className="text-green-600">{playerHP}/{PLAYER_MAX_HP} HP</span>
          </div>
          <div className="h-3 bg-green-100 rounded-full overflow-hidden">
            <motion.div animate={{ width: `${playerHPPct}%` }} transition={{ duration: 0.4 }}
              className={cn('h-full rounded-full', playerHPPct > 50 ? 'bg-green-500' : playerHPPct > 25 ? 'bg-yellow-500' : 'bg-red-500')} />
          </div>
        </motion.div>
      </div>

      {/* Question */}
      <div className="text-xs text-center text-slate-500">Câu {idx + 1}/{deck.length}</div>

      {q && (
        <div className="card p-5 space-y-4">
          <span className="text-xs font-semibold text-red-600 uppercase flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />{doc.shortTitle}
          </span>
          <p className="text-slate-800 font-medium leading-relaxed">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let cls = 'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ';
              if (selected === null) cls += 'border-slate-200 hover:border-red-300 hover:bg-red-50 text-slate-700';
              else if (i === q.correctAnswer) cls += 'border-green-400 bg-green-50 text-green-800 font-medium';
              else if (i === selected) cls += 'border-red-400 bg-red-50 text-red-700';
              else cls += 'border-slate-200 text-slate-400';
              return (
                <button key={i} className={cls} onClick={() => handleSelect(i)}>
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className={cn('rounded-xl p-4 border animate-slide-up', isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')}>
              <p className={cn('font-semibold text-sm mb-1', isCorrect ? 'text-green-700' : 'text-red-600')}>
                {isCorrect ? '⚔️ Chí mạng! Boss mất 10 HP' : '💥 Bị phản đòn! Bạn mất 10 HP'}
              </p>
              <p className="text-xs text-slate-600">{q.explanation}</p>
              <button onClick={next} className="mt-3 w-full py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5" />
                {idx + 1 >= deck.length ? 'Kết thúc' : 'Tiếp tục chiến đấu →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
