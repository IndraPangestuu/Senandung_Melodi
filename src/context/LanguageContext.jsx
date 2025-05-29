// src/context/LanguageContext.jsx
import React, { createContext, useState, useMemo, useCallback } from 'react';
import en from '../i18n/en.json';
import id from '../i18n/id.json';

export const LanguageContext = createContext();

const translations = {
  en,
  id,
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('id');

  const toggleLang = useCallback(() => {
    setLang((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let result = translations[lang];
      for (let k of keys) {
        if (result && k in result) {
          result = result[k];
        } else {
          return key; // fallback to key if translation not found
        }
      }
      return result;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
