import { PedagogyScenario } from '@/data/scenarios';

export const CATEGORY_LABELS: Record<PedagogyScenario['category'], string> = {
  'ung-xu-hs': 'Ứng xử HS',
  'ung-xu-ph': 'Ứng xử PH',
  'ky-luat': 'Kỷ luật',
  'dong-nghiep': 'Đồng nghiệp',
  'dao-duc': 'Đạo đức',
};

export const CATEGORY_COLORS: Record<PedagogyScenario['category'], string> = {
  'ung-xu-hs': 'bg-blue-100 text-blue-700',
  'ung-xu-ph': 'bg-purple-100 text-purple-700',
  'ky-luat': 'bg-orange-100 text-orange-700',
  'dong-nghiep': 'bg-teal-100 text-teal-700',
  'dao-duc': 'bg-rose-100 text-rose-700',
};

export const DIFFICULTY_LABELS: Record<PedagogyScenario['difficulty'], string> = {
  easy: 'Dễ',
  medium: 'Trung bình',
  hard: 'Khó',
};

export const DIFFICULTY_COLORS: Record<PedagogyScenario['difficulty'], string> = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard: 'bg-red-100 text-red-700',
};
