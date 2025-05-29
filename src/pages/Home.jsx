import { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FiTruck, FiGlobe, FiCheckCircle } from 'react-icons/fi';

const Home = () => {
  const { t } = useContext(LanguageContext);
  const controls = useAnimation();
  const ref = useRef(null);

  // Animasi fade-in saat komponen mount
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Video/Gambar Dinamis */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-fit h-fit object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            {t('hero.desc')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full backdrop-blur-sm border border-white/30"
            >
              {t('hero.cta2')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Statistik & Kredensial */}
      <div className="bg-white py-12 shadow-lg">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Statistik Pengalaman */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
              <FiTruck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">10+ Tahun Pengalaman</h3>
              <p className="text-gray-600">Melayani ekspor-impor di berbagai industri.</p>
            </div>
          </motion.div>

          {/* Jaringan Global */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
              <FiGlobe size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">100+ Negara Tujuan</h3>
              <p className="text-gray-600">Jaringan logistik global yang terpercaya.</p>
            </div>
          </motion.div>

          {/* Sertifikasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
              <FiCheckCircle size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Sertifikasi Internasional</h3>
              <p className="text-gray-600">FIATA, INSW, dan ISO 9001.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;