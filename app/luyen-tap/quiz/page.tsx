import { QuizClient } from '@/components/practice/QuizClient';
import { quizQuestions } from '@/data/questions';
import { lawDocuments } from '@/data/documents';

export default function QuizPage() {
  return <QuizClient questions={quizQuestions} documents={lawDocuments} />;
}
