
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, Award, Users,
  GraduationCap, BookOpen, Quote,
  Trophy, Star, Medal, Target, ShieldCheck, Zap, Heart, Bus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';
import RTEBanner from '../components/RTEBanner';
import img1 from '../assets/img29.jpeg';
import img2 from '../assets/crosal.jpeg';
import img3 from '../assets/img20.jpeg';
import since from '../assets/img11.jpeg';
import director from '../assets/img24.jpeg';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';



const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        setCount(Math.floor(progress * numericValue));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    } else {
      setCount(0);
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};



const Stats = () => {
  const { language } = useLanguage();
  const stats = [
    { label: language === 'english' ? 'Years of Legacy'   : 'सालों की विरासत', value: '2+',    icon: Award },
    { label: language === 'english' ? 'Enrolled Students' : 'छात्र',            value: '500+', icon: Users },
    { label: language === 'english' ? 'Expert Faculty'    : 'अनुभवी शिक्षक',   value: '20+',   icon: GraduationCap },
    { label: language === 'english' ? 'Success Rate'      : 'सफलता दर',         value: '100%',  icon: BookOpen },
  ];

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ background: '#F5F0E8' }}
    >
      {/* Decorative concentric rings */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="240" cy="40" r="80"  stroke="#C5A572" strokeWidth="0.8"/>
          <circle cx="240" cy="40" r="130" stroke="#C5A572" strokeWidth="0.5"/>
          <circle cx="240" cy="40" r="180" stroke="#C5A572" strokeWidth="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="40" cy="160" r="70"  stroke="#C5A572" strokeWidth="0.8"/>
          <circle cx="40" cy="160" r="110" stroke="#C5A572" strokeWidth="0.4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-brand-gold text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase block mb-2">
            {language === 'english' ? 'By the numbers' : 'संख्याओं में'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-navy">
            {language === 'english' ? 'DPS Bakhtiyarpur at a Glance' : 'DPS बख्तियारपुर एक नज़र में'}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-1 bg-brand-gold mx-auto mt-4 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-brand-gold/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-1">
                <Counter value={s.value} />
              </h3>
              <p className="text-brand-navy/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const CorePillars = () => {
  const { language } = useLanguage();
  const pillars = [
    { title: language === 'english' ? 'Academic Excellence' : 'शैक्षणिक उत्कृष्टता', desc: language === 'english' ? 'Rigorous curriculum from Pre Nursery to 10th with modern teaching aids.' : 'आधुनिक शिक्षण सहायक सामग्री के साथ कक्षा प्री-नर्सरी से कक्षा 10 तक का कठोर पाठ्यक्रम।', icon: BookOpen, link: '/academics', color: 'bg-blue-50 text-blue-600' },
    { title: language === 'english' ? 'Expert Faculty'       : 'अनुभवी शिक्षक',         desc: language === 'english' ? '20+ well-qualified and dedicated staff members committed to student growth.' : 'छात्रों के विकास के लिए प्रतिबद्ध 20 योग्य और समर्पित कर्मचारी।', icon: Users, link: '/about', color: 'bg-brand-gold/10 text-brand-gold' },
    { title: language === 'english' ? 'Sports & Fitness'     : 'खेल और फिटनेस',          desc: language === 'english' ? 'Ample space and facilities for physical activities and holistic development.' : 'शारीरिक गतिविधियों और सर्वांगीण विकास के लिए पर्याप्त जगह और सुविधाएं।', icon: Trophy, link: '/facilities', color: 'bg-emerald-50 text-emerald-600' },
    { title: language === 'english' ? 'Modern Amenities'     : 'आधुनिक सुविधाएं',        desc: language === 'english' ? 'Advanced science labs, computer centers, and a rich library resource.' : 'उन्नत विज्ञान प्रयोगशालाएं, कंप्यूटर केंद्र और एक समृद्ध पुस्तकालय संसाधन।', icon: Zap, link: '/facilities', color: 'bg-purple-50 text-purple-600' },
  ];
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-[2rem] bg-gray-50 border border-transparent hover:border-brand-gold/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 ${p.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <p.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-xs sm:text-base lg:text-xl font-display font-bold text-brand-navy mb-1.5 sm:mb-2 lg:mb-4 group-hover:text-brand-gold transition-colors leading-tight">{p.title}</h3>
              <p className="text-brand-navy/60 text-[10px] sm:text-xs lg:text-sm leading-relaxed mb-3 lg:mb-6 hidden sm:block">{p.desc}</p>
              <Link to={p.link} className="text-brand-gold font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1 sm:gap-2 group-hover:gap-3 transition-all">
                {language === 'english' ? 'Explore' : 'एक्सप्लोर'} <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Achievements = () => {
  const { language } = useLanguage();
  const achievements = language === 'english' ? [
    { title: 'National Excellence Award',  desc: 'Recognized as one of the top performing schools in the region for academic excellence and innovation.', icon: Award,        color: 'text-blue-600',   bg: 'bg-blue-50'   },
    { title: '100% Board Results',          desc: 'Consistently achieving perfect pass rates in CBSE Board Examinations for over a decade.',               icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'State Sports Champions',      desc: 'Our students secured the first position in the Inter-School State Athletics Championship 2025.',         icon: Trophy,        color: 'text-amber-600',  bg: 'bg-amber-50'  },
    { title: 'Innovation in Pedagogy',      desc: 'Awarded for implementing cutting-edge digital learning methodologies in primary education.',             icon: Target,        color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Best Infrastructure',         desc: 'Voted as the school with the most student-friendly and modern campus facilities in the district.',       icon: Star,          color: 'text-rose-600',   bg: 'bg-rose-50'   },
    { title: 'Community Impact',            desc: 'Honored for our extensive social service programs and environmental sustainability initiatives.',         icon: Medal,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ] : [
    { title: 'नेशनल एक्सीलेंस अवार्ड',  desc: 'अकादमिक श्रेष्ठता और इनोवेशन के लिए क्षेत्र के टॉप परफॉर्मिंग स्कूलों में से एक के रूप में मान्यता प्राप्त।', icon: Award,        color: 'text-blue-600',   bg: 'bg-blue-50'   },
    { title: '100% बोर्ड रिजल्ट',         desc: 'एक दशक से अधिक समय से CBSE बोर्ड परीक्षाओं में लगातार परफेक्ट पास रेट हासिल कर रहे हैं।',                    icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'स्टेट स्पोर्ट्स चैंपियंस', desc: 'हमारे छात्रों ने इंटर-स्कूल स्टेट एथलेटिक्स चैंपियनशिप 2025 में प्रथम स्थान प्राप्त किया।',                icon: Trophy,        color: 'text-amber-600',  bg: 'bg-amber-50'  },
    { title: 'इनोवेशन इन पेडागोजी',      desc: 'प्राथमिक शिक्षा में अत्याधुनिक डिजिटल लर्निंग मेथोडोलॉजी लागू करने के लिए सम्मानित।',                      icon: Target,        color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'बेस्ट इंफ्रास्ट्रक्चर',   desc: 'जिले में सबसे अधिक छात्र-अनुकूल और आधुनिक कैंपस सुविधाओं वाले स्कूल के रूप में चुना गया।',                  icon: Star,          color: 'text-rose-600',   bg: 'bg-rose-50'   },
    { title: 'कम्युनिटी इम्पैक्ट',       desc: 'हमारे व्यापक सामाजिक सेवा कार्यक्रमों और पर्यावरणीय स्थिरता पहल के लिए सम्मानित।',                        icon: Medal,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-brand-gold text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase mb-2 sm:mb-4 block">
            {language === 'english' ? 'Our Milestones' : 'हमारी उपलब्धियां'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-navy">
            {language === 'english' ? 'Proud Achievements' : 'गर्व की उपलब्धियां'}
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1.5 bg-brand-gold mx-auto mt-4 sm:mt-6 rounded-full" />
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-default"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ${a.bg} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 lg:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <a.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${a.color}`} />
              </motion.div>
              <h3 className="text-xs sm:text-base lg:text-2xl font-display font-bold text-brand-navy mb-1.5 sm:mb-2 lg:mb-4 group-hover:text-brand-gold transition-colors duration-300 leading-tight">{a.title}</h3>
              <p className="text-brand-navy/60 text-[10px] sm:text-xs lg:text-base leading-relaxed hidden sm:block">{a.desc}</p>
              <p className="text-brand-navy/60 text-[10px] leading-relaxed sm:hidden line-clamp-3">{a.desc}</p>
              <div className="mt-3 sm:mt-5 lg:mt-6 pt-3 sm:pt-5 lg:pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5 text-brand-gold font-bold text-[10px] sm:text-sm">
                  <span>{language === 'english' ? 'Learn More' : 'अधिक जानें'}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const { language } = useLanguage();
const testimonials = language === 'english' ? [
  { 
    quote: 'DPS Bakhtiyarpur has provided my child with opportunities I never imagined. The faculty is highly supportive and the environment is excellent for overall growth', 
    name: 'Babita Kumari', role: 'Parent', image: p1 
  }, 
  { 
    quote: 'I am very satisfied with the quality of education and discipline maintained in the school. My child is improving every day', 
    name: 'Nishant Kumar Singh', role: 'Parent', image: p3 
  },
  { 
    quote: 'The school focuses not only on studies but also on overall personality development. I highly recommend DPS Bakhtiyarpur', 
    name: 'Suresh Prasad Singh', role: 'Parent', image: p2 
  },
  { 
    quote: 'Choosing DPS Bakhtiyarpur was the best decision for my daughter. The balanced focus on academics and extracurricular activities is truly impressive.', 
    name: 'JYOTI KUMARI', role: 'Parent', image: p4 
  },
  { 
    quote: 'The school provides a safe and motivating environment for children. Teachers pay personal attention which really helps in building confidence.', 
    name: 'Shabina Praveen', role: 'Parent', image: p5 
  },
  { 
    quote: 'We are satisfied with the school’s teaching and management. Our child is happy, disciplined, and showing good progress in studies and behaviour. Thank you for your support.', 
    name: 'Dr Rakesh Kumar', role: 'Parent', image: p8 
  },
  { 
    quote: 'The teaching methods are very effective and engaging. We are satisfied with the school’s management and facilities. Thank you to the school for nurturing our child so well.', 
    name: 'Riyaz Ahmad', role: 'Parent', image: p7 
  },
  { 
    quote: 'DPS Bakhtiyarpur encourages creativity and participation in activities. My child has become more confident and active after joining the school.', 
    name: 'Gautam Kumar', role: 'Parent', image: p6 
  },
] : [
  { 
    quote: 'DPS बख्तियारपुर ने मेरे बच्चे को ऐसे अवसर दिए हैं जिनकी मैंने कल्पना भी नहीं की थी। यहाँ के शिक्षक बहुत सहयोगी हैं और वातावरण सर्वांगीण विकास के लिए उत्कृष्ट है।', 
    name: 'बबीता कुमारी', role: 'अभिभावक', image: p1 
  },
  { 
    quote: 'मैं स्कूल की शिक्षा की गुणवत्ता और अनुशासन से बहुत संतुष्ट हूँ। मेरा बच्चा हर दिन बेहतर हो रहा है।', 
    name: 'निशांत कुमार सिंह', role: 'अभिभावक', image: p3 
  },
  { 
    quote: 'यह विद्यालय पढ़ाई के साथ-साथ बच्चों के समग्र व्यक्तित्व विकास पर भी ध्यान देता है। मैं DPS बख्तियारपुर की सिफारिश करता हूँ।', 
    name: 'सुरेश प्रसाद सिंह', role: 'अभिभावक', image: p2 
  },
  { 
    quote: 'मेरी बेटी के लिए DPS बख्तियारपुर का चयन करना हमारा सबसे अच्छा निर्णय था। यहाँ पढ़ाई और सह-पाठ्यक्रम गतिविधियों के बीच संतुलन वास्तव में प्रशंसनीय है।', 
    name: 'ज्योति कुमारी', role: 'अभिभावक', image: p4 
  },
  { 
    quote: 'यह स्कूल बच्चों के लिए सुरक्षित और प्रेरणादायक वातावरण प्रदान करता है। शिक्षक व्यक्तिगत ध्यान देते हैं जिससे बच्चों का आत्मविश्वास बढ़ता है।', 
    name: 'शबीना परवीन', role: 'अभिभावक', image: p5 
  },
  { 
    quote: 'हम विद्यालय की शिक्षण पद्धति और प्रबंधन से बहुत संतुष्ट हैं। हमारा बच्चा खुश है, अनुशासित है और पढ़ाई तथा व्यवहार में निरंतर प्रगति कर रहा है। आपके सहयोग के लिए धन्यवाद।', 
    name: 'डॉ. राकेश कुमार', role: 'अभिभावक', image: p8 
  },
  { 
    quote: 'यहाँ की शिक्षण विधियाँ बहुत प्रभावी और रोचक हैं। हम विद्यालय के प्रबंधन और सुविधाओं से संतुष्ट हैं। हमारे बच्चे को इतनी अच्छी परवरिश देने के लिए विद्यालय का धन्यवाद।', 
    name: 'रियाज़ अहमद', role: 'अभिभावक', image: p7 
  },
  { 
    quote: 'DPS बख्तियारपुर बच्चों को रचनात्मकता और गतिविधियों में भाग लेने के लिए प्रोत्साहित करता है। मेरे बच्चे में आत्मविश्वास और सक्रियता बढ़ी है।', 
    name: 'गौतम कुमार', role: 'अभिभावक', image: p6 
  },
];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase mb-2 block">
            {language === 'english' ? 'Voices of Excellence' : 'श्रेष्ठता की आवाज़ें'}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
            {language === 'english' ? 'Testimonials' : 'अनुभव'}
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[200px] sm:min-h-[250px]">
            <div className="hidden lg:block w-1/4 opacity-20 scale-75 blur-[1px]">
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                <p className="text-xs text-white/60 line-clamp-3 italic">"{testimonials[prev].quote}"</p>
              </div>
            </div>
            <div className="w-full lg:w-2/4">
              <AnimatePresence mode="wait">
                <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} className="text-center">
                  <div className="mb-5 relative inline-block px-3 sm:px-4">
                    <Quote className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-gold/20 absolute -top-2 -left-1" />
                    <p className="text-sm sm:text-base lg:text-xl text-white/90 font-medium leading-relaxed italic">"{testimonials[index].quote}"</p>
                    <Quote className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-gold/20 absolute -bottom-2 -right-1 rotate-180" />
                  </div>
                  <div className="mt-5 sm:mt-8 flex flex-col items-center">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 mb-2 sm:mb-3 shadow-xl">
                      <img src={testimonials[index].image} alt={testimonials[index].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-display font-bold text-white mb-0.5">{testimonials[index].name}</h4>
                    <p className="text-brand-gold text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">{testimonials[index].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="hidden lg:block w-1/4 opacity-20 scale-75 blur-[1px]">
              <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                <p className="text-xs text-white/60 line-clamp-3 italic">"{testimonials[next].quote}"</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-5 sm:mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-5 sm:w-6 bg-brand-gold' : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const Home = () => {
  const { language } = useLanguage();

  return (
    <>
      <Hero />
      <CorePillars />

      <RTEBanner />

      <Stats />

      {/* About */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-[1fr_2fr] lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1 flex justify-center"
          >
            <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-28 sm:w-40 md:w-64 lg:w-96">
              <img src={since} alt="Students Learning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 lg:-bottom-10 -right-4 sm:-right-8 lg:-right-10 w-16 sm:w-32 lg:w-64 h-16 sm:h-32 lg:h-64 bg-brand-gold rounded-2xl sm:rounded-3xl -z-10 hidden sm:block" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-left lg:text-left"
          >
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-navy mb-2 sm:mb-6 leading-tight">
              {language === 'english' ? 'Nurturing Excellence' : 'श्रेष्ठता को निखारना'} <br />
              <span className="text-brand-gold text-sm sm:text-xl md:text-3xl lg:text-4xl">
                {language === 'english' ? 'Since 2025' : '2025 से'}
              </span>
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-brand-navy/70 mb-4 sm:mb-8 leading-relaxed">
              {language === 'english'
                ? 'DPS Bakhtiyarpur is a private school offering quality education from I to Class VIII. We focus on holistic development, combining academic excellence with strong values and character building.'
                : 'DPS बख्तियारपुर एक निजी विद्यालय है, जो प्री-नर्सरी से कक्षा 10 तक गुणवत्तापूर्ण शिक्षा प्रदान करता है। हम शैक्षणिक उत्कृष्टता के साथ-साथ नैतिक मूल्यों और व्यक्तित्व विकास पर भी विशेष ध्यान देते हैं।'}
            </p>
            <Link to="/about" className="bg-brand-navy text-white px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl inline-block text-xs sm:text-sm lg:text-base">
              {language === 'english' ? 'Learn More About Us' : 'हमारे बारे में और जानें'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-gold/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase mb-2 sm:mb-4 block">
              {language === 'english' ? 'The DPS Advantage' : 'DPS का लाभ'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-6">
              {language === 'english' ? 'Why Choose DPS Bakhtiyarpur?' : 'DPS बख्तियारपुर क्यों चुनें?'}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
              {language === 'english'
                ? 'We combine traditional values with modern education to prepare students for global challenges.'
                : 'हम वैश्विक चुनौतियों के लिए छात्रों को तैयार करने के लिए आधुनिक शिक्षा के साथ पारंपरिक मूल्यों को जोड़ते हैं।'}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
            {[
              { title: language === 'english' ? 'Academic Excellence'  : 'शैक्षणिक उत्कृष्टता', desc: language === 'english' ? 'Consistently achieving top results in board examinations and competitive tests.'                    : 'बोर्ड परीक्षाओं और प्रतियोगी परीक्षाओं में लगातार शीर्ष परिणाम।',                icon: Award      },
              { title: language === 'english' ? 'Holistic Growth'       : 'सर्वांगीण विकास',        desc: language === 'english' ? 'Equal emphasis on sports, performing arts, and creative expression alongside studies.'           : 'पढ़ाई के साथ-साथ खेल, प्रदर्शन कला और रचनात्मक अभिव्यक्ति पर समान जोर।',       icon: Star       },
              { title: language === 'english' ? 'Safe & Secure'         : 'सुरक्षित वातावरण',       desc: language === 'english' ? 'A gated campus with 24/7 CCTV surveillance and a dedicated security team.'                     : '24/7 सीसीटीवी निगरानी और एक समर्पित सुरक्षा टीम के साथ सुरक्षित कैंपस।',       icon: ShieldCheck },
              { title: language === 'english' ? 'Transport Facility'    : 'परिवहन सुविधा',           desc: language === 'english' ? 'Well-maintained school buses ensuring safe and timely transportation.'                         : 'सुरक्षित और समय पर परिवहन के लिए सुव्यवस्थित स्कूल बस सुविधा।',               icon: Bus        },
              { title: language === 'english' ? 'Expert Mentors'        : 'विशेषज्ञ शिक्षक',         desc: language === 'english' ? 'Highly qualified faculty members who provide personalized attention to every child.'           : 'उच्च योग्य शिक्षक जो हर बच्चे पर व्यक्तिगत ध्यान देते हैं।',                   icon: Users      },
              { title: language === 'english' ? 'Value-Based Education' : 'मूल्य-आधारित शिक्षा',   desc: language === 'english' ? 'Instilling strong moral values, ethics, and social responsibility in students.'                  : 'छात्रों में मजबूत नैतिक मूल्य, नैतिकता और सामाजिक जिम्मेदारी विकसित करना।', icon: Heart      },
            ].map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-brand-gold/30">
                <div className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-brand-gold/10 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-gold">
                  <u.icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-brand-gold group-hover:text-brand-navy transition-colors" />
                </div>
                <h4 className="text-xs sm:text-lg lg:text-xl font-display font-bold text-white mb-1.5 sm:mb-3 lg:mb-4 group-hover:text-brand-gold transition-colors leading-tight">{u.title}</h4>
                <p className="text-white/50 text-[10px] sm:text-sm leading-relaxed group-hover:text-white/70 transition-colors hidden sm:block">{u.desc}</p>
                <p className="text-white/50 text-[10px] leading-relaxed sm:hidden line-clamp-3">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Achievements />

      <Testimonials />

      {/* Director's Message */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="relative max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] mx-auto lg:mx-0">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg relative z-10">
                <img src={director} alt="Director" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-brand-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-navy/5 rounded-full blur-2xl" />
              <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}
                className="absolute bottom-4 sm:bottom-6 -left-3 sm:-left-4 bg-brand-gold text-brand-navy p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-xl z-20 hidden sm:block">
                <p className="text-xl sm:text-2xl font-black leading-none mb-1">5+</p>
                <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest leading-tight">
                  {language === 'english' ? 'Years of' : 'वर्षों का'}<br />{language === 'english' ? 'Excellence' : 'अनुभव'}
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative text-center lg:text-left">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-gold/10 absolute -top-4 left-0 hidden sm:block" />
              <span className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase mb-2 sm:mb-3 block">
                {language === 'english' ? "Director's Message" : 'डायरेक्टर का संदेश'}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-brand-navy mb-4 sm:mb-5 lg:mb-6 leading-tight">
                {language === 'english' ? 'Leading with Vision and Compassion' : 'दृष्टि और करुणा के साथ नेतृत्व'}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-brand-navy/70 leading-relaxed mb-6 sm:mb-8">
                <p className="italic font-medium text-brand-navy text-sm sm:text-base">
                  {language === 'english'
                    ? '"Real education encompasses more than just a job; it teaches us how to live. Its value cannot be quantified in tangible terms."'
                    : '"असली शिक्षा सिर्फ नौकरी पाने से कहीं अधिक है; यह हमें जीना सिखाती है।"'}
                </p>
                <p className="text-xs sm:text-sm lg:text-base">
                  {language === 'english'
                    ? 'At DPS Bakhtiyarpur, we believe in nurturing not just students, but future leaders who are grounded in values and equipped with modern skills. Our mission is to create an environment where every child discovers their true potential.'
                    : 'DPS बख्तियारपुर में, हम न केवल छात्रों को, बल्कि भविष्य के उन लीडर्स को तैयार करने में विश्वास करते हैं जो मूल्यों से जुड़े हैं और आधुनिक कौशल से लैस हैं।'}
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="w-8 sm:w-12 h-0.5 bg-brand-gold" />
                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-brand-navy">
                    {language === 'english' ? 'Nishant Kumar Pankaj' : 'निशांत कुमार पंकज'}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {language === 'english' ? 'Director, DPS Bakhtiyarpur' : 'डायरेक्टर, DPS बख्तियारपुर'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
