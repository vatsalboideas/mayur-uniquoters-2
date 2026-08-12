'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MaterialModalProvider } from '@/context/MaterialModalContext';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export function AppShell({ children }: { children: React.ReactNode }) {
  const { navigate, activePage } = useAppNavigate();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }, [pathname]);

  return (
    <MaterialModalProvider>
      <div className="min-h-screen bg-[#0A0A0B] text-[#E8E6E1] font-sans flex flex-col justify-between selection:bg-[#8B1E24] selection:text-white">
        <Header activePage={activePage} onNavigate={navigate} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </MaterialModalProvider>
  );
}
