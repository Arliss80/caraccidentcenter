import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, Award, BookOpen, Timer, 
  Briefcase, BadgeDollarSign, FileCheck, 
  HeartHandshake, ShieldCheck 
} from 'lucide-react';
import ServiceIcon from '../ui/ServiceIcon';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { CONTACT_PHONE_HREF } from '../../constants/contact';

export default function AttorneyNetwork() {
  const { t, isSpanish } = useLanguage();

  const features = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: isSpanish ? "3.5x Mayor Compensación" : "3.5x Higher Compensation",
      description: isSpanish 
        ? "Los clientes con abogado reciben en promedio 3.5 veces más compensación que aquellos sin representación legal."
        : "Clients with attorneys receive on average 3.5 times more compensation than those without legal representation."
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8" />,
      title: isSpanish ? "Expertos en Negociación" : "Expert Negotiators",
      description: isSpanish
        ? "Los abogados experimentados saben cómo negociar con las compañías de seguros y maximizar su compensación."
        : "Experienced attorneys know how to negotiate with insurance companies and maximize your compensation."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: isSpanish ? "Protección Legal Completa" : "Complete Legal Protection",
      description: isSpanish
        ? "Evite errores costosos y proteja sus derechos con representación legal experta desde el principio."
        : "Avoid costly mistakes and protect your rights with expert legal representation from the start."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: isSpanish ? "Sin Pago Adelantado" : "No Upfront Payment",
      description: isSpanish
        ? "No cobramos honorarios a menos que ganemos su caso. Evaluación inicial gratuita."
        : "We don't charge fees unless we win your case. Free initial evaluation."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: isSpanish ? "Documentación Experta" : "Expert Documentation",
      description: isSpanish
        ? "Manejamos toda la documentación médica y legal crucial para maximizar su reclamo."
        : "We handle all crucial medical and legal documentation to maximize your claim."
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: isSpanish ? "Plazos Críticos" : "Critical Deadlines",
      description: isSpanish
        ? "Cumplimos con todos los plazos legales y requisitos de presentación para proteger su caso."
        : "We meet all legal deadlines and filing requirements to protect your case."
    }
  ];

  return (
    <section id="attorney-network" className="section-padding bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            {isSpanish ? 'Experiencia Legal Comprobada' : 'Proven Legal Expertise'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isSpanish ? 'Por Qué Necesita un Abogado' : 'Why You Need an Attorney'}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {isSpanish
              ? 'Después de un accidente automovilístico, navegar por el sistema legal y de seguros puede ser abrumador. Las compañías de seguros tienen equipos de abogados trabajando para minimizar su compensación. Tener un abogado experimentado a su lado no solo aumenta significativamente sus posibilidades de éxito, sino que también maximiza su compensación mientras usted se enfoca en su recuperación.'
              : 'After a car accident, navigating the legal and insurance system can be overwhelming. Insurance companies have teams of lawyers working to minimize your compensation. Having an experienced attorney on your side not only significantly increases your chances of success but also maximizes your compensation while you focus on recovery.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary"
              size="lg"
              href={CONTACT_PHONE_HREF}
              className="w-full sm:w-auto"
            >
              {isSpanish ? 'Llamar Ahora' : 'Call Now'}
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              href={isSpanish ? '/contact-es.html' : '/contact-en.html'}
              className="w-full sm:w-auto"
            >
              {isSpanish ? 'Consulta Gratuita' : 'Free Consultation'}
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceIcon
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}