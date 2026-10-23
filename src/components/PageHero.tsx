import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared inner-page header: left-aligned, breadcrumb, animated rings, rounded bottom. */
const PageHero = ({ eyebrow, title, sub, overlap = false, gap = false }: { eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode; overlap?: boolean; gap?: boolean }) => {
  const { pathname } = useLocation();
  const crumb = pathname.split('/').filter(Boolean)[0] ?? '';
  return (
    <>
      <section data-hero className={`grain relative isolate overflow-hidden rounded-b-[2rem] bg-brand-navy text-white sm:rounded-b-[3.5rem] ${overlap ? 'pb-40 sm:pb-48' : 'pb-16 sm:pb-24'} pt-32 sm:pt-40`}>
        <div aria-hidden className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(242,163,58,.28), transparent 45%), radial-gradient(circle at 5% 90%, rgba(255,255,255,.08), transparent 40%)' }} />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-[.07]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
        {[300, 460, 620].map((s, i) => (
          <motion.span key={s} aria-hidden className="absolute -right-24 top-1/2 -z-10 hidden rounded-full border border-white/10 md:block"
            style={{ width: s, height: s, marginTop: -s / 2 }} animate={{ rotate: i % 2 ? -360 : 360 }} transition={{ duration: 50 + i * 20, repeat: Infinity, ease: 'linear' }}>
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold" />
          </motion.span>
        ))}

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
            <Link to="/" className="hover:text-white">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <span className="capitalize text-brand-gold">{crumb}</span>
          </motion.nav>
          {eyebrow && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">{eyebrow}</motion.p>
          )}
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-3 max-w-4xl text-[clamp(2.3rem,6vw,4.8rem)] font-semibold leading-[1.05]">{title}</motion.h1>
          {sub && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{sub}</motion.p>
          )}
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.8, ease }} style={{ originX: 0 }} className="mt-8 block h-1 w-20 rounded-full bg-brand-gold" />
        </div>
      </section>
      {gap && <div className="h-12 sm:h-16" />}
    </>
  );
};

export default PageHero;
