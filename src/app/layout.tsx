import type { Metadata } from "next";
import "./globals.css";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getDictionary();
  return {
    // Resolves relative URLs in metadata (Open Graph, icons) against the
    // real domain, so link previews on LinkedIn etc. point to it.
    metadataBase: new URL("https://www.aloiswirkes.com"),
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      type: "website",
      siteName: "Alois Wirkes",
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "es" ? "es_MX" : "en_US",
    },
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
