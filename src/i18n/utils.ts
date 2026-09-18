import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from './config';
import { ROUTES, type RouteKey } from './routes';

/** Deduce el idioma a partir de la URL actual (/en/... → 'en', / → 'es'). */
export function getLocale(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/**
 * Construye la ruta absoluta de una página en un idioma dado.
 * localizedPath('terms', 'en') → '/en/terms-of-service'
 * localizedPath('home', 'es')  → '/'
 */
export function localizedPath(key: RouteKey, locale: Locale): string {
  const slug = ROUTES[key][locale];
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

/** Las variantes de esta misma página en los demás idiomas (para el selector y hreflang). */
export function alternates(key: RouteKey): { locale: Locale; path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: localizedPath(key, locale) }));
}
