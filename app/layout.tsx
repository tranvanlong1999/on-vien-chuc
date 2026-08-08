import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { StoreProvider } from '@/components/layout/StoreProvider';
import { AchievementToast } from '@/components/games/AchievementToast';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: '#4f46e5',
};

export const metadata: Metadata = {
  title: 'HVC2026 — Ôn thi Viên chức Tiểu học',
  description: 'Nền tảng ôn thi viên chức giáo viên tiểu học 2026. Flashcard, trắc nghiệm, đề thi thử, sơ đồ tư duy.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'HVC2026',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 font-sans">
        <StoreProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 pb-24 pt-20 md:pb-8 md:pt-20">
            {children}
          </main>
          <BottomNav />
          <AchievementToast />
        </StoreProvider>
      </body>
    </html>
  );
}
