'use client';

import { ContactPage } from '@/views/ContactPage';
import { useAppNavigate } from '@/hooks/useAppNavigate';

export default function ContactRoute() {
  const { navigate } = useAppNavigate();
  return <ContactPage onNavigate={navigate} />;
}
