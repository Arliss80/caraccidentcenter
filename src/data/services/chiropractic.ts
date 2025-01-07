import { MedicalService } from '../../types/medical';

export const chiropracticCare: MedicalService = {
  id: 'chiropractic',
  title: 'Chiropractic Care',
  titleEs: 'Atención Quiropráctica',
  icon: 'Activity',
  shortDescription: 'Specialized treatment for spine and musculoskeletal injuries common in car accidents.',
  shortDescriptionEs: 'Tratamiento especializado para lesiones de columna y musculoesqueléticas comunes en accidentes automovilísticos.',
  fullDescription: 'Our network of experienced chiropractors specializes in treating accident-related injuries, including whiplash, back pain, neck injuries, and other musculoskeletal conditions. Using advanced techniques and evidence-based treatments, our chiropractors focus on reducing pain, restoring mobility, and preventing long-term complications.',
  fullDescriptionEs: 'Nuestra red de quiroprácticos experimentados se especializa en tratar lesiones relacionadas con accidentes, incluyendo latigazo cervical, dolor de espalda, lesiones de cuello y otras condiciones musculoesqueléticas.',
  benefits: [
    'Immediate pain relief',
    'Non-invasive treatment options',
    'Specialized accident injury expertise',
    'Comprehensive spine care'
  ],
  benefitsEs: [
    'Alivio inmediato del dolor',
    'Opciones de tratamiento no invasivas',
    'Experiencia especializada en lesiones por accidentes',
    'Cuidado integral de la columna'
  ],
  pipCoverage: {
    details: 'Chiropractic treatment is covered under PIP insurance for accident-related injuries.',
    detailsEs: 'El tratamiento quiropráctico está cubierto por el seguro PIP para lesiones relacionadas con accidentes.',
    requirements: [
      'Initial injury assessment',
      'Treatment plan documentation',
      'Progress monitoring',
      'Medical necessity verification'
    ],
    requirementsEs: [
      'Evaluación inicial de lesiones',
      'Documentación del plan de tratamiento',
      'Monitoreo del progreso',
      'Verificación de necesidad médica'
    ]
  },
  atFaultCoverage: {
    details: 'Additional chiropractic care may be covered by the at-fault party\'s insurance.',
    detailsEs: 'La atención quiropráctica adicional puede estar cubierta por el seguro de la parte culpable.',
    process: [
      'Document all treatments',
      'Track progress metrics',
      'Maintain detailed records'
    ],
    processEs: [
      'Documentar todos los tratamientos',
      'Seguimiento de métricas de progreso',
      'Mantener registros detallados'
    ]
  },
  faqs: [
    {
      question: 'How soon after an accident should I see a chiropractor?',
      questionEs: '¿Qué tan pronto después de un accidente debo ver a un quiropráctico?',
      answer: 'We recommend seeing a chiropractor within 72 hours of an accident, even if you don\'t feel immediate pain. Early intervention can prevent long-term complications.',
      answerEs: 'Recomendamos ver a un quiropráctico dentro de las 72 horas después de un accidente, incluso si no siente dolor inmediato. La intervención temprana puede prevenir complicaciones a largo plazo.'
    }
  ]
};