import "@/app/[lang]/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";
const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});
const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
    hi: {
      displayName: "Hindi",
      search: "खोजें",
    },
    mr: {
      displayName: "Marathi",
      search: "शोधा",
    },
  },
});
export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={cn(fontSans.variable, fontMono.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen absolute inset-0 z-0">
        <RootProvider i18n={provider(lang)}  theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}