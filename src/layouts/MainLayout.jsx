// src/layouts/MainLayout.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} toggleLang={toggleLang} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} />
    </div>
  );
};

export default MainLayout;