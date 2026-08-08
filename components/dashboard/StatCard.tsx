'use client';

interface Props {
  icon: React.ReactNode;
  label: string;
  value: string;
  pct: number;
  color: string;
}

export function StatCard({ icon, label, value, pct, color }: Props) {
  return (
    <div className="card p-4">
      <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-3`}>{icon}</div>
      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
      <p className="font-bold text-slate-800 text-base">{value}</p>
      <div className="progress-bar mt-2">
        <div className="progress-fill" style={{ width: `${Math.min(100, pct)}%` }} />
      </div>
    </div>
  );
}
