import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, MapPin, Clock, Shield } from 'lucide-react';
import { locations } from '../data/locations';
import Button from '../components/ui/Button';
import LocationSchema from '../components/location/LocationSchema';
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '../constants/contact';
import { useLanguage } from '../hooks/useLanguage';

export default function LocationPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { isSpanish } = useLanguage();
  const location = locations.find(loc => loc.urlSlug === citySlug);

  if (!location) {
    return <div>{isSpanish ? 'Ubicación no encontrada' : 'Location not found'}</div>;
  }

  const title = isSpanish ? location.titleEs : location.title;
  const description = isSpanish ? location.descriptionEs : location.description;
  const h1 = isSpanish ? location.h1Es : location.h1;
  const intro = isSpanish ? location.introEs : location.intro;

  const legalHelp = {
    title: isSpanish 
      ? `Por Qué la Ayuda Legal en ${location.city} Es Crucial Después de un Accidente`
      : `Why Legal Help in ${location.city} Is Critical After a Crash`,
    description: isSpanish
      ? `Después de un accidente automovilístico en ${location.city}, tener un abogado local con experiencia es crucial. Nuestra red de abogados de accidentes comprende el sistema legal de Utah y sabe cómo maximizar su compensación.`
      : `After a car accident in ${location.city}, having an experienced local attorney is crucial. Our network of car accident lawyers understands Utah's legal system and how to maximize your compensation.`,
    points: isSpanish ? [
      "Conocimiento profundo de las leyes y regulaciones locales de tráfico",
      "Relaciones establecidas con tribunales locales y compañías de seguros",
      "Experiencia con casos similares en el área",
      "Comprensión de recursos médicos locales y costos"
    ] : [
      "Deep knowledge of local traffic laws and regulations",
      "Established relationships with local courts and insurance companies",
      "Experience with similar cases in the area",
      "Understanding of local medical resources and costs"
    ]
  };

  const medicalCare = {
    title: isSpanish
      ? `Mejores Quiroprácticos y Médicos para Lesiones por Accidentes en ${location.city}`
      : `Top Auto Injury Chiropractors & Doctors in ${location.city}`,
    description: isSpanish
      ? `Nuestra red incluye profesionales médicos experimentados en ${location.city} que se especializan en tratar lesiones por accidentes automovilísticos. Desde atención de emergencia hasta rehabilitación a largo plazo, lo conectaremos con los proveedores adecuados.`
      : `Our network includes experienced medical professionals throughout ${location.city} who specialize in treating car accident injuries. From emergency care to long-term rehabilitation, we'll connect you with the right providers.`,
    services: isSpanish ? [
      "Atención médica de emergencia",
      "Tratamiento quiropráctico",
      "Terapia física",
      "Manejo del dolor",
      "Imágenes diagnósticas",
      "Atención ortopédica"
    ] : [
      "Emergency medical care",
      "Chiropractic treatment",
      "Physical therapy",
      "Pain management",
      "Diagnostic imaging",
      "Orthopedic care"
    ]
  };

  const steps = {
    title: isSpanish
      ? `Qué Hacer Inmediatamente Después de un Accidente en ${location.city}`
      : `What to Do Immediately After a Car Accident in ${location.city}`,
    list: isSpanish ? [
      "Asegure la seguridad de todos y llame al 911 si es necesario",
      "Documente la escena del accidente con fotos",
      "Recopile información de todas las partes involucradas",
      "Busque atención médica, incluso para lesiones menores",
      "Contacte a su compañía de seguros",
      "Obtenga consulta legal antes de aceptar cualquier oferta"
    ] : [
      "Ensure everyone's safety and call 911 if needed",
      "Document the accident scene with photos",
      "Gather information from all parties involved",
      "Seek medical attention, even for minor injuries",
      "Contact your insurance company",
      "Get legal consultation before accepting any offers"
    ]
  };

  const resources = {
    title: isSpanish ? "Recursos Locales Importantes:" : "Important Local Resources:",
    items: isSpanish ? [
      {
        title: "Servicios de Emergencia",
        content: "Llame al 911 para asistencia inmediata"
      },
      {
        title: "Departamento de Policía",
        content: `Departamento de Policía de ${location.city} - Línea no emergencia`
      },
      {
        title: "Hospital más Cercano",
        content: "Centros médicos de emergencia locales"
      },
      {
        title: "Reclamos de Seguro",
        content: "Documente todo y contacte a su proveedor"
      }
    ] : [
      {
        title: "Emergency Services",
        content: "Call 911 for immediate assistance"
      },
      {
        title: "Police Department",
        content: `${location.city} Police Department - Non-emergency line`
      },
      {
        title: "Nearest Hospital",
        content: "Local emergency medical centers"
      },
      {
        title: "Insurance Claims",
        content: "Document everything and contact your provider"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <LocationSchema location={location} />
      
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-padding relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center text-white hover:text-blue-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isSpanish ? 'Volver al Inicio' : 'Back to Home'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {h1}
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl">
            {intro}
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              href={CONTACT_PHONE_HREF}
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Phone className="w-5 h-5 mr-2" />
              {isSpanish ? 'Llamar Ahora: ' : 'Call Now: '}{CONTACT_PHONE}
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="#contact"
            >
              {isSpanish ? 'Consulta Gratuita' : 'Free Consultation'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-padding py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {legalHelp.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {legalHelp.description}
            </p>
            <ul className="space-y-4">
              {legalHelp.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              {medicalCare.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {medicalCare.description}
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                {isSpanish ? 'Servicios Médicos Disponibles:' : 'Available Medical Services:'}
              </h3>
              <ul className="space-y-3">
                {medicalCare.services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What to Do Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            {steps.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {isSpanish ? 'Pasos Esenciales:' : 'Essential Steps:'}
              </h3>
              <ol className="space-y-4">
                {steps.list.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{resources.title}</h3>
              <ul className="space-y-4">
                {resources.items.map((resource, index) => (
                  <li key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <strong className="block text-gray-900">{resource.title}</strong>
                    <span className="text-gray-600">{resource.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isSpanish 
                ? `Obtenga una Consulta Gratuita en ${location.city}, Utah`
                : `Get a Free Consultation in ${location.city}, Utah`}
            </h2>
            <p className="text-xl mb-8">
              {isSpanish
                ? `No espere para obtener la ayuda que necesita. Nuestro equipo está disponible 24/7 para conectarlo con abogados y profesionales médicos experimentados en ${location.city}.`
                : `Don't wait to get the help you need. Our team is available 24/7 to connect you with experienced car accident attorneys and medical professionals in ${location.city}.`}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={CONTACT_PHONE_HREF}
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                {isSpanish ? 'Llamar: ' : 'Call Now: '}{CONTACT_PHONE}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                {isSpanish ? 'Evaluación Gratuita de Caso' : 'Free Case Review'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}