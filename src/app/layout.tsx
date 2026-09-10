import type { Metadata } from "next";
import "./globals.css";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = await getDictionary();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
