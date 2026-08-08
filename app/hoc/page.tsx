import { Suspense } from 'react';
import { StudyGuideClient } from '@/components/study/StudyGuideClient';
import { lawDocuments } from '@/data/documents';

export default function HocPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-48 text-slate-500">Đang tải...</div>}>
      <StudyGuideClient documents={lawDocuments} />
    </Suspense>
  );
}
