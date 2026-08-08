'use client';

import { DayPlan } from './sprint-roadmap-data';

interface DayCellProps {
  plan: DayPlan;
  idx: number;
  dayIndex: number;
  isDone: boolean;
  isOpen: boolean;
  onClick: () => void;
}

export function DayCell({ plan, idx, dayIndex, isDone, isOpen, onClick }: DayCellProps) {
  const isToday = idx === dayIndex;
  const isFuture = idx > dayIndex;

  let boxClass =
    'relative flex flex-col items-center justify-center rounded-xl border-2 select-none transition-all duration-200 py-2 px-1 sm:py-3 sm:px-2 ';

  if (isFuture) {
    boxClass += 'bg-white border-slate-200 opacity-50 cursor-default ';
  } else {
    boxClass += 'cursor-pointer ';
    if (isDone) {
      boxClass += 'bg-emerald-50 border-emerald-400 ';
    } else if (isToday) {
      boxClass += `bg-white border-indigo-500 shadow-md shadow-indigo-100 ${isOpen ? 'ring-2 ring-indigo-400' : ''} `;
    } else {
      // past, not done
      boxClass += 'bg-slate-50 border-slate-300 ';
    }
  }

  const dayNumColor = isToday
    ? 'text-indigo-600'
    : isDone
    ? 'text-emerald-600'
    : 'text-slate-500';

  return (
    <div
      className={boxClass}
      onClick={() => { if (!isFuture) onClick(); }}
      title={plan.fullTitle}
    >
      {/* Today badge */}
      {isToday && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold bg-indigo-500 text-white px-1.5 py-0.5 rounded-full whitespace-nowrap leading-none">
          HÔM NAY
        </span>
      )}

      {/* Done checkmark badge */}
      {isDone && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded-full leading-none">
          ✓
        </span>
      )}

      {/* Day number */}
      <span className={`text-[10px] sm:text-xs font-semibold mb-0.5 ${dayNumColor}`}>
        N{plan.day}
      </span>

      {/* Icon */}
      <span className="text-base sm:text-xl leading-none mb-0.5">{plan.icon}</span>

      {/* Short name — hidden on very small screens */}
      <span className="hidden sm:block text-[9px] text-center leading-tight text-slate-600 font-medium px-0.5 line-clamp-2">
        {plan.shortName}
      </span>

      {/* Date */}
      <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">{plan.date}</span>
    </div>
  );
}
