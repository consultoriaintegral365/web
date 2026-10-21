import type { Locale } from './config';

/**
 * Mapa de rutas: clave de página → slug en cada idioma.
 *
 * Las URLs están traducidas (mejor SEO por mercado). El selector de idioma
 * usa este mapa para saltar a la página equivalente en vez de volver al inicio.
 *
 * Una página puede existir solo en algunos idiomas: basta con omitir los demás.
 * El selector de idioma, las etiquetas `hreflang` y el sitemap se ajustan solos
 * a los idiomas realmente publicados.
 *
 * Al añadir una página nueva: registrarla aquí y crear los archivos .astro de
 * los idiomas que se declaren.
 */
export const ROUTES = {
  home: { es: '', en: '', pt: '' },
  terms: {
    es: 'terminos-de-servicio',
    en: 'terms-of-service',
    pt: 'termos-de-servico',
  },
  privacy: {
    es: 'politica-de-privacidad',
    en: 'privacy-policy',
    pt: 'politica-de-privacidade',
  },
} as const satisfies Record<string, Partial<Record<Locale, string>>>;

export type RouteKey = keyof typeof ROUTES;
