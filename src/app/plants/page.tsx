'use client';

import { PlantsPage } from '@/views/PlantsPage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function PlantsRoute() {
  const { navigate } = useAppNavigate();
  return <PlantsPage onNavigate={navigate} />;
}
