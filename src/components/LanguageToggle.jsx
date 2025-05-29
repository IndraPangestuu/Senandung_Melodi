// src/components/LanguageToggle.jsx
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors"
      aria-label="Toggle language"
    >
      <span>🌐</span>
      <span>{lang === 'id' ? 'English' : 'Indonesia'}</span>
    </button>
  );
};

export default LanguageToggle;