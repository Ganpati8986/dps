import PageHero from '../components/PageHero';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Facebook, Youtube, Send, User, Users, GraduationCap, ChevronDown,Instagram, MessageCircle  } from 'lucide-react';
// import { useLanguage } from '../context/LanguageContext';

// const Contact = () => {
//   const { language } = useLanguage();

//   return (
//     <div className="min-h-screen bg-brand-cream pb-24">
//       {/* Hero Section */}
//       <section className="bg-brand-navy pt-40 pb-48 px-4 text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/contact/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
//         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 max-w-3xl mx-auto"
//         >
//           <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
//             {language === 'english' ? 'Contact Us' : 'हमसे संपर्क करें'}
//           </h1>
//           <p className="text-xl text-white/80">
//             {language === 'english'
//               ? 'We would love to hear from you. Reach out to us for any queries.'
//               : 'हम आपसे सुनना पसंद करेंगे। किसी भी प्रश्न के लिए हमसे संपर्क करें।'}
//           </p>
//         </motion.div>
//       </section>

//       {/* Overlapping Content */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100"
//         >
//           <div className="grid lg:grid-cols-5 gap-16">

//             {/* Form Section (Left, 3 columns) */}
//             <div className="lg:col-span-3">
//               <h2 className="text-3xl font-display font-bold text-brand-navy mb-8">
//                 {language === 'english' ? 'Send an Application / Message' : 'आवेदन / संदेश भेजें'}
//               </h2>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                       {language === 'english' ? 'Student Name' : 'छात्र का नाम'}
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <User className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium shadow-sm"
//                         placeholder={language === 'english' ? "Student Name" : "छात्र का नाम"}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                       {language === 'english' ? 'Parent Name' : 'अभिभावक का नाम'}
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <Users className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium shadow-sm"
//                         placeholder={language === 'english' ? "Parent Name" : "अभिभावक का नाम"}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                       {language === 'english' ? 'Email Address' : 'ईमेल पता'}
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <Mail className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="email"
//                         className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium shadow-sm"
//                         placeholder="dps@gmail.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                       {language === 'english' ? 'Phone Number' : 'फ़ोन नंबर'}
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                         <Phone className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="tel"
//                         className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium shadow-sm"
//                         placeholder="+91 9471496300"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                     {language === 'english' ? 'Select Class' : 'कक्षा चुनें'}
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <GraduationCap className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <select className="w-full bg-white pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium appearance-none shadow-sm cursor-pointer">
//                       <option value="">{language === 'english' ? "Select Class" : "कक्षा चुनें"}</option>
//                       <option value="6">{language === 'english' ? "Class 6" : "कक्षा 6"}</option>
//                       <option value="7">{language === 'english' ? "Class 7" : "कक्षा 7"}</option>
//                       <option value="8">{language === 'english' ? "Class 8" : "कक्षा 8"}</option>
//                       <option value="9">{language === 'english' ? "Class 9" : "कक्षा 9"}</option>
//                       <option value="10">{language === 'english' ? "Class 10" : "कक्षा 10"}</option>
//                       <option value="11">{language === 'english' ? "Class 11" : "कक्षा 11"}</option>
//                       <option value="12">{language === 'english' ? "Class 12" : "कक्षा 12"}</option>
//                     </select>
//                     <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
//                       <ChevronDown className="h-5 w-5 text-gray-400" />
//                     </div>
//                   </div>
//                 </div> */}


//                 <div className="space-y-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
//                     {language === 'english' ? 'Select Class' : 'कक्षा चुनें'}
//                   </label>

//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <GraduationCap className="h-5 w-5 text-gray-400" />
//                     </div>

//                     <select className="w-full bg-white pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium appearance-none shadow-sm cursor-pointer">

//                       <option value="">
//                         {language === 'english' ? "Select Class" : "कक्षा चुनें"}
//                       </option>

//                       {/* Pre-Primary */}
//                       <option value="pre-nursery">{language === 'english' ? "Pre-Nursery" : "प्री-नर्सरी"}</option>
//                       <option value="nursery">{language === 'english' ? "Nursery" : "नर्सरी"}</option>
//                       <option value="lkg">{language === 'english' ? "LKG" : "एलकेजी"}</option>
//                       <option value="ukg">{language === 'english' ? "UKG" : "यूकेजी"}</option>

//                       {/* Primary */}
//                       <option value="1">{language === 'english' ? "Class 1" : "कक्षा 1"}</option>
//                       <option value="2">{language === 'english' ? "Class 2" : "कक्षा 2"}</option>
//                       <option value="3">{language === 'english' ? "Class 3" : "कक्षा 3"}</option>
//                       <option value="4">{language === 'english' ? "Class 4" : "कक्षा 4"}</option>
//                       <option value="5">{language === 'english' ? "Class 5" : "कक्षा 5"}</option>

//                       {/* Middle & Secondary */}
//                       <option value="6">{language === 'english' ? "Class 6" : "कक्षा 6"}</option>
//                       <option value="7">{language === 'english' ? "Class 7" : "कक्षा 7"}</option>
//                       <option value="8">{language === 'english' ? "Class 8" : "कक्षा 8"}</option>
//                       <option value="9">{language === 'english' ? "Class 9" : "कक्षा 9"}</option>
//                       <option value="10">{language === 'english' ? "Class 10" : "कक्षा 10"}</option>

//                     </select>

//                     <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
//                       <ChevronDown className="h-5 w-5 text-gray-400" />
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full bg-brand-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 group mt-6">
//                   <span>{language === 'english' ? 'Submit Application' : 'आवेदन जमा करें'}</span>
//                   <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info & Map (Right, 2 columns) */}
//         {/* Contact Info & Map (Right, 2 columns) */}
// <div className="lg:col-span-2 space-y-12">

//   {/* Contact Info */}
//   <div>
//     <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-8">
//       {language === 'english' ? 'Contact Information' : 'संपर्क जानकारी'}
//     </h3>

//     <div className="space-y-8">

//       {/* Address */}
//       <div className="flex items-start gap-5">
//         <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
//           <MapPin className="w-6 h-6" />
//         </div>
//         <div>
//           <h4 className="text-lg font-bold text-brand-navy mb-1">
//             {language === 'english' ? 'Address' : 'पता'}
//           </h4>
//           <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed">
//             {language === 'english'
//               ? 'Purani Bypass Road, Naya Tola, Bakhtiyarpur (Patna)'
//               : 'पुरानी बायपास रोड, नया टोला, बख्तियारपुर (पटना)'}
//           </p>
//         </div>
//       </div>

//       {/* Phone */}
//       <div className="flex items-start gap-5">
//         <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
//           <Phone className="w-6 h-6" />
//         </div>
//         <div>
//           <h4 className="text-lg font-bold text-brand-navy mb-1">
//             {language === 'english' ? 'Phone' : 'फ़ोन'}
//           </h4>
//           <p className="text-brand-navy/70 text-base md:text-lg">
//             +91 9471496300
//           </p>
//         </div>
//       </div>

//       {/* Email */}
//       <div className="flex items-start gap-5">
//         <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
//           <Mail className="w-6 h-6" />
//         </div>
//         <div>
//           <h4 className="text-lg font-bold text-brand-navy mb-1">
//             {language === 'english' ? 'Email' : 'ईमेल'}
//           </h4>
//           <p className="text-brand-navy/70 text-base md:text-lg">
//             Dpsbakhtiyarpur@gmail.com
//           </p>
//         </div>
//       </div>

//     </div>
//   </div>

//   {/* Map */}
//   <div className="w-full h-72 rounded-3xl overflow-hidden shadow-md border border-gray-100">
//     <iframe
//       src="https://www.google.com/maps?q=Purani+Bypass+Road+Bakhtiyarpur&output=embed"
//       width="100%"
//       height="100%"
//       style={{ border: 0 }}
//       allowFullScreen={true}
//       loading="lazy"
//     ></iframe>
//   </div>

//   {/* Socials */}
//   <div className="flex items-center gap-4 pt-6 border-t border-gray-100 flex-wrap">

//     <span className="text-base font-bold text-brand-navy/70 uppercase tracking-wider">
//       {language === 'english' ? 'Follow Us' : 'फॉलो करें'}
//     </span>

//     {/* Facebook */}
//     <a 
//        href="https://www.facebook.com/people/Dps-Bakhtiyarpur/61574535718887/?rdid=OowB9aHNWlpHz0yx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16eAgZWMeh%2F" 
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"
//     >
//       <Facebook className="w-5 h-5" />
//     </a>

//     {/* YouTube */}
//     <a 
//      href="https://www.youtube.com/@dpsbakhtiyarpur" 
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"
//     >
//       <Youtube className="w-5 h-5" />
//     </a>

//     {/* Instagram */}
//     <a 
//       href="https://www.instagram.com/dpsbakhtiyarpur?igsh=Y2U5N29zY3h0ZTAy" 
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-pink-500 hover:text-white transition-all"
//     >
//       <Instagram className="w-5 h-5" />
//     </a>

//     {/* WhatsApp */}
//     <a 
//       href="https://wa.me/919471496300" 
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-green-500 hover:text-white transition-all"
//     >
//       <MessageCircle className="w-5 h-5" />
//     </a>

//   </div>

// </div>

//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React from "react";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Send,
  User,
  Users,
  GraduationCap,
  ChevronDown,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useFormSubmit } from "./useFormSubmit.js";

// ─── Class options (grouped, same values as all other forms) ─────────────────
const CLASS_GROUPS = [
  {
    group: "Pre-Primary",
    groupHi: "प्री-प्राइमरी",
    options: [
      { label: "Pre-Nursery", labelHi: "प्री-नर्सरी", value: "pre-nursery" },
      { label: "Nursery", labelHi: "नर्सरी", value: "nursery" },
      { label: "LKG", labelHi: "एलकेजी", value: "lkg" },
      { label: "UKG", labelHi: "यूकेजी", value: "ukg" },
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
  "w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-brand-navy font-medium shadow-sm";

const IconWrap = ({ children }) => (
  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
const Contact = () => {
  const { language } = useLanguage();
  const { form, handleChange, setField, submit, status, reset } =
    useFormSubmit();

  const isHindi = language !== "english";

  return (
    <div className="min-h-screen bg-brand-cream pb-24">
      {/* ── Hero ── */}
      <PageHero title={<>{isHindi ? "हमसे संपर्क करें" : "Contact Us"}</>} sub={<>{isHindi
        ? "हम आपसे सुनना पसंद करेंगे। किसी भी प्रश्न के लिए हमसे संपर्क करें।"
        : "We would love to hear from you. Reach out to us for any queries."}</>} overlap />

      {/* ── Overlapping card ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100"
        >
          <div className="grid lg:grid-cols-5 gap-16">
            {/* ── FORM (left, 3 cols) ── */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-8">
                {isHindi
                  ? "आवेदन / संदेश भेजें"
                  : "Send an Application / Message"}
              </h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {isHindi ? "आवेदन जमा हो गया!" : "Application Submitted!"}
                  </h3>
                  <p className="text-brand-navy/60">
                    {isHindi
                      ? "हम जल्द आपसे संपर्क करेंगे।"
                      : "We'll contact you soon. Check your email for confirmation."}
                  </p>
                  <button
                    onClick={reset}
                    className="mt-2 text-sm font-semibold text-brand-gold underline underline-offset-4"
                  >
                    {isHindi ? "दूसरा आवेदन करें" : "Submit another"}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-6">
                  {/* Student + Parent */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
                        {isHindi ? "छात्र का नाम" : "Student Name"}
                      </label>
                      <div className="relative">
                        <IconWrap><User className="h-5 w-5" /></IconWrap>
                        <input
                          type="text"
                          name="studentName"
                          value={form.studentName}
                          onChange={handleChange}
                          required
                          placeholder={isHindi ? "छात्र का नाम" : "Student Name"}
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
                        {isHindi ? "अभिभावक का नाम" : "Parent Name"}
                      </label>
                      <div className="relative">
                        <IconWrap><Users className="h-5 w-5" /></IconWrap>
                        <input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleChange}
                          required
                          placeholder={isHindi ? "अभिभावक का नाम" : "Parent Name"}
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
                        {isHindi ? "ईमेल पता" : "Email Address"}
                      </label>
                      <div className="relative">
                        <IconWrap><Mail className="h-5 w-5" /></IconWrap>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="dps@gmail.com"
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
                        {isHindi ? "फ़ोन नंबर" : "Phone Number"}
                      </label>
                      <div className="relative">
                        <IconWrap><Phone className="h-5 w-5" /></IconWrap>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 9471496300"
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Class */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 ml-1">
                      {isHindi ? "कक्षा चुनें" : "Select Class"}
                    </label>
                    <div className="relative">
                      <IconWrap><GraduationCap className="h-5 w-5" /></IconWrap>
                      <select
                        name="class"
                        value={form.class}
                        onChange={handleChange}
                        required
                        className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                      >
                        <option value="">
                          {isHindi ? "कक्षा चुनें" : "Select Class"}
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
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">
                      {isHindi
                        ? "सबमिट नहीं हुआ, पुनः प्रयास करें।"
                        : "Submission failed. Please try again."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 group mt-6 disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {isHindi ? "जमा हो रहा है…" : "Submitting…"}
                      </>
                    ) : (
                      <>
                        <span>
                          {isHindi ? "आवेदन जमा करें" : "Submit Application"}
                        </span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Contact info + map (right, 2 cols) ── */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-8">
                  {isHindi ? "संपर्क जानकारी" : "Contact Information"}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-navy mb-1">
                        {isHindi ? "पता" : "Address"}
                      </h4>
                      <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed">
                        {isHindi
                          ? "पुरानी बायपास रोड, नया टोला, बख्तियारपुर (पटना)"
                          : "Old Bypass Road, Bakhtiyarpur, Patna - 803212"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-navy mb-1">
                        {isHindi ? "फ़ोन" : "Phone"}
                      </h4>
                      <p className="text-brand-navy/70 text-base md:text-lg">
                        +91 9471496300
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-navy mb-1">
                        {isHindi ? "ईमेल" : "Email"}
                      </h4>
                      <p className="text-brand-navy/70 text-base md:text-lg">
                        Dpsbakhtiyarpur@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-72 rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=Purani+Bypass+Road+Bakhtiyarpur&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 flex-wrap">
                <span className="text-base font-bold text-brand-navy/70 uppercase tracking-wider">
                  {isHindi ? "फॉलो करें" : "Follow Us"}
                </span>
                <a
                  href="https://www.facebook.com/people/Dps-Bakhtiyarpur/61574535718887/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@dpsbakhtiyarpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/dpsbakhtiyarpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-pink-500 hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919471496300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
