
import PageHero from '../components/PageHero';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ZoomIn } from 'lucide-react';
import gal1 from '../assets/img11.jpeg';
import gal2 from '../assets/img10.jpeg';
import gal3 from '../assets/img3.jpeg';
import gal4 from '../assets/img4.jpeg';
import gal5 from '../assets/img17.jpeg';
import gal6 from '../assets/img.jpeg';
import img1 from '../assets/img28.jpeg';
import img2 from '../assets/img2.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.png';
import img12 from '../assets/img16.jpeg';





const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images = language === 'english' ? [
    { title: 'School Building', category: 'Campus', src: gal1 },
    { title: 'Science Lab', category: 'Facilities', src: gal2 },
    { title: 'Annual Day', category: 'Events', src: gal3 },
    { title: 'Annual Day', category: 'Events', src: img1 },
    { title: 'Annual Day', category: 'Events', src: img2 },
    { title: 'Annual Day', category: 'Events', src: img5 },
    { title: 'Annual Day', category: 'Events', src: img6 },
    { title: 'Annual Day', category: 'Events', src: img7 },
    { title: 'Annual Day', category: 'Events', src: img8 },
    { title: 'Annual Day', category: 'Events', src: img9 },
    { title: 'Annual Day', category: 'Events', src: img10 },
    { title: 'Sports Meet', category: 'Sports', src: img11 },
    { title: 'Sports Meet', category: 'Sports', src: img12 },
    // { title: 'Classroom',            category: 'Academics',  src: '/images/gallery/classroom.jpg' },
    { title: 'Computer Lab', category: 'Facilities', src: gal5 },
    { title: 'Cultural Program', category: 'Events', src: gal6 },
    // { title: 'Library',              category: 'Facilities', src: '/images/gallery/library.jpg' },
    // { title: 'Student Activity',     category: 'Academics',  src: '/images/gallery/student-activity.jpg' },
    // { title: 'School Garden',        category: 'Campus',     src: '/images/gallery/garden.jpg' },
    // { title: 'Prize Distribution',   category: 'Events',     src: '/images/gallery/prize.jpg' },
    // { title: 'Yoga Session',         category: 'Sports',     src: '/images/gallery/yoga.jpg' },
  ] : [
    { title: 'स्कूल बिल्डिंग', category: 'कैंपस', src: gal1 },
    { title: 'साइंस लैब', category: 'सुविधाएं', src: gal2 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: gal3 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img1 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img2 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img5 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img6 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img7 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img8 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img9 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img10 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img11 },
    { title: 'वार्षिक उत्सव', category: 'इवेंट्स', src: img12 },

    { title: 'खेलकूद प्रतियोगिता', category: 'स्पोर्ट्स', src: gal4 },
    // { title: 'क्लासरूम',              category: 'पढ़ाई',    src: '/images/gallery/classroom.jpg' },
    { title: 'कंप्यूटर लैब', category: 'सुविधाएं', src: gal5 },
    { title: 'सांस्कृतिक कार्यक्रम', category: 'इवेंट्स', src: gal6 },
    // { title: 'लाइब्रेरी',             category: 'सुविधाएं', src: '/images/gallery/library.jpg' },
    // { title: 'छात्र गतिविधि',          category: 'पढ़ाई',    src: '/images/gallery/student-activity.jpg' },
    // { title: 'स्कूल गार्डन',           category: 'कैंपस',    src: '/images/gallery/garden.jpg' },
    // { title: 'पुरस्कार वितरण',         category: 'इवेंट्स',  src: '/images/gallery/prize.jpg' },
    // { title: 'योग सत्र',              category: 'स्पोर्ट्स', src: '/images/gallery/yoga.jpg' },
  ];

  const categories = language === 'english'
    ? ['All', 'Campus', 'Facilities', 'Events', 'Sports', 'Academics']
    : ['सभी', 'कैंपस', 'सुविधाएं', 'इवेंट्स', 'स्पोर्ट्स', 'पढ़ाई'];

  const allLabel = language === 'english' ? 'All' : 'सभी';

  const filtered = activeCategory === allLabel
    ? images
    : images.filter(img => img.category === activeCategory);

  const handleImageError = (e, index) => {
    // fallback to picsum placeholder if local image missing
    e.target.src = `https://picsum.photos/seed/gallery-${index}/800/600`;
  };

  return (
    <div className="">

      {/* Hero Section */}
<PageHero title={<>{language === 'english' ? 'School Gallery' : 'स्कूल गैलरी (Gallery)'}</>} sub={<>{language === 'english'
              ? 'Capturing the vibrant life and moments of joy at DPS Bakhtiyarpur.'
              : 'DPS बख्तियारपुर में जीवंत जीवन और खुशी के पलों को कैद करना।'}</>} />

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                  ? 'bg-brand-navy text-brand-gold shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage({ ...img, index: i })}
                className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  onError={(e) => handleImageError(e, i)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
                    {img.category}
                  </p>
                  <h4 className="text-white text-2xl font-display font-bold">
                    {img.title}
                  </h4>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                onError={(e) => handleImageError(e, selectedImage.index)}
                className="w-full max-h-[80vh] object-contain bg-brand-navy"
              />
              <div className="bg-brand-navy px-8 py-5 flex items-center justify-between">
                <div>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-white text-xl font-display font-bold">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;
