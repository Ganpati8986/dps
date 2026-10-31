import PageHero from '../components/PageHero';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, GraduationCap, Award, BookOpen, Search, Filter, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import direc from '../assets/dire.png';
import prin from '../assets/prin.png';
import t2 from '../assets/t2.jpeg';
import st2 from '../assets/st2.png';
import st3 from '../assets/st3.jpeg';
import st4 from '../assets/st4.jpeg';
import st5 from '../assets/st5.jpeg';
import st6 from '../assets/st6.jpeg';
import st7 from '../assets/st7.jpeg';
import st8 from '../assets/st8.jpeg';
import st9 from '../assets/st9.png';
import st10 from '../assets/st10.png';
import st12 from '../assets/newwww.jpeg';



const Faculty = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDesignation, setSelectedDesignation] = useState('All');

  const facultyMembers = useMemo(() => [
    {
      name: language === 'english' ? 'Mr. Nishant Kumar Pankaj' : 'निशांत कुमार पंकज',
      designation: language === 'english' ? 'Director' : 'डायरेक्टर',
      department: language === 'english' ? 'Administration' : 'प्रशासन',
      qualification: 'M.A., B.Ed.',
      experience: 'N K',
      image: direc,
      bio: language === 'english'
        ? 'Visionary leader committed to educational excellence.'
        : 'शैक्षणिक उत्कृष्टता के लिए प्रतिबद्ध दूरदर्शी नेता।',
    },
    // {
    //   name: language === 'english' ? 'Dr. Vivek Vardhan' : 'डॉ. विवेक वर्धन',
    //   designation: language === 'english' ? 'Principal' : 'प्रिंसिपल',
    //   department: language === 'english' ? 'Administration' : 'प्रशासन',
    //   qualification: 'Ph.D.',
    //   experience: 'V K',
    //   image: prin,
    //   bio: language === 'english'
    //     ? 'Expert in academic administration and student development.'
    //     : 'शैक्षणिक प्रशासन और छात्र विकास में विशेषज्ञ।',
    // },
    {
      name: language === 'english' ? 'Mr. Manish Kumar ' : 'श्री मनीष कुमार',
      designation: language === 'english' ? 'Teacher' : 'शिक्षक',
      department: language === 'english' ? 'Administration' : 'प्रशासन',
      qualification: 'BCA',
      experience: 'M K',
      image: t2,
      bio: language === 'english'
        ? 'Dedicated to fostering a positive learning environment.'
        : 'सकारात्मक शिक्षण वातावरण को बढ़ावा देने के लिए समर्पित।',
    },
    {
      name: language === 'english' ? 'Mr. Sonu Kumar' : 'श्री सोनू कुमार',
      designation: language === 'english' ? 'Managing Director' : 'प्रबंध निदेशक',
      department: language === 'english' ? 'Mathematics' : 'गणित',
      qualification: 'MCA',
      experience: 'S K',
      image: st3,
      bio: language === 'english'
        ? 'Passionate about making mathematics simple and fun.'
        : 'गणित को सरल और मजेदार बनाने के प्रति उत्साही।',
    },
    {
      name: language === 'english' ? 'Mr. Niraj Kumar' : 'श्री नीरज कुमार',
      designation: language === 'english' ? 'Teacher' : 'शिक्षक',
      department: language === 'english' ? 'Science' : 'विज्ञान',
      qualification: 'Graduation',
      experience: 'N K',
      image: st7,
      bio: language === 'english'
        ? 'Encouraging scientific temper and curiosity in students.'
        : 'छात्रों में वैज्ञानिक दृष्टिकोण और जिज्ञासा को प्रोत्साहित करना।',
    },
    {
      name: language === 'english' ? 'Ms. Sweta Suman' : 'सुश्री श्वेता सुमन',
      designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
      department: language === 'english' ? 'Computer Science' : 'कंप्यूटर विज्ञान',
      qualification: 'Graduation, D.El.Ed',
      experience: 'S S',
      image: st2,
      bio: language === 'english'
        ? 'Preparing students for the digital future.'
        : 'छात्रों को डिजिटल भविष्य के लिए तैयार करना।',
    },
    {
      name: language === 'english' ? 'Ms. Manisha Sharma' : 'सुश्री मनीषा शर्मा',
      designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
      department: language === 'english' ? 'Computer Science' : 'कंप्यूटर विज्ञान',
      qualification: 'BCA',
      experience: 'M S',
      image: st4,
      bio: language === 'english'
        ? 'Dedicated to student growth and learning.'
        : 'छात्रों के विकास और शिक्षा के लिए समर्पित।',
    },
    {
      name: language === 'english' ? 'Ms. Sony Kumari' : 'सुश्री सोनी कुमारी',
      designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
      department: language === 'english' ? 'Primary Section' : 'प्राथमिक अनुभाग',
      qualification: 'Graduation, D.El.Ed',
      experience: 'S K',
      image: st5,
      bio: language === 'english'
        ? 'Focused on foundational learning for young students.'
        : 'छोटे बच्चों की बुनियादी शिक्षा पर ध्यान केंद्रित।',
    },
    // {
    //   name: language === 'english' ? 'Ms. Lucky Kumari' : 'सुश्री लकी कुमारी',
    //   designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
    //   department: language === 'english' ? 'Computer Science' : 'कंप्यूटर विज्ञान',
    //   qualification: 'Diploma in Engineering',
    //   experience: 'L K',
    //   image: st6,
    //   bio: language === 'english'
    //     ? 'Helping students build technical skills.'
    //     : 'छात्रों को तकनीकी कौशल विकसित करने में सहायता।',
    // },
    {
      name: language === 'english' ? 'Ms. Priya Rai' : 'सुश्री प्रिया राय',
      designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
      department: language === 'english' ? 'Computer Science' : 'कंप्यूटर विज्ञान',
      qualification: 'BCA',
      experience: 'P R ',
      image: st8,
      bio: language === 'english'
        ? 'Encouraging digital literacy among students.'
        : 'छात्रों में डिजिटल साक्षरता को बढ़ावा देना।',
    },
    // {
    //   name: language === 'english' ? 'Ms. Fariya Praveen' : 'सुश्री फरिया परवीन',
    //   designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
    //   department: language === 'english' ? 'General Education' : 'सामान्य शिक्षा',
    //   qualification: 'Graduation',
    //   experience: 'F.P.',
    //   image: st9,
    //   bio: language === 'english'
    //     ? 'Dedicated to providing quality education and building strong academic foundations for students.'
    //     : 'छात्रों को गुणवत्तापूर्ण शिक्षा प्रदान करने और मजबूत शैक्षणिक आधार विकसित करने के लिए समर्पित।',
    // },
    {
      name: language === 'english' ? 'Ms. Suhani Kumari' : 'सुश्री सुहानी कुमारी',
      designation: language === 'english' ? 'Teacher' : 'शिक्षिका',
      department: language === 'english' ? 'General Education' : 'सामान्य शिक्षा',
      qualification: 'Graduation',
      experience: 'S.K.',
      image: st10,
      bio: language === 'english'
        ? 'Passionate about guiding students towards academic excellence and overall personality development.'
        : 'छात्रों को शैक्षणिक उत्कृष्टता और व्यक्तित्व विकास की ओर मार्गदर्शन करने के प्रति उत्साही।',
    },
    {
      name: language === 'english' ? 'Mr. RANVEER HARSH VARDHAN' : 'सुश्री शबीना परवीन',
      designation: language === 'english' ? 'Teacher' : 'शिक्षक',
      department: language === 'english' ? 'General Education' : 'सामान्य शिक्षा',
      qualification: 'GRADUATION + D El Ed',
      experience: 'R.V',
      image: st12,
      bio: language === 'english'
        ? 'Focused on nurturing students with knowledge, discipline, and strong moral values.'
        : 'छात्रों में ज्ञान, अनुशासन और अच्छे संस्कार विकसित करने पर केंद्रित।',
    }
  ], [language]);

  const departments = useMemo(() => {
    const depts = new Set(facultyMembers.map(m => m.department));
    return ['All', ...Array.from(depts)];
  }, [facultyMembers]);

  const designations = useMemo(() => {
    const desigs = new Set(facultyMembers.map(m => m.designation));
    return ['All', ...Array.from(desigs)];
  }, [facultyMembers]);

  const filteredFaculty = useMemo(() => {
    return facultyMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === 'All' || member.department === selectedDept;
      const matchesDesignation = selectedDesignation === 'All' || member.designation === selectedDesignation;

      return matchesSearch && matchesDept && matchesDesignation;
    });
  }, [facultyMembers, searchQuery, selectedDept, selectedDesignation]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDept('All');
    setSelectedDesignation('All');
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
<PageHero eyebrow={<>{language === 'english' ? 'Our Mentors' : 'हमारे मार्गदर्शक (Our Mentors)'}</>} title={<>{language === 'english' ? 'Expert Faculty' : 'विशेषज्ञ शिक्षक (Expert Faculty)'}</>} sub={<>{language === 'english'
              ? 'Meet our dedicated team of educators committed to nurturing the next generation of leaders.'
              : 'हमारे समर्पित शिक्षकों की टीम से मिलें जो अगली पीढ़ी के नेताओं को तैयार करने के लिए प्रतिबद्ध हैं।'}</>} gap />

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mb-2 block">
                {language === 'english' ? 'Search Faculty' : 'शिक्षक खोजें'}
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/30" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'english' ? "Search by name, role..." : "नाम, भूमिका से खोजें..."}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:ring-2 focus:ring-brand-gold focus:bg-white outline-none transition-all text-brand-navy font-medium"
                />
              </div>
            </div>

            {/* Department Filter */}
            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mb-2 block">
                {language === 'english' ? 'Department' : 'विभाग'}
              </label>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/30" />
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:ring-2 focus:ring-brand-gold focus:bg-white outline-none transition-all text-brand-navy font-medium appearance-none cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Designation Filter */}
            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mb-2 block">
                {language === 'english' ? 'Designation' : 'पद'}
              </label>
              <div className="relative">
                <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/30" />
                <select
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:ring-2 focus:ring-brand-gold focus:bg-white outline-none transition-all text-brand-navy font-medium appearance-none cursor-pointer"
                >
                  {designations.map(desig => (
                    <option key={desig} value={desig}>{desig}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Active Filters / Clear */}
          {(searchQuery || selectedDept !== 'All' || selectedDesignation !== 'All') && (
            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
              <p className="text-xs font-bold text-brand-navy/40 uppercase tracking-widest">
                {language === 'english' ? `Found ${filteredFaculty.length} results` : `${filteredFaculty.length} परिणाम मिले`}
              </p>
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-brand-gold hover:text-brand-navy transition-colors text-xs font-black uppercase tracking-widest"
              >
                <X className="w-4 h-4" />
                {language === 'english' ? 'Clear Filters' : 'फ़िल्टर हटाएं'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="max-w-[90rem] mx-auto px-4">
        <AnimatePresence mode="popLayout">
          {filteredFaculty.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
            >
              {filteredFaculty.map((member, i) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-[1.5rem] p-4 lg:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-gold/20 overflow-hidden"
                >
                  {/* Background Accent Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Profile Image - Small & Centered */}
                  <div className="relative mb-4 z-10">
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-brand-gold/20 group-hover:border-brand-gold transition-all duration-500 shadow-md p-1 bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative Badge */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[8px] font-black px-2 py-0.5 rounded-full shadow-sm uppercase tracking-tighter">
                      {member.experience}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-0.5 group-hover:text-brand-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand-gold text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                      {member.designation}
                    </p>

                    <div className="flex justify-center gap-3 mb-3">
                      <div className="flex items-center gap-1 text-[9px] font-bold text-brand-navy/40 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-lg">
                        <GraduationCap className="w-3 h-3 text-brand-gold" />
                        {member.qualification}
                      </div>
                    </div>

                    <p className="text-brand-navy/60 text-[11px] leading-relaxed mb-3 px-2 italic line-clamp-2 group-hover:line-clamp-none transition-all">
                      "{member.bio}"
                    </p>

                    {/* Social Icons - Below Bio */}
                    {/* <div className="flex justify-center gap-2 pt-3 border-t border-gray-50">
                      <a href={`mailto:contact@school.edu?subject=Query for ${member.name}`} className="w-8 h-8 rounded-xl bg-gray-50 text-brand-navy/40 hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center shadow-sm hover:shadow-md">
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div> */}
                  </div>

                  {/* Hover Accent Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-brand-navy/10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">
                {language === 'english' ? 'No faculty found' : 'कोई शिक्षक नहीं मिला'}
              </h3>
              <p className="text-brand-navy/40">
                {language === 'english' ? 'Try adjusting your search or filters' : 'अपनी खोज या फ़िल्टर को समायोजित करने का प्रयास करें'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Join Team CTA */}
      <section className="mt-24 max-w-5xl mx-auto px-6">
        <div className="bg-brand-gold rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
              {language === 'english' ? 'Want to join our team?' : 'हमारी टीम में शामिल होना चाहते हैं?'}
            </h2>
            <p className="text-brand-navy/70 text-lg mb-10 max-w-2xl mx-auto">
              {language === 'english'
                ? 'We are always looking for passionate educators who want to make a difference.'
                : 'हम हमेशा उन उत्साही शिक्षकों की तलाश में रहते हैं जो बदलाव लाना चाहते हैं।'}
            </p>
            <a href="mailto:Dpsbakhtiyarpur@gmail.com" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-brand-navy transition-all shadow-xl">
              {language === 'english' ? 'Mail Us' : 'हमें मेल करें'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

