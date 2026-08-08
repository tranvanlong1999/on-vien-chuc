'use client';

import Link from 'next/link';
import { DayPlan } from './sprint-roadmap-data';

interface DayDetailPanelProps {
  plan: DayPlan;
  isDone: boolean;
  onClose: () => void;
  onMarkDone: () => void;
}

export function DayDetailPanel({ plan, isDone, onClose, onMarkDone }: DayDetailPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-indigo-100 p-4 sm:p-5 mt-2 animate-slide-up">
      {/* Panel header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <span className="text-2xl mr-2">{plan.icon}</span>
          <span className="font-bold text-slate-800 text-sm sm:text-base">{plan.fullTitle}</span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 text-lg leading-none flex-shrink-0 mt-0.5"
          aria-label="Đóng"
        >
          ✕
        </button>
      </div>

      {/* Task list */}
      <ul className="space-y-2 mb-4">
        {plan.tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
              {i + 1}
            </span>
            {task}
          </li>
        ))}
      </ul>

      {/* Quick links */}
      <div className="flex flex-wrap gap-2 mb-4">
        {plan.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1 text-xs font-medium bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg px-3 py-1.5 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mark done */}
      {isDone ? (
        <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
          <span className="text-lg">✅</span> Đã hoàn thành ngày này!
        </div>
      ) : (
        <button
          onClick={onMarkDone}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          ✅ Đánh dấu hoàn thành
        </button>
      )}
    </div>
  );
}
