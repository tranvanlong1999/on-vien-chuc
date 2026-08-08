import { DailyChallengeClient } from '@/components/games/DailyChallengeClient';
import { lawDocuments } from '@/data/documents';
import { quizQuestions } from '@/data/questions';
import { pickDailyDeck } from '@/lib/generators';

export const metadata = {
  title: 'Thử Thách Ngày | HVC2026',
  description: '5 câu hỏi mỗi ngày, ưu tiên nội dung mới 2026 — nhận +50 XP',
};

// Docs that contain isNew2026 articles (2026 amendments)
const NEW_2026_DOC_IDS = new Set([
  'luat-nha-giao-2025',
  'luat-vien-chuc-2025',
  'nghi-dinh-93-2026',
  'nghi-dinh-259-2026',
  'thong-tu-30-2026',
  'thong-tu-03-2026',
]);

export default function ThuThachNgayPage() {
  const dateKey = new Date().toISOString().slice(0, 10);
  const dailyQuestions = pickDailyDeck(
    quizQuestions,
    dateKey,
    5,
    (q) => NEW_2026_DOC_IDS.has(q.docId)
  );
  return (
    <DailyChallengeClient
      questions={dailyQuestions}
      documents={lawDocuments}
      dateKey={dateKey}
    />
  );
}
