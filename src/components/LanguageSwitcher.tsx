"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/constants";

/**
 * EN/ES toggle. Writes the choice to a plain cookie (no server action --
 * this is the whole mutation, not worth the extra round-trip) and calls
 * router.refresh() so every Server Component on the current route re-reads
 * it via getLocale() and re-renders in the new language without a full page
 * reload or losing scroll position/URL.
 */
export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function setLocale(locale: Locale) {
    if (locale === currentLocale) return;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => router.refresh());
  }

  return (
    <div className={`flex items-center gap-1 text-sm font-medium ${isPending ? "opacity-50" : ""}`}>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-current={currentLocale === "en"}
        className={currentLocale === "en" ? "text-brand-900" : "text-brand-400 hover:text-brand-600"}
      >
        EN
      </button>
      <span className="text-brand-300">/</span>
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-current={currentLocale === "es"}
        className={currentLocale === "es" ? "text-brand-900" : "text-brand-400 hover:text-brand-600"}
      >
        ES
      </button>
    </div>
  );
}
