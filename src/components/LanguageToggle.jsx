// src/components/LanguageToggle.jsx
const LanguageToggle = ({ lang, toggleLang }) => {
  return (
    <button onClick={toggleLang} className="text-gray-700 font-medium">
      {lang === 'id' ? '🌐 English' : '🇮🇩 Indonesia'}
    </button>
  );
};

export default LanguageToggle;