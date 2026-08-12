import { PageId } from '@/types';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  segments: '/market-segments',
  'segment-automotive': '/market-segments/automotive',
  'segment-furnishing': '/market-segments/furnishing',
  'segment-footwear': '/market-segments/footwear',
  'segment-leather-goods': '/market-segments/leather-goods',
  plants: '/plants',
  sustainability: '/sustainability',
  'global-presence': '/global-presence',
  news: '/news',
  contact: '/contact',
};

export function pageIdFromPath(pathname: string): PageId {
  const normalized = pathname.replace(/\/$/, '') || '/';

  const entry = (Object.entries(PAGE_PATHS) as [PageId, string][]).find(
    ([, path]) => path === normalized
  );

  return entry?.[0] ?? 'home';
}
