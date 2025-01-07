import React from 'react';
import { Globe2 } from 'lucide-react';

interface LanguageToggleProps {
  language: string;
  setLanguage: (lang: 'en' | 'es') => void;
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center text-gray-700 hover:text-blue-600 transition duration-150"
    >
      <Globe2 className="w-5 h-5 mr-1" />
      {language.toUpperCase()}
    </button>
  );
}