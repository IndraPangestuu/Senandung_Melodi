// src/pages/Home.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Home = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="home" className="py-20 bg-blue-900 text-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="mb-6 text-lg opacity-90">{t('hero.desc')}</p>
        <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded shadow inline-block">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
};

export default Home;
