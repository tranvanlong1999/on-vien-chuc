'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { checkNewAchievements } from '@/lib/achievements';

export function AchievementToast() {
  const xp = useAppStore((s) => s.xp);
  const streak = useAppStore((s) => s.streak);
  const quizScores = useAppStore((s) => s.quizScores);
  const masteredCards = useAppStore((s) => s.masteredCards);
  const readingProgress = useAppStore((s) => s.readingProgress);
  const bossDefeated = useAppStore((s) => s.bossDefeated);
  const gameHighScores = useAppStore((s) => s.gameHighScores);
  const dailyChallengeCompleted = useAppStore((s) => s.dailyChallengeCompleted);
  const achievements = useAppStore((s) => s.achievements);
  const unlockAchievement = useAppStore((s) => s.unlockAchievement);

  const [queue, setQueue] = useState<{ emoji: string; title: string }[]>([]);
  const notifiedRef = useRef<Set<string>>(new Set(achievements ?? []));

  const quizCount = Object.keys(quizScores).length;
  const masteredCount = masteredCards.length;
  const readCount = Object.values(readingProgress).reduce((a, b) => a + b.length, 0);
  const bossCount = (bossDefeated ?? []).length;
  const speedScore = gameHighScores?.['speedQuiz'] ?? 0;
  const fillScore = gameHighScores?.['fillBlank'] ?? 0;
  const dailyCount = Object.keys(dailyChallengeCompleted ?? {}).length;

  useEffect(() => {
    const snapshot = {
      xp, streak, quizScores, masteredCards, readingProgress,
      bossDefeated: bossDefeated ?? [],
      gameHighScores: gameHighScores ?? {},
      dailyChallengeCompleted: dailyChallengeCompleted ?? {},
      achievements: achievements ?? [],
      flashcardSRS: {}, mistakes: [], mistakeHistory: {},
      dailyXP: 0, lastXPDate: '', lastStudyDate: '',
      plannerChecked: [], bossHP: {},
    };
    const newOnes = checkNewAchievements(snapshot as never, achievements ?? []).filter(
      (a) => !notifiedRef.current.has(a.id)
    );
    for (const a of newOnes) {
      notifiedRef.current.add(a.id);
      unlockAchievement(a.id);
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
