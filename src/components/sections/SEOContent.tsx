import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export default function SEOContent() {
  const { isSpanish } = useLanguage();

  return (
    <section className="py-12 bg-white">
      <div className="container-padding">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSpanish 
              ? "Centro Líder de Accidentes Automovilísticos en Utah" 
              : "Utah's Leading Car Accident Recovery Center"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {isSpanish 
                  ? "Red Completa de Atención Médica y Legal" 
                  : "Complete Medical and Legal Care Network"}
              </h3>
              <p className="text-gray-600 mb-4">
                {isSpanish
                  ? "Nuestra red integral incluye los mejores médicos especializados en accidentes y abogados experimentados en todo Utah. Desde atención quiropráctica hasta representación legal experta, coordinamos cada aspecto de su recuperación."
                  : "Our comprehensive network includes Utah's top accident-specialized doctors and experienced attorneys. From chiropractic care to expert legal representation, we coordinate every aspect of your recovery."}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {isSpanish 
                  ? "Especialistas en Lesiones por Accidentes" 
                  : "Car Accident Injury Specialists"}
              </h3>
              <p className="text-gray-600 mb-4">
                {isSpanish
                  ? "Nuestros médicos especializados tratan todo tipo de lesiones por accidentes, incluyendo latigazo cervical, lesiones cerebrales traumáticas, fracturas y lesiones de tejidos blandos. Trabajamos con su seguro para maximizar sus beneficios."
                  : "Our specialized doctors treat all types of accident injuries including whiplash, traumatic brain injuries, fractures, and soft tissue injuries. We work with your insurance to maximize your benefits."}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              {isSpanish 
                ? "¿Por Qué Elegir Car Accident Center en Utah?" 
                : "Why Choose Car Accident Center in Utah?"}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {(isSpanish ? [
                "Red completa de médicos y abogados especializados en accidentes",
                "Más de 15 años de experiencia sirviendo a la comunidad de Utah",
                "Atención personalizada en español e inglés",
                "Resultados comprobados en casos de accidentes automovilísticos",
                "Sin honorarios a menos que ganemos su caso",
                "Consulta inicial gratuita y evaluación de su caso",
                "Coordinación completa de beneficios de seguro PIP"
              ] : [
                "Complete network of accident-specialized doctors and attorneys",
                "Over 15 years of experience serving the Utah community",
                "Personalized attention in English and Spanish",
                "Proven track record in car accident cases",
                "No fees unless we win your case",
                "Free initial consultation and case evaluation",
                "Complete coordination of PIP insurance benefits"
              ]).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              {isSpanish 
                ? "Atención Médica Especializada en Accidentes" 
                : "Specialized Accident Medical Care"}
            </h3>
            <p className="text-gray-600 mb-4">
              {isSpanish
                ? "Nuestros proveedores médicos especializados entienden las complejidades de las lesiones por accidentes automovilísticos. Ofrecemos atención integral que incluye tratamiento quiropráctico, terapia física, manejo del dolor y más. Trabajamos directamente con su seguro para simplificar el proceso."
                : "Our specialized medical providers understand the complexities of car accident injuries. We offer comprehensive care including chiropractic treatment, physical therapy, pain management, and more. We work directly with your insurance to simplify the process."}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              {isSpanish 
                ? "Representación Legal Experta" 
                : "Expert Legal Representation"}
            </h3>
            <p className="text-gray-600 mb-4">
              {isSpanish
                ? "Nuestros abogados especializados en accidentes automovilísticos tienen un historial comprobado de maximizar compensaciones. Manejamos todos los aspectos de su caso, desde la documentación hasta las negociaciones con las compañías de seguros, mientras usted se enfoca en su recuperación."
                : "Our car accident attorneys have a proven track record of maximizing compensation. We handle all aspects of your case, from documentation to insurance company negotiations, while you focus on recovery."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}