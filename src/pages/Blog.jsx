// src/pages/Blog.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Blog = () => {
  const { lang } = useContext(LanguageContext);
  const data = require(`../i18n/${lang}.json`);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{data.blog?.title || "Berita & Artikel"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Peraturan Impor Terbaru 2025</h3>
            <p className="text-gray-600 mb-4">Update regulasi bea cukai dan dokumen yang wajib dipenuhi.</p>
            <a href="#" className="text-blue-700 hover:underline">Baca Selengkapnya →</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Tips Efisien Ekspor ke Eropa</h3>
            <p className="text-gray-600 mb-4">Strategi pengiriman barang yang hemat biaya dan waktu.</p>
            <a href="#" className="text-blue-700 hover:underline">Baca Selengkapnya →</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Kemitraan Baru dengan Perusahaan Logistik AS</h3>
            <p className="text-gray-600 mb-4">Kami memperluas jaringan ke Amerika Serikat.</p>
            <a href="#" className="text-blue-700 hover:underline">Baca Selengkapnya →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;