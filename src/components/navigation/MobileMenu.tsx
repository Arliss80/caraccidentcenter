import React from 'react';
import NavLinks from './NavLinks';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../LanguageContext';

export default function MobileMenu() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLinks />
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}