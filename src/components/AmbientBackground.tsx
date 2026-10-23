import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const orbs = [
  { c: '#f2a33a', s: 520, x: -8, y: 4, o: 0.22, d: 26 },
  { c: '#0b3b32', s: 560, x: 82, y: 16, o: 0.13, d: 32 },
  { c: '#4f9bff', s: 420, x: 6, y: 66, o: 0.13, d: 28 },
  { c: '#ffc873', s: 380, x: 68, y: 76, o: 0.22, d: 24 },
  { c: '#1f8f78', s: 340, x: 42, y: 38, o: 0.1, d: 30 },
];

const tints = [
  'radial-gradient(circle at 30% 28%, rgba(255,255,255,.95), rgba(255,255,255,.3) 35%, rgba(242,163,58,.22) 72%, rgba(242,163,58,.12))',
  'radial-gradient(circle at 30% 28%, rgba(255,255,255,.95), rgba(255,255,255,.3) 35%, rgba(31,143,120,.2) 72%, rgba(11,59,50,.1))',
  'radial-gradient(circle at 30% 28%, rgba(255,255,255,.95), rgba(255,255,255,.3) 35%, rgba(79,155,255,.2) 72%, rgba(79,155,255,.1))',
];

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  size: 16 + ((i * 37) % 52),
  left: (i * 61 + 7) % 100,
  dur: 18 + ((i * 7) % 16),
  delay: -((i * 5) % 24),
  sway: (i % 2 ? 1 : -1) * (24 + ((i * 13) % 70)),
  tint: tints[i % 3],
}));

/** Fixed full-site background: drifting colour orbs, rising glass bubbles, soft cursor glow (desktop). */
const AmbientBackground = () => {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const x = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 });
  const y = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const mv = (e: PointerEvent) => { mx.set(e.clientX - 210); my.set(e.clientY - 210); };
    window.addEventListener('pointermove', mv, { passive: true });
    return () => window.removeEventListener('pointermove', mv);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((o, i) => (
        <span key={i} className="amb-orb absolute rounded-full"
          style={{ width: o.s, height: o.s, left: `${o.x}%`, top: `${o.y}%`, background: o.c, opacity: o.o, filter: 'blur(90px)', animationDuration: `${o.d}s`, animationDelay: `${-i * 4}s` }} />
      ))}
      {bubbles.map((b, i) => (
        <span key={i} className={`amb-bubble absolute rounded-full ${i > 9 ? 'hidden md:block' : ''}`}
          style={{ width: b.size, height: b.size, left: `${b.left}%`, bottom: -80, background: b.tint, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s`, ['--sway' as string]: `${b.sway}px` }} />
      ))}
      <motion.span className="absolute hidden h-[420px] [@media(pointer:fine)]:block w-[420px] rounded-full"
        style={{ x, y, background: 'radial-gradient(circle, rgba(242,163,58,.2), transparent 65%)' }} />
    </div>
  );
};

export default AmbientBackground;
