import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leanmodels MVP",
  description: "Lean Canvas-based business development app",
};

import { I18nProvider } from '../components/i18n';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body><I18nProvider>{children}</I18nProvider></body>
    </html>
  );
}
