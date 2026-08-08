import { Suspense } from 'react';
import { QuizClient } from '@/components/practice/QuizClient';
import { quizQuestions } from '@/data/questions';
import { lawDocuments } from '@/data/documents';

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-48 text-slate-500">Đang tải...</div>}>
      <QuizClient questions={quizQuestions} documents={lawDocuments} />
    </Suspense>
  );
}
