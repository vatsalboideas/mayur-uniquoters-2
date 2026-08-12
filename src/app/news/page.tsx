'use client';

import { NewsPage } from '@/views/NewsPage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function NewsRoute() {
  const { navigate } = useAppNavigate();
  return <NewsPage onNavigate={navigate} />;
}
