import { FillBlankClient } from '@/components/games/FillBlankClient';
import { lawDocuments } from '@/data/documents';
import { generateFillBlanks } from '@/lib/generators';

export const metadata = {
  title: 'Điền Chỗ Trống | HVC2026',
  description: 'Điền vào chỗ trống các thuật ngữ pháp luật quan trọng',
};

export default function DienChoTrongPage() {
  const questions = generateFillBlanks(lawDocuments);
  return <FillBlankClient questions={questions} documents={lawDocuments} />;
}
