'use client';

import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { getXPLevel } from '@/lib/utils';
import { LawDocument } from '@/types';
import { BookOpen, Layers, FileText, CheckCircle2, Flame, Zap, Target, Trophy } from 'lucide-react';
import { flashcards } from '@/data/flashcards';
import { quizQuestions } from '@/data/questions';

interface Props {
  documents: LawDocument[];
}

export function DashboardClient({ documents }: Props) {
  const { xp, streak, readingProgress, masteredCards, quizScores, dailyXP, plannerChecked, setPlannerChecked } = useAppStore();
  const level = getXPLevel(xp);

  const totalArticles = documents.reduce(
    (t, d) => t + d.chapters.reduce((s, c) => s + c.articles.length, 0), 0
  );
  const readArticles = Object.values(readingProgress).reduce((t, arr) => t + arr.length, 0);
  const readPct = totalArticles > 0 ? Math.round((readArticles / totalArticles) * 100) : 0;
  const masteredPct = flashcards.length > 0 ? Math.round((masteredCards.length / flashcards.length) * 100) : 0;
  const xpPct = Math.min(100, Math.round(((xp - level.currentXP) / (level.nextXP - level.currentXP)) * 100));

  const examDate = new Date('2026-08-15');
  const today = new Date();
  const dayOfWeek = Math.floor((today.getTime() - new Date('2026-08-08').getTime()) / 86400000);
  const sprintDays = ['T.Sáu 8/8', 'T.Bảy 9/8', 'C.Nhật 10/8', 'T.Hai 11/8', 'T.Ba 12/8', 'T.Tư 13/8', 'T.Năm 14/8'];

  const mockHighScore = quizScores['mock'] || 0;

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          icon={<BookOpen className="w-5 h-5 text-blue-600" />}
          label="Điều luật đã đọc"
          value={`${readArticles}/${totalArticles}`}
          pct={readPct}
          color="bg-blue-100"
        />
        <StatCard
          icon={<Layers className="w-5 h-5 text-purple-600" />}
          label="Thẻ nhớ thành thạo"
          value={`${masteredCards.length}/${flashcards.length}`}
          pct={masteredPct}
          color="bg-purple-100"
        />
        <StatCard
          icon={<Flame className="w-5 h-5 text-orange-500" />}
          label="Chuỗi ngày học"
          value={`${streak} ngày`}
          pct={Math.min(100, streak * 14)}
          color="bg-orange-100"
        />
        <StatCard
          icon={<Trophy className="w-5 h-5 text-yellow-600" />}
          label="Điểm thi thử cao nhất"
          value={mockHighScore > 0 ? `${mockHighScore}/10` : 'Chưa thi'}
          pct={mockHighScore * 10}
          color="bg-yellow-100"
        />
      </div>

      {/* XP Level Bar */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="font-semibold text-slate-700">Cấp độ {level.level} — {level.title}</span>
          </div>
          <span className="text-sm text-slate-500">{xp} / {level.nextXP} XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${xpPct}%` }} />
        </div>
        {dailyXP > 0 && (
          <p className="text-xs text-indigo-600 mt-1.5">+{dailyXP} XP hôm nay</p>
        )}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Học ngay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/hoc" className="card p-4 flex items-center gap-3 hover:border-blue-300 group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">Đọc Điều luật</p>
              <p className="text-xs text-slate-500">{totalArticles - readArticles} điều chưa đọc</p>
            </div>
          </Link>
          <Link href="/luyen-tap/flashcards" className="card p-4 flex items-center gap-3 hover:border-purple-300 group">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Layers className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">Thẻ nhớ SRS</p>
              <p className="text-xs text-slate-500">{flashcards.length - masteredCards.length} thẻ cần ôn</p>
            </div>
          </Link>
          <Link href="/de-thi" className="card p-4 flex items-center gap-3 hover:border-green-300 group">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">Thi thử tổng hợp</p>
              <p className="text-xs text-slate-500">60 câu + Tự luận</p>
            </div>
          </Link>
        </div>
      </div>

      {/* 7-day Sprint Planner */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-indigo-600" />
          <h2 className="font-bold text-slate-700">Kế hoạch nước rút 7 ngày</h2>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">8/8 → 14/8</span>
        </div>
        <div className="space-y-2">
          {sprintDays.map((day, i) => {
            const isPast = i < dayOfWeek;
            const isToday = i === dayOfWeek;
            return (
              <label key={i} className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors ${isToday ? 'bg-indigo-50 ring-1 ring-indigo-300' : isPast ? 'opacity-60' : 'hover:bg-slate-50'}`}>
                <input
                  type="checkbox"
                  checked={plannerChecked[i] || false}
                  onChange={(e) => {
                    const next = [...plannerChecked];
                    next[i] = e.target.checked;
                    setPlannerChecked(next);
                  }}
                  className="w-4 h-4 accent-indigo-600 rounded"
                />
                <span className={`text-sm font-medium ${isToday ? 'text-indigo-700' : 'text-slate-700'}`}>
                  {isToday && <span className="text-xs text-indigo-500 mr-1">Hôm nay •</span>}
                  {day}
                </span>
                {plannerChecked[i] && <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />}
              </label>
            );
          })}
        </div>
      </div>

      {/* Document cards */}
      <div>
        <h2 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Văn bản pháp luật ({documents.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => {
            const docArticles = doc.chapters.reduce((t, c) => t + c.articles.length, 0);
            const docRead = (readingProgress[doc.id] || []).length;
            const docReadPct = docArticles > 0 ? Math.round((docRead / docArticles) * 100) : 0;
            const docScore = quizScores[doc.id];
            return (
              <div key={doc.id} className="card p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{doc.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm leading-tight">{doc.shortTitle}</p>
                      <p className="text-xs text-slate-400">{doc.code}</p>
                    </div>
                  </div>
                  {docScore !== undefined && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${docScore >= 5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                      {docScore}/10
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">{doc.summary}</p>
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Đã đọc {docRead}/{docArticles} điều</span>
                    <span>{docReadPct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${docReadPct}%` }} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/hoc?doc=${doc.id}`} className="flex-1 text-center text-xs font-medium py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors">
                    Đọc luật
                  </Link>
                  <Link href={`/luyen-tap/quiz?doc=${doc.id}`} className="flex-1 text-center text-xs font-medium py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                    Luyện tập
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, pct, color }: { icon: React.ReactNode; label: string; value: string; pct: number; color: string }) {
  return (
    <div className="card p-4">
      <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-3`}>{icon}</div>
      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
      <p className="font-bold text-slate-800 text-base">{value}</p>
      <div className="progress-bar mt-2">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
