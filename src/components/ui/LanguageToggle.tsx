import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, getLanguageFromURL, addLanguageToPath } from '../../utils/i18n';

interface LanguageToggleProps {
  isScrolled: boolean;
}

export default function LanguageToggle({ isScrolled }: LanguageToggleProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = getLanguageFromURL(location.pathname);

  const toggleLanguage = () => {
    const newLanguage: Language = currentLanguage === 'en' ? 'es' : 'en';
    const newPath = addLanguageToPath(location.pathname, newLanguage);
    navigate(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isScrolled 
          ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' 
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
      aria-label={`Change language to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
    >
      <span className="text-xl">
        {currentLanguage === 'en' ? '🇺🇸' : '🇪🇸'}
      </span>
      <span className="font-medium">
        {currentLanguage === 'en' ? 'EN' : 'ES'}
      </span>
    </button>
  );
}