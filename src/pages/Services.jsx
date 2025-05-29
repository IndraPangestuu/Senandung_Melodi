import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const servicesIcons = [
  { key: "services.imporBarang", icon: "📦" },
  { key: "services.eksporKomoditas", icon: "🚢" },
  { key: "services.pengurusanDokumen", icon: "📄" },
  { key: "services.logistikGudang", icon: "🚚" },
  { key: "services.konsultasiInternasional", icon: "🌍" }
];

const Services = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {servicesIcons.map((service, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold">{t(service.key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
