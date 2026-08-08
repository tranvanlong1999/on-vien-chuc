'use client';

import { useState } from 'react';
import { PedagogyScenario } from '@/data/scenarios';
import { cn } from '@/lib/utils';
import {
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from './scenario-badge-helpers';

type FilterCategory = PedagogyScenario['category'] | 'all';
type FilterDifficulty = PedagogyScenario['difficulty'] | 'all';

const ALL_CATS: FilterCategory[] = [
  'all',
  'ung-xu-hs',
  'ung-xu-ph',
  'ky-luat',
  'dong-nghiep',
  'dao-duc',
];
const ALL_DIFFS: FilterDifficulty[] = ['all', 'easy', 'medium', 'hard'];

interface Props {
  scenarios: PedagogyScenario[];
  onSelect: (s: PedagogyScenario) => void;
}

export function ScenarioList({ scenarios, onSelect }: Props) {
  const [filterCat, setFilterCat] = useState<FilterCategory>('all');
  const [filterDiff, setFilterDiff] = useState<FilterDifficulty>('all');

  const filtered = scenarios.filter((s) => {
    const catOk = filterCat === 'all' || s.category === filterCat;
    const diffOk = filterDiff === 'all' || s.difficulty === filterDiff;
    return catOk && diffOk;
  });

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-slate-800">Luyện tập Tình huống Sư phạm</h1>
        <p className="text-sm text-slate-500">
          {scenarios.length} tình huống thực tế — tự viết bài và tự chấm theo rubric
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {ALL_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold transition-colors border',
                filterCat === cat
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              )}
            >
              {cat === 'all' ? 'Tất cả nhóm' : CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ALL_DIFFS.map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDiff(diff)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold transition-colors border',
                filterDiff === diff
                  ? 'bg-slate-700 text-white border-slate-700'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              )}
            >
              {diff === 'all' ? 'Mọi độ khó' : DIFFICULTY_LABELS[diff]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-400">
        Hiển thị {filtered.length}/{scenarios.length} tình huống
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm">
          Không có tình huống nào phù hợp với bộ lọc.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s)}
              className="text-left bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group space-y-3"
            >
              <div className="flex flex-wrap gap-1.5">
                <span
                  className={cn(
                    'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide',
                    CATEGORY_COLORS[s.category]
                  )}
                >
                  {CATEGORY_LABELS[s.category]}
                </span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide',
                    DIFFICULTY_COLORS[s.difficulty]
                  )}
                >
                  {DIFFICULTY_LABELS[s.difficulty]}
                </span>
              </div>

              <p className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-indigo-700 transition-colors">
                {s.title}
              </p>

              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {s.scenario}
              </p>

              <p className="text-[10px] text-slate-400 font-medium">
                {s.rubric.length} tiêu chí chấm &middot; tổng{' '}
                {s.rubric.reduce((t, r) => t + r.points, 0)} điểm
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
