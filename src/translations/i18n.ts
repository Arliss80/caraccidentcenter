export type TranslationType = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    stats: {
      network: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
  pip: {
    badge: string;
    title: string;
    description: string;
    steps: {
      title: string;
      items: Array<{
        title: string;
        content: string;
      }>;
    };
    benefits: {
      title: string;
      items: string[];
    };
    assistance: {
      title: string;
      points: string[];
      cta: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      text: string;
      name: string;
      location: string;
    }>;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    medical: {
      title: string;
      description: string;
      features: string[];
    };
    legal: {
      title: string;
      description: string;
      features: string[];
    };
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
    info: {
      phone: {
        title: string;
      };
      email: {
        title: string;
        value: string;
      };
      hours: {
        title: string;
        value: string;
      };
    };
  };
  medicalNetwork: {
    hero: {
      title: string;
      description: string;
      imageAlt: string;
    };
  };
  attorneyNetwork: {
    hero: {
      title: string;
      description: string;
      imageAlt: string;
    };
  };
};

const translations: Record<'en' | 'es', TranslationType> = {
  en: {
    hero: {
      title: "Recover with Confidence - Your Partner After an Accident",
      subtitle: "We help you navigate medical, legal, and insurance challenges after a car accident.",
      cta: "Get Free Consultation",
      learnMore: "Learn More"
    },
    about: {
      badge: "15+ Years Experience",
      title: "Utah's Most Trusted Car Accident Network",
      description: "For over 15 years, we've been connecting accident victims with Utah's top attorneys and medical professionals. Our network ensures you get the care and compensation you deserve.",
      stats: {
        network: {
          title: "Trusted Network",
          description: "Verified attorneys and medical professionals"
        },
        experience: {
          title: "Experienced Team",
          description: "1000+ cases successfully handled"
        },
        support: {
          title: "Dedicated Support",
          description: "Always here when you need us"
        }
      }
    },
    pip: {
      badge: "PIP Benefits",
      title: "Understanding Personal Injury Protection (PIP)",
      description: "Personal Injury Protection (PIP) is mandatory coverage in Utah that helps pay for medical expenses and lost wages after an auto accident.",
      steps: {
        title: "How Does PIP Work?",
        items: [
          {
            title: "File a Claim",
            content: "Notify your insurance company about the accident and request PIP benefits."
          },
          {
            title: "Submit Documentation",
            content: "Provide medical bills, proof of lost wages, and other necessary documents."
          },
          {
            title: "Receive Benefits",
            content: "PIP will cover eligible expenses up to the limits of your policy."
          }
        ]
      },
      benefits: {
        title: "What Does PIP Cover?",
        items: [
          "Medical bills (doctor visits, therapy, hospital stays)",
          "Lost wages if you're unable to work",
          "Transportation costs for medical appointments"
        ]
      },
      assistance: {
        title: "Why Choose Car Accident Center for PIP Assistance?",
        points: [
          "Help you understand your PIP benefits",
          "Coordinate with your insurance provider",
          "Connect you with trusted doctors and therapists",
          "Ensure your medical bills are processed correctly"
        ],
        cta: "Call Now"
      }
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real stories from people we've helped",
      items: [
        {
          text: "After my accident, I was lost and confused. The Car Accident Center team guided me through every step. They connected me with an amazing doctor and attorney. I couldn't be more grateful!",
          name: "Sarah Johnson",
          location: "Salt Lake City, UT"
        },
        {
          text: "The support made all the difference. They helped me understand my PIP benefits and got me the medical care I needed. Excellent service!",
          name: "Michael Rodriguez",
          location: "West Valley City, UT"
        },
        {
          text: "Professional, caring, and efficient. They took care of everything while I focused on recovery. The medical providers they recommended were outstanding.",
          name: "Emily Chen",
          location: "Provo, UT"
        }
      ]
    },
    services: {
      badge: "Our Services",
      title: "Comprehensive Recovery Services",
      description: "We coordinate every aspect of your recovery, ensuring you receive the best possible care and support.",
      medical: {
        title: "Medical Care Coordination",
        description: "Connect with top healthcare providers for comprehensive treatment.",
        features: [
          "Immediate medical attention",
          "Specialist referrals",
          "Treatment plan coordination",
          "Progress monitoring"
        ]
      },
      legal: {
        title: "Legal Assistance",
        description: "Expert legal guidance through your accident claim process.",
        features: [
          "Free case evaluation",
          "Experienced attorneys",
          "Claims management",
          "Settlement negotiation"
        ]
      }
    },
    contact: {
      title: "Get Help Now",
      description: "Our team is ready to assist you with your recovery journey.",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      info: {
        phone: {
          title: "Phone"
        },
        email: {
          title: "Email",
          value: "main@caraccidentcenter.com"
        },
        hours: {
          title: "Hours",
          value: "Available Now"
        }
      }
    },
    medicalNetwork: {
      hero: {
        title: "Expert Medical Care Network",
        description: "Access Utah's most qualified healthcare providers specializing in accident-related injuries. Our network ensures you receive comprehensive care for optimal recovery.",
        imageAlt: "Medical professionals in consultation"
      }
    },
    attorneyNetwork: {
      hero: {
        title: "Premier Legal Network",
        description: "Connect with Utah's most experienced personal injury attorneys. Our carefully selected network of legal professionals specialize in accident cases and have a proven track record of success.",
        imageAlt: "Professional attorneys in a modern law office"
      }
    }
  },
  es: {
    hero: {
      title: "Recupérese con Confianza - Su Socio Después de un Accidente",
      subtitle: "Le ayudamos a navegar los desafíos médicos, legales y de seguros después de un accidente automovilístico.",
      cta: "Obtener Consulta Gratuita",
      learnMore: "Más Información"
    },
    about: {
      badge: "15+ Años de Experiencia",
      title: "La Red de Accidentes Automovilísticos Más Confiable de Utah",
      description: "Durante más de 15 años, hemos conectado a víctimas de accidentes con los mejores abogados y profesionales médicos de Utah. Nuestra red asegura que reciba la atención y compensación que merece.",
      stats: {
        network: {
          title: "Red Confiable",
          description: "Abogados y profesionales médicos verificados"
        },
        experience: {
          title: "Equipo Experimentado",
          description: "Más de 1000 casos manejados con éxito"
        },
        support: {
          title: "Soporte Dedicado",
          description: "Siempre aquí cuando nos necesite"
        }
      }
    },
    pip: {
      badge: "Beneficios PIP",
      title: "Entendiendo la Protección contra Lesiones Personales (PIP)",
      description: "La Protección contra Lesiones Personales (PIP) es una cobertura obligatoria en Utah que ayuda a pagar gastos médicos y salarios perdidos después de un accidente automovilístico.",
      steps: {
        title: "¿Cómo Funciona el PIP?",
        items: [
          {
            title: "Presentar un Reclamo",
            content: "Notifique a su compañía de seguros sobre el accidente y solicite beneficios PIP."
          },
          {
            title: "Enviar Documentación",
            content: "Proporcione facturas médicas, prueba de salarios perdidos y otros documentos necesarios."
          },
          {
            title: "Recibir Beneficios",
            content: "PIP cubrirá los gastos elegibles hasta los límites de su póliza."
          }
        ]
      },
      benefits: {
        title: "¿Qué Cubre el PIP?",
        items: [
          "Facturas médicas (visitas al doctor, terapia, estadías hospitalarias)",
          "Salarios perdidos si no puede trabajar",
          "Costos de transporte para citas médicas"
        ]
      },
      assistance: {
        title: "¿Por Qué Elegir Car Accident Center para Asistencia PIP?",
        points: [
          "Le ayudamos a entender sus beneficios PIP",
          "Coordinamos con su proveedor de seguros",
          "Le conectamos con doctores y terapeutas confiables",
          "Aseguramos que sus facturas médicas sean procesadas correctamente"
        ],
        cta: "Llamar Ahora"
      }
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Historias reales de personas que hemos ayudado",
      items: [
        {
          text: "Después de mi accidente, estaba perdida y confundida. El equipo de Car Accident Center me guió en cada paso. Me conectaron con un doctor y abogado increíbles. ¡No podría estar más agradecida!",
          name: "Sarah Johnson",
          location: "Salt Lake City, UT"
        },
        {
          text: "El apoyo hizo toda la diferencia. Me ayudaron a entender mis beneficios PIP y obtuve la atención médica que necesitaba. ¡Excelente servicio!",
          name: "Michael Rodriguez",
          location: "West Valley City, UT"
        },
        {
          text: "Profesional, atento y eficiente. Se encargaron de todo mientras me concentraba en mi recuperación. Los proveedores médicos que recomendaron fueron sobresalientes.",
          name: "Emily Chen",
          location: "Provo, UT"
        }
      ]
    },
    services: {
      badge: "Nuestros Servicios",
      title: "Servicios Integrales de Recuperación",
      description: "Coordinamos cada aspecto de su recuperación, asegurando que reciba la mejor atención y apoyo posible.",
      medical: {
        title: "Coordinación de Atención Médica",
        description: "Conéctese con los mejores proveedores de salud para un tratamiento integral.",
        features: [
          "Atención médica inmediata",
          "Referencias a especialistas",
          "Coordinación del plan de tratamiento",
          "Monitoreo del progreso"
        ]
      },
      legal: {
        title: "Asistencia Legal",
        description: "Orientación legal experta durante el proceso de su reclamo por accidente.",
        features: [
          "Evaluación gratuita del caso",
          "Abogados experimentados",
          "Gestión de reclamos",
          "Negociación de acuerdos"
        ]
      }
    },
    contact: {
      title: "Obtenga Ayuda Ahora",
      description: "Nuestro equipo está listo para ayudarle en su proceso de recuperación.",
      form: {
        name: "Nombre Completo",
        phone: "Número de Teléfono",
        email: "Correo Electrónico",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intente nuevamente."
      },
      info: {
        phone: {
          title: "Teléfono"
        },
        email: {
          title: "Correo",
          value: "main@caraccidentcenter.com"
        },
        hours: {
          title: "Horario",
          value: "Disponible Ahora"
        }
      }
    },
    medicalNetwork: {
      hero: {
        title: "Red de Atención Médica Experta",
        description: "Acceda a los proveedores de salud más calificados de Utah especializados en lesiones por accidentes. Nuestra red asegura que reciba atención integral para una recuperación óptima.",
        imageAlt: "Profesionales médicos en consulta"
      }
    },
    attorneyNetwork: {
      hero: {
        title: "Red Legal Premier",
        description: "Conéctese con los abogados de lesiones personales más experimentados de Utah. Nuestra red cuidadosamente seleccionada de profesionales legales se especializa en casos de accidentes y tiene un historial comprobado de éxito.",
        imageAlt: "Abogados profesionales en una oficina moderna"
      }
    }
  }
};

export function useTranslation(language: 'en' | 'es'): TranslationType {
  return translations[language];
}