import { MedicalService } from '../../types/medical';

export const diagnosticImaging: MedicalService = {
  id: 'diagnostic-imaging',
  title: 'Diagnostic Imaging',
  titleEs: 'Imágenes Diagnósticas',
  icon: 'ScanLine',
  shortDescription: 'State-of-the-art MRI, X-ray, and CT scan services for accurate injury assessment and treatment planning.',
  shortDescriptionEs: 'Servicios de MRI, rayos X y tomografía computarizada de última generación para una evaluación precisa de lesiones.',
  fullDescription: 'Our advanced imaging centers provide comprehensive diagnostic services using the latest technology. From digital X-rays to high-resolution MRI and CT scans, we offer quick scheduling and rapid results.',
  fullDescriptionEs: 'Nuestros centros de imágenes avanzadas proporcionan servicios diagnósticos integrales utilizando la última tecnología.',
  benefits: [
    'Latest imaging technology',
    'Quick appointment scheduling',
    'Rapid results reporting',
    'Expert radiologist interpretation'
  ],
  benefitsEs: [
    'Tecnología de imagen más reciente',
    'Programación rápida de citas',
    'Informes rápidos de resultados',
    'Interpretación por radiólogos expertos'
  ],
  pipCoverage: {
    details: 'Diagnostic imaging is covered under PIP insurance when medically necessary.',
    detailsEs: 'Las imágenes diagnósticas están cubiertas por el seguro PIP cuando son médicamente necesarias.',
    requirements: [
      'Physician referral',
      'Medical necessity documentation',
      'Prior authorization if required'
    ],
    requirementsEs: [
      'Referencia médica',
      'Documentación de necesidad médica',
      'Autorización previa si es necesaria'
    ]
  },
  atFaultCoverage: {
    details: 'Additional imaging services may be covered by the at-fault party\'s insurance.',
    detailsEs: 'Los servicios adicionales de imágenes pueden estar cubiertos por el seguro de la parte culpable.',
    process: [
      'Obtain necessary referrals',
      'Schedule prescribed studies',
      'Maintain imaging records'
    ],
    processEs: [
      'Obtener referencias necesarias',
      'Programar estudios prescritos',
      'Mantener registros de imágenes'
    ]
  },
  faqs: [
    {
      question: 'How quickly can I get an imaging appointment?',
      questionEs: '¿Qué tan rápido puedo obtener una cita para imágenes?',
      answer: 'We prioritize accident cases and typically offer appointments within 24-48 hours for most imaging studies.',
      answerEs: 'Priorizamos casos de accidentes y típicamente ofrecemos citas dentro de 24-48 horas para la mayoría de los estudios.'
    }
  ]
};