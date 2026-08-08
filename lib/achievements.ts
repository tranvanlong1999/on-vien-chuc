import { UserProgress } from '@/types';

export interface Achievement {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  check: (state: UserProgress) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-quiz',
    emoji: '🌟',
    title: 'Bước đầu tiên',
    desc: 'Hoàn thành bài trắc nghiệm đầu tiên',
    check: (s) => Object.keys(s.quizScores).length >= 1,
  },
  {
    id: 'streak-7',
    emoji: '🔥',
    title: '7 Ngày Kiên Định',
    desc: 'Duy trì streak 7 ngày liên tiếp',
    check: (s) => s.streak >= 7,
  },
  {
    id: 'speed-perfect',
    emoji: '⚡',
    title: 'Tốc Chiến',
    desc: 'Đạt 10/10 trong Thi Tốc Độ',
    check: (s) => (s.gameHighScores?.['speedQuiz'] ?? 0) >= 10,
  },
  {
    id: 'reader-50',
    emoji: '📖',
    title: 'Mọt Sách',
    desc: 'Đọc xong 50 điều khoản',
    check: (s) =>
      Object.values(s.readingProgress).reduce((acc, arr) => acc + arr.length, 0) >= 50,
  },
  {
    id: 'fillblank-perfect',
    emoji: '🎯',
    title: 'Điền Chuẩn',
    desc: 'Đạt điểm tối đa trong Điền Chỗ Trống',
    check: (s) => (s.gameHighScores?.['fillBlank'] ?? 0) >= 10,
  },
  {
    id: 'boss-3',
    emoji: '🏆',
    title: 'Sát Thủ Boss',
    desc: 'Đánh bại 3 Boss văn bản',
    check: (s) => (s.bossDefeated?.length ?? 0) >= 3,
  },
  {
    id: 'mock-master',
    emoji: '💯',
    title: 'Mock Master',
    desc: 'Đạt 9/10 trở lên trong đề thi thử',
    check: (s) => Object.values(s.quizScores).some((score) => score >= 9),
  },
  {
    id: 'warrior',
    emoji: '👑',
    title: 'Chiến Binh',
    desc: 'Tích lũy 500 XP',
    check: (s) => s.xp >= 500,
  },
  {
    id: 'flashcard-master',
    emoji: '🃏',
    title: 'Flashcard Master',
    desc: 'Thuộc lòng 30 thẻ flashcard',
    check: (s) => (s.masteredCards?.length ?? 0) >= 30,
  },
  {
    id: 'daily-5',
    emoji: '📅',
    title: 'Thói Quen Vàng',
    desc: 'Hoàn thành thử thách ngày 5 lần',
    check: (s) =>
      Object.values(s.dailyChallengeCompleted ?? {}).filter(Boolean).length >= 5,
  },
];

export function checkNewAchievements(
  state: UserProgress,
  earned: string[]
): Achievement[] {
  return ACHIEVEMENTS.filter(
    (a) => !earned.includes(a.id) && a.check(state)
  );
}
