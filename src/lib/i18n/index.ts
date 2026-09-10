import { getLocale } from "./locale";
import { dictionaries } from "./dictionaries";

export { LOCALE_COOKIE, DEFAULT_LOCALE } from "./locale";
export type { Locale } from "./locale";
export type { Dictionary } from "./dictionaries";

/** Server-only: resolves the current locale and its dictionary together. */
export async function getDictionary() {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
}
