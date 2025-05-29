import { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FiAirplay, FiTruck, FiMapPin, FiClock, FiCheckCircle, FiAward, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Komponen Reusable ServiceCard
const ServiceCard = ({ icon, title, desc, benefits = [], ctaText, ctaLink }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="bg-white p-8 rounded-lg shadow-md"
  >
    {icon}
    <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-700 mb-4">{desc}</p>
    
    {/* Validasi benefits */}
    {Array.isArray(benefits) && benefits.length > 0 ? (
      <ul className="space-y-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2">
            <FiCheckCircle className="text-accent" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-red-500 text-sm">Data tidak tersedia</p>
    )}

    {/* CTA Button */}
    {ctaLink && ctaText && (
      <div className="mt-6">
        <a 
          href={ctaLink}
          className="inline-block bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-6 rounded-full shadow transition-colors"
          aria-label={`Layanan ${title}`}
        >
          {ctaText}
        </a>
      </div>
    )}
  </motion.div>
);

const Services = () => {
  const { t } = useContext(LanguageContext);
  const { lang } = useContext(LanguageContext);

  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Validasi terjemahan dan pastikan selalu array
  const getBenefits = (key) => {
    const benefits = t(key);
    return Array.isArray(benefits) ? benefits : [];
  };

  // Layanan Utama
  const services = [
    {
      icon: <FiAirplay className="text-accent text-5xl mb-4" />,
      title: t('services.airfreight.title') || "Pengiriman Udara (Air Freight)",
      desc: t('services.airfreight.desc') || "Layanan pengiriman udara cepat dan aman ke seluruh dunia.",
      benefits: getBenefits('services.airfreight.benefits'),
      ctaText: t('services.airfreight.cta') || "Hubungi Tim Kami",
      ctaLink: "/contact"
    },
    {
      icon: <FiTruck className="text-accent text-5xl mb-4" />,
      title: t('services.seafreight.title') || "Pengiriman Laut (Sea Freight)",
      desc: t('services.seafreight.desc') || "Layanan pengiriman laut efisien untuk volume besar.",
      benefits: getBenefits('services.seafreight.benefits'),
      ctaText: t('services.seafreight.cta') || "Dapatkan Penawaran",
      ctaLink: "/contact"
    },
    {
      icon: <FiMapPin className="text-accent text-5xl mb-4" />,
      title: t('services.doortodoor.title') || "Door-to-Door",
      desc: t('services.doortodoor.desc') || "Solusi pengiriman dari gudang ke pintu tujuan tanpa ribet.",
      benefits: getBenefits('services.doortodoor.benefits'),
      ctaText: t('services.doortodoor.cta') || "Konsultasi Gratis",
      ctaLink: "/contact"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <FiClock className="text-accent text-3xl mb-3" />,
      title: t('services.whychoose.speed.title') || "Kecepatan Pengiriman",
      desc: t('services.whychoose.speed.desc') || "Waktu pengiriman tercepat di kelasnya."
    },
    {
      icon: <FiGlobe className="text-accent text-3xl mb-3" />,
      title: t('services.whychoose.network.title') || "Jaringan Global",
      desc: t('services.whychoose.network.desc') || "Jaringan pelabuhan dan bandara internasional."
    },
    {
      icon: <FiAward className="text-accent text-3xl mb-3" />,
      title: t('services.whychoose.reliability.title') || "Keandalan",
      desc: t('services.whychoose.reliability.desc') || "Dukungan tim logistik berpengalaman."
    }
  ];

  // Timeline Proses Pengiriman
  const timeline = [
    {
      step: t('services.timeline1.step') || "Pemesanan & Dokumen",
      desc: t('services.timeline1.desc') || "Tim kami akan menghubungi Anda untuk detail pemesanan dan dokumen pengiriman."
    },
    {
      step: t('services.timeline2.step') || "Penyediaan Solusi",
      desc: t('services.timeline2.desc') || "Kami menyiapkan rute pengiriman terbaik untuk Anda."
    },
    {
      step: t('services.timeline3.step') || "Pelacakan Real-Time",
      desc: t('services.timeline3.desc') || "Anda bisa memantau status pengiriman Anda kapan saja."
    },
    {
      step: t('services.timeline4.step') || "Penyerahan",
      desc: t('services.timeline4.desc') || "Barang diterima di tujuan dengan aman dan tepat waktu."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{t('services.hero.title') || "Layanan Kami"}</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            {t('services.hero.desc') || "Solusi logistik global terpercaya untuk impor dan ekspor."}
          </p>
          <nav className="text-sm mt-4 text-blue-200">
            <Link to="/" className="hover:underline">{t('services.breadcrumb.home') || "Beranda"}</Link> 
            &raquo; {t('services.breadcrumb.current') || "Layanan"}
          </nav>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services.services.title') || "Layanan Utama"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Air Freight Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/air-freight.jpg" alt={t('services.airfreight.title') || "Air Freight"} className="rounded-lg shadow-lg w-full" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.airfreight.title') || "Pengiriman Udara"}</h2>
              <p className="text-gray-700 mb-4">{t('services.airfreight.desc') || "Layanan pengiriman udara cepat dan aman ke seluruh dunia."}</p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-3">{t('services.airfreight.benefitsTitle') || "Manfaat Pengiriman Udara"}</h3>
              <ul className="space-y-2">
                {getBenefits('services.airfreight.benefits').map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-6 rounded-full shadow transition-colors"
                >
                  {t('services.airfreight.cta') || "Hubungi Tim Kami"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sea Freight Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('services.seafreight.title') || "Pengiriman Laut"}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('services.seafreight.desc') || "Layanan pengiriman laut efisien untuk volume besar."}
              </p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-3">
                {t('services.seafreight.benefitsTitle') || "Manfaat Pengiriman Laut"}
              </h3>
              <ul className="space-y-2">
                {getBenefits('services.seafreight.benefits').map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-6 rounded-full shadow transition-colors"
                >
                  {t('services.seafreight.cta') || "Dapatkan Penawaran"}
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/sea-freight.jpg" alt="Sea Freight" className="rounded-lg shadow-lg w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Door to Door Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/door-to-door.jpg" alt="Door to Door" className="rounded-lg shadow-lg w-full" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('services.doortodoor.title') || "Door-to-Door"}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('services.doortodoor.desc') || "Solusi pengiriman dari gudang ke pintu tujuan tanpa ribet."}
              </p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-3">
                {t('services.doortodoor.benefitsTitle') || "Manfaat Door-to-Door"}
              </h3>
              <ul className="space-y-2">
                {getBenefits('services.doortodoor.benefits').map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="/contact" 
                  className="inline-block bg-accent hover:bg-yellow-400 text-primary font-bold py-3 px-6 rounded-full shadow transition-colors"
                >
                  {t('services.doortodoor.cta') || "Konsultasi Gratis"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services.whychoose.title') || "Kenapa Memilih Kami?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                {item.icon}
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services.process.title') || "Proses Pengiriman"}
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l border-gray-300"></div>
            {timeline.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`mb-8 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute left-0 top-6 w-4 h-4 bg-accent rounded-full -ml-6 border-4 border-white"></div>
                  <h3 className="font-semibold text-lg">{step.step}</h3>
                  <p className="mt-2 text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services.stats.title') || "Statistik & Kepercayaan"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-4xl font-bold text-accent">10+</h2>
              <p className="text-gray-700">{t('services.stats.years') || "Tahun Pengalaman"}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-4xl font-bold text-accent">100+</h2>
              <p className="text-gray-700">{t('services.stats.countries') || "Negara Tujuan"}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-4xl font-bold text-accent">98%</h2>
              <p className="text-gray-700">{t('services.stats.satisfaction') || "Kepuasan Klien"}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('services.testimonials.title') || "Apa Kata Klien Kami?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="italic mb-4">“{t('services.testimonials.client1.quote') || "Pengiriman cepat dan aman, tim sangat responsif."}”</p>
              <h4 className="font-semibold">— {t('services.testimonials.client1.name') || "PT ABC Indonesia"}</h4>
              <p className="text-gray-600">{t('services.testimonials.client1.position') || "Import Manager"}</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="italic mb-4">“{t('services.testimonials.client2.quote') || "Layanan door-to-door sangat membantu operasional kami."}”</p>
              <h4 className="font-semibold">— {t('services.testimonials.client2.name') || "Global Trade Co."}</h4>
              <p className="text-gray-600">{t('services.testimonials.client2.position') || "Export Director"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('services.cta.title') || "Butuh Solusi Logistik Profesional?"}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t('services.cta.desc') || "Kami siap membantu Anda dengan layanan impor dan ekspor terbaik."}</p>
          <a 
            href="/contact" 
            className="bg-white text-accent font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Kontak Tim Kami"
          >
            {t('services.cta.button') || "Hubungi Kami Sekarang"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;