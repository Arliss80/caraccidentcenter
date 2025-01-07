import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Info } from 'lucide-react';
import Button from '../ui/Button';
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '../../constants/contact';
import { useLanguage } from '../../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Professional medical consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90" />
      </div>

      <div className="container-padding relative z-10 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-12">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              href="#contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              href="#pip"
              className="w-full sm:w-auto"
            >
              <Info className="mr-2 w-5 h-5" />
              {t.hero.learnMore}
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-white"
          >
            <p className="text-gray-100 mb-2 font-medium">{t.hero.emergencySupport}</p>
            <a 
              href={CONTACT_PHONE_HREF}
              className="text-2xl font-bold hover:text-blue-200 transition-colors inline-flex items-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              {CONTACT_PHONE}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}