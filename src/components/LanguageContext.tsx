import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations as enTranslations } from '../translations/en';
import { translations as esTranslations } from '../translations/es';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = 'preferred_language';
const MODAL_SHOWN_KEY = 'language_modal_shown';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<'en' | 'es'>(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return (saved as 'en' | 'es') || 'en';
  });
  
  const [showLanguageModal, setShowLanguageModal] = useState(() => {
    return !localStorage.getItem(MODAL_SHOWN_KEY);
  });

  const setLanguage = (lang: 'en' | 'es') => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
    localStorage.setItem(MODAL_SHOWN_KEY, 'true');
    setShowLanguageModal(false);
  };

  const t = (key: string): string => {
    const translations = language === 'en' ? enTranslations : esTranslations;
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      showLanguageModal, 
      setShowLanguageModal 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}