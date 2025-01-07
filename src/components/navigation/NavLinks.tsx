import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLanguageFromURL } from '../../utils/i18n';

interface NavLinksProps {
  isScrolled: boolean;
}

export default function NavLinks({ isScrolled }: NavLinksProps) {
  const location = useLocation();
  const currentLanguage = getLanguageFromURL(location.pathname);

  const links = [
    { 
      to: `/${currentLanguage}`, 
      label: currentLanguage === 'en' ? 'Home' : 'Inicio'
    },
    { 
      to: `/${currentLanguage}/medical-network`, 
      label: currentLanguage === 'en' ? 'Medical Network' : 'Red Médica'
    },
    { 
      to: `/${currentLanguage}/attorney-network`, 
      label: currentLanguage === 'en' ? 'Attorney Network' : 'Red Legal'
    },
    { 
      to: '#contact', 
      label: currentLanguage === 'en' ? 'Contact' : 'Contacto'
    }
  ];

  const linkClasses = `block w-full md:w-auto ${
    isScrolled 
      ? 'text-gray-700 hover:text-blue-600' 
      : 'text-gray-100 hover:text-white'
  } transition-colors`;

  return (
    <>
      {links.map(link => (
        link.to.startsWith('#') ? (
          <a
            key={link.label}
            href={link.to}
            className={linkClasses}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            to={link.to}
            className={linkClasses}
          >
            {link.label}
          </Link>
        )
      ))}
    </>
  );
}