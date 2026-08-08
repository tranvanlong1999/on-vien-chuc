'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { DAY_PLANS, getDayIndex, getDaysLeft } from './sprint-roadmap-data';
import { DayCell } from './sprint-roadmap-day-cell';
import { DayDetailPanel } from './sprint-roadmap-day-detail-panel';

export function SprintRoadmap() {
  const { plannerChecked, setPlannerChecked } = useAppStore((s) => ({
    plannerChecked: s.plannerChecked,
    setPlannerChecked: s.setPlannerChecked,
  }));

  const dayIndex = getDayIndex();
  const daysLeft = getDaysLeft();
  const [openDay, setOpenDay] = useState<number | null>(null);

  const checked: boolean[] =
    plannerChecked && plannerChecked.length === 7 ? plannerChecked : new Array(7).fill(false);

  function handleMarkDone(idx: number) {
    const next = [...checked];
    next[idx] = true;
    setPlannerChecked(next);
  }

  function handleDayClick(idx: number) {
    setOpenDay(openDay === idx ? null : idx);
  }

  const urgentColor = daysLeft <= 3 ? 'text-red-600' : 'text-indigo-700';
  const urgentBg = daysLeft <= 3 ? 'bg-red-50 border-red-200' : 'bg-indigo-50 border-indigo-200';
  const badgeClass = daysLeft <= 3
    ? 'bg-red-100 text-red-700'
    : 'bg-indigo-100 text-indigo-700';

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${urgentBg}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <div>
          <h2 className={`text-base sm:text-lg font-bold ${urgentColor}`}>
            ⏰ Còn {daysLeft} ngày đến thi!
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Lộ trình 7 ngày nước rút — Kỳ thi 15/08/2026</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
          {daysLeft <= 3 ? '🔥 Nước rút!' : '📅 Sprint'}
        </span>
      </div>

      {/* 7-day grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
        {DAY_PLANS.map((plan, idx) => (
          <DayCell
            key={plan.day}
            plan={plan}
            idx={idx}
            dayIndex={dayIndex}
            isDone={checked[idx]}
            isOpen={openDay === idx}
            onClick={() => handleDayClick(idx)}
          />
        ))}
      </div>

      {/* Detail panel for selected day */}
      {openDay !== null && (
        <DayDetailPanel
          plan={DAY_PLANS[openDay]}
          isDone={checked[openDay]}
          onClose={() => setOpenDay(null)}
          onMarkDone={() => handleMarkDone(openDay)}
        />
      )}
    </div>
  );
}
