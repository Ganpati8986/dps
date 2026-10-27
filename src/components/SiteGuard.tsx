import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Lock } from 'lucide-react';

/**
 * Deterrent protection (production build only, so `npm run dev` stays normal):
 * - blocks right-click, text selection/copy, drag-save, view-source/save/print shortcuts, DevTools shortcuts
 * - blurs the whole page when the tab loses focus, PrintScreen / screenshot shortcuts are used, or DevTools is detected
 * Forms (input / textarea / select) keep working normally.
 */
const isField = (t: EventTarget | null) => t instanceof HTMLElement && !!t.closest('input, textarea, select, [contenteditable="true"]');

// const WATERMARK = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='220'><text x='160' y='110' text-anchor='middle' transform='rotate(-24 160 110)' font-family='Arial,sans-serif' font-size='17' font-weight='700' letter-spacing='2' fill='%230b3b32' fill-opacity='0.09'>DPS BAKHTIYARPUR</text></svg>")`;

const WATERMARK = '';
const guardOn = () => import.meta.env.PROD || new URLSearchParams(window.location.search).has('guard'); // add ?guard=1 to test while developing

const SiteGuard = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!guardOn()) return;
    const root = document.documentElement;
    root.classList.add('protect');

    const reasons = new Set<string>();
    const sync = () => { setHidden(reasons.size > 0); root.classList.toggle('guard-on', reasons.size > 0); };
    const on = (r: string) => { reasons.add(r); sync(); };
    const off = (r: string) => { reasons.delete(r); sync(); };
    const flash = () => {
      on('shot');
      try { navigator.clipboard?.writeText(' '); } catch { /* ignore */ }
      setTimeout(() => off('shot'), 2500);
    };

    const stop = (e: Event) => { if (!isField(e.target)) e.preventDefault(); };
    const onKey = (e: KeyboardEvent) => {
      const c = e.code, mod = e.ctrlKey || e.metaKey;
      const shot = c === 'PrintScreen' || (e.metaKey && e.shiftKey && ['Digit3', 'Digit4', 'Digit5', 'KeyS'].includes(c));
      const bad =
        shot || c === 'F12' ||
        (mod && e.shiftKey && ['KeyI', 'KeyJ', 'KeyC', 'KeyK'].includes(c)) ||
        (e.metaKey && e.altKey && ['KeyI', 'KeyJ', 'KeyC', 'KeyU'].includes(c)) ||
        (mod && ['KeyU', 'KeyS', 'KeyP'].includes(c)) ||
        (mod && ['KeyC', 'KeyX', 'KeyA'].includes(c) && !isField(e.target));
      if (bad) { e.preventDefault(); e.stopPropagation(); }
      if (shot) flash();
    };
    const onKeyUp = (e: KeyboardEvent) => { if (e.code === 'PrintScreen') flash(); };
    const onBlur = () => { if (document.activeElement?.tagName !== 'IFRAME') on('blur'); }; // maps iframe keeps working
    const onFocus = () => off('blur');
    const onVis = () => (document.hidden ? on('vis') : off('vis'));

    const opts = { capture: true } as const;
    document.addEventListener('contextmenu', stop, opts);
    document.addEventListener('dragstart', (e) => e.preventDefault(), opts);
    document.addEventListener('copy', stop, opts);
    document.addEventListener('cut', stop, opts);
    document.addEventListener('selectstart', stop, opts);
    document.addEventListener('keydown', onKey, opts);
    document.addEventListener('keyup', onKeyUp, opts);
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    // DevTools detection (desktop only): (1) `debugger` pause timing, (2) window-size jump, zoom-safe.
    const desktop = window.matchMedia('(pointer: fine)').matches;
    const gap = () => ({ w: window.outerWidth - window.innerWidth, h: window.outerHeight - window.innerHeight, r: window.devicePixelRatio });
    let base = gap();
    let hits = 0;
    const probe = setInterval(() => {
      if (!desktop) return;
      const t = performance.now();
      (function () { /* noop */ }).constructor('debugger')();
      const paused = performance.now() - t > 250;
      const g = gap();
      if (g.r !== base.r) base = g; // browser zoom changed: recalibrate
      const docked = g.w - base.w > 170 || g.h - base.h > 170;
      if (paused || docked) {
        on('dev');
        if (++hits >= 2) { document.body.replaceChildren(); window.location.replace('about:blank'); }
      } else { hits = 0; off('dev'); }
    }, 1000);

    return () => {
      clearInterval(probe);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  if (!guardOn()) return null;
  return createPortal(
    <>
      {/* repeating watermark: shows up in every screenshot, screen recording and photo of the screen */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[9990]" style={{ backgroundImage: WATERMARK, backgroundSize: '320px 220px', opacity: 0.55 }} />
      {hidden && (
    <div role="alert" className="fixed inset-0 z-[9999] grid place-items-center bg-brand-navy/80 p-6 text-center text-white backdrop-blur-2xl">
      <div>
        <Lock className="mx-auto mb-4 h-10 w-10 text-brand-gold" />
        <p className="font-display text-xl">Protected content</p>
        <p className="mt-2 text-sm text-white/70">Please return to this window to continue viewing the site.</p>
      </div>
    </div>
      )}
    </>,
    document.body,
  );
};

export default SiteGuard;
