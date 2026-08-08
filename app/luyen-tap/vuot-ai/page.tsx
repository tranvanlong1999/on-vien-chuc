import Link from 'next/link';
import { lawDocuments } from '@/data/documents';
import { BossSelectionClient } from '@/components/games/BossSelectionClient';
import { quizQuestions } from '@/data/questions';

export const metadata = {
  title: 'Vượt Ải Boss | HVC2026',
  description: 'Chinh phục 9 Boss văn bản pháp luật — trả lời đúng để hạ Boss, sai thì bị phản đòn',
};

export default function VuotAiPage() {
  const docQuestionCounts = Object.fromEntries(
    lawDocuments.map((d) => [d.id, quizQuestions.filter((q) => q.docId === d.id).length])
  );
  return <BossSelectionClient documents={lawDocuments} questionCounts={docQuestionCounts} />;
}
