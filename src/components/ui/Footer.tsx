import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL, CONTACT_ADDRESS } from '../../constants/contact';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm">
              {t('footer_tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer_quick_links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  {t('nav_services')}
                </a>
              </li>
              <li>
                <a href="#pip" className="hover:text-blue-400 transition-colors">
                  {t('nav_pip')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  {t('nav_contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer_contact_info')}
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
              {t('footer_emergency_support')}
            </h3>
            <p className="mb-4 text-sm">
              {t('footer_emergency_text')}
            </p>
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('cta_call_now')}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} Car Accident Center. {t('footer_rights')}</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              {t('footer_privacy')}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}