import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Button from './ui/Button';

export default function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <div id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('contact_title')}</h2>
              <p className="text-gray-600">{t('contact_desc')}</p>
            </div>
            <div className="flex justify-center">
              <a
                href="tel:+18005555555"
                className="inline-flex items-center"
              >
                <Button variant="primary" size="lg" className="inline-flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  1-800-555-5555
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}