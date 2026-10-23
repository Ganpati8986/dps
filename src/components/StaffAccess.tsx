import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LogIn, X } from 'lucide-react';

// 👇 put your real ERP login address here
export const ERP_LOGIN_URL = 'https://erp-krinexiya.in';
const OPEN_EVENT = 'staff-access-open';

/** Wrap any text (we use the footer ©): tap it 5 times quickly to reveal the ERP login. */
export const SecretTap = ({ children }: { children: ReactNode }) => {
  const taps = useRef<number[]>([]);
  return (
    <span
      onClick={() => {
        const now = Date.now();
        taps.current = [...taps.current.filter((t) => now - t < 3000), now];
        if (taps.current.length >= 5) { taps.current = []; window.dispatchEvent(new Event(OPEN_EVENT)); }
      }}
    >
      {children}
    </span>
  );
};

/** Hidden ERP login: opens by 5 taps on ©, by Ctrl+Alt+L, or by visiting /staff-login. Nothing visible otherwise. */
const StaffAccess = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const show = () => setOpen(true);
    const key = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.altKey && e.code === 'KeyL') show(); };
    window.addEventListener(OPEN_EVENT, show);
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener(OPEN_EVENT, show); window.removeEventListener('keydown', key); };
  }, []);

  useEffect(() => { if (pathname === '/staff-login') { setOpen(true); navigate('/', { replace: true }); } }, [pathname, navigate]);
  useEffect(() => { if (!open) return; const t = setTimeout(() => setOpen(false), 25000); return () => clearTimeout(t); }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/50 p-5 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div role="dialog" aria-label="ERP login" onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-ink/50 hover:bg-black/5"><X className="h-4 w-4" /></button>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-navy text-brand-gold"><LogIn className="h-6 w-6" /></span>
            <h3 className="mt-4 text-xl font-semibold text-brand-navy">School ERP</h3>
            <p className="mt-1 text-sm text-ink/60">For staff and authorised users only.</p>
            <a href={ERP_LOGIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light">
              Open ERP Login
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StaffAccess;
