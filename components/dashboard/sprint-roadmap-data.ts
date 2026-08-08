export interface DayPlan {
  day: number;
  date: string;
  shortDate: string;
  icon: string;
  shortName: string;
  fullTitle: string;
  tasks: string[];
  links: { label: string; href: string }[];
}

export const SPRINT_START = new Date('2026-08-08T00:00:00');
export const EXAM_DATE = new Date('2026-08-15T00:00:00');

export function getDayIndex(): number {
  const today = new Date();
  return Math.min(6, Math.max(0, Math.floor((today.getTime() - SPRINT_START.getTime()) / 86400000)));
}

export function getDaysLeft(): number {
  const today = new Date();
  return Math.max(0, Math.ceil((EXAM_DATE.getTime() - today.getTime()) / 86400000));
}

export const DAY_PLANS: DayPlan[] = [
  {
    day: 1,
    date: '8/8',
    shortDate: '08/08',
    icon: '⚖️',
    shortName: 'Luật VC 129',
    fullTitle: 'Ngày 1 — Luật Viên chức 129/2025',
    tasks: [
      'Đọc Chương 1–3 Luật Viên chức 129/2025 (quyền, nghĩa vụ, tuyển dụng)',
      'Làm 20 câu trắc nghiệm về Luật Viên chức',
      'Ôn 10 thẻ nhớ khái niệm cốt lõi',
    ],
    links: [
      { label: '📖 Đọc luật', href: '/hoc' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📝 Trắc nghiệm', href: '/luyen-tap/quiz' },
    ],
  },
  {
    day: 2,
    date: '9/8',
    shortDate: '09/08',
    icon: '🏛️',
    shortName: 'Luật Nhà giáo',
    fullTitle: 'Ngày 2 — Luật Nhà giáo 73/2025',
    tasks: [
      'Đọc Chương 2–4 Luật Nhà giáo 73/2025 (chuẩn nghề nghiệp, đào tạo)',
      'Làm 20 câu trắc nghiệm về Luật Nhà giáo',
      'Ôn 10 thẻ nhớ quyền và nghĩa vụ nhà giáo',
    ],
    links: [
      { label: '📖 Đọc luật', href: '/hoc' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📝 Trắc nghiệm', href: '/luyen-tap/quiz' },
    ],
  },
  {
    day: 3,
    date: '10/8',
    shortDate: '10/08',
    icon: '📋',
    shortName: 'NĐ 259 Tuyển dụng',
    fullTitle: 'Ngày 3 — NĐ 259/2026 Tuyển dụng Viên chức',
    tasks: [
      'Đọc NĐ 259/2026 về quy trình tuyển dụng viên chức',
      'Làm 20 câu trắc nghiệm về tuyển dụng & hợp đồng',
      'Ôn 10 thẻ nhớ các mốc thời gian & thủ tục',
    ],
    links: [
      { label: '📖 Đọc luật', href: '/hoc' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📝 Trắc nghiệm', href: '/luyen-tap/quiz' },
    ],
  },
  {
    day: 4,
    date: '11/8',
    shortDate: '11/08',
    icon: '📚',
    shortName: 'NĐ 93 Nhà giáo',
    fullTitle: 'Ngày 4 — NĐ 93/2026 Hướng dẫn Luật Nhà giáo',
    tasks: [
      'Đọc NĐ 93/2026 hướng dẫn thi hành Luật Nhà giáo',
      'Làm 20 câu trắc nghiệm về chính sách nhà giáo',
      'Ôn 10 thẻ nhớ chế độ đãi ngộ & khen thưởng',
    ],
    links: [
      { label: '📖 Đọc luật', href: '/hoc' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📝 Trắc nghiệm', href: '/luyen-tap/quiz' },
    ],
  },
  {
    day: 5,
    date: '12/8',
    shortDate: '12/08',
    icon: '✅',
    shortName: 'TT30 + TT03',
    fullTitle: 'Ngày 5 — TT30 + TT03 (Chuẩn nghề nghiệp & Ứng xử)',
    tasks: [
      'Đọc Thông tư 30 về chuẩn nghề nghiệp GV tiểu học',
      'Đọc Thông tư 03 về quy tắc ứng xử nhà giáo',
      'Làm 20 câu trắc nghiệm tổng hợp TT30 + TT03',
    ],
    links: [
      { label: '📖 Đọc luật', href: '/hoc' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📝 Trắc nghiệm', href: '/luyen-tap/quiz' },
    ],
  },
  {
    day: 6,
    date: '13/8',
    shortDate: '13/08',
    icon: '🎯',
    shortName: 'Thi thử tổng duyệt',
    fullTitle: 'Ngày 6 — Thi thử tổng duyệt (Mock Exam)',
    tasks: [
      'Làm đề thi thử 40 câu trong 60 phút (Mock Exam)',
      'Xem lại toàn bộ đáp án & giải thích câu sai',
      'Ghi chú các điểm yếu cần ôn thêm vào buổi tối',
    ],
    links: [
      { label: '🎯 Thi thử', href: '/luyen-tap/quiz' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📖 Ôn lại', href: '/hoc' },
    ],
  },
  {
    day: 7,
    date: '14/8',
    shortDate: '14/08',
    icon: '🔥',
    shortName: 'Ôn sổ tay + bẫy',
    fullTitle: 'Ngày 7 — Ôn sổ tay câu sai + bẫy đề thi',
    tasks: [
      'Ôn lại toàn bộ câu sai trong sổ tay lỗi',
      'Nhận diện & phân tích bẫy thường gặp trong đề thi',
      'Ôn nhanh 20 thẻ nhớ quan trọng nhất trước khi thi',
    ],
    links: [
      { label: '📋 Câu sai', href: '/luyen-tap/quiz' },
      { label: '🃏 Flashcards', href: '/luyen-tap/flashcards' },
      { label: '📖 Ôn tổng', href: '/hoc' },
    ],
  },
];
