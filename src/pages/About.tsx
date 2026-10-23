import PageHero from '../components/PageHero';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, Award, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import director from '../assets/img23.jpeg';
import princi from '../assets/prin.png';
import his from '../assets/img9.jpeg';


const About = () => {
  const { language } = useLanguage();

  return (
    <div className="">
      {/* Hero Section */}
<PageHero title={<>{language === 'english' ? 'About DPS Bakhtiyarpur' : 'DPS बख्तियारपुर के बारे में (About Us)'}</>} sub={<>{language === 'english' 
              ? 'Nurturing excellence since 2025, we are committed to providing quality education that shapes the character and competence of every student.'
              : '2025 से उत्कृष्टता को निखारते हुए, हम गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध हैं जो प्रत्येक छात्र के चरित्र और क्षमता को आकार देती है।'}</>} />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="p-12 rounded-[2.5rem] bg-brand-cream border border-brand-gold/10 relative overflow-hidden group transition-all hover:border-brand-gold/30 hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-3xl font-display font-bold mb-6 text-brand-gold group-hover:scale-110 transition-transform origin-left">
              {language === 'english' ? 'Our Mission' : 'हमारा लक्ष्य (Our Mission)'}
            </h3>
            <p className="text-lg text-brand-navy/70 leading-relaxed group-hover:text-brand-navy transition-colors">
              {language === 'english'
                ? 'Enabling the young to become men and women of Competence, Character, Commitment, Compassion, and Conviction, who will bring about transformation in systems, mindsets, and ideologies upholding the values of the Indian Constitution.'
                : 'युवाओं को क्षमता, चरित्र, प्रतिबद्धता, करुणा और दृढ़ विश्वास वाले पुरुष और महिला बनने में सक्षम बनाना, जो भारतीय संविधान के मूल्यों को बनाए रखते हुए प्रणालियों, मानसिकता और विचारधाराओं में परिवर्तन लाएंगे।'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="p-12 rounded-[2.5rem] bg-brand-navy text-white relative overflow-hidden group transition-all hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <h3 className="text-3xl font-display font-bold mb-6 text-brand-gold group-hover:scale-110 transition-transform origin-left">
              {language === 'english' ? 'Our Vision' : 'हमारा दृष्टिकोण (Our Vision)'}
            </h3>
            <p className="text-lg text-white/70 leading-relaxed group-hover:text-white transition-colors">
              {language === 'english'
                ? 'Being inspired by excellence, we envision communities where justice, peace, harmony, compassion, freedom, patriotism, and care for the environment are the cornerstones of every individual\'s life.'
                : 'उत्कृष्टता से प्रेरित होकर, हम ऐसे समुदायों की कल्पना करते हैं जहाँ न्याय, शांति, सद्भाव, करुणा, स्वतंत्रता, देशभक्ति और पर्यावरण की देखभाल प्रत्येक व्यक्ति के जीवन के आधार स्तंभ हों।'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={his}
              alt="School History" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-8">
              {language === 'english' ? 'Our Rich History' : 'हमारा समृद्ध इतिहास (Our History)'}
            </h2>
            <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
              {language === 'english'
                ? 'DPS Bakhtiyarpur is a private school offering quality education from Pre-Nursery to Class 10. We focus on holistic development, combining academic excellence with strong values and character building'
                : 'DPS बख्तियारपुर एक निजी विद्यालय है, जो प्री-नर्सरी से कक्षा 10 तक गुणवत्तापूर्ण शिक्षा प्रदान करता है। हम शैक्षणिक उत्कृष्टता के साथ-साथ नैतिक मूल्यों और व्यक्तित्व विकास पर भी विशेष ध्यान देते हैं।'}
            </p>
            {/* <p className="text-lg text-brand-navy/70 mb-10 leading-relaxed">
              {language === 'english'
                ? 'The school operates under the guidance and supervision of the Jharkhand state government, offering education from classes 6 to 12. Currently, the school has a student population of 1,400 and employs 37 well-qualified and dedicated staff members.'
                : 'यह स्कूल झारखंड राज्य सरकार के मार्गदर्शन और पर्यवेक्षण में संचालित होता है, जो कक्षा 6 से 12 तक शिक्षा प्रदान करता है। वर्तमान में, स्कूल में 1,400 छात्र हैं और 37 योग्य और समर्पित कर्मचारी कार्यरत हैं।'}
            </p> */}
            <div className="space-y-4">
              {[
                language === 'english' ? 'Adequate facilities for quality education' : 'गुणवत्तापूर्ण शिक्षा के लिए पर्याप्त सुविधाएं',
                language === 'english' ? 'Modern teaching aids in all subjects' : 'सभी विषयों में आधुनिक शिक्षण सहायक सामग्री',
                language === 'english' ? 'Computerized systems for primary education' : 'प्राथमिक शिक्षा के लिए कंप्यूटरीकृत प्रणाली',
                language === 'english' ? 'Focus on play and learn system' : 'खेल और सीख प्रणाली पर ध्यान'
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-center group"
                >
                  <CheckCircle2 className="text-brand-gold group-hover:scale-125 transition-transform" />
                  <span className="text-brand-navy/70 font-medium group-hover:text-brand-navy transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

{/* ===== Messages Section ===== */}
<section className="py-20 px-6 bg-[#E0F2FE] relative overflow-hidden">

  {/* Dot pattern background */}
  <div
    className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
      backgroundSize: '36px 36px',
    }}
  />

  {/* Section heading */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="text-center mb-16 relative z-10"
  >
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="h-[3px] w-12 bg-[#C9A84C] mx-auto mb-5 rounded-full origin-left"
    />
    <h2 className="text-4xl md:text-5xl font-bold text-blue mb-2">
      {language === 'english' ? 'Words From Leadership' : 'नेतृत्व के शब्द'}
    </h2>
    <p className="text-blue/40 text-sm mt-2">
      {language === 'english' ? 'Guided by vision, driven by purpose.' : 'दृष्टि द्वारा निर्देशित, उद्देश्य द्वारा प्रेरित।'}
    </p>
  </motion.div>

  <div className="max-w-6xl mx-auto space-y-14 relative z-10">

    {/* ===== Director Message ===== */}
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid md:grid-cols-[260px_1fr] rounded-3xl overflow-hidden shadow-2xl">

        {/* Gold Photo Panel */}
        <div className="relative flex flex-col items-center justify-end p-8 min-h-[300px] overflow-hidden">
          {/* Animated gold gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'linear-gradient(135deg, #b8862e, #e8c96d, #C9A84C, #b8862e)',
              backgroundSize: '300% 300%',
            }}
          />
          {/* Glow pulse */}
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-white/10 blur-2xl"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {/* Photo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 130 }}
            whileHover={{ scale: 1.04 }}
            className="relative z-10 w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/40 shadow-xl mb-5"
          >
            <img src={director} alt="Director" className="w-full h-full object-cover" />
          </motion.div>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.55 }}
            className="relative z-10 text-center"
          >
            <p className="font-bold text-[#0D2346] text-[17px] leading-tight">
              {language === 'english' ? 'Nishant Kumar Pankaj' : 'निशांत कुमार पंकज'}
            </p>
            <p className="text-[#0D2346]/65 text-[13px] font-semibold mt-1 uppercase tracking-wide">
              {language === 'english' ? 'Director' : 'डायरेक्टर'}
            </p>
          </motion.div>
        </div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative quote icon */}
          <svg className="absolute top-5 right-7 text-[#C9A84C]/12 w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-[3px] w-10 bg-[#C9A84C] mb-4 rounded-full origin-left"
          />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-[#0D2346] mb-5"
          >
            {language === 'english' ? "Director's Message" : 'डायरेक्टर का संदेश'}
          </motion.h3>

          {[
           language === 'english'
  ? 'We at Dehli Public School, Bakhtiyarpur aim to provide a liberal, happy and diverse environment for students that nurtures creativity and instills values like empathy, integrity, patriotism and honesty.'
  : 'देहली पब्लिक स्कूल, बख्तियारपुर में हमारा उद्देश्य छात्रों के लिए एक उदार, खुशहाल और विविध वातावरण प्रदान करना है, जो रचनात्मकता को बढ़ावा देता है और सहानुभूति, ईमानदारी, देशभक्ति तथा नैतिक मूल्यों को विकसित करता है।',
            language === 'english'
              ? 'We help students realize their true potential and evolve as global leaders with strong character.'
              : 'हम छात्रों को उनकी वास्तविक क्षमता पहचानने और मजबूत चरित्र वाले वैश्विक नेता बनने के लिए प्रेरित करते हैं।',
            language === 'english'
              ? 'It is our endeavour to provide a platform to hone academic and co-curricular skills and encourage curiosity.'
              : 'हम छात्रों को शैक्षणिक और सह-पाठ्यक्रम गतिविधियों में आगे बढ़ने का अवसर प्रदान करते हैं।',
            language === 'english'
              ? 'We aim to empower our students to become responsible global citizens who contribute to a peaceful and progressive world.'
              : 'हमारा लक्ष्य छात्रों को जिम्मेदार वैश्विक नागरिक बनाना है।',
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] mb-3"
            >
              {para}
            </motion.p>
          ))}

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.85 }}
            className="text-right mt-5 font-semibold text-[#0D2346]"
          >
            — {language === 'english' ? 'Nishant Kumar Pankaj' : 'निशांत कुमार पंकज'}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>


    {/* ===== Principal Message ===== */}
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid md:grid-cols-[1fr_260px] rounded-3xl overflow-hidden shadow-2xl">

        {/* Content Panel (left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-8 md:p-10 relative overflow-hidden order-2 md:order-1"
        >
          {/* Flipped decorative quote */}
          <svg className="absolute top-5 left-7 text-[#C9A84C]/12 w-20 h-20 scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-[3px] w-10 bg-[#C9A84C] mb-4 rounded-full origin-left"
          />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-[#0D2346] mb-5"
          >
            {language === 'english' ? "Principal's Message" : 'प्राचार्य का संदेश'}
          </motion.h3>

          {[
            language === 'english'
              ? 'Education is the most powerful weapon which you can use to change the world.'
              : 'शिक्षा सबसे शक्तिशाली हथियार है जिसका उपयोग आप दुनिया को बदलने के लिए कर सकते हैं।',
            language === 'english'
              ? 'At our school, we strive to empower students with knowledge, skills and values that prepare them for future challenges.'
              : 'हम अपने छात्रों को ज्ञान, कौशल और मूल्यों से सशक्त बनाने का प्रयास करते हैं।',
            language === 'english'
              ? 'We focus on holistic development ensuring academic excellence along with character building.'
              : 'हम समग्र विकास पर ध्यान देते हैं जिसमें शिक्षा और चरित्र निर्माण दोनों शामिल हैं।',
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] mb-3"
            >
              {para}
            </motion.p>
          ))}

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.75 }}
            className="text-right mt-5 font-semibold text-[#0D2346]"
          >
            — {language === 'english' ? 'Dr. Vivek Vardhan' : 'डॉ. विवेक वर्धन'}
          </motion.div>
        </motion.div>

        {/* Dark Navy Photo Panel (right) */}
        <div className="relative flex flex-col items-center justify-end p-8 min-h-[300px] overflow-hidden order-1 md:order-2">
          {/* Animated navy gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'linear-gradient(135deg, #0D2346, #1B3A6B, #0f2d5a, #0D2346)',
              backgroundSize: '300% 300%',
            }}
          />
          {/* Glow pulse */}
          <motion.div
            className="absolute w-52 h-52 rounded-full bg-[#C9A84C]/10 blur-3xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          {/* Photo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 130 }}
            whileHover={{ scale: 1.04 }}
            className="relative z-10 w-40 h-40 rounded-2xl overflow-hidden border-4 border-[#C9A84C]/40 shadow-xl mb-5"
          >
            <img src={princi} alt="Principal" className="w-full h-full object-cover" />
          </motion.div>
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.55 }}
            className="relative z-10 text-center"
          >
            <p className="font-bold text-white text-[17px] leading-tight">
              {language === 'english' ? 'Dr. Vivek Vardhan' : 'डॉ. विवेक वर्धन'}
            </p>
            <p className="text-[#C9A84C] text-[13px] font-semibold mt-1 uppercase tracking-wide">
              {language === 'english' ? 'Principal' : 'प्राचार्य'}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>

  </div>
</section>
    </div>
  );
};

export default About;
