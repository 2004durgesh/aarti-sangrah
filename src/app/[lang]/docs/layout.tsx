import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { ReactNode } from "react";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
   const { lang } = await params;
  return (
    <DocsLayout
      themeSwitch={{ mode: "light-dark" }}
      sidebar={{ className: "[&>div]:pt-3" }}
      {...baseOptions(lang)}
      tree={source.pageTree[lang]}
    >
      {children}
    </DocsLayout>
  );
}
