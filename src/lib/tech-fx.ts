/**
 * Utilidades de la capa tecnológica (pantallas animadas).
 *
 * Reglas: nada se mueve sin motivo; todo respeta «reducir movimiento» (preferencia
 * del sistema) y el botón «Pausar animaciones» del visitante; sin librerías.
 */

export const motion = {
  paused: false,
  reduce: typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches,
};

/** Avisa a quien esté escuchando que cambió el estado de movimiento. */
export function setPaused(paused: boolean) {
  motion.paused = paused;
  document.documentElement.dataset.motion = paused ? 'paused' : 'on';
  window.dispatchEvent(new Event('ci-motion'));
}

export function onMotion(fn: () => void) {
  window.addEventListener('ci-motion', fn);
}

const typing = new WeakMap<Element, number>();

/** Escribe `text` letra por letra (o de golpe si hay «reducir movimiento»). */
export function typeEl(el: Element, text: string, delay = 0) {
  const my = (typing.get(el) ?? 0) + 1;
  typing.set(el, my);
  el.textContent = '';
  el.classList.remove('caret');
  if (motion.reduce) {
    el.textContent = text;
    return;
  }
  el.classList.add('caret');
  let i = 0;
  const tick = () => {
    if (typing.get(el) !== my) return;
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, 20);
    } else {
      el.classList.remove('caret');
    }
  };
  setTimeout(tick, delay);
}

/** Cuenta de 0 a `to` (o muestra el valor final con «reducir movimiento»). */
export function tween(el: Element, to: number, delay = 0, format: (n: number) => string = String) {
  if (motion.reduce) {
    el.textContent = format(to);
    return;
  }
  const start = performance.now() + delay;
  const f = (now: number) => {
    const p = Math.min(1, Math.max(0, (now - start) / 1200));
    el.textContent = format(Math.round(p * to));
    if (p < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}

/** Ejecuta `cb` la primera vez que `el` entra en pantalla. */
export function whenVisible(el: Element, cb: () => void, threshold = 0.4) {
  if (!('IntersectionObserver' in window)) {
    cb();
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        io.disconnect();
        cb();
      }
    },
    { threshold }
  );
  io.observe(el);
}

/** Reinicia las animaciones de CSS de una pantalla (quita y vuelve a poner .play). */
export function replay(el: Element) {
  el.classList.remove('play');
  void (el as HTMLElement).offsetWidth;
  el.classList.add('play');
}
