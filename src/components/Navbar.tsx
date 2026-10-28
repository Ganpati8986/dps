// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Languages, ArrowUpRight } from 'lucide-react';
// import { useLanguage } from '../context/LanguageContext';
// import logo from '../assets/loggo.png';

// const links = [
//   ['Home', 'घर', '/'], ['About', 'हमारे बारे में', '/about'], ['Academics', 'पढ़ाई', '/academics'],
//   ['Faculty', 'शिक्षक', '/faculty'], ['Facilities', 'सुविधाएं', '/facilities'],
//   ['Gallery', 'गैलरी', '/gallery'], ['Contact', 'संपर्क', '/contact'],
// ] as const;

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();
//   const { language, toggleLanguage } = useLanguage();
//   const en = language === 'english';

//   useEffect(() => {
//     const on = () => setScrolled(window.scrollY > 24);
//     on();
//     window.addEventListener('scroll', on, { passive: true });
//     return () => window.removeEventListener('scroll', on);
//   }, []);
//   useEffect(() => setOpen(false), [pathname]);
//   useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
//       >
//         <nav
//           aria-label="Main"
//           className={`flex w-full items-center justify-between gap-3 rounded-full border transition-all duration-500 ${
//             scrolled
//               ? 'max-w-5xl border-black/5 bg-white/80 py-2 pl-3 pr-2 shadow-[0_10px_40px_-12px_rgba(11,59,50,.35)] backdrop-blur-xl'
//               : 'max-w-6xl border-transparent bg-white/60 py-3 pl-4 pr-3 backdrop-blur-md'
//           }`}
//         >
//           <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="DPS Bakhtiyarpur home">
//             <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white object-contain ring-1 ring-black/5" />
//             <span className="hidden min-w-0 leading-tight min-[420px]:block">
//               <span className="block truncate font-display text-[15px] font-semibold text-brand-navy sm:text-base">DPS Bakhtiyarpur</span>
//               <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-gold">Dehli Public School</span>
//             </span>
//           </Link>

//           <ul className="hidden items-center gap-1 lg:flex">
//             {links.map(([e, h, href]) => {
//               const active = pathname === href;
//               return (
//                 <li key={href} className="relative">
//                   <Link to={href} className={`relative z-10 block rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors ${active ? 'text-white' : 'text-ink/70 hover:text-brand-navy'}`}>
//                     {en ? e : h}
//                   </Link>
//                   {active && (
//                     <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-brand-navy" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           <div className="flex items-center gap-1.5">
//             <button onClick={toggleLanguage} aria-label="Toggle language" className="grid h-10 w-10 place-items-center rounded-full text-brand-navy transition hover:bg-brand-navy/5">
//               <Languages className="h-[18px] w-[18px]" />
//             </button>
//             <Link to="/admission" className="group hidden items-center gap-1.5 rounded-full bg-brand-gold px-5 py-2.5 text-[13px] font-bold text-brand-navy shadow-sm transition hover:bg-brand-gold-light sm:inline-flex">
//               {en ? 'Apply Now' : 'आवेदन करें'}
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </Link>
//             <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-white lg:hidden">
//               <Menu className="h-5 w-5" />
//             </button>
//           </div>
//         </nav>
//       </motion.header>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ clipPath: 'circle(0% at calc(100% - 36px) 36px)' }}
//             animate={{ clipPath: 'circle(150% at calc(100% - 36px) 36px)' }}
//             exit={{ clipPath: 'circle(0% at calc(100% - 36px) 36px)' }}
//             transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
//             className="fixed inset-0 z-[60] flex h-[100dvh] w-full max-w-full flex-col overflow-hidden bg-brand-navy px-5 pb-6 pt-4 text-white lg:hidden"
//           >
//             <div className="flex justify-end">
//               <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><X className="h-5 w-5" /></button>
//             </div>
//             <ul className="mt-3 flex-1 overflow-y-auto">
//               {links.map(([e, h, href], i) => (
//                 <motion.li key={href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.05 }}>
//                   <Link to={href} className={`flex items-baseline justify-between border-b border-white/10 py-3 font-display text-[clamp(1.05rem,4.6vw,1.35rem)] ${pathname === href ? 'text-brand-gold' : ''}`}>
//                     {en ? e : h}<span className="shrink-0 text-[10px] text-white/40">0{i + 1}</span>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//             <Link to="/admission" className="mt-4 rounded-full bg-brand-gold py-3 text-center text-[13px] font-bold text-brand-navy">{en ? 'Apply for Admission' : 'दाखिले के लिए आवेदन करें'}</Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;





import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Languages,
  ArrowUpRight,
  LogIn,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ERP_LOGIN_URL } from './StaffAccess';
import logo from '../assets/loggo.png';

const links = [
  ['Home', 'घर', '/'],
  ['About', 'हमारे बारे में', '/about'],
  ['Academics', 'पढ़ाई', '/academics'],
  ['Faculty', 'शिक्षक', '/faculty'],
  ['Facilities', 'सुविधाएं', '/facilities'],
  ['Gallery', 'गैलरी', '/gallery'],
  ['Contact', 'संपर्क', '/contact'],
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const en = language === 'english';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <nav
          aria-label="Main"
          className={`flex w-full items-center justify-between gap-3 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'max-w-5xl border-black/5 bg-white/80 py-2 pl-3 pr-2 shadow-[0_10px_40px_-12px_rgba(11,59,50,.35)] backdrop-blur-xl'
              : 'max-w-6xl border-transparent bg-white/60 py-3 pl-4 pr-3 backdrop-blur-md'
          }`}
        >
          {/* Logo and School Name */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="DPS Bakhtiyarpur home"
          >
            <img
              src={logo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full bg-white object-contain ring-1 ring-black/5"
            />

            <span className="hidden min-w-0 leading-tight min-[420px]:block">
              <span className="block truncate font-display text-[15px] font-semibold text-brand-navy sm:text-base">
                DPS Bakhtiyarpur
              </span>

              <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Delhi Public School
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map(([e, h, href]) => {
              const active = pathname === href;

              return (
                <li key={href} className="relative">
                  <Link
                    to={href}
                    className={`relative z-10 block rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                      active
                        ? 'text-white'
                        : 'text-ink/70 hover:text-brand-navy'
                    }`}
                  >
                    {en ? e : h}
                  </Link>

                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-navy"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Navbar Actions */}
          <div className="flex shrink-0 items-center gap-1.5">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-brand-navy transition hover:bg-brand-navy/5"
            >
              <Languages className="h-[18px] w-[18px]" />
            </button>

            {/* ERP Login: Desktop Only, Hidden Below 1024px */}
            <a
              href={ERP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1024px]:inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 px-3 py-2 text-[12px] font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <LogIn className="h-4 w-4" />
              <span>ERP Login</span>
            </a>

            {/* Apply Now */}
            <Link
              to="/admission"
              className="group hidden items-center gap-1.5 rounded-full bg-brand-gold px-5 py-2.5 text-[13px] font-bold text-brand-navy shadow-sm transition hover:bg-brand-gold-light sm:inline-flex"
            >
              {en ? 'Apply Now' : 'आवेदन करें'}

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile and Tablet Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-navy text-white min-[1024px]:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile and Tablet Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{
              clipPath: 'circle(0% at calc(100% - 36px) 36px)',
            }}
            animate={{
              clipPath: 'circle(150% at calc(100% - 36px) 36px)',
            }}
            exit={{
              clipPath: 'circle(0% at calc(100% - 36px) 36px)',
            }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[60] flex h-[100dvh] w-full max-w-full flex-col overflow-hidden bg-brand-navy px-5 pb-6 pt-4 text-white min-[1024px]:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="mt-3 flex-1 overflow-y-auto">
              {links.map(([e, h, href], i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                >
                  <Link
                    to={href}
                    className={`flex items-baseline justify-between border-b border-white/10 py-3 font-display text-[clamp(1.05rem,4.6vw,1.35rem)] ${
                      pathname === href ? 'text-brand-gold' : ''
                    }`}
                  >
                    {en ? e : h}

                    <span className="shrink-0 text-[10px] text-white/40">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Apply for Admission */}
            <Link
              to="/admission"
              className="mt-4 rounded-full bg-brand-gold py-3 text-center text-[13px] font-bold text-brand-navy"
            >
              {en ? 'Apply for Admission' : 'दाखिले के लिए आवेदन करें'}
            </Link>

            {/* ERP Login intentionally removed from mobile menu */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
