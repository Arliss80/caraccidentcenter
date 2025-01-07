import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, AlertCircle, HelpCircle } from 'lucide-react';
import { medicalServices } from '../data/medicalServices';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import { useLanguage } from '../hooks/useLanguage';
import { getLanguageFromURL } from '../utils/i18n';

export default function MedicalServiceDetail() {
  const { serviceId } = useParams();
  const location = useLocation();
  const { isSpanish } = useLanguage();
  const currentLanguage = getLanguageFromURL(location.pathname);
  
  const service = medicalServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 container-padding">
          <h1 className="text-2xl font-bold">
            {isSpanish ? 'Servicio no encontrado' : 'Service not found'}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="container-padding py-12">
          <Link 
            to={`/${currentLanguage}/medical-network`} 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isSpanish ? 'Volver a la Red Médica' : 'Back to Medical Network'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              {isSpanish ? service.titleEs || service.title : service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {isSpanish ? service.fullDescriptionEs || service.fullDescription : service.fullDescription}
            </p>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {isSpanish ? 'Beneficios Principales' : 'Key Benefits'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(isSpanish ? service.benefitsEs || service.benefits : service.benefits).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Coverage */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* PIP Coverage */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {isSpanish ? 'Cobertura PIP' : 'PIP Coverage'}
                </h2>
                <p className="mb-4">
                  {isSpanish ? service.pipCoverage.detailsEs || service.pipCoverage.details : service.pipCoverage.details}
                </p>
                <p className="font-semibold mb-2">
                  {isSpanish ? 'Requisitos:' : 'Requirements:'}
                </p>
                <ul className="space-y-2">
                  {(isSpanish ? service.pipCoverage.requirementsEs || service.pipCoverage.requirements : service.pipCoverage.requirements).map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* At-Fault Coverage */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {isSpanish ? 'Cobertura de Seguro por Culpa' : 'At-Fault Insurance Coverage'}
                </h2>
                <p className="mb-4">
                  {isSpanish ? service.atFaultCoverage.detailsEs || service.atFaultCoverage.details : service.atFaultCoverage.details}
                </p>
                <p className="font-semibold mb-2">
                  {isSpanish ? 'Proceso:' : 'Process:'}
                </p>
                <ul className="space-y-2">
                  {(isSpanish ? service.atFaultCoverage.processEs || service.atFaultCoverage.process : service.atFaultCoverage.process).map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-6">
                {service.faqs?.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-lg font-semibold mb-2 flex items-start">
                      <HelpCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                      {isSpanish ? faq.questionEs || faq.question : faq.question}
                    </h3>
                    <p className="text-gray-600 ml-7">
                      {isSpanish ? faq.answerEs || faq.answer : faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="text-center">
              <Button 
                variant="primary" 
                size="lg" 
                href={isSpanish ? '/contact-es.html' : '/contact-en.html'}
              >
                {isSpanish ? 'Contáctenos' : 'Contact Us'}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}