'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const checkAndUpdateStreak = useAppStore((s) => s.checkAndUpdateStreak);

  useEffect(() => {
    checkAndUpdateStreak();
  }, [checkAndUpdateStreak]);

  return <>{children}</>;
}
