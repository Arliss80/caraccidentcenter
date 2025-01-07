import { MedicalService } from '../../types/medical';

export const orthopedicCare: MedicalService = {
  id: 'orthopedic',
  title: 'Orthopedic Care',
  titleEs: 'Atención Ortopédica',
  icon: 'Bone',
  shortDescription: 'Expert treatment for bone, joint, and soft tissue injuries by specialized orthopedic surgeons.',
  shortDescriptionEs: 'Tratamiento experto para lesiones de huesos, articulaciones y tejidos blandos por cirujanos ortopédicos especializados.',
  fullDescription: 'Our orthopedic specialists provide comprehensive care for all types of musculoskeletal injuries resulting from accidents. From fractures and joint injuries to soft tissue trauma, our experienced surgeons use the latest techniques.',
  fullDescriptionEs: 'Nuestros especialistas ortopédicos brindan atención integral para todo tipo de lesiones musculoesqueléticas resultantes de accidentes.',
  benefits: [
    'Specialized trauma expertise',
    'Advanced surgical techniques',
    'Minimally invasive options',
    'Comprehensive rehabilitation'
  ],
  benefitsEs: [
    'Experiencia especializada en trauma',
    'Técnicas quirúrgicas avanzadas',
    'Opciones mínimamente invasivas',
    'Rehabilitación integral'
  ],
  pipCoverage: {
    details: 'Orthopedic treatment is covered under PIP insurance for accident-related injuries.',
    detailsEs: 'El tratamiento ortopédico está cubierto por el seguro PIP para lesiones relacionadas con accidentes.',
    requirements: [
      'Initial trauma assessment',
      'Diagnostic imaging',
      'Treatment plan documentation'
    ],
    requirementsEs: [
      'Evaluación inicial de trauma',
      'Imágenes diagnósticas',
      'Documentación del plan de tratamiento'
    ]
  },
  atFaultCoverage: {
    details: 'Extended orthopedic care may be covered by the at-fault party\'s insurance.',
    detailsEs: 'La atención ortopédica extendida puede estar cubierta por el seguro de la parte culpable.',
    process: [
      'Document injury extent',
      'Track treatment progress',
      'Maintain surgical records'
    ],
    processEs: [
      'Documentar extensión de la lesión',
      'Seguimiento del progreso del tratamiento',
      'Mantener registros quirúrgicos'
    ]
  },
  faqs: [
    {
      question: 'When is surgery necessary?',
      questionEs: '¿Cuándo es necesaria la cirugía?',
      answer: 'Surgery is recommended when non-surgical treatments won\'t provide adequate healing, or for severe injuries requiring immediate repair.',
      answerEs: 'La cirugía se recomienda cuando los tratamientos no quirúrgicos no proporcionarán una curación adecuada, o para lesiones graves que requieren reparación inmediata.'
    }
  ]
};