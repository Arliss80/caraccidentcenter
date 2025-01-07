import { MedicalService } from '../../types/medical';

export const emergencyCare: MedicalService = {
  id: 'emergency-care',
  title: 'Emergency Care',
  titleEs: 'Atención de Emergencia',
  icon: 'HeartPulse',
  shortDescription: '24/7 emergency medical services with direct admission to partner hospitals when needed.',
  shortDescriptionEs: 'Servicios médicos de emergencia 24/7 con admisión directa a hospitales asociados cuando sea necesario.',
  fullDescription: 'Our emergency care network provides immediate, high-level trauma care for accident victims. With direct access to leading trauma centers and emergency departments, we ensure you receive prompt, expert care for serious injuries.',
  fullDescriptionEs: 'Nuestra red de atención de emergencia proporciona atención inmediata de trauma de alto nivel para víctimas de accidentes. Con acceso directo a los principales centros de trauma y departamentos de emergencia.',
  benefits: [
    '24/7 emergency access',
    'Trauma team expertise',
    'Immediate medical intervention',
    'Advanced life support'
  ],
  benefitsEs: [
    'Acceso de emergencia 24/7',
    'Experiencia en equipo de trauma',
    'Intervención médica inmediata',
    'Soporte vital avanzado'
  ],
  pipCoverage: {
    details: 'Emergency medical services are covered under PIP insurance.',
    detailsEs: 'Los servicios médicos de emergencia están cubiertos por el seguro PIP.',
    requirements: [
      'Accident documentation',
      'Emergency records',
      'Treatment documentation'
    ],
    requirementsEs: [
      'Documentación del accidente',
      'Registros de emergencia',
      'Documentación del tratamiento'
    ]
  },
  atFaultCoverage: {
    details: 'Emergency care costs may be covered by the at-fault party\'s insurance.',
    detailsEs: 'Los costos de atención de emergencia pueden estar cubiertos por el seguro de la parte culpable.',
    process: [
      'Document all services',
      'Maintain treatment records',
      'Track all procedures'
    ],
    processEs: [
      'Documentar todos los servicios',
      'Mantener registros de tratamiento',
      'Seguimiento de todos los procedimientos'
    ]
  },
  faqs: [
    {
      question: 'When should I go to the emergency room after an accident?',
      questionEs: '¿Cuándo debo ir a la sala de emergencias después de un accidente?',
      answer: 'Seek emergency care immediately if you experience severe pain, head trauma, loss of consciousness, breathing difficulties, or any serious injury.',
      answerEs: 'Busque atención de emergencia inmediatamente si experimenta dolor severo, trauma en la cabeza, pérdida de consciencia, dificultades respiratorias o cualquier lesión grave.'
    }
  ]
};