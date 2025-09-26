import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return <HomeLayout {...baseOptions(lang)} links={[
        {
          type: 'custom',
          children: (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-fd-accent dark:hover:bg-fd-accent -ml-1.5 justify-start sm:ml-0 sm:justify-center">
              <Link href={`/hi/docs`}>Hindi</Link>
            </Button>
          ),
        },
        {
          type: 'custom',
          children: (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-fd-accent dark:hover:bg-fd-accent -ml-1.5 justify-start sm:ml-0 sm:justify-center">
              <Link href={`/mr/docs`}>Marathi</Link>
            </Button>
          ),
        },
      ]}>{children}</HomeLayout>;
}