'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Layers, FileText, GitBranch, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Trang chủ' },
  { href: '/hoc', icon: BookOpen, label: 'Học' },
  { href: '/luyen-tap', icon: Layers, label: 'Luyện tập' },
  { href: '/de-thi', icon: FileText, label: 'Đề thi' },
  { href: '/so-do', icon: GitBranch, label: 'Sơ đồ' },
  { href: '/tien-do', icon: BarChart2, label: 'Tiến độ' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe">
      <div className="flex items-center justify-around h-14">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg min-w-[52px]',
                active ? 'text-indigo-600' : 'text-slate-400'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
