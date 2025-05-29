// src/components/Header.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { lang, toggleLang, t } = useContext(LanguageContext);

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">LOGO</h1>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-700">{t('nav.home')}</Link>
          <Link to="/about" className="hover:text-blue-700">{t('nav.about')}</Link>
          <Link to="/services" className="hover:text-blue-700">{t('nav.services')}</Link>
          <Link to="/network" className="hover:text-blue-700">{t('nav.network')}</Link>
          <Link to="/testimonials" className="hover:text-blue-700">{t('nav.testimonials')}</Link>
          <Link to="/contact" className="hover:text-blue-700">{t('nav.contact')}</Link>
        </nav>

        <LanguageToggle lang={lang} toggleLang={toggleLang} />
      </div>
    </header>
  );
};

export default Header;
