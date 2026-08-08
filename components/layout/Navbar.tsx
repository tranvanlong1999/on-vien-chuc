'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Zap, BookOpen, MessageSquare } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { getXPLevel } from '@/lib/utils';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Tổng quan' },
  { href: '/hoc', label: 'Học' },
  { href: '/luyen-tap', label: 'Luyện tập' },
  { href: '/de-thi', label: 'Đề thi' },
  { href: '/so-do', label: 'Sơ đồ' },
  { href: '/tien-do', label: 'Tiến độ' },
  { href: '/thanh-tich', label: '🏅 Thành tích' },
];

export function Navbar() {
  const pathname = usePathname();
  const { xp, streak } = useAppStore();
  const level = getXPLevel(xp);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600 text-lg shrink-0">
          <BookOpen className="w-5 h-5" />
          <span className="hidden sm:block">HVC2026</span>
          <span className="sm:hidden">HVC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* XP + Streak */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full text-sm font-semibold">
            <Flame className="w-4 h-4" />
            <span>{streak}</span>
          </div>
          <div className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4" />
            <span>{xp} XP</span>
          </div>
          <div className="hidden sm:block text-xs text-slate-500 font-medium">{level.title}</div>
        </div>
      </div>
    </header>
  );
}
