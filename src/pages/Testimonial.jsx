import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const testimonials = [
  { name: "PT ABC Indonesia", role: "Import Manager", quote: "Proses cepat dan andal!" },
  { name: "Global Trade Co.", role: "Export Director", quote: "Sangat profesional dan komunikatif." }
];

const Testimonials = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((tst, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic mb-4">“{tst.quote}”</p>
              <h4 className="font-semibold">{tst.name}</h4>
              <small className="text-gray-500">{tst.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
