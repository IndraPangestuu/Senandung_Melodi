// src/pages/Contact.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const data = require(`../i18n/${lang}.json`);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Permintaan Anda telah dikirim!");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{data.contact?.title || "Hubungi Kami"}</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Nama" required className="border p-3 rounded" />
            <input type="email" placeholder="Email" required className="border p-3 rounded" />
          </div>
          <input type="tel" placeholder="Nomor HP" required className="border p-3 w-full mb-6 rounded" />
          <select required className="border p-3 w-full mb-6 rounded">
            <option value="">Pilih Layanan</option>
            <option value="import">Impor Barang</option>
            <option value="export">Ekspor Komoditas</option>
            <option value="logistics">Logistik</option>
          </select>
          <button type="submit" className="bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded transition-colors">
            Kirim Permintaan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;