'use client';

import { GlobalPresencePage } from '@/views/GlobalPresencePage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function GlobalPresenceRoute() {
  const { navigate } = useAppNavigate();
  return <GlobalPresencePage onNavigate={navigate} />;
}
