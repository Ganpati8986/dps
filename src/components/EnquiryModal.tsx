// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Send, User, Phone, Mail, BookOpen } from 'lucide-react';
// import { useLanguage } from '../context/LanguageContext';

// const EnquiryModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { language } = useLanguage();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // ✅ Auto open first time
//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisitedDPS');

//     if (!hasVisited) {
//       const timer = setTimeout(() => {
//         setIsOpen(true);
//         sessionStorage.setItem('hasVisitedDPS', 'true');
//       }, 1000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   // ✅ Listen from Navbar button click
//   useEffect(() => {
//     const openModal = () => setIsOpen(true);

//     window.addEventListener('openEnquiryModal', openModal);

//     return () => {
//       window.removeEventListener('openEnquiryModal', openModal);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     setTimeout(() => {
//       setIsOpen(false);
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <>
//       {/* Floating Button (Mobile) */}
//       <motion.button
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 2 }}
//         onClick={() => setIsOpen(true)}
//         className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] bg-brand-gold text-brand-navy font-bold py-3 px-4 rounded-l-xl shadow-lg hover:bg-white transition lg:hidden"
//         style={{ writingMode: 'vertical-rl' }}
//       >
//         <span className="rotate-180 text-sm">
//           {language === 'english' ? 'Enquire Now' : 'पूछताछ करें'}
//         </span>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
//             >

//               {/* Header */}
//               <div className="bg-brand-navy p-6 text-center relative">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-4 right-4 text-white"
//                 >
//                   <X />
//                 </button>

//                 <h2 className="text-2xl font-bold text-brand-gold">
//                   {language === 'english' ? 'Admission Enquiry' : 'प्रवेश पूछताछ'}
//                 </h2>
//               </div>

//               {/* Body */}
//               <div className="p-6">
//                 {isSubmitted ? (
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold text-green-600 mb-2">
//                       {language === 'english' ? 'Thank You!' : 'धन्यवाद!'}
//                     </h3>
//                     <p className="text-gray-600">
//                       {language === 'english'
//                         ? 'We will contact you soon.'
//                         : 'हम आपसे जल्द संपर्क करेंगे।'}
//                     </p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4">

//                     {/* Name */}
//                     <input
//                       type="text"
//                       required
//                       placeholder={language === 'english' ? 'Student Name' : 'छात्र का नाम'}
//                       className="w-full p-3 border rounded-xl"
//                     />

//                     {/* Phone */}
//                     <input
//                       type="tel"
//                       required
//                       placeholder={language === 'english' ? 'Phone Number' : 'फ़ोन नंबर'}
//                       className="w-full p-3 border rounded-xl"
//                     />

//                     {/* Email */}
//                     <input
//                       type="email"
//                       required
//                       placeholder={language === 'english' ? 'Email' : 'ईमेल'}
//                       className="w-full p-3 border rounded-xl"
//                     />

//                     {/* Class */}
//                     <select className="w-full p-3 border rounded-xl">
//                       <option>Select Class</option>
//                       <option>Nursery</option>
//                       <option>LKG</option>
//                       <option>UKG</option>
//                       <option>1 - 12</option>
//                     </select>

//                     <button
//                       type="submit"
//                       className="w-full bg-brand-gold text-brand-navy py-3 rounded-xl font-bold"
//                     >
//                       {language === 'english' ? 'Submit' : 'सबमिट करें'}
//                     </button>

//                   </form>
//                 )}
//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default EnquiryModal;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useFormSubmit } from "../pages/useFormSubmit";

// ─── Same class options, same values ─────────────────────────────────────────
const CLASS_GROUPS = [
  {
    group: "Pre-Primary",
    groupHi: "प्री-प्राइमरी",
    options: [
      { label: "Pre-Nursery", labelHi: "प्री-नर्सरी", value: "pre-nursery" },
      { label: "Nursery",     labelHi: "नर्सरी",       value: "nursery"     },
      { label: "LKG",         labelHi: "एलकेजी",       value: "lkg"         },
      { label: "UKG",         labelHi: "यूकेजी",       value: "ukg"         },
    ],
  },
  {
    group: "Primary",
    groupHi: "प्राइमरी",
    options: Array.from({ length: 5 }, (_, i) => ({
      label: `Class ${i + 1}`,
      labelHi: `कक्षा ${i + 1}`,
      value: String(i + 1),
    })),
  },
  {
    group: "Middle & Secondary",
    groupHi: "मिडिल व सेकेंडरी",
    options: Array.from({ length: 5 }, (_, i) => ({
      label: `Class ${i + 6}`,
      labelHi: `कक्षा ${i + 6}`,
      value: String(i + 6),
    })),
  },
];

const inputCls =
  "w-full p-3 border border-gray-200 rounded-xl text-sm text-brand-navy font-medium focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all bg-white";

// ─────────────────────────────────────────────────────────────────────────────
const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const { form, handleChange, submit, status, reset } = useFormSubmit();

  const isHindi = language !== "english";

  // Auto-open on first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedDPS");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasVisitedDPS", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for navbar button
  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("openEnquiryModal", openModal);
    return () => window.removeEventListener("openEnquiryModal", openModal);
  }, []);

  // Auto-close 3 s after success
  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => {
        setIsOpen(false);
        reset();
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [status, reset]);

  const handleClose = () => {
    setIsOpen(false);
    // Don't reset form — user may have partially filled it
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-navy p-6 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-brand-gold">
                {isHindi ? "प्रवेश पूछताछ" : "Admission Enquiry"}
              </h2>
              <p className="text-white/60 text-sm mt-1">
                {isHindi ? "सत्र 2026-27" : "Session 2026-27"}
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {isHindi ? "धन्यवाद!" : "Thank You!"}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {isHindi
                      ? "हम आपसे जल्द संपर्क करेंगे।"
                      : "We will contact you soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  {/* Student Name */}
                  <input
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    placeholder={isHindi ? "छात्र का नाम *" : "Student Name *"}
                    className={inputCls}
                  />

                  {/* Parent Name */}
                  <input
                    type="text"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                    placeholder={
                      isHindi ? "अभिभावक का नाम *" : "Parent Name *"
                    }
                    className={inputCls}
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder={isHindi ? "फ़ोन नंबर *" : "Phone Number *"}
                    className={inputCls}
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={isHindi ? "ईमेल (वैकल्पिक)" : "Email (optional)"}
                    className={inputCls}
                  />

                  {/* Class — grouped select matching all other forms */}
                  <select
                    name="class"
                    value={form.class}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  >
                    <option value="">
                      {isHindi ? "कक्षा चुनें *" : "Select Class *"}
                    </option>
                    {CLASS_GROUPS.map((g) => (
                      <optgroup
                        key={g.group}
                        label={isHindi ? g.groupHi : g.group}
                      >
                        {g.options.map((o) => (
                          <option key={o.value} value={o.value}>
                            {isHindi ? o.labelHi : o.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>

                  {status === "error" && (
                    <p className="text-red-500 text-xs font-medium">
                      {isHindi
                        ? "सबमिट नहीं हुआ, पुनः प्रयास करें।"
                        : "Submission failed. Please try again."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-gold text-brand-navy py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-navy hover:text-white transition disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                        {isHindi ? "जमा हो रहा है…" : "Submitting…"}
                      </>
                    ) : (
                      <>
                        {isHindi ? "सबमिट करें" : "Submit"}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
