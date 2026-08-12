'use client';

import { MarketSegmentsPage } from '@/views/MarketSegmentsPage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function MarketSegmentsRoute() {
  const { navigate } = useAppNavigate();
  return <MarketSegmentsPage onNavigate={navigate} />;
}
