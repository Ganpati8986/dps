// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '../context/LanguageContext';

// const RTEBanner = () => {
//   const { language } = useLanguage();

//   const tags = language === 'english'
//     ? ['EWS Category', 'RTE Act 25% Quota', 'Pre-Nursery to Class 8']
//     : ['EWS श्रेणी', 'RTE अधिनियम 25% कोटा', 'प्री-नर्सरी से कक्षा 8'];

//   return (
//     <section className="relative py-16 overflow-hidden bg-gradient-to-r from-[#f5f7fa] via-[#eef2f7] to-[#e4ecf7]">

//       {/* Soft Background Blur */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-[120px] rounded-full"></div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">

//         {/* MAIN CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12"
//         >

//           <div className="grid md:grid-cols-2 gap-10 items-center">

//             {/* LEFT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//             >

//               {/* Badge */}
//               <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-blue-100 text-blue-900 border border-blue-900">
//                 {language === 'english'
//                   ? 'FREE RTE ADMISSION 2026-27'
//                   : 'निःशुल्क RTE प्रवेश 2026-27'}
//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
//                 {language === 'english' ? (
//                   <>
//                     Free Education for Your Child at{' '}
//                     <span className="text-blue-900">Dehli Public School</span>
//                   </>
//                 ) : (
//                   <>
//                     अपने बच्चे के लिए{' '}
//                     <span className="text-blue-600">देहली पब्लिक स्कूल</span>{' '}
//                     में निःशुल्क शिक्षा
//                   </>
//                 )}
//               </h2>

//               {/* Description */}
//               <p className="text-gray-600 text-base leading-relaxed mb-6">
//                 {language === 'english'
//                   ? 'Under the Right to Education (RTE) Act, we provide free admission to children from economically weaker sections. Limited seats are available. Give your child a safe, supportive, and high-quality education environment.'
//                   : 'शिक्षा के अधिकार (RTE) अधिनियम के तहत आर्थिक रूप से कमजोर वर्ग के बच्चों को निःशुल्क प्रवेश दिया जाता है। सीमित सीटें उपलब्ध हैं। अपने बच्चे को सुरक्षित और गुणवत्तापूर्ण शिक्षा दिलाएं।'}
//               </p>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-3">
//                 {tags.map((tag, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="px-3 py-1.5 text-xs rounded-lg bg-yellow-100 font-bold text-black border border-blue-900"
//                   >
//                     {tag}
//                   </motion.span>
//                 ))}
//               </div>

//             </motion.div>

//             {/* RIGHT CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.7 }}
//               className="flex flex-col items-center justify-center text-center"
//             >

//               {/* Seats Card */}
//               <div className="bg-blue-50 border border-blue-900 rounded-2xl px-8 py-6 shadow-md">
//                 <h3 className="text-4xl font-bold text-blue-900">
//                   {language === 'english' ? 'Limited' : 'सीमित'}
//                 </h3>
//                 <p className="text-blue-900 text-sm font-semibold tracking-widest uppercase">
//                   {language === 'english'
//                     ? 'Seats Available'
//                     : 'सीटें उपलब्ध'}
//                 </p>
//               </div>

//               {/* Note */}
//               <p className="text-yellow-600 font-bold text-sm mt-5">
//                 {language === 'english'
//                   ? 'Visit school office for admission details'
//                   : 'प्रवेश जानकारी के लिए स्कूल कार्यालय जाएं'}
//               </p>

//             </motion.div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default RTEBanner;


import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import rte1 from '../assets/rte1.jpeg';
import rte2 from '../assets/rte2.jpeg';
import rte3 from '../assets/rte3.jpeg';
import rte4 from '../assets/rte4.jpeg';

const RTEBanner = () => {
  const { language } = useLanguage();

  const tags =
    language === 'english'
      ? ['EWS Category', 'RTE Act 25% Quota', 'Pre-Nursery to Class 8']
      : ['EWS श्रेणी', 'RTE अधिनियम 25% कोटा', 'प्री-नर्सरी से कक्षा 8'];

  // 👇 Students with Names
  const students = [
    { img: rte1, name: "Sarika Kumari" },
    { img: rte2, name: "Radhika kumari" },
    { img: rte3, name: "Naitil raj" },
    { img: rte4, name: "Shivam Kumar" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-[#f5f7fa] via-[#eef2f7] to-[#e4ecf7]">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-12"
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >

              <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-blue-100 text-blue-900 border border-blue-900">
                {language === 'english'
                  ? 'FREE RTE ADMISSION 2026-27'
                  : 'निःशुल्क RTE प्रवेश 2026-27'}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                {language === 'english' ? (
                  <>
                    Free Education for Your Child at{' '}
                    <span className="text-blue-900">Dehli Public School</span>
                  </>
                ) : (
                  <>
                    अपने बच्चे के लिए{' '}
                    <span className="text-blue-600">देहली पब्लिक स्कूल</span>{' '}
                    में निःशुल्क शिक्षा
                  </>
                )}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {language === 'english'
                  ? 'Under the Right to Education (RTE) Act, we provide free admission to children from economically weaker sections.'
                  : 'शिक्षा के अधिकार (RTE) अधिनियम के तहत आर्थिक रूप से कमजोर वर्ग के बच्चों को निःशुल्क प्रवेश दिया जाता है।'}
              </p>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1.5 text-xs rounded-lg bg-yellow-100 font-bold text-black border border-blue-900"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full"
            >

              {/* Student Grid with Names */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">

                {students.map((student, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl shadow-md p-2 text-center hover:shadow-lg transition"
                  >
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-20 sm:h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">
                      {student.name}
                    </p>
                  </motion.div>
                ))}

              </div>

              {/* Seats Card */}
              <div className="bg-blue-50 border border-blue-900 rounded-2xl px-6 py-5 shadow-md text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-900">
                  {language === 'english' ? 'Limited' : 'सीमित'}
                </h3>
                <p className="text-blue-900 text-xs sm:text-sm font-semibold uppercase">
                  {language === 'english'
                    ? 'Seats Available'
                    : 'सीटें उपलब्ध'}
                </p>
              </div>

              {/* Note */}
              <p className="text-yellow-600 font-bold text-xs sm:text-sm mt-4 text-center">
                {language === 'english'
                  ? 'Visit school office for admission details'
                  : 'प्रवेश जानकारी के लिए स्कूल कार्यालय जाएं'}
              </p>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RTEBanner;