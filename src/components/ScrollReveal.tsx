import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Top progress bar + fade-up reveal for every section and grid card (works on all pages). */
const ScrollReveal = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        el.classList.add('in');
        setTimeout(() => el.classList.remove('rv', 'in'), 1400);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    const scan = () => {
      document.querySelectorAll<HTMLElement>('#root section:not([data-hero]):not(.sticky):not([data-rv]), #root section .grid > *:not([data-rv])').forEach((el) => {
        if (el.closest('nav,header,.sticky')) return;
        el.dataset.rv = '1';
        const sib = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
        if (el.tagName !== 'SECTION') el.style.transitionDelay = `${Math.min(sib, 6) * 70}ms`;
        el.classList.add('rv');
        io.observe(el);
      });
    };
    let t: number;
    const mo = new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(scan, 60); });
    mo.observe(document.body, { childList: true, subtree: true });
    scan();
    return () => { mo.disconnect(); io.disconnect(); };
  }, []);

  return <motion.div aria-hidden style={{ scaleX, originX: 0 }} className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-gradient-to-r from-brand-gold to-brand-gold-light" />;
};

export default ScrollReveal;
