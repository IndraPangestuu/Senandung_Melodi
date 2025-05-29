import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>{t('footer.address')}</p>
        <p>
          <a href={`mailto:${t('footer.email')}`} className="hover:underline">
            {t('footer.email')}
          </a>
        </p>
        <p>{t('footer.phone')}</p>
        <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
