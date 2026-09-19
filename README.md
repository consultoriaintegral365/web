# Sitio web de Consultoría Integral 365

Sitio institucional estático de CI365, en español, inglés y portugués.
Publicado en <https://consultoriaintegral365.com>.

## Stack

| Pieza      | Elección                          | Por qué                                                                 |
| ---------- | --------------------------------- | ----------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build) 7    | HTML estático, i18n nativo con URLs traducidas, listo para añadir blog. |
| Estilos    | [Tailwind](https://tailwindcss.com) 4 | Tokens de marca en `src/styles/global.css`.                         |
| Hosting    | GitHub Pages                      | Gratuito, TLS automático con dominio propio.                            |
| Despliegue | GitHub Actions                    | `.github/workflows/deploy.yml`, en cada push a `main`.                  |

No hay JavaScript de cliente, cookies, analítica ni formularios: el sitio es
HTML y CSS estáticos. El selector de idioma son enlaces reales.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
  config/site.ts        Datos de la empresa: FUENTE ÚNICA DE VERDAD
  i18n/
    config.ts           Idiomas soportados y sus metadatos
    routes.ts           Mapa clave de página → slug por idioma
    utils.ts            Helpers de rutas localizadas y hreflang
    ui.ts               Todos los textos de la web, por idioma
  layouts/
    Base.astro          <head>, SEO, hreflang, JSON-LD, cabecera y pie
    Legal.astro         Envoltorio de los documentos legales
  components/           Header, Footer, LangSwitcher, Logo, HomePage
  pages/
    index.astro                    /            (es)
    terminos-de-servicio.astro     /terminos-de-servicio
    politica-de-privacidad.astro   /politica-de-privacidad
    en/…                           /en/…        (en)
    pt/…                           /pt/…        (pt)
    404.astro
public/
  CNAME                 Dominio propio para GitHub Pages
  robots.txt, favicon.svg
```

## Tareas habituales

**Cambiar un dato de la empresa** (RUC, dirección, teléfono, correos): editar
únicamente `src/config/site.ts`. Se propaga a los tres idiomas y a los
documentos legales.

**Cambiar un texto de la web**: `src/i18n/ui.ts`, en el bloque del idioma
correspondiente.

**Añadir una página nueva**:

1. Registrar su clave y sus slugs en `src/i18n/routes.ts`.
2. Crear los archivos `.astro` de los idiomas que se hayan declarado.
3. Pasar esa clave como `routeKey` al layout, para que el selector de idioma y
   las etiquetas `hreflang` apunten a la página equivalente.

**Páginas en un solo idioma.** Una ruta no está obligada a existir en los tres:
basta con omitir los idiomas que no se publican. El selector de idioma se oculta
cuando no hay alternativas, las etiquetas `hreflang`, `x-default` y el sitemap
se ajustan solos, y enlazar a una traducción que no existe **rompe la
compilación** en vez de convertirse en un 404 en producción.

**Añadir un anexo de tratamiento de datos** para un cliente o sistema nuevo —son
dos líneas y un archivo:

1. En `src/i18n/routes.ts`, declarar la ruta solo en español:

   ```ts
   annexNombreDelSistema: { es: 'anexo-tratamiento-datos-nombre' },
   ```

2. Copiar `src/pages/anexo-tratamiento-datos-agi-ago.astro` como plantilla,
   ajustar `routeKey`, `lastUpdated` y el contenido.
3. Enlazarlo desde la §3.4 de las tres políticas de privacidad, junto al que ya
   está.

El layout `Legal.astro` acepta una prop `lastUpdated` propia: los anexos se
actualizan por su cuenta y no deben arrastrar la fecha de la política ni al
revés.

> **Criterio de contenido.** Los subencargados de una aplicación concreta —AWS,
> por ejemplo— van en **su anexo**, nunca en la §7 de la política. La §7 cubre a
> CI365 como *responsable* de los datos del sitio web; un subencargado de una
> aplicación lo es en el rol de *encargado*, sobre datos de los que el titular es
> el cliente. Mezclarlos afirmaría que ese proveedor procesa datos que no
> procesa.

**Añadir un idioma**: agregarlo en `src/i18n/config.ts`, en `astro.config.mjs`,
en `routes.ts` y en `ui.ts`. No hay nada más que tocar.

> ⚠️ **Nota sobre espaciado en Astro**
> Astro elimina el espacio del salto de línea cuando este queda junto a un
> elemento o a una expresión `{…}`. Si una frase termina en salto de línea y la
> siguiente empieza por `<a`, `<strong>`, `<time>` o `{`, hay que cerrar la
> línea con `{' '}` explícito o las palabras aparecerán pegadas.

## Datos de la empresa

Razón social, RUC, domicilio, teléfono y contacto viven en `src/config/site.ts`
y están confirmados. Cambiar cualquiera de ellos es editar ese único archivo: se
propaga a los tres idiomas, a los seis documentos legales, al pie de página y a
los datos estructurados.

El domicilio se publica solo como distrito, ciudad y país. Para incluir la
dirección completa basta con rellenar `address.street`; la línea se compone sola
en `addressLine` y omite los campos vacíos.

## Documentos legales

Redactados para la jurisdicción peruana: Ley N° 29733, Ley de Protección de
Datos Personales, y su Reglamento aprobado por Decreto Supremo N° 016-2024-JUS,
vigente desde el 30 de marzo de 2025.

Existen para habilitar el registro de aplicaciones en Microsoft Entra ID y la
verificación de editor en Microsoft Partner Center, que exigen URLs públicas de
términos de servicio y política de privacidad.

**No sustituyen la revisión de un abogado.** Conviene una validación legal antes
de tramitar la verificación de editor.
