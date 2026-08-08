import { MockExamClient } from '@/components/exam/MockExamClient';
import { quizQuestions } from '@/data/questions';

export default function DeThiPage() {
  return <MockExamClient questions={quizQuestions} />;
}
