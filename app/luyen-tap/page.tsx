import Link from 'next/link';
import { Layers, Zap, Pencil, Link as LinkIcon, Flame, MessageSquare, Trophy } from 'lucide-react';

const games = [
  {
    href: '/luyen-tap/flashcards',
    icon: Layers,
    emoji: '🃏',
    title: 'Flashcard SRS',
    desc: 'Ôn bằng thẻ ghi nhớ, tự động nhắc lại đúng thời điểm',
    color: 'from-indigo-500 to-indigo-700',
    badge: 'Spaced Repetition',
  },
  {
    href: '/luyen-tap/quiz',
    icon: Trophy,
    emoji: '🏆',
    title: 'Trắc Nghiệm',
    desc: '20 câu MCQ ngẫu nhiên, luyện sổ tay câu sai',
    color: 'from-blue-500 to-blue-700',
    badge: 'MCQ',
  },
  {
    href: '/luyen-tap/toc-do',
    icon: Zap,
    emoji: '⚡',
    title: 'Thi Tốc Độ',
    desc: '10 câu · 10s/câu · Hết giờ tính sai — luyện phản xạ',
    color: 'from-amber-500 to-orange-600',
    badge: 'Mới',
    isNew: true,
  },
  {
    href: '/luyen-tap/dien-cho-trong',
    icon: Pencil,
    emoji: '✍️',
    title: 'Điền Chỗ Trống',
    desc: 'Điền vào chỗ trống thuật ngữ pháp luật từ các điều khoản',
    color: 'from-teal-500 to-teal-700',
    badge: 'Mới',
    isNew: true,
  },
  {
    href: '/luyen-tap/noi-tu',
    icon: LinkIcon,
    emoji: '🔗',
    title: 'Nối Từ',
    desc: 'Ghép số điều với nội dung tương ứng trong 6 giây',
    color: 'from-violet-500 to-violet-700',
    badge: 'Mới',
    isNew: true,
  },
  {
    href: '/luyen-tap/thu-thach-ngay',
    icon: Flame,
    emoji: '🔥',
    title: 'Thử Thách Ngày',
    desc: '5 câu mỗi ngày · ưu tiên nội dung 2026 · +50 XP',
    color: 'from-orange-500 to-red-600',
    badge: 'Mới',
    isNew: true,
  },
  {
    href: '/luyen-tap/vuot-ai',
    icon: Flame,
    emoji: '👾',
    title: 'Vượt Ải Boss',
    desc: '9 Boss · trả lời đúng hạ HP boss, sai bị phản đòn · +150 XP/Boss',
    color: 'from-red-600 to-red-800',
    badge: 'Mới',
    isNew: true,
  },
  {
    href: '/luyen-tap/tinh-huong',
    icon: MessageSquare,
    emoji: '🎭',
    title: 'Tình Huống Sư Phạm',
    desc: 'Xử lý tình huống thực tế, Gemini AI chấm điểm',
    color: 'from-rose-500 to-rose-700',
    badge: 'AI',
  },
];

export const metadata = {
  title: 'Luyện Tập | HVC2026',
  description: 'Chọn hình thức luyện tập phù hợp với bạn',
};

export default function LuyenTapPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Luyện Tập 🎮</h1>
        <p className="text-slate-500 mt-1">Chọn hình thức luyện tập phù hợp</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((g) => (
          <Link key={g.href} href={g.href}
            className="group card p-5 hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-2xl shadow-sm`}>
                {g.emoji}
              </div>
              {g.isNew && (
                <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">✨ MỚI</span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{g.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{g.desc}</p>
            </div>
            <div className="mt-auto">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{g.badge}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
