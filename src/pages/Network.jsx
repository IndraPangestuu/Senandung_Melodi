// src/pages/Network.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Network = () => {
  const { lang } = useContext(LanguageContext);
  const data = require(`../i18n/${lang}.json`);

  return (
    <section id="network" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{data.network?.title || "Jaringan Global"}</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-8">
          {data.network?.desc || "Layanan kami mencakup pengiriman ke berbagai negara di seluruh dunia."}
        </p>

        {/* Placeholder untuk peta dunia */}
        <div className="bg-gray-200 h-80 rounded flex items-center justify-center">
          <img src="/assets/map.png" alt="Global Network" className="h-full object-contain" />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="/assets/fiata.png" alt="FIATA" className="h-12 object-contain" />
          <img src="/assets/insw.png" alt="INSW" className="h-12 object-contain" />
          <img src="/assets/iso.png" alt="ISO" className="h-12 object-contain" />
          <img src="/assets/wca.png" alt="WCA" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Network;