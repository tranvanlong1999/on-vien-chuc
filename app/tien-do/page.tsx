import { ProgressClient } from '@/components/progress/ProgressClient';
import { lawDocuments } from '@/data/documents';
import { flashcards } from '@/data/flashcards';
import { quizQuestions } from '@/data/questions';

export default function TienDoPage() {
  return (
    <ProgressClient
      documents={lawDocuments}
      totalFlashcards={flashcards.length}
      totalQuestions={quizQuestions.length}
    />
  );
}
