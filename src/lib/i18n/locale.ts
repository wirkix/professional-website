import { cookies } from "next/headers";
import { LOCALE_COOKIE, DEFAULT_LOCALE, type Locale } from "./constants";

export type { Locale };
export { LOCALE_COOKIE, DEFAULT_LOCALE };

/**
 * Server-only: resolves the visitor's language preference from a cookie set
 * by <LanguageSwitcher>. English is the default when the cookie is absent
 * (first visit) or holds anything unexpected, rather than trying to guess
 * from Accept-Language -- keeps this predictable rather than "sometimes in
 * Spanish for no visible reason" for a first-time visitor.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return value === "es" ? "es" : DEFAULT_LOCALE;
}
