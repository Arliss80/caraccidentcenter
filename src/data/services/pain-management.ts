import { MedicalService } from '../../types/medical';

export const painManagement: MedicalService = {
  id: 'pain-management',
  title: 'Pain Management',
  titleEs: 'Manejo del Dolor',
  icon: 'Pill',
  shortDescription: 'Advanced treatment options for both acute and chronic pain resulting from accident injuries.',
  shortDescriptionEs: 'Opciones avanzadas de tratamiento para dolor agudo y crónico resultante de lesiones por accidentes.',
  fullDescription: 'Our pain management specialists provide comprehensive care for accident-related pain, utilizing a multi-modal approach that includes medication management, interventional procedures, and alternative therapies. We focus on both immediate pain relief and long-term pain control strategies.',
  fullDescriptionEs: 'Nuestros especialistas en manejo del dolor proporcionan atención integral para el dolor relacionado con accidentes, utilizando un enfoque multimodal que incluye manejo de medicamentos, procedimientos intervencionistas y terapias alternativas.',
  benefits: [
    'Comprehensive pain assessment',
    'Multiple treatment modalities',
    'Medication management',
    'Alternative therapy options'
  ],
  benefitsEs: [
    'Evaluación integral del dolor',
    'Múltiples modalidades de tratamiento',
    'Manejo de medicamentos',
    'Opciones de terapia alternativa'
  ],
  pipCoverage: {
    details: 'Pain management services are covered under PIP insurance for accident-related injuries.',
    detailsEs: 'Los servicios de manejo del dolor están cubiertos por el seguro PIP para lesiones relacionadas con accidentes.',
    requirements: [
      'Pain assessment documentation',
      'Treatment plan records',
      'Medication monitoring',
      'Progress evaluation'
    ],
    requirementsEs: [
      'Documentación de evaluación del dolor',
      'Registros del plan de tratamiento',
      'Monitoreo de medicamentos',
      'Evaluación del progreso'
    ]
  },
  atFaultCoverage: {
    details: 'Ongoing pain management may be covered by the at-fault party\'s insurance.',
    detailsEs: 'El manejo continuo del dolor puede estar cubierto por el seguro de la parte culpable.',
    process: [
      'Document pain levels',
      'Track treatment effectiveness',
      'Monitor medication use'
    ],
    processEs: [
      'Documentar niveles de dolor',
      'Seguimiento de la efectividad del tratamiento',
      'Monitorear uso de medicamentos'
    ]
  },
  faqs: [
    {
      question: 'What pain management options are available?',
      questionEs: '¿Qué opciones de manejo del dolor están disponibles?',
      answer: 'We offer a range of treatments including medication management, nerve blocks, trigger point injections, physical therapy, and alternative therapies like acupuncture and biofeedback.',
      answerEs: 'Ofrecemos una variedad de tratamientos que incluyen manejo de medicamentos, bloqueos nerviosos, inyecciones de puntos gatillo, terapia física y terapias alternativas como acupuntura y biorretroalimentación.'
    }
  ]
};