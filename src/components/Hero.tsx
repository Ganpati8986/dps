import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
// Photos that rotate in each card — add or remove files here freely
import m1 from '../assets/img1.jpeg';  import m2 from '../assets/crosal.jpeg'; import m3 from '../assets/img2.jpeg';
import m4 from '../assets/img3.jpeg';  import m5 from '../assets/img.jpeg';    import m6 from '../assets/img7.jpeg';
import t1 from '../assets/img6.jpeg';  import t2 from '../assets/img8.jpeg';   import t3 from '../assets/img21.jpeg';
import t4 from '../assets/img4.jpeg';  import t5 from '../assets/img5.jpeg';
import b1 from '../assets/img14.jpg';  import b2 from '../assets/img22.jpeg';  import b3 from '../assets/img18.jpeg';
import b4 from '../assets/img27.jpeg';

const pools = [[m1, m2, m3, m4, m5, m6], [t1, t2, t3, t4, t5], [b1, b2, b3, b4]];
const INTERVAL = 2000; // ms — one card changes every 2 seconds, taking turns

const ease = [0.22, 1, 0.36, 1] as const;

const Rotator = ({ srcs, i, priority = false }: { srcs: string[]; i: number; priority?: boolean }) => (
  <AnimatePresence initial={false}>
    <motion.img
      key={srcs[i]} src={srcs[i]} alt="" draggable={false} fetchPriority={priority ? 'high' : 'auto'}
      className="absolute inset-0 h-full w-full object-cover"
      initial={{ opacity: 0, scale: 1.14 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease }}
    />
  </AnimatePresence>
);

const Hero = () => {
  const { language } = useLanguage();
  const en = language === 'english';
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState([0, 0, 0]);

  useEffect(() => {
    // preload the rest after first paint so changes never flicker
    const pre = setTimeout(() => pools.flat().forEach((src) => { const im = new Image(); im.src = src; }), 1200);
    if (reduce) return () => clearTimeout(pre);
    let n = 0;
    const t = setInterval(() => {
      const k = n++ % 3;
      setIdx((p) => p.map((v, j) => (j === k ? (v + 1) % pools[j].length : v)));
    }, INTERVAL);
    return () => { clearInterval(t); clearTimeout(pre); };
  }, [reduce]);
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);
  const yB = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 50]);

  const words = (en ? 'Where curious minds grow into confident leaders' : 'जहाँ जिज्ञासु मन आत्मविश्वासी नेता बनते हैं').split(' ');
  const stats = [['500+', en ? 'Students' : 'छात्र'], ['20+', en ? 'Faculty' : 'शिक्षक'], ['I–VIII', en ? 'Classes' : 'कक्षाएं']];

  return (
    <section data-hero className="grain relative isolate overflow-hidden bg-brand-cream pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div aria-hidden className="absolute -left-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-brand-gold/25 blur-[110px]" />
      <div aria-hidden className="absolute -right-24 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-brand-navy/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-navy shadow-sm">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-70" /><span className="relative h-2 w-2 rounded-full bg-brand-gold" /></span>
            {en ? 'Admissions open' : 'दाखिले जारी हैं'}
          </motion.span>

          <h1 className="mt-6 text-[clamp(2.4rem,6.4vw,5.2rem)] font-semibold leading-[1.03] text-brand-navy">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span className={`inline-block pr-[0.25em] ${i > 2 && i < 5 ? 'italic text-brand-gold' : ''}`}
                  initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease }}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {en ? 'Dehli Public School, Bakhtiyarpur — modern classrooms, caring teachers and a campus built for every child to thrive.'
                : 'देहली पब्लिक स्कूल, बख्तियारपुर — आधुनिक कक्षाएं, स्नेही शिक्षक और हर बच्चे के विकास के लिए बना परिसर।'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.7, ease }} className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/admission" className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_-10px_rgba(11,59,50,.6)] transition hover:-translate-y-0.5 hover:bg-[#0e4c40]">
              {en ? 'Apply Now' : 'अभी आवेदन करें'}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/facilities" className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-4 text-sm font-bold text-brand-navy transition hover:border-brand-navy/40">
              <Play className="h-4 w-4 fill-brand-gold text-brand-gold" />{en ? 'Explore Campus' : 'परिसर देखें'}
            </Link>
          </motion.div>

          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-brand-navy/10 pt-6">
            {stats.map(([v, l]) => (
              <div key={l}><dt className="font-display text-xl font-semibold text-brand-navy sm:text-3xl">{v}</dt><dd className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink/55 sm:text-xs">{l}</dd></div>
            ))}
          </motion.dl>
        </div>

        {/* photo mosaic */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.figure style={{ y: yA }} initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-[0_40px_80px_-30px_rgba(11,59,50,.55)] ring-1 ring-black/5">
            <Rotator srcs={pools[0]} i={idx[0]} priority />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
          </motion.figure>

          <motion.div style={{ y: yB }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }}
            className="absolute -left-3 bottom-8 hidden w-36 overflow-hidden rounded-2xl border-4 border-brand-cream shadow-xl sm:block md:-left-8 md:w-44">
            <div className="relative aspect-square"><Rotator srcs={pools[1]} i={idx[1]} /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.05, duration: 0.8, ease }}
            className="absolute -right-2 top-16 hidden w-32 overflow-hidden rounded-2xl border-4 border-brand-cream shadow-xl sm:block md:-right-6 md:w-40">
            <div className="relative aspect-[3/4]"><Rotator srcs={pools[2]} i={idx[2]} /></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, type: 'spring' }}
            className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gold/20 font-display text-lg font-bold text-brand-navy">★</span>
            <span className="text-xs leading-tight"><b className="block text-sm text-brand-navy">{en ? 'Caring & Modern' : 'स्नेही और आधुनिक'}</b><span className="text-ink/60">{en ? 'Pre-Nursery to Class 10' : 'प्री-नर्सरी से कक्षा 10'}</span></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
