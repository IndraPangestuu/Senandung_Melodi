import { useState, useContext } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, path: '/', label: t('header.home') },
    { id: 2, path: '/about', label: t('header.about') },
    { id: 3, path: '/services', label: t('header.services') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-sm py-1 text-center hidden md:block">
        {t('header.banner')}
      </div>

      {/* Header Container */}
      <div className="container mx-px px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-left gap-4">
          <img src="/logo.png" alt="Senandung Melodi" className="h-8 w-12" />
          <span className="text-sm font-bold tracking-wide">
            SENANDUNG MELODI SEJAHTERA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 gap-4">
          {navLinks.map(link => (
            <NavLink key={link.id} to={link.path}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex relative left-55 items-center gap-2 px-4 py-2 bg-accent text-black font-medium rounded-full shadow hover:bg-yellow-500 transition"
            aria-label="Contact via WhatsApp"
          >
            <FiPhone size={16} />
            <span>{t('header.contactUs')}</span>
          </a>
        </nav>

        {/* Language & Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <NavLinkMobile key={link.id} to={link.path} onClick={() => setIsOpen(false)}>
                  {link.label}
                </NavLinkMobile>
              ))}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-accent hover:bg-blue-50 rounded-lg transition"
              >
                <FiPhone size={20} />
                <span className="font-medium">{t('header.contactUs')}</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ to, children }) => {
  const isActive = useMatch(to);
  return (
    <Link
      to={to}
      className={`relative left-55 group text-sm font-medium transition-colors ${
        isActive ? 'text-accent' : 'text-gray-700 hover:text-accent'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-100 origin-left transition-transform"></span>
      )}
    </Link>
  );
};

const NavLinkMobile = ({ to, children, onClick }) => {
  const isActive = useMatch(to);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive ? 'bg-blue-50 text-accent' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;
