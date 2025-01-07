import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Scale } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { useLanguage } from '../../hooks/useLanguage';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: t.services.medical.title,
      description: t.services.medical.description,
      features: t.services.medical.features,
      link: "/medical-network"
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: t.services.legal.title,
      description: t.services.legal.description,
      features: t.services.legal.features,
      link: "/attorney-network"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.services.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.services.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}