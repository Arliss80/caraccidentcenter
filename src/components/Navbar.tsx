import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import NavLinks from './navigation/NavLinks';
import MobileMenuButton from './navigation/MobileMenuButton';
import MobileMenu from './navigation/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600 animate-slide-in" />
            <span className="text-2xl font-bold text-blue-600 ml-2 animate-slide-in">
              Car Accident Center
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && <MobileMenu />}
    </nav>
  );
}