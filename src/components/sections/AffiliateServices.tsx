import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { medicalServices } from '../../data/medicalServices';
import * as Icons from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { getLanguageFromURL } from '../../utils/i18n';

export default function AffiliateServices() {
  const { isSpanish } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = getLanguageFromURL(location.pathname);

  const handleServiceClick = (serviceId: string) => {
    const path = `/${currentLanguage}/medical-network/${serviceId}`;
    navigate(path);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50/30">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {isSpanish ? 'Red Médica' : 'Medical Network'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isSpanish ? 'Atención Médica Integral' : 'Comprehensive Medical Care'}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {isSpanish 
              ? 'Nuestra extensa red de profesionales médicos está dedicada a proporcionar atención especializada y personalizada para lesiones relacionadas con accidentes automovilísticos. Con acceso a especialistas líderes en múltiples disciplinas, aseguramos que cada aspecto de su recuperación sea atendido con el más alto nivel de experiencia médica.'
              : 'Our extensive network of medical professionals is dedicated to providing specialized, personalized care for auto accident-related injuries. With access to leading specialists across multiple disciplines, we ensure every aspect of your recovery is addressed with the highest level of medical expertise.'}
          </p>
          <p className="text-gray-600 text-lg">
            {isSpanish
              ? 'Desde atención de emergencia inmediata hasta rehabilitación a largo plazo, nuestros proveedores trabajan en colaboración para desarrollar planes de tratamiento integrales que se adaptan a sus necesidades específicas y objetivos de recuperación.'
              : 'From immediate emergency care to long-term rehabilitation, our providers work collaboratively to develop comprehensive treatment plans tailored to your specific needs and recovery goals.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalServices.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  onClick={() => handleServiceClick(service.id)}
                  className="cursor-pointer block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {isSpanish ? service.titleEs || service.title : service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {isSpanish ? service.shortDescriptionEs || service.shortDescription : service.shortDescription}
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold">
                    {isSpanish ? 'Más Información' : 'Learn More'} →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}