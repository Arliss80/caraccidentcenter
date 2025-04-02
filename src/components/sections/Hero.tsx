import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';
import ImageWithFallback from '../ui/ImageWithFallback';
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '../../constants/contact';
import { useLanguage } from '../../hooks/useLanguage';

export default function Hero() {
  const { t, isSpanish } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://static.wixstatic.com/media/39a8a6_d409217b300f44548f091dfd5f39ac95~mv2.webp"
          fallbackSrc="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
          alt={isSpanish ? "Abogados y médicos expertos en accidentes de auto en Utah" : "Utah car accident lawyers and doctors team"}
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60" />
      </div>

      <div className="container-padding relative z-10 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-20"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {isSpanish 
              ? "Ayuda Experta Después de un Accidente de Auto en Utah" 
              : "Expert Help After a Car Accident in Utah"}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isSpanish
              ? "Conectamos víctimas de accidentes con los mejores médicos y abogados de Utah. Consulta gratuita disponible 24/7."
              : "Connecting accident victims with Utah's best doctors and lawyers. Free consultation available 24/7."}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              {isSpanish ? "Consulta Gratuita" : "Free Consultation"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-white"
          >
            <a 
              href={CONTACT_PHONE_HREF}
              className="text-3xl font-bold hover:text-blue-200 transition-colors inline-flex items-center justify-center gap-3 group"
            >
              <span className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Phone className="w-6 h-6" />
              </span>
              {CONTACT_PHONE}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}