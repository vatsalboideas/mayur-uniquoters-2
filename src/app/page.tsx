'use client';

import { HomePage } from '@/views/HomePage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function Home() {
  const { navigate } = useAppNavigate();
  return <HomePage onNavigate={navigate} />;
}
