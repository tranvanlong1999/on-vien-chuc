'use client';

import { useAppStore } from '@/lib/store';
import { getXPLevel } from '@/lib/utils';
import { LawDocument } from '@/types';
import { Zap, Flame, BookOpen, Trophy, Target, RotateCcw } from 'lucide-react';

interface Props { documents: LawDocument[]; totalFlashcards: number; totalQuestions: number }

export function ProgressClient({ documents, totalFlashcards, totalQuestions }: Props) {
  const { xp, streak, readingProgress, masteredCards, quizScores, mistakes, resetProgress } = useAppStore();
  const level = getXPLevel(xp);
  const xpPct = Math.min(100, Math.round(((xp - level.currentXP) / Math.max(1, level.nextXP - level.currentXP)) * 100));

  const totalArticles = documents.reduce((t, d) => t + d.chapters.reduce((s, c) => s + c.articles.length, 0), 0);
  const readArticles = Object.values(readingProgress).reduce((t, arr) => t + arr.length, 0);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-600" />Tiến độ học tập</h1>

      {/* XP Level */}
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">{level.level}</div>
            <div><p className="font-bold text-slate-800">{level.title}</p><p className="text-xs text-slate-500">Cấp độ {level.level}</p></div>
          </div>
          <div className="flex items-center gap-1 text-indigo-600 font-bold"><Zap className="w-4 h-4" />{xp} XP</div>
        </div>
        <div><div className="flex justify-between text-xs text-slate-500 mb-1"><span>{xp} XP</span><span>{level.nextXP} XP</span></div><div className="progress-bar"><div className="progress-fill" style={{ width: `${xpPct}%` }} /></div></div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <Stat icon={<Flame className="w-5 h-5 text-orange-500" />} label="Chuỗi ngày học" value={`${streak} ngày`} bg="bg-orange-50" />
        <Stat icon={<BookOpen className="w-5 h-5 text-blue-600" />} label="Điều luật đã đọc" value={`${readArticles}/${totalArticles}`} bg="bg-blue-50" />
        <Stat icon={<Zap className="w-5 h-5 text-purple-600" />} label="Thẻ nhớ thành thạo" value={`${masteredCards.length}/${totalFlashcards}`} bg="bg-purple-50" />
        <Stat icon={<Trophy className="w-5 h-5 text-yellow-600" />} label="Câu sai cần ôn" value={`${mistakes.length} câu`} bg="bg-yellow-50" />
      </div>

      {/* Per-document progress */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-slate-700">Tiến độ theo văn bản</h2>
        {documents.map((doc) => {
          const total = doc.chapters.reduce((t, c) => t + c.articles.length, 0);
          const read = (readingProgress[doc.id] || []).length;
          const pct = total > 0 ? Math.round((read / total) * 100) : 0;
          const score = quizScores[doc.id];
          return (
            <div key={doc.id} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span>{doc.icon}</span><span>{doc.shortTitle}</span>
                </div>
                <div className="flex items-center gap-2">
                  {score !== undefined && <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${score >= 5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>{score}/10</span>}
                  <span className="text-xs text-slate-500">{read}/{total} ({pct}%)</span>
                </div>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
            </div>
          );
        })}
      </div>

      {/* Reset */}
      <button onClick={() => { if (confirm('Xóa toàn bộ tiến độ học? Hành động này không thể hoàn tác.')) resetProgress(); }}
        className="w-full py-3 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
        <RotateCcw className="w-4 h-4" />Đặt lại tiến độ học (reset)
      </button>
    </div>
  );
}

function Stat({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: string; bg: string }) {
  return (
    <div className={`card p-4 ${bg} border-0`}>
      <div className="flex items-center gap-2 mb-1">{icon}<p className="text-xs text-slate-600 font-medium">{label}</p></div>
      <p className="text-xl font-bold text-slate-800">{value}</p>
    </div>
  );
}
