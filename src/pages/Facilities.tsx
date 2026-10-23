
import PageHero from '../components/PageHero';
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Monitor, BookOpen, GraduationCap, Users, Award, Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import bus from '../assets/img22.jpeg'

const Facilities = () => {
  const { language } = useLanguage();

  const facilities = language === 'english' ? [
    { title: 'Science Laboratories', desc: 'Advanced Physics, Chemistry, and Biology labs for practical learning.', icon: Microscope },
    { title: 'Computer Center', desc: 'Well-equipped computerized systems to arouse coherent interest in tech.', icon: Monitor },
    { title: 'Library & Resource', desc: 'A vast collection of maps, models, charts, and periodicals.', icon: BookOpen },
    { title: 'Play & Learn', desc: 'Primary section equipped with pictorial charts and numerical trees.', icon: GraduationCap },
    // { title: 'Sports Grounds', desc: 'Ample space for physical activities and sports.', icon: Award },
    { title: 'Secure Campus', desc: 'Situated in a secure environment for student safety.', icon: Users },

    // ✅ Transport Added
    {
      title: 'Transport Facility',
      desc: 'We provide safe and reliable transport services covering nearby areas for student convenience',
      icon: Bus
    },
  ] : [
    { title: 'साइंस लैब (Science Labs)', desc: 'प्रैक्टिकल लर्निंग के लिए एडवांस फिजिक्स, केमिस्ट्री और बायोलॉजी लैब।', icon: Microscope },
    { title: 'कंप्यूटर सेंटर (Computer Center)', desc: 'टेक में रुचि जगाने के लिए अच्छी तरह से सुसज्जित कंप्यूटरीकृत प्रणाली।', icon: Monitor },
    { title: 'लाइब्रेरी (Library)', desc: 'नक्शों, मॉडलों, चार्टों और पत्रिकाओं का विशाल संग्रह।', icon: BookOpen },
    { title: 'खेल और सीख (Play & Learn)', desc: 'सचित्र चार्ट और संख्यात्मक पेड़ों से सुसज्जित प्राथमिक अनुभाग।', icon: GraduationCap },
    // { title: 'खेल का मैदान (Sports Grounds)', desc: 'शारीरिक गतिविधियों और खेलों के लिए पर्याप्त जगह।', icon: Award },
    { title: 'सुरक्षित कैंपस (Secure Campus)', desc: 'छात्रों की सुरक्षा के लिए एक सुरक्षित वातावरण में स्थित।', icon: Users },

    // ✅ Transport Added
    {
      title: 'परिवहन सुविधा (Transport Facility)',
      desc: 'हम छात्रों की सुविधा के लिए पास के क्षेत्रों में सुरक्षित और विश्वसनीय परिवहन सेवा प्रदान करते हैं।',
      icon: Bus
    },
  ];



  return (
    <div className="">

      {/* Hero Section */}
<PageHero title={<>{language === 'english' ? 'World-Class Facilities' : 'विश्व स्तरीय सुविधाएं (Facilities)'}</>} sub={<>{language === 'english'
              ? 'We provide the best infrastructure to ensure our students have everything they need to excel.'
              : 'हम यह सुनिश्चित करने के लिए सर्वोत्तम इंफ्रास्ट्रक्चर प्रदान करते हैं कि हमारे छात्रों के पास वह सब कुछ हो जिसकी उन्हें उत्कृष्टता प्राप्त करने के लिए आवश्यकता है।'}</>} />

      {/* Facilities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[2.5rem] bg-brand-cream border border-brand-gold/10 hover:border-brand-gold transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-colors">
                <f.icon className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-display font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                {f.title}
              </h4>
              <p className="text-brand-navy/60 text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Science & Tech Section */}
      <section className="section-padding bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20"
          >
            <img
              src="https://picsum.photos/seed/science-lab/800/450"
              alt="Science Lab"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-8">
              {language === 'english' ? 'Science & Tech Hub' : 'साइंस और टेक हब'}
            </h2>

            <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
              {language === 'english'
                ? 'The school has modern labs, models, charts, and instruments for practical and innovative learning.'
                : 'स्कूल में प्रैक्टिकल और नवाचार आधारित शिक्षा के लिए आधुनिक लैब, मॉडल, चार्ट और उपकरण उपलब्ध हैं।'}
            </p>

            <p className="text-lg text-brand-navy/70 leading-relaxed">
              {language === 'english'
                ? 'Our computer labs are equipped with the latest systems to develop technical skills among students.'
                : 'हमारी कंप्यूटर लैब नवीनतम सिस्टम से सुसज्जित है जो छात्रों में तकनीकी कौशल विकसित करती है।'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🚍 Transport Facility Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-8">
              {language === 'english' ? 'Transport Facility' : 'परिवहन सुविधा'}
            </h2>

            <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
              {language === 'english'
                ? 'We provide safe and reliable transport services covering nearby areas for student convenience.'
                : 'हम छात्रों की सुविधा के लिए पास के क्षेत्रों में सुरक्षित और विश्वसनीय परिवहन सेवा प्रदान करते हैं।'}
            </p>

            <p className="text-lg text-brand-navy/70 mb-10 leading-relaxed">
              {language === 'english'
                ? 'Our buses are equipped with trained drivers and attendants, ensuring safety and punctuality.'
                : 'हमारी बसें प्रशिक्षित ड्राइवर और सहायकों के साथ सुरक्षा और समय की पाबंदी सुनिश्चित करती हैं।'}
            </p>

            <ul className="space-y-3 text-brand-navy/80">
              {/* <li>✔ {language === 'english' ? 'GPS Enabled Buses' : 'GPS युक्त बसें'}</li> */}
              <li>✔ {language === 'english' ? 'Experienced Drivers' : 'अनुभवी ड्राइवर'}</li>
              <li>✔ {language === 'english' ? 'Wide Route Coverage' : 'विस्तृत रूट कवरेज'}</li>
              <li>✔ {language === 'english' ? 'Safety First' : 'सुरक्षा प्राथमिकता'}</li>
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20"
          >
            <img
              src={bus}
              alt="School Transport"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Facilities;
