import { LogIn } from 'lucide-react';
import { SecretTap, ERP_LOGIN_URL } from './StaffAccess';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, MapPin, Phone, Mail,
  Facebook, Youtube, Instagram, MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/loggo.png';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-navy pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="School Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-xl font-display font-bold text-white">DPS BAKHTIYARPUR</h1>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {language === 'english'
              ? 'Enabling the young to become men and women of Competence, Character, Commitment, Compassion, and Conviction.'
              : 'युवाओं को योग्यता, चरित्र, प्रतिबद्धता, करुणा और दृढ़ विश्वास वाले पुरुष और महिलाएं बनने में सक्षम बनाना।'}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-xl mb-4">
            {language === 'english' ? 'Quick Links' : 'त्वरित लिंक (Quick Links)'}
          </h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">{language === 'english' ? 'About School' : 'स्कूल के बारे में'}</Link></li>
            {/* <li><Link to="/academics" className="hover:text-brand-gold transition-colors">{language === 'english' ? 'Academic Programs' : 'शैक्षणिक कार्यक्रम'}</Link></li> */}
            <li><Link to="/admission" className="hover:text-brand-gold transition-colors">{language === 'english' ? 'Admission Process' : 'प्रवेश प्रक्रिया'}</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">{language === 'english' ? 'School Gallery' : 'स्कूल गैलरी'}</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">{language === 'english' ? 'Contact Us' : 'हमसे संपर्क करें'}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-xl mb-4">
            {language === 'english' ? 'Contact Us' : 'हमसे संपर्क करें (Contact Us)'}
          </h4>
          <ul className="space-y-6 text-white/60 text-sm">
            <li className="flex gap-4">
              <MapPin className="text-brand-gold shrink-0" />
              <span>
                {language === 'english'
                  ? 'Old Bypass Road, Bakhtiyarpur, Patna - 803212'
                  : 'पुरानी बायपास रोड, बख्तियारपुर, पटना - 803212'}
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-brand-gold shrink-0" />
              <span>+91 9471496300</span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-brand-gold shrink-0" />
              <span>Dpsbakhtiyarpur@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white text-xl mb-8">
            {language === 'english' ? 'Connect With Us' : 'हमसे जुड़ें (Connect With Us)'}
          </h4>

          <p className="text-white/60 text-sm mb-8">
            {language === 'english'
              ? 'Follow us on social media to stay updated with the latest school news and events.'
              : 'स्कूल की नवीनतम खबरों और कार्यक्रमों से अपडेट रहने के लिए हमें सोशल मीडिया पर फॉलो करें।'}
          </p>

          <div className="flex flex-wrap gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Dps-Bakhtiyarpur/61574535718887/?rdid=OowB9aHNWlpHz0yx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16eAgZWMeh%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:bg-[#1877F2] hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@dpsbakhtiyarpur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:bg-[#FF0000] hover:text-white"
            >
              <Youtube className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dpsbakhtiyarpur?igsh=Y2U5N29zY3h0ZTAy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9471496300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
        <p><SecretTap>©</SecretTap> 2026 DPS Bakhtiyarpur. {language === 'english' ? 'All Rights Reserved.' : 'सर्वाधिकार सुरक्षित।'}</p>
        {/* ERP login: desktop only (hidden on phones and tablets) */}
        <a href={ERP_LOGIN_URL} target="_blank" rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] text-white/70 transition hover:border-brand-gold hover:text-brand-gold lg:inline-flex">
          <LogIn className="h-3.5 w-3.5" /> {language === 'english' ? 'ERP Login' : 'ईआरपी लॉगिन'}
        </a>
        <p>
          {language === 'english' ? 'Designed By ' : 'द्वारा डिज़ाइन किया गया '}
          <a href="https://krinexiya.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline transition-all">Krinexiya</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
