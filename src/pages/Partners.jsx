// src/pages/Partners.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Partners = () => {
  const { lang } = useContext(LanguageContext);
  const data = require(`../i18n/${lang}.json`);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{data.partners?.title || "Mitra Kami"}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/assets/partner1.png" alt="Partner 1" className="h-12 object-contain" />
          <img src="/assets/partner2.png" alt="Partner 2" className="h-12 object-contain" />
          <img src="/assets/partner3.png" alt="Partner 3" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;