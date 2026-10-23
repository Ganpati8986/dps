import React from 'react';
import { motion } from 'framer-motion';
import StaffAccess from './StaffAccess';
import SiteGuard from './SiteGuard';
import ScrollReveal from './ScrollReveal';
import AmbientBackground from './AmbientBackground';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white flex flex-col">
      <AmbientBackground />
      <Navbar />
      <ScrollReveal />
      <SiteGuard />
      <StaffAccess />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppButton/>
      <BackToTop />
    </div>
  );
};

export default Layout;
