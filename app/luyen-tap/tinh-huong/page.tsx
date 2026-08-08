import { ScenarioClient } from '@/components/scenarios/ScenarioClient';
import { scenarios } from '@/data/scenarios';

export const metadata = {
  title: 'Tình huống Sư phạm | HVC2026',
  description: 'Luyện tập xử lý tình huống sư phạm theo chuẩn mực ứng xử nhà giáo TT03/2026',
};

export default function TinhHuongPage() {
  return <ScenarioClient scenarios={scenarios} />;
}
