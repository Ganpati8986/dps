import PageHero from '../components/PageHero';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Microscope, Monitor, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import our from '../assets/img14.jpg';

const Academics = () => {
  const { language } = useLanguage();

const programs = language === 'english' ? [
  { 
    title: 'Pre-Primary Education', 
    desc: 'Play-based learning for Pre-Nursery, Nursery, and Kindergarten with modern teaching aids.', 
    icon: GraduationCap 
  },
  { 
    title: 'Primary Education', 
    desc: 'Strong foundation building for Classes 1 to 5 with interactive and activity-based learning.', 
    icon: BookOpen 
  },
  { 
    title: 'Secondary Education', 
    desc: 'Comprehensive academic curriculum for Classes 6 to 10 with focus on overall development.', 
    icon: Award 
  },
] : [
  { 
    title: 'पूर्व-प्राथमिक शिक्षा (Pre-Primary Education)', 
    desc: 'प्री-नर्सरी, नर्सरी और किंडरगार्टन के लिए खेल आधारित शिक्षा आधुनिक साधनों के साथ।', 
    icon: GraduationCap 
  },
  { 
    title: 'प्राथमिक शिक्षा (Primary Education)', 
    desc: 'कक्षा 1 से 5 तक के लिए मजबूत आधार निर्माण और गतिविधि आधारित शिक्षा।', 
    icon: BookOpen 
  },
  { 
    title: 'माध्यमिक शिक्षा (Secondary Education)', 
    desc: 'कक्षा 6 से 10 तक के लिए समग्र विकास पर आधारित पाठ्यक्रम।', 
    icon: Award 
  },
];

 const subjects = language === 'english' ? [
  { name: 'Mathematics', icon: Microscope },
  { name: 'Science', icon: Microscope },
  { name: 'Social Science', icon: Microscope },
  { name: 'English', icon: Microscope },
  { name: 'Hindi', icon: Microscope },
  { name: 'Computer Science', icon: Microscope },
] : [
  { name: 'गणित (Mathematics)', icon: Microscope },
  { name: 'विज्ञान (Science)', icon: Microscope },
  { name: 'सामाजिक विज्ञान (Social Science)', icon: Microscope },
  { name: 'अंग्रेजी (English)', icon: Microscope },
  { name: 'हिंदी (Hindi)', icon: Microscope },
  { name: 'कंप्यूटर विज्ञान (Computer Science)', icon: Microscope },
];

  return (
    <div className="">
      {/* Hero Section */}
<PageHero title={<>{language === 'english' ? 'Academic Programs' : 'शैक्षणिक कार्यक्रम (Academic Programs)'}</>} sub={<>{language === 'english'
              ? 'We provide a comprehensive curriculum designed to nurture the intellectual and character growth of our students'
              : 'हम अपने छात्रों के बौद्धिक और चरित्र विकास को निखारने के लिए डिज़ाइन किया गया एक व्यापक पाठ्यक्रम प्रदान करते हैं।'}</>} />

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[2.5rem] bg-brand-cream border border-brand-gold/10 hover:border-brand-gold transition-all group hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-all group-hover:rotate-12">
                <program.icon className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-brand-navy group-hover:text-brand-gold transition-colors">{program.title}</h3>
              <p className="text-lg text-brand-navy/70 leading-relaxed">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-padding bg-brand-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              {language === 'english' ? 'Our Curriculum' : 'हमारा पाठ्यक्रम (Our Curriculum)'}
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              {language === 'english'
                ? 'The school has adequate facilities to inculcate quality education among children. Classroom teaching is performed with the help of teaching aids in most subjects'
                : 'बच्चों में गुणवत्तापूर्ण शिक्षा विकसित करने के लिए स्कूल में पर्याप्त सुविधाएं हैं। अधिकांश विषयों में शिक्षण सहायक सामग्री की सहायता से कक्षा शिक्षण किया जाता है।'}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {subjects.map((subject, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-gold/30 transition-all group"
                >
                  <CheckCircle2 className="text-brand-gold group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium group-hover:text-brand-gold transition-colors">{subject.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20"
          >
            <img 
              src={our}
              alt="Classroom Learning" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            {language === 'english' ? 'Teaching Methodology' : 'शिक्षण पद्धति (Teaching Methodology)'}
          </h2>
          <p className="text-lg text-brand-navy/60">
            {language === 'english' ? 'Innovative approaches to learning.' : 'सीखने के लिए अभिनव दृष्टिकोण।'}
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-12 rounded-[2.5rem] bg-brand-cream border border-brand-gold/10 hover:border-brand-gold/30 transition-all hover:shadow-xl group"
          >
            <h4 className="text-2xl font-display font-bold text-brand-navy mb-6 group-hover:text-brand-gold transition-colors">
              {language === 'english' ? 'Play & Learn System' : 'खेल और सीख प्रणाली (Play & Learn)'}
            </h4>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              {language === 'english'
                ? 'The primary section is well-equipped with computerized systems of education to arouse coherent interest among children. Pictorial charts, magnetic alphabets, and numerical trees are used to keep kids engaged.'
                : 'बच्चों में रुचि जगाने के लिए प्राथमिक अनुभाग शिक्षा की कंप्यूटरीकृत प्रणालियों से सुसज्जित है। बच्चों को व्यस्त रखने के लिए सचित्र चार्ट, चुंबकीय वर्णमाला और संख्यात्मक पेड़ों का उपयोग किया जाता है।'}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-12 rounded-[2.5rem] bg-brand-cream border border-brand-gold/10 hover:border-brand-gold/30 transition-all hover:shadow-xl group"
          >
            <h4 className="text-2xl font-display font-bold text-brand-navy mb-6 group-hover:text-brand-gold transition-colors">
              {language === 'english' ? 'Modern Teaching Aids' : 'आधुनिक शिक्षण सहायक सामग्री (Teaching Aids)'}
            </h4>
            <p className="text-lg text-brand-navy/70 leading-relaxed">
              {language === 'english'
                ? 'Classroom teaching is performed with the help of teaching aids in most subjects like Physics, Chemistry, Biology, Geography, Civics, and English.'
                : 'भौतिकी, रसायन विज्ञान, जीव विज्ञान, भूगोल, नागरिक शास्त्र और अंग्रेजी जैसे अधिकांश विषयों में शिक्षण सहायक सामग्री की सहायता से कक्षा शिक्षण किया जाता है।'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
