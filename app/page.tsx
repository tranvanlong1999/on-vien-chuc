import { CountdownTimer } from '@/components/dashboard/CountdownTimer';
import { DashboardClient } from '@/components/dashboard/DashboardClient';
import { SprintRoadmap } from '@/components/dashboard/SprintRoadmap';
import { lawDocuments } from '@/data/documents';

export default function HomePage() {
  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Xin chào, chiến binh! 👋</h1>
        <p className="text-slate-500 mt-1">Còn chưa đến ngày thi — hãy ôn thật chắc nhé.</p>
      </div>

      {/* 7-day sprint roadmap */}
      <SprintRoadmap />

      {/* Countdown */}
      <CountdownTimer />

      {/* Progress + Actions (client) */}
      <DashboardClient documents={lawDocuments} />
    </div>
  );
}
