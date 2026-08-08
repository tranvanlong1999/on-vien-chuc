import { StudyGuideClient } from '@/components/study/StudyGuideClient';
import { lawDocuments } from '@/data/documents';

export default function HocPage() {
  return <StudyGuideClient documents={lawDocuments} />;
}
