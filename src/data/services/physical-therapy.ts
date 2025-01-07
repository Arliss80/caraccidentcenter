import { MedicalService } from '../../types/medical';

export const physicalTherapy: MedicalService = {
  id: 'physical-therapy',
  title: 'Physical Therapy',
  titleEs: 'Terapia Física',
  icon: 'UserCog',
  shortDescription: 'Customized rehabilitation programs to restore mobility, strength, and function after accident-related injuries.',
  shortDescriptionEs: 'Programas de rehabilitación personalizados para restaurar la movilidad, fuerza y función después de lesiones por accidentes.',
  fullDescription: 'Our physical therapy services provide comprehensive rehabilitation for accident victims, focusing on pain management, mobility restoration, and functional recovery. Our experienced therapists use advanced techniques and state-of-the-art equipment to create personalized treatment plans.',
  fullDescriptionEs: 'Nuestros servicios de terapia física proporcionan rehabilitación integral para víctimas de accidentes, enfocándose en el manejo del dolor, la restauración de la movilidad y la recuperación funcional.',
  benefits: [
    'Customized treatment plans',
    'Advanced rehabilitation techniques',
    'Pain management strategies',
    'Functional movement training'
  ],
  benefitsEs: [
    'Planes de tratamiento personalizados',
    'Técnicas avanzadas de rehabilitación',
    'Estrategias de manejo del dolor',
    'Entrenamiento de movimiento funcional'
  ],
  pipCoverage: {
    details: 'Physical therapy is covered under PIP insurance when medically necessary.',
    detailsEs: 'La terapia física está cubierta por el seguro PIP cuando es médicamente necesaria.',
    requirements: [
      'Physician referral',
      'Initial evaluation',
      'Treatment plan documentation',
      'Progress reports'
    ],
    requirementsEs: [
      'Referencia médica',
      'Evaluación inicial',
      'Documentación del plan de tratamiento',
      'Informes de progreso'
    ]
  },
  atFaultCoverage: {
    details: 'Extended physical therapy may be covered by the at-fault party\'s insurance.',
    detailsEs: 'La terapia física extendida puede estar cubierta por el seguro de la parte culpable.',
    process: [
      'Document all sessions',
      'Track functional improvements',
      'Regular progress assessments'
    ],
    processEs: [
      'Documentar todas las sesiones',
      'Seguimiento de mejoras funcionales',
      'Evaluaciones regulares de progreso'
    ]
  },
  faqs: [
    {
      question: 'When should I start physical therapy after an accident?',
      questionEs: '¿Cuándo debo comenzar la terapia física después de un accidente?',
      answer: 'Physical therapy should begin as soon as your physician clears you for treatment, typically within days or weeks of the accident depending on your injuries.',
      answerEs: 'La terapia física debe comenzar tan pronto como su médico lo autorice para el tratamiento, típicamente dentro de días o semanas después del accidente dependiendo de sus lesiones.'
    }
  ]
};