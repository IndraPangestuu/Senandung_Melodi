import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import {
  FiTruck,
  FiGlobe,
  FiSettings,
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi';

const Footer = () => {
  const { t, lang, toggleLang } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* Top Footer */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xl relative right-10 font-semibold text-white mb-4">{t('footer.servicesTitle')}</h3>
              <ul className="text-xl relative left-10 space-y-2">
                <li className="flex items-center gap-2 group">
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    <FiTruck />
                  </span>
                  <span className="text-sm hover:text-accent transition-colors">{t('footer.service1')}</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    <FiGlobe />
                  </span>
                  <span className="text-sm hover:text-accent transition-colors">{t('footer.service2')}</span>
                </li>
                <li className="flex items-center gap-2 group">
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    <FiSettings />
                  </span>
                  <span className="text-sm hover:text-accent transition-colors">{t('footer.service3')}</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl relative right-25 font-semibold text-white mb-4">{t('footer.contact')}</h3>
              <ul className="text-xl relative right-15 space-y-3">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 text-accent flex-shrink-0" size={18} /> 
                  <span className="text-sm">{t('footer.address')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiPhone className="mt-1 text-accent flex-shrink-0" size={18} /> 
                  <span className="text-sm">{t('footer.phone')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="mt-1 text-accent flex-shrink-0" size={18} /> 
                  <span className="text-sm">{t('footer.email')}</span>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="bg-white py-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('footer.officeLocation')}</h3>
              <div className="aspect-w-16 aspect-h-4 md:aspect-h-3 lg:aspect-h-2">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.226672597979!2d106.82723631476908!3d-6.214288995505893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8e9a6c6d3:0x8b8e5d8e7d8c6d8e!2sJl.+Jend.+Sudirman+No.123,+Jakarta!5e0!3m2!1sen!2sid!4v1630000000000!5m2!1sen!2sid"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
              <p className="mt-3 text-sm text-gray-600">{t('footer.officeAddress')}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} PT SENANDUNG MELODI SEJAHTERA. {t('footer.rights')}</p>
        <div className="mt-2 flex justify-center space-x-6">
          <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
