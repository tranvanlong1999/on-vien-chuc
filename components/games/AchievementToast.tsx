'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { checkNewAchievements } from '@/lib/achievements';

export function AchievementToast() {
  const state = useAppStore((s) => s);
  const [queue, setQueue] = useState<{ emoji: string; title: string }[]>([]);
  // Track what we've already queued this session to avoid duplicate toasts
  const notifiedRef = useRef<Set<string>>(new Set(state.achievements ?? []));

  const xp = state.xp;
  const streak = state.streak;
  const quizCount = Object.keys(state.quizScores).length;
  const masteredCount = state.masteredCards.length;
  const readCount = Object.values(state.readingProgress).reduce((a, b) => a + b.length, 0);
  const bossCount = (state.bossDefeated ?? []).length;
  const speedScore = state.gameHighScores?.['speedQuiz'] ?? 0;
  const fillScore = state.gameHighScores?.['fillBlank'] ?? 0;
  const dailyCount = Object.keys(state.dailyChallengeCompleted ?? {}).length;

  useEffect(() => {
    const newOnes = checkNewAchievements(state, state.achievements ?? []).filter(
      (a) => !notifiedRef.current.has(a.id)
    );
    for (const a of newOnes) {
      notifiedRef.current.add(a.id);
      state.unlockAchievement(a.id);
      setQueue((q) => [...q, { emoji: a.emoji, title: a.title }]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xp, streak, quizCount, masteredCount, readCount, bossCount, speedScore, fillScore, dailyCount]);

  const dismiss = () => setQueue((q) => q.slice(1));

  return (
    <AnimatePresence>
      {queue[0] && (
        <motion.div
          key={queue[0].title}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onAnimationComplete={() => setTimeout(dismiss, 3000)}
          onClick={dismiss}
          className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white border border-amber-300 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 cursor-pointer select-none"
        >
          <span className="text-3xl">{queue[0].emoji}</span>
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Thành tích mở khoá!</p>
            <p className="font-bold text-slate-800">{queue[0].title}</p>
          </div>
          <span className="text-xs text-amber-500 font-bold ml-2">+100 XP</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
