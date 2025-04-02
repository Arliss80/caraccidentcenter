import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Stethoscope, Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

export default function RecoveryTeam() {
  const { t, isSpanish } = useLanguage();

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: isSpanish ? "Red Verificada" : "Vetted Network",
      description: isSpanish 
        ? "Cada proveedor en nuestra red es rigurosamente evaluado para asegurar la más alta calidad de servicio"
        : "Every provider in our network is rigorously vetted to ensure the highest quality of service"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      title: isSpanish ? "Atención Coordinada" : "Coordinated Care",
      description: isSpanish
        ? "Su equipo médico y legal trabaja en conjunto para optimizar su recuperación y compensación"
        : "Your medical and legal team works together to optimize your recovery and compensation"
    },
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: isSpanish ? "Maximiza tu Compensación" : "Maximize Compensation",
      description: isSpanish
        ? "La documentación y coordinación adecuadas son cruciales para maximizar el valor de su caso"
        : "Proper documentation and coordination are crucial to maximizing your case value"
    }
  ];

  const keyPoints = [
    isSpanish ? "Documentación médica detallada para respaldar su reclamo" : "Detailed medical documentation to support your claim",
    isSpanish ? "Comunicación constante entre su equipo médico y legal" : "Constant communication between your medical and legal team",
    isSpanish ? "Acceso a especialistas experimentados en lesiones por accidentes" : "Access to specialists experienced in accident injuries",
    isSpanish ? "Seguimiento integral del progreso de su recuperación" : "Comprehensive tracking of your recovery progress"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {isSpanish ? "Equipo de Recuperación" : "Recovery Team"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isSpanish 
              ? "El Equipo Correcto Marca la Diferencia" 
              : "The Right Team Makes the Difference"}
          </h2>
          <p className="text-gray-600 text-lg">
            {isSpanish
              ? "En casos de lesiones personales, tener el equipo adecuado de profesionales médicos y legales es crucial para su recuperación y compensación. Nuestra red verificada trabaja en conjunto para garantizar los mejores resultados posibles."
              : "In personal injury cases, having the right team of medical and legal professionals is crucial to your recovery and compensation. Our vetted network works together to ensure the best possible outcomes."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card"
          >
            <h3 className="text-2xl font-bold mb-6">
              {isSpanish ? "Por Qué Es Importante" : "Why It Matters"}
            </h3>
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                variant="primary"
                className="w-full group"
                href="#contact"
              >
                {isSpanish ? "Construya Su Equipo" : "Build Your Team"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}