import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from './config';
import { ROUTES, type RouteKey } from './routes';

/** Deduce el idioma a partir de la URL actual (/en/... → 'en', / → 'es'). */
export function getLocale(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** ¿Existe esta página en este idioma? Hay páginas publicadas en un solo idioma. */
export function hasRoute(key: RouteKey, locale: Locale): boolean {
  return (ROUTES[key] as Partial<Record<Locale, string>>)[locale] !== undefined;
}

/**
 * Construye la ruta absoluta de una página en un idioma dado.
 * localizedPath('terms', 'en') → '/en/terms-of-service'
 * localizedPath('home', 'es')  → '/'
 *
 * Lanza si la página no existe en ese idioma. Es deliberado: el sitio se genera
 * de forma estática, así que un enlace a una traducción inexistente rompe la
 * compilación en vez de convertirse en un 404 en producción.
 */
export function localizedPath(key: RouteKey, locale: Locale): string {
  const slug = (ROUTES[key] as Partial<Record<Locale, string>>)[locale];
  if (slug === undefined) {
    throw new Error(`La página «${key}» no está publicada en «${locale}». Revisa src/i18n/routes.ts.`);
  }
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

/**
 * Las variantes de esta misma página en los demás idiomas, para el selector y
 * las etiquetas hreflang. Solo devuelve los idiomas realmente publicados.
 */
export function alternates(key: RouteKey): { locale: Locale; path: string }[] {
  return LOCALES.filter((locale) => hasRoute(key, locale)).map((locale) => ({
    locale,
    path: localizedPath(key, locale),
  }));
}

/**
 * Idioma al que apunta `hreflang="x-default"`: el predeterminado si la página
 * existe en él y, si no, el primero disponible.
 */
export function defaultAlternateLocale(key: RouteKey): Locale {
  if (hasRoute(key, DEFAULT_LOCALE)) return DEFAULT_LOCALE;
  const first = LOCALES.find((locale) => hasRoute(key, locale));
  if (!first) throw new Error(`La página «${key}» no está publicada en ningún idioma.`);
  return first;
}
