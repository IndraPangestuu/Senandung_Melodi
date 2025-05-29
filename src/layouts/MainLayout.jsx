import { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const MainLayout = () => {
  const { lang, toggleLang } = useContext(LanguageContext);
  const location = useLocation();

  // Scroll ke atas saat navigasi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      {/* Struktur Utama dengan Animasi Halus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Header */}
          <Header lang={lang} toggleLang={toggleLang} />

          {/* Main Content */}
          <main className="flex-grow" role="main">
            <div className="container mx-auto px-4 sm:px-6 py-8">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <Footer lang={lang} />
        </div>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live Chat via WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-400 transition-colors"
      >
        <FiMessageSquare size={24} />
      </a>
    </>
  );
};

export default MainLayout;