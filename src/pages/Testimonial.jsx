// src/pages/Testimonials.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const testimonials = [
  {
    name: "PT ABC Indonesia",
    role: "Import Manager",
    quote: "Proses cepat dan andal! Tim Senandung Melodi selalu siap membantu."
  },
  {
    name: "Global Trade Co.",
    role: "Export Director",
    quote: "Sangat profesional dan komunikatif. Sangat direkomendasikan!"
  }
];

const Testimonials = () => {
  const { lang } = useContext(LanguageContext);
  const data = require(`../i18n/${lang}.json`);

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{data.testimonials?.title || "Apa Kata Klien Kami?"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic mb-4">“{t.quote}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <small className="text-gray-500">{t.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;