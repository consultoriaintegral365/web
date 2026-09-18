import type { Locale } from './config';

/**
 * Mapa de rutas: clave de página → slug en cada idioma.
 *
 * Las URLs están traducidas (mejor SEO por mercado). El selector de idioma
 * usa este mapa para saltar a la página equivalente en vez de volver al inicio.
 *
 * Al añadir una página nueva: registrarla aquí y crear los tres archivos
 * .astro correspondientes.
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
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;
