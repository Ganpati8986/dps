/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Layout from './components/Layout';
import EnquiryModal from './components/EnquiryModal';

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Faculty = lazy(() => import('./pages/Faculty'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Admission = lazy(() => import('./pages/Admission'));
const Contact = lazy(() => import('./pages/Contact'));


// Context
import { LanguageProvider } from './context/LanguageContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/enquiry" element={<EnquiryModal />} />
        </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <AnimatedRoutes />
          <EnquiryModal/>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
