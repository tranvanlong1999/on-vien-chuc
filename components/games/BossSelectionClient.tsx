'use client';

import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { LawDocument } from '@/types';
import { cn } from '@/lib/utils';
import { Flame, CheckCircle2 } from 'lucide-react';

interface Props {
  documents: LawDocument[];
  questionCounts: Record<string, number>;
}

const BOSS_MAX_HP = 100;

export function BossSelectionClient({ documents, questionCounts }: Props) {
  const bossDefeated = useAppStore((s) => s.bossDefeated);
  const bossHP = useAppStore((s) => s.bossHP);

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Flame className="w-6 h-6 text-red-600" />Vượt Ải Boss
        </h1>
        <p className="text-slate-500 mt-1">
          Chinh phục {documents.length} Boss — trả lời đúng để hạ Boss, sai thì bị phản đòn
        </p>
        <div className="mt-2 text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg inline-block">
          🏆 Đã hạ: {bossDefeated.length}/{documents.length} Boss · Thưởng +150 XP/Boss
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => {
          const defeated = bossDefeated.includes(doc.id);
          const hp = bossHP[doc.id] ?? BOSS_MAX_HP;
          const hpPct = (hp / BOSS_MAX_HP) * 100;
          const hasQuestions = (questionCounts[doc.id] ?? 0) >= 5;

          return (
            <div key={doc.id} className={cn('card p-5 space-y-3 transition-all', hasQuestions ? 'hover:shadow-md hover:-translate-y-0.5' : 'opacity-60')}>
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center text-2xl shadow-sm`}>
                  {doc.icon}
                </div>
                {defeated ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />Đã hạ
                  </span>
                ) : !hasQuestions ? (
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    🔒 Chưa có câu hỏi
                  </span>
                ) : hp < BOSS_MAX_HP ? (
                  <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
                    ⚔️ Đang chiến
                  </span>
                ) : null}
              </div>

              {/* Info */}
              <div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">{doc.shortTitle}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{questionCounts[doc.id] ?? 0} câu hỏi</p>
              </div>

              {/* Boss HP bar */}
              {!defeated && (
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Boss HP</span>
                    <span className="font-semibold text-red-600">{hp}/{BOSS_MAX_HP}</span>
                  </div>
                  <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                    <div
                      className={cn('h-full rounded-full transition-all', hpPct > 50 ? 'bg-red-400' : hpPct > 25 ? 'bg-orange-500' : 'bg-red-700')}
                      style={{ width: `${hpPct}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action */}
              {hasQuestions ? (
                <Link href={`/luyen-tap/vuot-ai/${doc.id}`}
                  className={cn('block w-full text-center py-2 rounded-xl text-sm font-semibold transition-colors',
                    defeated
                      ? 'bg-green-50 text-green-700 hover:bg-green-100'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  )}>
                  {defeated ? '🔄 Thử lại' : hp < BOSS_MAX_HP ? '⚔️ Tiếp tục chiến' : '⚔️ Tấn công!'}
                </Link>
              ) : (
                <div className="w-full text-center py-2 rounded-xl text-sm font-semibold text-slate-400 bg-slate-100 cursor-not-allowed">
                  Chưa có câu hỏi
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
