/**
 * Medición propia, anónima y sin cookies.
 *
 * Todos los eventos del sitio pasan por `track()`. Así el proveedor es
 * intercambiable: hoy los eventos van a un endpoint propio (un Cloudflare Worker
 * que los guarda en SharePoint) y, de forma opcional, a Umami si está cargado;
 * cambiar de herramienta es tocar este archivo.
 *
 * Qué NO hace: no usa cookies, no registra la IP, no asocia eventos a personas
 * y se desactiva si el navegador envía «No rastrear» (DNT) o Global Privacy
 * Control. El identificador de sesión es aleatorio y vive solo en sessionStorage
 * (se borra al cerrar la pestaña).
 */

type Data = Record<string, string | number>;

export interface Attribution {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  referrer: string;
  landing: string;
}

const meta = document.querySelector<HTMLMetaElement>('meta[name="ci-leads-endpoint"]');
export const endpoint = (meta?.content ?? '').replace(/\/$/, '');

const optedOut = (): boolean =>
  navigator.doNotTrack === '1' ||
  (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

function sessionId(): string {
  try {
    let id = sessionStorage.getItem('ci-sid');
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2);
      sessionStorage.setItem('ci-sid', id);
    }
    return id;
  } catch {
    return 'na';
  }
}

/** Origen de la visita. Se calcula una vez por sesión, en la primera página. */
export function attribution(): Attribution {
  try {
    const saved = sessionStorage.getItem('ci-attr');
    if (saved) return JSON.parse(saved) as Attribution;
  } catch {
    /* sin almacenamiento: se recalcula en cada llamada */
  }
  const q = new URLSearchParams(location.search);
  let referrer = '';
  try {
    if (document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host !== location.hostname) referrer = host;
    }
  } catch {
    /* referrer no válido */
  }
  const value: Attribution = {
    utm_source: (q.get('utm_source') ?? '').slice(0, 80),
    utm_medium: (q.get('utm_medium') ?? '').slice(0, 80),
    utm_campaign: (q.get('utm_campaign') ?? '').slice(0, 80),
    referrer,
    landing: location.pathname,
  };
  try {
    sessionStorage.setItem('ci-attr', JSON.stringify(value));
  } catch {
    /* sin almacenamiento */
  }
  return value;
}

export function track(event: string, data: Data = {}): void {
  const umami = (window as Window & { umami?: { track?: (e: string, d?: Data) => void } }).umami;
  umami?.track?.(event, data);

  if (!endpoint || optedOut()) return;
  const body = JSON.stringify({
    event,
    sid: sessionId(),
    lang: document.documentElement.lang,
    path: location.pathname,
    ...attribution(),
    data,
  });
  try {
    /* text/plain evita la comprobación previa de CORS: el envío no bloquea. */
    navigator.sendBeacon(endpoint + '/event', new Blob([body], { type: 'text/plain' }));
  } catch {
    /* la medición nunca debe romper la página */
  }
}

function init(): void {
  attribution();
  track('page_view');

  /* Clics en las llamadas a la acción. */
  document.addEventListener('click', (ev) => {
    const el = (ev.target as Element | null)?.closest<HTMLElement>('a,button');
    if (!el) return;
    const named = el.getAttribute('data-track');
    if (named) {
      track(named);
      return;
    }
    const href = el.getAttribute('href') ?? '';
    if (href.endsWith('#mvp')) track('cta_mvp', { where: el.closest('header') ? 'header' : 'page' });
  });

  /* Qué secciones llegan a verse (una vez cada una). */
  if ('IntersectionObserver' in window) {
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = (e.target as HTMLElement).id;
          if (seen.has(id)) continue;
          seen.add(id);
          track('section_view', { section: id });
          io.unobserve(e.target);
        }
      },
      { threshold: 0.35 }
    );
    ['sistema', 'mvp', 'servicios', 'contacto'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
}

init();
