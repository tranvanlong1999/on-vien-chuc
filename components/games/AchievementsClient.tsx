'use client';

import { useAppStore } from '@/lib/store';
import { ACHIEVEMENTS } from '@/lib/achievements';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

export function AchievementsClient() {
  const achievements = useAppStore((s) => s.achievements ?? []);
  const earned = achievements.length;

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-500" />Thành Tích
        </h1>
        <p className="text-slate-500 mt-1">
          Đã mở khoá <span className="font-bold text-amber-600">{earned}/{ACHIEVEMENTS.length}</span> thành tích
        </p>
      </div>

      {/* Progress */}
      <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all"
          style={{ width: `${(earned / ACHIEVEMENTS.length) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ACHIEVEMENTS.map((a) => {
          const unlocked = achievements.includes(a.id);
          return (
            <div key={a.id} className={cn(
              'card p-4 flex items-center gap-4 transition-all',
              unlocked ? 'border-amber-200 bg-amber-50/50' : 'opacity-60 grayscale'
            )}>
              <div className={cn(
                'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0',
                unlocked ? 'bg-amber-100' : 'bg-slate-100'
              )}>
                {unlocked ? a.emoji : '🔒'}
              </div>
              <div className="min-w-0">
                <p className={cn('font-bold text-sm', unlocked ? 'text-slate-800' : 'text-slate-500')}>
                  {a.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{a.desc}</p>
                {unlocked && (
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                    ✅ Đã đạt · +100 XP
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
