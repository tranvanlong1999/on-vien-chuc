import type { LawDocument } from '@/types';

import { luatNhaGiao } from './luat-nha-giao';
import { luatVienChuc } from './luat-vien-chuc';
import { nd93 } from './nd-93-2026';
import { tt03UngXu } from './tt-03-2026-ung-xu';
import { nd259 } from './nd-259-2026';
import { tt30ChuanNgheNghiep } from './tt-30-2026-chuan-nghe-nghiep';
import { nq71 } from './nq71-2025';
import { nq57 } from './nq57-2024';
import { luatGiaoDuc } from './luat-giao-duc';

export const lawDocuments: LawDocument[] = [
  luatNhaGiao,
  luatVienChuc,
  nd93,
  tt03UngXu,
  nd259,
  tt30ChuanNgheNghiep,
  nq71,
  nq57,
  luatGiaoDuc,
];

export function getDocumentById(id: string): LawDocument | undefined {
  return lawDocuments.find((d) => d.id === id);
}

export function getTotalArticles(): number {
  return lawDocuments.reduce(
    (total, doc) =>
      total + doc.chapters.reduce((t, ch) => t + ch.articles.length, 0),
    0
  );
}
