import { MedicalService } from '../../types/medical';

export const neurologyCare: MedicalService = {
  id: 'neurology',
  title: 'Neurology',
  titleEs: 'Neurología',
  icon: 'Brain',
  shortDescription: 'Specialized care for head injuries, concussions, and neurological complications from accidents.',
  shortDescriptionEs: 'Atención especializada para lesiones en la cabeza, conmociones cerebrales y complicaciones neurológicas por accidentes.',
  fullDescription: 'Our network of neurologists provides expert care for accident-related head injuries, concussions, and other neurological conditions using advanced diagnostic tools and treatment approaches.',
  fullDescriptionEs: 'Nuestra red de neurólogos brinda atención experta para lesiones en la cabeza relacionadas con accidentes, conmociones cerebrales y otras afecciones neurológicas.',
  benefits: [
    'Specialized head injury expertise',
    'Advanced diagnostic capabilities',
    'Comprehensive treatment plans',
    'Concussion management protocols'
  ],
  benefitsEs: [
    'Experiencia especializada en lesiones cerebrales',
    'Capacidades diagnósticas avanzadas',
    'Planes de tratamiento integrales',
    'Protocolos de manejo de conmociones cerebrales'
  ],
  pipCoverage: {
    details: 'Neurological care is covered under PIP insurance for accident-related injuries.',
    detailsEs: 'La atención neurológica está cubierta por el seguro PIP para lesiones relacionadas con accidentes.',
    requirements: [
      'Detailed neurological assessment',
      'Diagnostic test results',
      'Treatment plan documentation'
    ],
    requirementsEs: [
      'Evaluación neurológica detallada',
      'Resultados de pruebas diagnósticas',
      'Documentación del plan de tratamiento'
    ]
  },
  atFaultCoverage: {
    details: 'Extended neurological care may be covered by the at-fault party\'s insurance.',
    detailsEs: 'La atención neurológica extendida puede estar cubierta por el seguro de la parte culpable.',
    process: [
      'Document all neurological symptoms',
      'Track treatment progress',
      'Maintain detailed records'
    ],
    processEs: [
      'Documentar todos los síntomas neurológicos',
      'Seguimiento del progreso del tratamiento',
      'Mantener registros detallados'
    ]
  },
  faqs: [
    {
      question: 'When should I see a neurologist after an accident?',
      questionEs: '¿Cuándo debo ver a un neurólogo después de un accidente?',
      answer: 'You should see a neurologist if you experience headaches, dizziness, confusion, memory issues, or any other neurological symptoms after an accident.',
      answerEs: 'Debe ver a un neurólogo si experimenta dolores de cabeza, mareos, confusión, problemas de memoria o cualquier otro síntoma neurológico después de un accidente.'
    }
  ]
};