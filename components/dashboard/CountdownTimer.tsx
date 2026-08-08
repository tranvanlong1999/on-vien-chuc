'use client';

import { useState, useEffect } from 'react';
import { getExamCountdown } from '@/lib/utils';

export function CountdownTimer() {
  const [time, setTime] = useState(getExamCountdown());

  useEffect(() => {
    const timer = setInterval(() => setTime(getExamCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
        <div className="text-4xl mb-2">🎉</div>
        <p className="text-green-700 font-bold text-lg">Hôm nay là ngày thi!</p>
        <p className="text-green-600 text-sm">Chúc bạn thi tốt và đạt kết quả cao!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 text-white">
      <p className="text-indigo-200 text-sm font-medium mb-3 uppercase tracking-wide">Đếm ngược đến ngày thi</p>
      <p className="text-xs text-indigo-300 mb-4">Kỳ thi Viên chức GV Tiểu học — 15/08/2026</p>
      <div className="flex items-center justify-center gap-3">
        {[
          { value: time.days, label: 'Ngày' },
          { value: time.hours, label: 'Giờ' },
          { value: time.minutes, label: 'Phút' },
          { value: time.seconds, label: 'Giây' },
        ].map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            {i > 0 && <span className="text-indigo-300 text-xl font-bold">:</span>}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-2 min-w-[52px]">
                <span className="text-2xl font-bold tabular-nums">{pad(value)}</span>
              </div>
              <p className="text-indigo-200 text-xs mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
