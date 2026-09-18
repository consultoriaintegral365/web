/**
 * Datos de la empresa: FUENTE ÚNICA DE VERDAD.
 *
 * Todo el sitio (páginas institucionales, términos, privacidad, datos
 * estructurados y metadatos) lee de aquí. Cambiar un dato en este archivo
 * lo actualiza en los tres idiomas a la vez.
 *
 * ⚠️  Los campos marcados con «REVISAR» son obligatorios legalmente en Perú
 *     (Ley N° 29733) y deben completarse con los datos reales antes de
 *     publicar. Búscalos con: grep -rn "REVISAR" src/
 */

export const site = {
  /** Nombre comercial, el que se ve en la web. */
  name: 'Consultoría Integral 365',
  shortName: 'CI365',

  /** Razón social inscrita en SUNAT. Confirmada por el usuario el 2026-09-18. */
  legalName: 'Consultoría Integral 365 E.I.R.L.',

  /** REVISAR — RUC de 11 dígitos. Obligatorio para identificar al titular del banco de datos. */
  taxId: '20XXXXXXXXX',

  /** REVISAR — Domicilio fiscal completo. Obligatorio en la política de privacidad. */
  address: {
    street: 'Av. [Calle y número]',
    district: '[Distrito]',
    city: 'Lima',
    region: 'Lima',
    postalCode: '[Código postal]',
    country: 'Perú',
    countryCode: 'PE',
  },

  /**
   * Todas las direcciones apuntan hoy al mismo buzón real, por decisión del
   * usuario (2026-09-18): es preferible publicar una dirección que funciona a
   * varias que rebotan. La estructura se mantiene separada para que, si algún
   * día se crean alias en Microsoft 365, baste con cambiar cada línea aquí.
   */
  email: {
    general: 'jorab@consultoriaintegral365.com',
    privacy: 'jorab@consultoriaintegral365.com',
    legal: 'jorab@consultoriaintegral365.com',
    support: 'jorab@consultoriaintegral365.com',
  },

  /** REVISAR — Teléfono de contacto en formato internacional. */
  phone: '+51 999 999 999',

  url: 'https://consultoriaintegral365.com',
  foundedYear: 2024,

  social: {
    /** REVISAR — Reemplazar por la URL real o dejar en null para ocultar el enlace. */
    linkedin: 'https://www.linkedin.com/company/consultoriaintegral365',
    github: null as string | null,
  },

  /** Fecha de última actualización de los documentos legales (ISO 8601). */
  legalLastUpdated: '2026-09-18',
} as const;

export type Site = typeof site;
