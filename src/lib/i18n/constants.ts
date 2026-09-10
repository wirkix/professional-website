// Client-safe constants/types -- no next/headers import here, unlike
// locale.ts, specifically so LanguageSwitcher (a Client Component) can
// import Locale/LOCALE_COOKIE without dragging a server-only module (and
// its next/headers import) into the client bundle.

export type Locale = "en" | "es";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";
