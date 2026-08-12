'use client';

import { SustainabilityPage } from '@/views/SustainabilityPage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function SustainabilityRoute() {
  const { navigate } = useAppNavigate();
  return <SustainabilityPage onNavigate={navigate} />;
}
