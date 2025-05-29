import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Partners = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{t('partners.title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/assets/partner1.png" alt={t('partners.partner1Alt')} className="h-12 object-contain" />
          <img src="/assets/partner2.png" alt={t('partners.partner2Alt')} className="h-12 object-contain" />
          <img src="/assets/partner3.png" alt={t('partners.partner3Alt')} className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
