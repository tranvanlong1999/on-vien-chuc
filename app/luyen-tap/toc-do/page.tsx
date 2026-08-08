import { SpeedQuizClient } from '@/components/games/SpeedQuizClient';
import { quizQuestions } from '@/data/questions';
import { lawDocuments } from '@/data/documents';

export const metadata = {
  title: 'Thi Tốc Độ | HVC2026',
  description: '10 câu hỏi, 10 giây mỗi câu — luyện phản xạ pháp luật',
};

export default function TocDoPage() {
  return <SpeedQuizClient questions={quizQuestions} documents={lawDocuments} />;
}
