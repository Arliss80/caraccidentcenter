import { MedicalService } from '../../types/medical';

export const surgicalCare: MedicalService = {
  id: 'surgical',
  title: 'Surgical Care',
  titleEs: 'Atención Quirúrgica',
  icon: 'Scissors', // Changed from 'Scalpel' to 'Scissors' which exists in lucide-react
  shortDescription: 'Expert surgical intervention for severe accident injuries requiring operative treatment.',
  shortDescriptionEs: 'Intervención quirúrgica experta para lesiones graves por accidentes que requieren tratamiento operativo.',
  fullDescription: 'Our network includes highly skilled surgeons specializing in trauma, orthopedics, neurosurgery, and reconstructive procedures. These experienced specialists provide advanced surgical care for accident victims with severe injuries requiring operative intervention.',
  fullDescriptionEs: 'Nuestra red incluye cirujanos altamente calificados especializados en trauma, ortopedia, neurocirugía y procedimientos reconstructivos. Estos especialistas experimentados brindan atención quirúrgica avanzada para víctimas de accidentes con lesiones graves que requieren intervención operativa.',
  benefits: [
    'Board-certified trauma surgeons',
    'Minimally invasive surgical options',
    'State-of-the-art surgical facilities',
    'Comprehensive post-operative care'
  ],
  benefitsEs: [
    'Cirujanos de trauma certificados',
    'Opciones quirúrgicas mínimamente invasivas',
    'Instalaciones quirúrgicas de última generación',
    'Atención postoperatoria integral'
  ],
  pipCoverage: {
    details: 'Surgical procedures are covered under PIP insurance when medically necessary.',
    detailsEs: 'Los procedimientos quirúrgicos están cubiertos por el seguro PIP cuando son médicamente necesarios.',
    requirements: [
      'Pre-authorization documentation',
      'Medical necessity verification',
      'Detailed surgical planning',
      'Post-operative care coordination'
    ],
    requirementsEs: [
      'Documentación de pre-autorización',
      'Verificación de necesidad médica',
      'Planificación quirúrgica detallada',
      'Coordinación de atención postoperatoria'
    ]
  },
  atFaultCoverage: {
    details: 'Additional surgical procedures may be covered by the at-fault party\'s insurance.',
    detailsEs: 'Los procedimientos quirúrgicos adicionales pueden estar cubiertos por el seguro de la parte culpable.',
    process: [
      'Comprehensive surgical documentation',
      'Expert medical opinions',
      'Long-term recovery planning'
    ],
    processEs: [
      'Documentación quirúrgica completa',
      'Opiniones médicas expertas',
      'Planificación de recuperación a largo plazo'
    ]
  },
  faqs: [
    {
      question: 'When is surgery necessary after an accident?',
      questionEs: '¿Cuándo es necesaria la cirugía después de un accidente?',
      answer: 'Surgery may be necessary for severe injuries such as complex fractures, internal injuries, or conditions that haven\'t responded to conservative treatment. Our surgeons carefully evaluate each case to determine the most appropriate treatment approach.',
      answerEs: 'La cirugía puede ser necesaria para lesiones graves como fracturas complejas, lesiones internas o condiciones que no han respondido al tratamiento conservador. Nuestros cirujanos evalúan cuidadosamente cada caso para determinar el enfoque de tratamiento más apropiado.'
    }
  ]
};