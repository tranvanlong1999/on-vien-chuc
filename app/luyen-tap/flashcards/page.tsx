import { FlashcardsClient } from '@/components/practice/FlashcardsClient';
import { flashcards } from '@/data/flashcards';
import { lawDocuments } from '@/data/documents';

export default function FlashcardsPage() {
  return <FlashcardsClient cards={flashcards} documents={lawDocuments} />;
}
