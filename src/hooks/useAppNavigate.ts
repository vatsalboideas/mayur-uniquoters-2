'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PageId } from '@/types';
import { PAGE_PATHS, pageIdFromPath } from '@/lib/navigation';

export function useAppNavigate() {
  const router = useRouter();
  const pathname = usePathname();
  const activePage = pageIdFromPath(pathname);

  const navigate = useCallback(
    (page: PageId, sectionId?: string) => {
      const path = PAGE_PATHS[page];

      if (sectionId) {
        if (page === 'home' && (pathname === '/' || pathname === '')) {
          window.setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }, 80);
          return;
        }

        router.push(`${path}#${sectionId}`);
        return;
      }

      router.push(path);
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    },
    [pathname, router]
  );

  return { navigate, activePage };
}
