/**
 * Datos de la empresa: FUENTE ÚNICA DE VERDAD.
 *
 * Todo el sitio (páginas institucionales, términos, privacidad, datos
 * estructurados y metadatos) lee de aquí. Cambiar un dato en este archivo
 * lo actualiza en los tres idiomas a la vez.
 *
 * Todos los datos están confirmados por el usuario (2026-09-18). La razón
 * social, el RUC y el domicilio son obligatorios en la política de privacidad
 * conforme a la Ley N° 29733: si cambian, hay que actualizarlos aquí y volver a
 * desplegar, no dejarlos desactualizados.
 */

export const site = {
  /** Nombre comercial, el que se ve en la web. */
  name: 'Consultoría Integral 365',
  shortName: 'CI365',

  /** Razón social inscrita en SUNAT. Confirmada por el usuario el 2026-09-18. */
  legalName: 'Consultoría Integral 365 E.I.R.L.',

  /** RUC. Confirmado por el usuario el 2026-09-18 y validado por dígito verificador. */
  taxId: '20610886770',

  /**
   * Domicilio. `street` se omite deliberadamente (decisión del usuario,
   * 2026-09-18): la E.I.R.L. opera desde domicilio particular y no se quiere
   * publicar la calle. La entidad queda identificada por el RUC, y el domicilio
   * fiscal completo es consultable en el portal público de SUNAT.
   *
   * Para publicar la dirección completa, basta con rellenar `street`: la línea
   * de domicilio se compone sola en `addressLine`.
   */
  address: {
    street: null as string | null,
    district: 'Ate',
    city: 'Lima',
    region: 'Lima',
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

  phone: '+51 947 148 320',

  url: 'https://consultoriaintegral365.com',
  foundedYear: 2024,

  social: {
    /** Perfil del fundador: la E.I.R.L. no tiene página de empresa propia. */
    linkedin: 'https://www.linkedin.com/in/pjhonaob/',
    github: null as string | null,
  },

  /** Fecha de última actualización de los documentos legales (ISO 8601). */
  legalLastUpdated: '2026-09-18',
} as const;

export type Site = typeof site;

/**
 * Línea de domicilio ya compuesta, omitiendo las partes sin valor. Evita que
 * las páginas legales tengan que saber qué campos están rellenos y que
 * aparezcan comas sueltas cuando falta alguno.
 */
export const addressLine: string = [
  site.address.street,
  site.address.district,
  site.address.city,
  site.address.country,
]
  .filter(Boolean)
  .join(', ');
