import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          {t('about.description')}
        </p>
      </div>
    </section>
  );
};

export default About;
