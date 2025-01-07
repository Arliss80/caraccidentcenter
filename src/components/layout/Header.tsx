import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import NavLinks from '../navigation/NavLinks';
import LanguageToggle from '../ui/LanguageToggle';
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '../../constants/contact';
import { getLanguageFromURL } from '../../utils/i18n';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentLanguage = getLanguageFromURL(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-gray-900/80 backdrop-blur-md'
    }`}>
      <div className="container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={`/${currentLanguage}`} className="flex items-center space-x-2">
            <Logo className={isScrolled ? 'text-gray-900' : 'text-white'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <NavLinks isScrolled={isScrolled} />
            </nav>
            <Button 
              variant={isScrolled ? "primary" : "secondary"}
              size="sm" 
              href={CONTACT_PHONE_HREF}
            >
              <Phone className="w-4 h-4 mr-2" />
              {currentLanguage === 'en' ? 'Call Now' : 'Llamar Ahora'}
            </Button>
          </div>

          {/* Language Toggle and Mobile Menu Button - Always Visible */}
          <div className="flex items-center space-x-2">
            <LanguageToggle isScrolled={isScrolled} />
            <button
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks isScrolled={isScrolled} />
            </nav>
            <div className="mt-4">
              <Button 
                variant={isScrolled ? "primary" : "secondary"}
                size="sm" 
                href={CONTACT_PHONE_HREF}
                className="w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                {CONTACT_PHONE}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}