/** Idiomas soportados. Añadir uno nuevo: agregarlo aquí, en astro.config.mjs,
 *  en routes.ts y en ui.ts. No hay nada más que tocar. */
export const LOCALES = ['es', 'en', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** Metadatos por idioma: etiqueta del selector y código para <html lang> / hreflang. */
export const LOCALE_META: Record<Locale, { label: string; nativeName: string; htmlLang: string; ogLocale: string }> = {
  es: { label: 'ES', nativeName: 'Español',   htmlLang: 'es-PE', ogLocale: 'es_PE' },
  en: { label: 'EN', nativeName: 'English',   htmlLang: 'en-US', ogLocale: 'en_US' },
  pt: { label: 'PT', nativeName: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
