import { MedicalService } from '../../types/medical';

export const urgentCare: MedicalService = {
  id: 'urgent-care',
  title: 'Urgent Care',
  titleEs: 'Atención Urgente',
  icon: 'Cross',
  shortDescription: 'Immediate medical attention for non-emergency injuries with extended hours and weekend availability.',
  shortDescriptionEs: 'Atención médica inmediata para lesiones que no son de emergencia con horario extendido y disponibilidad los fines de semana.',
  fullDescription: 'Our network of urgent care facilities provides immediate, high-quality care for non-emergency accident injuries. With extended hours and weekend availability, we ensure you receive prompt medical attention when you need it.',
  fullDescriptionEs: 'Nuestra red de centros de atención urgente proporciona atención inmediata y de alta calidad para lesiones por accidentes que no son de emergencia.',
  benefits: [
    'Immediate walk-in service',
    'Extended hours and weekend availability',
    'On-site diagnostic services',
    'Shorter wait times than emergency rooms'
  ],
  benefitsEs: [
    'Servicio inmediato sin cita',
    'Horario extendido y disponibilidad los fines de semana',
    'Servicios de diagnóstico en el sitio',
    'Tiempos de espera más cortos que las salas de emergencia'
  ],
  pipCoverage: {
    details: 'Urgent care visits are covered under PIP insurance for accident-related injuries.',
    detailsEs: 'Las visitas de atención urgente están cubiertas por el seguro PIP para lesiones relacionadas con accidentes.',
    requirements: [
      'Accident documentation',
      'Initial assessment records',
      'Treatment documentation'
    ],
    requirementsEs: [
      'Documentación del accidente',
      'Registros de evaluación inicial',
      'Documentación del tratamiento'
    ]
  },
  atFaultCoverage: {
    details: 'Additional urgent care services may be covered by the at-fault party\'s insurance.',
    detailsEs: 'Los servicios adicionales de atención urgente pueden estar cubiertos por el seguro de la parte culpable.',
    process: [
      'Document all services received',
      'Maintain treatment records',
      'Follow recommended care plan'
    ],
    processEs: [
      'Documentar todos los servicios recibidos',
      'Mantener registros de tratamiento',
      'Seguir el plan de atención recomendado'
    ]
  },
  faqs: [
    {
      question: 'When should I choose urgent care over emergency care?',
      questionEs: '¿Cuándo debo elegir atención urgente en lugar de atención de emergencia?',
      answer: 'Choose urgent care for non-life-threatening injuries such as sprains, strains, minor cuts, or when you need immediate care but your condition isn\'t severe enough for the emergency room.',
      answerEs: 'Elija atención urgente para lesiones que no ponen en peligro la vida, como esguinces, distensiones, cortes menores o cuando necesita atención inmediata pero su condición no es lo suficientemente grave para la sala de emergencias.'
    }
  ]
};