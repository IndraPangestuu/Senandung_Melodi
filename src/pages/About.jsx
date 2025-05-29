import { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FiTruck, FiGlobe, FiCheckCircle, FiClock, FiAward, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useContext(LanguageContext);
  const { lang } = useContext(LanguageContext);

  // Scroll ke atas saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timeline Sejarah
  const timeline = [
    {
      year: '2015',
      title: t('about.timeline1.title'),
      description: t('about.timeline1.desc')
    },
    {
      year: '2018',
      title: t('about.timeline2.title'),
      description: t('about.timeline2.desc')
    },
    {
      year: '2020',
      title: t('about.timeline3.title'),
      description: t('about.timeline3.desc')
    },
    {
      year: '2023',
      title: t('about.timeline4.title'),
      description: t('about.timeline4.desc')
    }
  ];

  // Core Values
  const coreValues = [
    {
      icon: <FiTruck className="text-accent text-3xl mb-3" />,
      title: t('about.value1.title'),
      desc: t('about.value1.desc')
    },
    {
      icon: <FiGlobe className="text-accent text-3xl mb-3" />,
      title: t('about.value2.title'),
      desc: t('about.value2.desc')
    },
    {
      icon: <FiClock className="text-accent text-3xl mb-3" />,
      title: t('about.value3.title'),
      desc: t('about.value3.desc')
    },
    {
      icon: <FiAward className="text-accent text-3xl mb-3" />,
      title: t('about.value4.title'),
      desc: t('about.value4.desc')
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{t('about.hero.title')}</h1>
          <p className="text-lg opacity-90 max-w-2xl">{t('about.hero.desc')}</p>
          <nav className="text-sm mt-4 text-blue-200">
            <Link to="/" className="hover:underline">{t('about.breadcrumb.home')}</Link> &raquo; {t('about.breadcrumb.current')}
          </nav>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-700 mb-4">{t('about.story.p1')}</p>
              <p className="text-gray-700 mb-4">{t('about.story.p2')}</p>
              <p className="text-gray-700">{t('about.story.p3')}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src="/assets/about-us.jpg" alt={t('about.story.title')} className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">10+</p>
                <p className="text-xs">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Sejarah */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.timeline.title')}</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l border-gray-300"></div>
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`mb-8 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute left-0 top-6 w-4 h-4 bg-accent rounded-full -ml-6 border-4 border-white"></div>
                  <span className="text-accent font-bold">{item.year}</span>
                  <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misi & Visi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.mission.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Misi */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{t('about.mission.subtitle1')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.mission.list1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.mission.list2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.mission.list3')}</span>
                </li>
              </ul>
            </motion.div>

            {/* Visi */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{t('about.mission.subtitle2')}</h3>
              <p className="text-gray-700">{t('about.mission.vision')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                {value.icon}
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.whyChoose.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/why-choose-us.jpg" alt="Why Choose Us" className="rounded-lg shadow-lg w-full" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-gray-700">{t('about.whyChoose.p1')}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.whyChoose.list1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.whyChoose.list2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.whyChoose.list3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-accent mt-1" />
                  <span>{t('about.whyChoose.list4')}</span>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-xl text-gray-900">100+</h4>
                  <p className="text-gray-600 text-sm">{t('about.whyChoose.stat1')}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-xl text-gray-900">200+</h4>
                  <p className="text-gray-600 text-sm">{t('about.whyChoose.stat2')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.certifications.title')}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/assets/fiata.png" alt="FIATA" className="h-12 object-contain" />
            <img src="/assets/insw.png" alt="INSW" className="h-12 object-contain" />
            <img src="/assets/iso.png" alt="ISO" className="h-12 object-contain" />
            <img src="/assets/wca.png" alt="WCA" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Team (Opsional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src="/assets/team1.jpg" alt="Team 1" className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900">John Doe</h3>
                <p className="text-accent text-sm mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">{t('about.team.bio1')}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src="/assets/team2.jpg" alt="Team 2" className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900">Jane Smith</h3>
                <p className="text-accent text-sm mb-2">Head of Logistics</p>
                <p className="text-gray-600 text-sm">{t('about.team.bio2')}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src="/assets/team3.jpg" alt="Team 3" className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900">Michael Lee</h3>
                <p className="text-accent text-sm mb-2">International Trade Expert</p>
                <p className="text-gray-600 text-sm">{t('about.team.bio3')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.cta.title')}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t('about.cta.desc')}</p>
          <a 
            href="/contact" 
            className="bg-white text-accent font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            {t('about.cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
