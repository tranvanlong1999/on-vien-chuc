import { notFound } from 'next/navigation';
import { BossBattleClient } from '@/components/games/BossBattleClient';
import { lawDocuments } from '@/data/documents';
import { quizQuestions } from '@/data/questions';

interface Props {
  params: Promise<{ docId: string }>;
}

export async function generateStaticParams() {
  return lawDocuments.map((d) => ({ docId: d.id }));
}

export default async function BossFightPage({ params }: Props) {
  const { docId } = await params;
  const doc = lawDocuments.find((d) => d.id === docId);
  if (!doc) notFound();

  const questions = quizQuestions.filter((q) => q.docId === docId);
  if (questions.length < 5) notFound();

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <BossBattleClient doc={doc} questions={questions} />
    </div>
  );
}
