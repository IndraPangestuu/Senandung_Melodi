import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Network = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="network" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('network.title')}</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          {t('network.desc')}
        </p>

        {/* Placeholder peta atau logo partner */}
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">[Peta Dunia Interaktif / Logo Partner]</span>
        </div>
      </div>
    </section>
  );
};

export default Network;
