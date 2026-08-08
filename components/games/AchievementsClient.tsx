'use client';

import { useAppStore } from '@/lib/store';
import { ACHIEVEMENTS } from '@/lib/achievements';
import { cn } from '@/lib/utils';
import { Trophy } from 'lucide-react';

export function AchievementsClient() {
  const progress = useAppStore();
  const achievements = progress.achievements ?? [];
  const earned = achievements.length;

  return (
    <div className="space-y-6 animate-slide-up max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500" />Bảng Danh Hiệu & Thành Tích
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Đã mở khoá <span className="font-bold text-amber-600">{earned}/{ACHIEVEMENTS.length}</span> danh hiệu trong hành trình ôn thi
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs text-slate-400 font-medium">Tiến độ tổng thể</span>
          <p className="text-lg font-extrabold text-amber-600">{Math.round((earned / ACHIEVEMENTS.length) * 100)}%</p>
        </div>
      </div>

      {/* Progress */}
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-500 shadow-sm"
          style={{ width: `${(earned / ACHIEVEMENTS.length) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ACHIEVEMENTS.map((a) => {
          const unlocked = achievements.includes(a.id);
          
          // Get current progress text for locked achievements
          let currentStatus = '';
          if (!unlocked) {
            if (a.id === 'first-quiz') {
              const count = Object.keys(progress.quizScores).length;
              currentStatus = `Tiến độ: ${count}/1 bài trắc nghiệm`;
            } else if (a.id === 'streak-7') {
              currentStatus = `Tiến độ: ${progress.streak}/7 ngày streak`;
            } else if (a.id === 'speed-perfect') {
              const s = progress.gameHighScores?.['speedQuiz'] ?? 0;
              currentStatus = `Kỷ lục hiện tại: ${s}/10 điểm`;
            } else if (a.id === 'reader-50') {
              const count = Object.values(progress.readingProgress).reduce((acc, arr) => acc + arr.length, 0);
              currentStatus = `Tiến độ: ${count}/50 điều khoản`;
            } else if (a.id === 'fillblank-perfect') {
              const s = progress.gameHighScores?.['fillBlank'] ?? 0;
              currentStatus = `Kỷ lục hiện tại: ${s}/10 điểm`;
            } else if (a.id === 'boss-3') {
              const count = progress.bossDefeated?.length ?? 0;
              currentStatus = `Tiến độ: ${count}/3 Boss`;
            } else if (a.id === 'mock-master') {
              const maxScore = Math.max(0, ...Object.values(progress.quizScores));
              currentStatus = `Điểm cao nhất: ${maxScore}/10`;
            } else if (a.id === 'warrior') {
              currentStatus = `Tiến độ: ${progress.xp}/500 XP`;
            } else if (a.id === 'flashcard-master') {
              const count = progress.masteredCards?.length ?? 0;
              currentStatus = `Tiến độ: ${count}/30 thẻ thuộc`;
            } else if (a.id === 'daily-5') {
              const count = Object.values(progress.dailyChallengeCompleted ?? {}).filter(Boolean).length;
              currentStatus = `Tiến độ: ${count}/5 ngày thử thách`;
            }
          }

          return (
            <div key={a.id} className={cn(
              'card p-4 flex items-center gap-4 transition-all duration-200 border rounded-2xl',
              unlocked
                ? 'border-amber-300 bg-amber-50/50 shadow-xs'
                : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
            )}>
              <div className={cn(
                'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform',
                unlocked ? 'bg-amber-100 shadow-inner scale-105' : 'bg-slate-200/70 opacity-50'
              )}>
                {unlocked ? a.emoji : '🔒'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className={cn('font-bold text-sm', unlocked ? 'text-slate-900' : 'text-slate-700')}>
                    {a.title}
                  </p>
                  {unlocked ? (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full shrink-0">
                      +100 XP
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full shrink-0">
                      Chưa đạt
                    </span>
                  )}
                </div>
                
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{a.desc}</p>

                {unlocked ? (
                  <p className="text-[11px] font-semibold text-emerald-600 mt-1.5 flex items-center gap-1">
                    <span>✓ Đã mở khóa thành công</span>
                  </p>
                ) : (
                  <p className="text-[11px] font-medium text-indigo-600 mt-1.5 bg-indigo-50/80 px-2 py-0.5 rounded-md inline-block">
                    📌 {currentStatus}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
