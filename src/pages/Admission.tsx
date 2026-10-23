import PageHero from '../components/PageHero';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '../context/LanguageContext';

// const Admission = () => {
//   const { language } = useLanguage();

//   const steps = language === 'english' ? [
//     { title: 'Registration', desc: 'Fill out the registration form.' },
//     { title: 'Interaction', desc: 'Student & parent interaction.' },
//     { title: 'Documentation', desc: 'Submit required documents.' },
//     { title: 'Admission', desc: 'Complete fee & confirm seat.' },
//   ] : [
//     { title: 'पंजीकरण', desc: 'फॉर्म भरें।' },
//     { title: 'बातचीत', desc: 'छात्र व अभिभावक बातचीत।' },
//     { title: 'दस्तावेज़', desc: 'दस्तावेज़ जमा करें।' },
//     { title: 'प्रवेश', desc: 'शुल्क जमा करें।' },
//   ];

//   return (
//     <div className="pt-32">

//       {/* 🔶 Hero */}
//       <section className="section-padding bg-brand-gold text-center text-brand-navy">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           {language === 'english' ? 'Admissions Open' : 'प्रवेश खुले हैं'}
//         </h1>
//         <p className="text-lg md:text-xl text-brand-navy/70">
//           {language === 'english' ? 'Session 2026-27' : 'सत्र 2026-27'}
//         </p>
//       </section>

//       {/* 🔥 3 COLUMN SECTION */}
//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">

//           {/* 🟡 NOTICE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-brand-cream rounded-3xl p-8 shadow-lg border border-brand-gold/20 flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 text-center">
//                 {language === 'english' ? 'Admission Open' : 'प्रवेश खुले हैं'}
//               </h2>

//               <p className="text-base md:text-lg text-brand-navy/70 mb-4 text-center">
//                 {language === 'english' ? 'Session: 2026-2027' : 'सत्र: 2026-2027'}
//               </p>

//               <ul className="text-base md:text-lg text-brand-navy/80 space-y-3 mb-4">
//                 <li>• TC with UDISE Number</li>
//                 <li>• Birth Certificate</li>
//                 <li>• Aadhaar (Student + Parents)</li>
//                 <li>• Blood Group Certificate</li>
//               </ul>
//             </div>

//             <p className="text-lg md:text-xl font-bold text-center text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl shadow-sm">
//               {language === 'english'
//                 ? '⚠ Parents must accompany the child at the time of admission'
//                 : '⚠ प्रवेश के समय अभिभावकों का साथ होना अनिवार्य है'}
//             </p>
//           </motion.div>

//           {/* 🔵 PROCESS */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-3xl p-8 shadow-lg border flex flex-col"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
//               {language === 'english' ? 'Admission Process' : 'प्रक्रिया'}
//             </h2>

//             <div className="space-y-6">
//               {steps.map((step, i) => (
//                 <div key={i} className="flex gap-4 items-start">
//                   <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-base font-bold">
//                     {i + 1}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-base md:text-lg">{step.title}</h4>
//                     <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* 🟢 FORM */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-3xl p-8 shadow-lg border flex flex-col"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
//               {language === 'english' ? 'Apply Now' : 'आवेदन करें'}
//             </h2>

//             <form className="space-y-5">

//               <input
//                 className="w-full border p-3 rounded-lg text-base"
//                 placeholder={language === 'english' ? 'Student Name' : 'छात्र का नाम'}
//               />

//               <input
//                 className="w-full border p-3 rounded-lg text-base"
//                 placeholder={language === 'english' ? 'Parent Name' : 'अभिभावक का नाम'}
//               />

//               <input
//                 className="w-full border p-3 rounded-lg text-base"
//                 placeholder={language === 'english' ? 'Phone Number' : 'फ़ोन नंबर'}
//               />

//               {/* ✅ CLASS DROPDOWN */}
//               <select
//                 onFocus={(e) => e.target.size = 6}
//                 onBlur={(e) => e.target.size = 1}
//                 onChange={(e) => e.target.size = 1}
//                 className="w-full border p-3 rounded-lg text-base"
//               >
//                 <option>
//                   {language === 'english' ? 'Select Class' : 'कक्षा चुनें'}
//                 </option>

//                 <option>Pre-Nursery</option>
//                 <option>Nursery</option>
//                 <option>LKG</option>
//                 <option>UKG</option>

//                 <option>Class 1</option>
//                 <option>Class 2</option>
//                 <option>Class 3</option>
//                 <option>Class 4</option>
//                 <option>Class 5</option>
//                 <option>Class 6</option>
//                 <option>Class 7</option>
//                 <option>Class 8</option>
//                 <option>Class 9</option>
//                 <option>Class 10</option>
//               </select>

//               <button className="w-full bg-brand-navy text-white py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-brand-gold hover:text-brand-navy transition">
//                 {language === 'english' ? 'Submit' : 'जमा करें'}
//               </button>

//             </form>
//           </motion.div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Admission;



import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useFormSubmit } from "./useFormSubmit.js";

// ─── Shared class options ─────────────────────────────────────────────────────
const CLASS_OPTIONS_EN = [
  { group: "Pre-Primary", options: ["Pre-Nursery", "Nursery", "LKG", "UKG"] },
  {
    group: "Primary",
    options: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  },
  {
    group: "Middle & Secondary",
    options: [
      "Class 6",
      "Class 7",
      "Class 8",
      "Class 9",
      "Class 10",
    ],
  },
];

const CLASS_OPTIONS_HI = [
  {
    group: "प्री-प्राइमरी",
    options: ["प्री-नर्सरी", "नर्सरी", "एलकेजी", "यूकेजी"],
  },
  {
    group: "प्राइमरी",
    options: ["कक्षा 1", "कक्षा 2", "कक्षा 3", "कक्षा 4", "कक्षा 5"],
  },
  {
    group: "मिडिल व सेकेंडरी",
    options: [
      "कक्षा 6",
      "कक्षा 7",
      "कक्षा 8",
      "कक्षा 9",
      "कक्षा 10",
    ],
  },
];

// Maps display label → value sent to sheet
const CLASS_VALUES = {
  "Pre-Nursery": "pre-nursery",
  Nursery: "nursery",
  LKG: "lkg",
  UKG: "ukg",
  "Class 1": "1",
  "Class 2": "2",
  "Class 3": "3",
  "Class 4": "4",
  "Class 5": "5",
  "Class 6": "6",
  "Class 7": "7",
  "Class 8": "8",
  "Class 9": "9",
  "Class 10": "10",
  "प्री-नर्सरी": "pre-nursery",
  नर्सरी: "nursery",
  एलकेजी: "lkg",
  यूकेजी: "ukg",
  "कक्षा 1": "1",
  "कक्षा 2": "2",
  "कक्षा 3": "3",
  "कक्षा 4": "4",
  "कक्षा 5": "5",
  "कक्षा 6": "6",
  "कक्षा 7": "7",
  "कक्षा 8": "8",
  "कक्षा 9": "9",
  "कक्षा 10": "10",
};

// ─── Reusable styled input ────────────────────────────────────────────────────
const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">
      {label}
    </label>
    {children}
  </div>
);

const inputCls =
  "w-full border border-gray-200 bg-white px-4 py-3 rounded-xl text-base text-brand-navy font-medium focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all shadow-sm";

// ─── Success overlay ──────────────────────────────────────────────────────────
const SuccessBox = ({ language, onReset }) => (
  <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
      ✓
    </div>
    <h3 className="text-xl font-bold text-brand-navy">
      {language === "english" ? "Application Submitted!" : "आवेदन जमा हो गया!"}
    </h3>
    <p className="text-brand-navy/60 text-sm">
      {language === "english"
        ? "We'll contact you soon. Check your email for confirmation."
        : "हम जल्द आपसे संपर्क करेंगे। पुष्टि के लिए ईमेल देखें।"}
    </p>
    <button
      onClick={onReset}
      className="mt-2 text-sm font-semibold text-brand-gold underline underline-offset-4"
    >
      {language === "english" ? "Submit another" : "दूसरा आवेदन करें"}
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
const Admission = () => {
  const { language } = useLanguage();
  const { form, handleChange, setField, submit, status, reset } =
    useFormSubmit();

  const isHindi = language !== "english";
  const classGroups = isHindi ? CLASS_OPTIONS_HI : CLASS_OPTIONS_EN;

  const steps = isHindi
    ? [
        { title: "पंजीकरण", desc: "फॉर्म भरें।" },
        { title: "बातचीत", desc: "छात्र व अभिभावक बातचीत।" },
        { title: "दस्तावेज़", desc: "दस्तावेज़ जमा करें।" },
        { title: "प्रवेश", desc: "शुल्क जमा करें।" },
      ]
    : [
        { title: "Registration", desc: "Fill out the registration form." },
        { title: "Interaction", desc: "Student & parent interaction." },
        { title: "Documentation", desc: "Submit required documents." },
        { title: "Admission", desc: "Complete fee & confirm seat." },
      ];

  return (
    <div className="">
      {/* Hero */}
<PageHero title={<>{isHindi ? "प्रवेश खुले हैं" : "Admissions Open"}</>} sub={<>{isHindi ? "सत्र 2026-27" : "Session 2026-27"}</>} />

      {/* 3-column section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">

          {/* ── NOTICE ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-brand-cream rounded-3xl p-8 shadow-lg border border-brand-gold/20 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 text-center">
                {isHindi ? "प्रवेश खुले हैं" : "Admission Open"}
              </h2>
              <p className="text-base md:text-lg text-brand-navy/70 mb-4 text-center">
                {isHindi ? "सत्र: 2026-2027" : "Session: 2026-2027"}
              </p>
              <ul className="text-base md:text-lg text-brand-navy/80 space-y-3 mb-4">
                <li>• TC with UDISE Number</li>
                <li>• Birth Certificate</li>
                <li>• Aadhaar (Student + Parents)</li>
                <li>• Blood Group Certificate</li>
              </ul>
            </div>
            <p className="text-lg md:text-xl font-bold text-center text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-xl shadow-sm">
              {isHindi
                ? "⚠ प्रवेश के समय अभिभावकों का साथ होना अनिवार्य है"
                : "⚠ Parents must accompany the child at the time of admission"}
            </p>
          </motion.div>

          {/* ── PROCESS ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
              {isHindi ? "प्रक्रिया" : "Admission Process"}
            </h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-base font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-lg border flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              {isHindi ? "आवेदन करें" : "Apply Now"}
            </h2>

            {status === "success" ? (
              <SuccessBox language={language} onReset={reset} />
            ) : (
              <form onSubmit={submit} className="space-y-4 flex-1 flex flex-col">
                <Field label={isHindi ? "छात्र का नाम" : "Student Name"}>
                  <input
                    className={inputCls}
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    placeholder={isHindi ? "छात्र का नाम" : "Student Name"}
                    required
                  />
                </Field>

                <Field label={isHindi ? "अभिभावक का नाम" : "Parent Name"}>
                  <input
                    className={inputCls}
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder={isHindi ? "अभिभावक का नाम" : "Parent Name"}
                    required
                  />
                </Field>

                <Field label={isHindi ? "फ़ोन नंबर" : "Phone Number"}>
                  <input
                    className={inputCls}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9471496300"
                    required
                  />
                </Field>

                <Field label={isHindi ? "कक्षा चुनें" : "Select Class"}>
                  <select
                    className={inputCls}
                    name="class"
                    value={form.class}
                    onChange={(e) => {
                      const val = CLASS_VALUES[e.target.value] ?? e.target.value;
                      setField("class", val);
                    }}
                    required
                  >
                    <option value="">
                      {isHindi ? "कक्षा चुनें" : "Select Class"}
                    </option>
                    {classGroups.map((g) => (
                      <optgroup key={g.group} label={g.group}>
                        {g.options.map((o) => (
                          <option key={o} value={CLASS_VALUES[o] ?? o}>
                            {o}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Field>

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
                  className="mt-auto w-full bg-brand-navy text-white py-3 rounded-xl text-base md:text-lg font-semibold hover:bg-brand-gold hover:text-brand-navy transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      {isHindi ? "जमा हो रहा है…" : "Submitting…"}
                    </>
                  ) : isHindi ? (
                    "जमा करें"
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
