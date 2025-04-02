import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL, CONTACT_ADDRESS } from '../../constants/contact';
import { getLanguageFromURL } from '../../utils/i18n';

export default function Footer() {
  const { isSpanish } = useLanguage();
  const location = useLocation();
  const currentLanguage = getLanguageFromURL(location.pathname);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm">
              {isSpanish
                ? "Conectando víctimas de accidentes con los mejores médicos y abogados de Utah."
                : "Connecting accident victims with Utah's best doctors and lawyers."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {isSpanish ? "Enlaces Rápidos" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${currentLanguage}/medical-network`} className="hover:text-blue-400 transition-colors">
                  {isSpanish ? "Red Médica" : "Medical Network"}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLanguage}/attorney-network`} className="hover:text-blue-400 transition-colors">
                  {isSpanish ? "Red Legal" : "Attorney Network"}
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  {isSpanish ? "Contacto" : "Contact"}
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {isSpanish ? "Información de Contacto" : "Contact Info"}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={CONTACT_PHONE_HREF} className="hover:text-blue-400 transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  {CONTACT_ADDRESS.street}<br />
                  {CONTACT_ADDRESS.suite}<br />
                  {CONTACT_ADDRESS.city}, {CONTACT_ADDRESS.state} {CONTACT_ADDRESS.zip}
                </div>
              </li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {isSpanish ? "Soporte de Emergencia" : "Emergency Support"}
            </h3>
            <p className="mb-4 text-sm">
              {isSpanish
                ? "Disponible 24/7 para emergencias de accidentes automovilísticos"
                : "Available 24/7 for car accident emergencies"}
            </p>
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isSpanish ? "Llamar Ahora" : "Call Now"}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} Car Accident Center. {isSpanish ? "Todos los derechos reservados" : "All rights reserved"}.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {isSpanish ? "Términos de Uso" : "Terms of Use"}
            </a>
            <span>|</span>
            <a href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}