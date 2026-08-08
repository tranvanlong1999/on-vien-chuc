import { WordMatchClient } from '@/components/games/WordMatchClient';
import { lawDocuments } from '@/data/documents';
import { generateMatchPairs } from '@/lib/generators';

export const metadata = {
  title: 'Nối Từ | HVC2026',
  description: 'Nối số điều với nội dung tương ứng trong các văn bản pháp luật',
};

export default function NoiTuPage() {
  const pairs = generateMatchPairs(lawDocuments);
  return <WordMatchClient pairs={pairs} documents={lawDocuments} />;
}
