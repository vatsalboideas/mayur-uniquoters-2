'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { SegmentDetailPage } from '@/views/SegmentDetailPage';
import { MARKET_SEGMENTS } from '@/data/marketSegmentsData';
import { useAppNavigate } from '@/hooks/useAppNavigate';
import { useMaterialModal } from '@/context/MaterialModalContext';

const VALID_SLUGS = ['automotive', 'furnishing', 'footwear', 'leather-goods'] as const;

export default function SegmentDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { navigate } = useAppNavigate();
  const { openMaterial } = useMaterialModal();

  if (!VALID_SLUGS.includes(slug as (typeof VALID_SLUGS)[number])) {
    notFound();
  }

  const segment = MARKET_SEGMENTS.find((s) => s.slug === slug);
  if (!segment) notFound();

  return (
    <SegmentDetailPage
      segment={segment}
      onNavigate={navigate}
      onSelectMaterial={openMaterial}
    />
  );
}
