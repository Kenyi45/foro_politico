import {
  ForumEvent,
  Participant,
  Organizer,
  Testimonial,
  BlogPost,
  ThematicAxis,
  Statistic,
  ThematicAxisDetail,
  GalleryPhoto,
  ForumEventSummary
} from '../types/index';

export const mockForumEvent: ForumEvent = {
  id: '1',
  title: '3er Foro Panamericano de Jóvenes Políticos 2025',
  description: 'Defendiendo la Libertad frente al Socialismo y la Cultura Woke - Encuentro continental de líderes jóvenes comprometidos con la defensa de los valores democráticos y la libertad en América',
  startDate: new Date('2025-10-02T09:00:00'),
  endDate: new Date('2025-10-04T18:00:00'),
  location: 'Centro de Convenciones Lima, Perú',
  type: 'conference',
  capacity: 300,
  registeredCount: 185,
  speakers: ['María González', 'Carlos Rodríguez', 'Ana Martínez'],
  tags: ['política', 'juventud', 'democracia', 'libertad', 'panamericano'],
  image: '/images/forum-event.jpg',
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-06-06')
};

export const mockStatistics: Statistic[] = [
  {
    id: '1',
    label: 'Invitados Esperados',
    value: 250,
    suffix: '+',
    icon: 'Users',
    color: 'primary'
  },
  {
    id: '2',
    label: 'Países Panamericanos',
    value: 23,
    icon: 'Globe',
    color: 'accent'
  },
  {
    id: '3',
    label: 'Proyectos de Impacto',
    value: 85,
    suffix: '+',
    icon: 'Lightbulb',
    color: 'gold'
  },
  {
    id: '4',
    label: 'Días de Actividades',
    value: 3,
    icon: 'Calendar',
    color: 'primary'
  },
  {
    id: '5',
    label: 'Paneles Temáticos',
    value: 12,
    icon: 'MessageSquare',
    color: 'accent'
  },
  {
    id: '6',
    label: 'Talleres Especializados',
    value: 18,
    icon: 'Workshop',
    color: 'gold'
  }
];

export const mockThematicAxes: ThematicAxis[] = [
  {
    id: '1',
    title: 'Gobernanza y Transparencia',
    description: 'Políticas públicas transparentes y participación ciudadana',
    icon: 'Shield',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Juventud y Medio Ambiente',
    description: 'Sostenibilidad y cambio climático desde la perspectiva juvenil',
    icon: 'Leaf',
    color: 'green'
  },
  {
    id: '3',
    title: 'Tecnología y Participación',
    description: 'Innovación tecnológica para la participación democrática',
    icon: 'Smartphone',
    color: 'blue'
  },
  {
    id: '4',
    title: 'Derechos Humanos',
    description: 'Promoción y defensa de los derechos fundamentales',
    icon: 'Heart',
    color: 'red'
  },
  {
    id: '5',
    title: 'Política Local',
    description: 'Fortalecimiento de la democracia a nivel municipal',
    icon: 'MapPin',
    color: 'purple'
  },
  {
    id: '6',
    title: 'Educación Cívica',
    description: 'Formación ciudadana y participación electoral',
    icon: 'GraduationCap',
    color: 'indigo'
  }
];

export const mockOrganizers: Organizer[] = [
  {
    id: '1',
    name: 'Sofía Hernández',
    position: 'Directora Ejecutiva',
    country: 'México',
    bio: 'Politóloga especializada en participación juvenil con 10 años de experiencia en organizaciones internacionales.',
    profileImage: '/images/organizers/sofia.jpg',
    socialMedia: {
      twitter: '@sofia_hernandez',
      linkedin: 'sofia-hernandez-politica'
    },
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: '2',
    name: 'Diego Morales',
    position: 'Coordinador de Programas',
    country: 'Colombia',
    bio: 'Experto en desarrollo de liderazgo juvenil y metodologías participativas.',
    profileImage: '/images/organizers/diego.jpg',
    socialMedia: {
      twitter: '@diego_morales',
      linkedin: 'diego-morales-liderazgo'
    },
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: '3',
    name: 'Camila Santos',
    position: 'Coordinadora de Comunicaciones',
    country: 'Brasil',
    bio: 'Especialista en comunicación política y gestión de redes sociales para organizaciones juveniles.',
    profileImage: '/images/organizers/camila.jpg',
    socialMedia: {
      twitter: '@camila_santos',
      instagram: '@camila.santos.oficial'
    },
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-03-01')
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    participant: 'Andrea López',
    content: 'El foro cambió mi perspectiva sobre la política. Encontré una comunidad de jóvenes comprometidos con el cambio social.',
    image: '/images/testimonials/andrea.jpg',
    country: 'Argentina',
    position: 'Concejal Municipal',
    rating: 5,
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-08-15')
  },
  {
    id: '2',
    participant: 'Miguel Rodríguez',
    content: 'Las conexiones que hice en el foro me ayudaron a desarrollar mi proyecto de participación ciudadana digital.',
    image: '/images/testimonials/miguel.jpg',
    country: 'España',
    position: 'Fundador de CiudadanIA',
    rating: 5,
    createdAt: new Date('2023-09-10'),
    updatedAt: new Date('2023-09-10')
  },
  {
    id: '3',
    participant: 'Valentina Chen',
    content: 'Una experiencia transformadora que me dio las herramientas para liderar cambios en mi comunidad.',
    image: '/images/testimonials/valentina.jpg',
    country: 'Chile',
    position: 'Activista Estudiantil',
    rating: 5,
    createdAt: new Date('2023-10-05'),
    updatedAt: new Date('2023-10-05')
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'El Futuro de la Democracia Participativa',
    excerpt: 'Exploramos cómo las nuevas tecnologías están transformando la participación ciudadana y el ejercicio democrático.',
    content: 'La democracia participativa está evolucionando...',
    author: 'María González',
    authorImage: '/images/authors/maria.jpg',
    image: '/images/blog/democracia-participativa.jpg',
    tags: ['democracia', 'participación', 'tecnología'],
    category: 'Análisis',
    readTime: 8,
    isPublished: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: '2',
    title: 'Jóvenes Líderes en América Latina',
    excerpt: 'Un análisis de los principales movimientos juveniles que están marcando la agenda política regional.',
    content: 'Los jóvenes líderes de América Latina están...',
    author: 'Carlos Mendoza',
    authorImage: '/images/authors/carlos.jpg',
    image: '/images/blog/jovenes-lideres.jpg',
    tags: ['liderazgo', 'juventud', 'américa latina'],
    category: 'Reportaje',
    readTime: 12,
    isPublished: true,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: '3',
    title: 'Herramientas Digitales para la Participación',
    excerpt: 'Revisamos las mejores plataformas y herramientas digitales para fomentar la participación ciudadana.',
    content: 'Las herramientas digitales han revolucionado...',
    author: 'Ana Martínez',
    authorImage: '/images/authors/ana.jpg',
    image: '/images/blog/herramientas-digitales.jpg',
    tags: ['tecnología', 'participación', 'digital'],
    category: 'Guía',
    readTime: 6,
    isPublished: true,
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25')
  }
];

export const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'Isabella Ramírez',
    email: 'isabella@example.com',
    age: 24,
    country: 'México',
    city: 'Ciudad de México',
    bio: 'Estudiante de Ciencias Políticas interesada en políticas públicas de juventud.',
    interests: ['política pública', 'juventud', 'educación'],
    profileImage: '/images/participants/isabella.jpg',
    socialMedia: {
      twitter: '@isabella_r',
      instagram: '@isabella.ramirez'
    },
    registrationDate: new Date('2024-01-15'),
    isActive: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Sebastián Vargas',
    email: 'sebastian@example.com',
    age: 27,
    country: 'Colombia',
    city: 'Bogotá',
    bio: 'Activista social enfocado en derechos humanos y participación ciudadana.',
    interests: ['derechos humanos', 'activismo', 'participación'],
    profileImage: '/images/participants/sebastian.jpg',
    socialMedia: {
      twitter: '@sebastian_v',
      linkedin: 'sebastian-vargas'
    },
    registrationDate: new Date('2024-01-20'),
    isActive: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  }
];

// Utility functions
export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
  return mockTestimonials.slice(0, count);
};

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return mockBlogPosts
    .filter(post => post.isPublished)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
};

export const detailedThematicAxes: ThematicAxisDetail[] = [
  {
    id: '1',
    title: 'Gobernanza y Transparencia',
    description: 'Políticas públicas transparentes y participación ciudadana',
    icon: 'Shield',
    color: 'primary',
    longDescription: 'En la era digital, la gobernanza transparente se ha convertido en un pilar fundamental para la confianza ciudadana. Este eje temático explora cómo los jóvenes líderes pueden promover políticas públicas más transparentes, mecanismos de rendición de cuentas efectivos y herramientas de participación ciudadana que fortalezcan la democracia en América.',
    objectives: [
      'Promover marcos normativos para la transparencia gubernamental',
      'Desarrollar herramientas digitales de participación ciudadana',
      'Fortalecer los mecanismos de rendición de cuentas',
      'Capacitar a jóvenes en auditoría social y control ciudadano',
      'Fomentar el gobierno abierto y la innovación pública'
    ],
    sessions: [
      {
        id: 'gov-1',
        title: 'Gobierno Abierto en América Latina',
        description: 'Panel sobre las mejores prácticas de gobierno abierto en la región',
        type: 'panel',
        duration: 90,
        capacity: 150,
        level: 'intermediate'
      },
      {
        id: 'gov-2',
        title: 'Taller: Herramientas de Transparencia Digital',
        description: 'Sesión práctica sobre plataformas digitales para la transparencia',
        type: 'workshop',
        duration: 120,
        capacity: 50,
        level: 'beginner'
      },
      {
        id: 'gov-3',
        title: 'Debate: Transparencia vs. Privacidad',
        description: 'Debate sobre los límites entre transparencia gubernamental y privacidad',
        type: 'debate',
        duration: 60,
        capacity: 200,
        level: 'advanced'
      }
    ],
    speakers: [
      {
        id: 'sp-gov-1',
        name: 'Dr. Roberto Sánchez',
        position: 'Director de Transparencia Internacional',
        organization: 'Transparencia Internacional América',
        country: 'Argentina',
        bio: 'Experto en anticorrupción con 15 años de experiencia en políticas de transparencia en América Latina.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        expertise: ['Anticorrupción', 'Gobierno Abierto', 'Políticas Públicas'],
        socialMedia: {
          twitter: '@roberto_sanchez',
          linkedin: 'roberto-sanchez-transparencia'
        }
      },
      {
        id: 'sp-gov-2',
        name: 'Dra. Carmen Medina',
        position: 'Coordinadora Regional de Gobierno Digital',
        organization: 'BID - Banco Interamericano de Desarrollo',
        country: 'Colombia',
        bio: 'Especialista en transformación digital gubernamental y participación ciudadana digital.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
        expertise: ['Gobierno Digital', 'Participación Ciudadana', 'Innovación Pública'],
        socialMedia: {
          twitter: '@carmen_medina',
          linkedin: 'carmen-medina-bid'
        }
      }
    ],
    resources: [
      {
        id: 'res-gov-1',
        title: 'Manual de Gobierno Abierto para Jóvenes',
        type: 'document',
        url: '/resources/manual-gobierno-abierto.pdf',
        description: 'Guía práctica para implementar iniciativas de gobierno abierto a nivel local',
        language: 'Español'
      },
      {
        id: 'res-gov-2',
        title: 'Plataformas Digitales de Participación',
        type: 'website',
        url: 'https://decidim.org',
        description: 'Plataforma de código abierto para la participación ciudadana digital',
        language: 'Multiidioma'
      }
    ],
    relatedArticles: [
      'El rol de la juventud en el gobierno abierto',
      'Casos exitosos de transparencia en municipios latinoamericanos',
      'Tecnología blockchain para la transparencia gubernamental'
    ],
    schedule: [
      {
        id: 'sch-gov-1',
        date: new Date('2025-10-02'),
        startTime: '09:00',
        endTime: '10:30',
        sessionId: 'gov-1',
        location: 'Auditorio Principal'
      },
      {
        id: 'sch-gov-2',
        date: new Date('2025-10-02'),
        startTime: '14:00',
        endTime: '16:00',
        sessionId: 'gov-2',
        location: 'Sala de Talleres A'
      }
    ]
  },
  {
    id: '2',
    title: 'Juventud y Medio Ambiente',
    description: 'Sostenibilidad y cambio climático desde la perspectiva juvenil',
    icon: 'Leaf',
    color: 'green',
    longDescription: 'El cambio climático representa uno de los desafíos más urgentes de nuestra época. Los jóvenes líderes están en la primera línea de esta batalla, desarrollando soluciones innovadoras y liderando movimientos de conciencia ambiental. Este eje explora cómo la juventud puede influir en políticas ambientales, promover la sostenibilidad y construir un futuro más verde para América.',
    objectives: [
      'Desarrollar políticas climáticas inclusivas y efectivas',
      'Promover la economía circular y sostenible',
      'Fortalecer el activismo ambiental juvenil',
      'Impulsar la educación ambiental en políticas públicas',
      'Fomentar la innovación verde y tecnologías limpias'
    ],
    sessions: [
      {
        id: 'env-1',
        title: 'Activismo Climático Juvenil en América',
        description: 'Conferencia sobre movimientos juveniles ambientales exitosos',
        type: 'conference',
        duration: 75,
        capacity: 200,
        level: 'beginner'
      },
      {
        id: 'env-2',
        title: 'Taller: Políticas Verdes Locales',
        description: 'Diseño de políticas ambientales a nivel municipal',
        type: 'workshop',
        duration: 180,
        capacity: 40,
        level: 'intermediate'
      }
    ],
    speakers: [
      {
        id: 'sp-env-1',
        name: 'Sophia Martínez',
        position: 'Activista Climática',
        organization: 'Fridays for Future América Latina',
        country: 'México',
        bio: 'Líder del movimiento climático juvenil latinoamericano, con experiencia en campañas internacionales.',
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
        expertise: ['Activismo Climático', 'Políticas Ambientales', 'Liderazgo Juvenil'],
        socialMedia: {
          twitter: '@sophia_clima',
          instagram: '@sophia.climate'
        }
      }
    ],
    resources: [
      {
        id: 'res-env-1',
        title: 'Toolkit de Activismo Climático',
        type: 'document',
        url: '/resources/toolkit-activismo-climatico.pdf',
        description: 'Herramientas prácticas para organizar campañas ambientales',
        language: 'Español'
      }
    ],
    relatedArticles: [
      'Jóvenes líderes en la COP28',
      'Políticas ambientales municipales exitosas',
      'Innovación verde en América Latina'
    ],
    schedule: [
      {
        id: 'sch-env-1',
        date: new Date('2025-10-03'),
        startTime: '10:00',
        endTime: '11:15',
        sessionId: 'env-1',
        location: 'Auditorio Verde'
      }
    ]
  },
  {
    id: '3',
    title: 'Tecnología y Participación',
    description: 'Innovación tecnológica para la participación democrática',
    icon: 'Smartphone',
    color: 'blue',
    longDescription: 'La revolución digital ha transformado radicalmente la forma en que los ciudadanos participan en la democracia. Este eje temático explora cómo las tecnologías emergentes pueden fortalecer la participación ciudadana, mejorar la transparencia gubernamental y crear nuevos espacios de diálogo democrático en la era digital.',
    objectives: [
      'Promover la inclusión digital en procesos democráticos',
      'Desarrollar plataformas de participación ciudadana digital',
      'Combatir la desinformación y promover la alfabetización digital',
      'Explorar el potencial de la inteligencia artificial en la política',
      'Fortalecer la ciberseguridad en procesos electorales'
    ],
    sessions: [
      {
        id: 'tech-1',
        title: 'Democracia Digital: Oportunidades y Desafíos',
        description: 'Panel sobre el impacto de la tecnología en la participación política',
        type: 'panel',
        duration: 90,
        capacity: 180,
        level: 'intermediate'
      },
      {
        id: 'tech-2',
        title: 'Workshop: Creando Apps de Participación',
        description: 'Taller práctico para desarrollar aplicaciones de participación ciudadana',
        type: 'workshop',
        duration: 240,
        capacity: 30,
        level: 'advanced'
      }
    ],
    speakers: [
      {
        id: 'sp-tech-1',
        name: 'Dr. Alejandro Rivera',
        position: 'CTO',
        organization: 'Democracia Digital Lab',
        country: 'Chile',
        bio: 'Experto en tecnología cívica y desarrollador de plataformas de participación ciudadana.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        expertise: ['Tecnología Cívica', 'Desarrollo Web', 'UX/UI Político'],
        socialMedia: {
          twitter: '@alejandro_tech',
          github: 'alejandro-rivera'
        }
      }
    ],
    resources: [
      {
        id: 'res-tech-1',
        title: 'Guía de Tecnología Cívica',
        type: 'book',
        url: '/resources/guia-tecnologia-civica.pdf',
        description: 'Manual completo sobre tecnologías para la participación ciudadana',
        language: 'Español'
      }
    ],
    relatedArticles: [
      'Blockchain y transparencia electoral',
      'Inteligencia artificial en políticas públicas',
      'Combatiendo la desinformación digital'
    ],
    schedule: [
      {
        id: 'sch-tech-1',
        date: new Date('2025-10-03'),
        startTime: '14:00',
        endTime: '15:30',
        sessionId: 'tech-1',
        location: 'Lab de Innovación'
      }
    ]
  },
  {
    id: '4',
    title: 'Derechos Humanos',
    description: 'Promoción y defensa de los derechos fundamentales',
    icon: 'Heart',
    color: 'red',
    longDescription: 'Los derechos humanos constituyen el fundamento de toda sociedad democrática. En un contexto donde estos derechos enfrentan nuevos desafíos, los jóvenes líderes tienen la responsabilidad de promover, defender y ampliar el alcance de los derechos fundamentales para todas las personas, sin discriminación alguna.',
    objectives: [
      'Fortalecer los sistemas de protección de derechos humanos',
      'Combatir todas las formas de discriminación y violencia',
      'Promover la equidad de género y la inclusión social',
      'Defender los derechos de grupos vulnerables',
      'Sensibilizar sobre la importancia de los derechos humanos'
    ],
    sessions: [
      {
        id: 'hr-1',
        title: 'Derechos Humanos en la Era Digital',
        description: 'Conferencia sobre los desafíos de los derechos humanos en el mundo digital',
        type: 'conference',
        duration: 90,
        capacity: 250,
        level: 'beginner'
      },
      {
        id: 'hr-2',
        title: 'Taller: Advocacy para Derechos Humanos',
        description: 'Técnicas de incidencia política para la defensa de derechos',
        type: 'workshop',
        duration: 150,
        capacity: 60,
        level: 'intermediate'
      }
    ],
    speakers: [
      {
        id: 'sp-hr-1',
        name: 'Dra. Ana Belén Torres',
        position: 'Directora Regional',
        organization: 'Amnistía Internacional',
        country: 'España',
        bio: 'Abogada especializada en derechos humanos con más de 20 años de experiencia en la defensa de derechos civiles.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
        expertise: ['Derechos Civiles', 'Justicia Social', 'Advocacy'],
        socialMedia: {
          twitter: '@anabelen_torres',
          linkedin: 'anabelen-torres-ddhh'
        }
      }
    ],
    resources: [
      {
        id: 'res-hr-1',
        title: 'Manual de Derechos Humanos para Jóvenes',
        type: 'document',
        url: '/resources/manual-derechos-humanos.pdf',
        description: 'Guía completa sobre derechos humanos fundamentales y su aplicación',
        language: 'Español'
      }
    ],
    relatedArticles: [
      'Derechos digitales y privacidad',
      'Justicia social en América Latina',
      'Movimientos juveniles por los derechos humanos'
    ],
    schedule: [
      {
        id: 'sch-hr-1',
        date: new Date('2025-10-03'),
        startTime: '16:00',
        endTime: '17:30',
        sessionId: 'hr-1',
        location: 'Auditorio de Derechos'
      }
    ]
  },
  {
    id: '5',
    title: 'Política Local',
    description: 'Fortalecimiento de la democracia a nivel municipal',
    icon: 'MapPin',
    color: 'purple',
    longDescription: 'La política local es el primer escalón de la participación democrática y donde los ciudadanos pueden generar mayor impacto directo. Este eje temático explora cómo los jóvenes pueden participar activamente en la política municipal, promover el desarrollo local sostenible y construir comunidades más fuertes y resilientes.',
    objectives: [
      'Fortalecer la participación ciudadana a nivel local',
      'Promover el desarrollo económico comunitario',
      'Mejorar la gestión pública municipal',
      'Fomentar la cooperación intermunicipal',
      'Impulsar la innovación en gobiernos locales'
    ],
    sessions: [
      {
        id: 'local-1',
        title: 'Gobiernos Locales Innovadores',
        description: 'Panel sobre experiencias exitosas de gobiernos municipales jóvenes',
        type: 'panel',
        duration: 120,
        capacity: 200,
        level: 'intermediate'
      },
      {
        id: 'local-2',
        title: 'Debate: Autonomía Municipal vs. Coordinación Nacional',
        description: 'Debate sobre el equilibrio entre autonomía local y políticas nacionales',
        type: 'debate',
        duration: 90,
        capacity: 150,
        level: 'advanced'
      }
    ],
    speakers: [
      {
        id: 'sp-local-1',
        name: 'Alcalde Javier Moreno',
        position: 'Alcalde Municipal',
        organization: 'Municipio de San Miguel, El Salvador',
        country: 'El Salvador',
        bio: 'El alcalde más joven de Centroamérica, reconocido por sus políticas innovadoras de participación juvenil.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
        expertise: ['Gobierno Local', 'Participación Juvenil', 'Innovación Pública'],
        socialMedia: {
          twitter: '@javiermoreno_sv',
          instagram: '@alcalde_javier'
        }
      }
    ],
    resources: [
      {
        id: 'res-local-1',
        title: 'Guía de Participación Política Local',
        type: 'book',
        url: '/resources/guia-politica-local.pdf',
        description: 'Manual práctico para participar en política a nivel municipal',
        language: 'Español'
      }
    ],
    relatedArticles: [
      'Municipios inteligentes en América',
      'Presupuestos participativos exitosos',
      'Jóvenes en cargos públicos locales'
    ],
    schedule: [
      {
        id: 'sch-local-1',
        date: new Date('2025-10-04'),
        startTime: '09:00',
        endTime: '11:00',
        sessionId: 'local-1',
        location: 'Salón Municipal'
      }
    ]
  },
  {
    id: '6',
    title: 'Educación Cívica',
    description: 'Formación ciudadana y participación electoral',
    icon: 'GraduationCap',
    color: 'indigo',
    longDescription: 'La educación cívica es fundamental para el fortalecimiento de la democracia. Este eje temático aborda la importancia de formar ciudadanos informados, críticos y comprometidos con los valores democráticos, explorando metodologías innovadoras para la educación política y la participación electoral responsable.',
    objectives: [
      'Promover la educación cívica en todos los niveles educativos',
      'Desarrollar herramientas pedagógicas innovadoras',
      'Fomentar el pensamiento crítico y el análisis político',
      'Impulsar la participación electoral informada',
      'Combatir la desinformación política'
    ],
    sessions: [
      {
        id: 'civic-1',
        title: 'Educación Cívica Digital',
        description: 'Conferencia sobre el uso de tecnología en la educación política',
        type: 'conference',
        duration: 75,
        capacity: 180,
        level: 'beginner'
      },
      {
        id: 'civic-2',
        title: 'Taller: Metodologías de Educación Política',
        description: 'Desarrollo de estrategias pedagógicas para la formación cívica',
        type: 'workshop',
        duration: 180,
        capacity: 45,
        level: 'intermediate'
      }
    ],
    speakers: [
      {
        id: 'sp-civic-1',
        name: 'Dra. Patricia Restrepo',
        position: 'Directora de Educación Cívica',
        organization: 'Universidad Nacional de Colombia',
        country: 'Colombia',
        bio: 'Educadora e investigadora especializada en pedagogía política y formación ciudadana.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        expertise: ['Educación Cívica', 'Pedagogía Política', 'Formación Ciudadana'],
        socialMedia: {
          twitter: '@patricia_civica',
          linkedin: 'patricia-restrepo-educacion'
        }
      }
    ],
    resources: [
      {
        id: 'res-civic-1',
        title: 'Curriculum de Educación Cívica',
        type: 'document',
        url: '/resources/curriculum-educacion-civica.pdf',
        description: 'Plan de estudios integral para la formación ciudadana',
        language: 'Español'
      },
      {
        id: 'res-civic-2',
        title: 'Plataforma de Educación Política',
        type: 'website',
        url: 'https://educacionpolitica.org',
        description: 'Recursos digitales para la educación cívica',
        language: 'Español'
      }
    ],
    relatedArticles: [
      'Educación cívica en la era digital',
      'Combatiendo las fake news políticas',
      'Participación electoral juvenil'
    ],
    schedule: [
      {
        id: 'sch-civic-1',
        date: new Date('2025-10-04'),
        startTime: '14:00',
        endTime: '15:15',
        sessionId: 'civic-1',
        location: 'Aula Magna'
      }
    ]
  }
];

export const previousForumEvents: ForumEventSummary[] = [
  {
    id: 'buenos-aires-2023',
    title: '1er Foro Panamericano de Jóvenes Políticos',
    year: 2023,
    city: 'Buenos Aires',
    country: 'Argentina',
    dates: '15-17 Septiembre 2023',
    participants: 220,
    countries: 18,
    keyHighlights: [
      'Primera cumbre virtual-presencial híbrida',
      'Lanzamiento de la Red Panamericana de Jóvenes Políticos',
      'Firma del Pacto de Buenos Aires por la Democracia Juvenil',
      '15 proyectos de impacto presentados'
    ],
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
    photos: []
  },
  {
    id: 'buenos-aires-2024',
    title: '2do Foro Panamericano de Jóvenes Políticos - Edición Especial',
    year: 2024,
    city: 'Buenos Aires',
    country: 'Argentina',
    dates: '8-10 Marzo 2024',
    participants: 280,
    countries: 21,
    keyHighlights: [
      'Mayor participación femenina en la historia (60%)',
      'Primera Mesa de Diálogo Intergeneracional',
      'Lanzamiento del Observatorio de Políticas Juveniles',
      'Conferencia magistral con 3 ex-presidentes'
    ],
    coverImage: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=800&fit=crop',
    photos: []
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  // Buenos Aires 2023 Photos
  {
    id: 'ba23-001',
    title: 'Ceremonia de Apertura - Buenos Aires 2023',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    description: 'Momento de la ceremonia inaugural con la participación de líderes juveniles de 18 países americanos',
    event: previousForumEvents[0] as any,
    category: 'ceremonies',
    photographer: 'María González',
    location: 'Centro de Convenciones Buenos Aires',
    date: new Date('2023-09-15T09:00:00'),
    tags: ['apertura', 'ceremonia', 'líderes', 'banderas'],
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: 'ba23-002',
    title: 'Panel de Gobernanza Digital',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop',
    description: 'Debate intenso sobre el futuro de la participación ciudadana digital en América Latina',
    event: previousForumEvents[0] as any,
    category: 'panel',
    photographer: 'Carlos Mendoza',
    location: 'Auditorio Principal',
    date: new Date('2023-09-15T14:00:00'),
    tags: ['digital', 'gobierno', 'tecnología', 'debate'],
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: 'ba23-003',
    title: 'Networking Coffee Break',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
    description: 'Jóvenes políticos intercambiando experiencias y creando alianzas estratégicas',
    event: previousForumEvents[0] as any,
    category: 'networking',
    photographer: 'Ana Rodríguez',
    location: 'Hall Central',
    date: new Date('2023-09-15T16:00:00'),
    tags: ['networking', 'café', 'conversaciones', 'alianzas'],
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: 'ba23-004',
    title: 'Taller de Liderazgo Transformacional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    description: 'Sesión práctica donde los participantes desarrollaron sus habilidades de liderazgo',
    event: previousForumEvents[0] as any,
    category: 'workshops',
    photographer: 'Diego Morales',
    location: 'Sala de Talleres B',
    date: new Date('2023-09-16T10:00:00'),
    tags: ['liderazgo', 'taller', 'práctica', 'habilidades'],
    createdAt: new Date('2023-09-16'),
    updatedAt: new Date('2023-09-16')
  },
  {
    id: 'ba23-005',
    title: 'Conferencia Magistral: El Futuro de América',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    description: 'Dr. Elena Vásquez, ex-Ministra de Educación, compartiendo su visión sobre el continente',
    event: previousForumEvents[0] as any,
    category: 'speakers',
    photographer: 'Luis Fernández',
    location: 'Auditorio Principal',
    date: new Date('2023-09-16T19:00:00'),
    tags: ['conferencia', 'magistral', 'futuro', 'visión'],
    createdAt: new Date('2023-09-16'),
    updatedAt: new Date('2023-09-16')
  },
  {
    id: 'ba23-006',
    title: 'Noche Cultural Argentina',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    description: 'Celebración de la diversidad cultural con música, danza y gastronomía típica argentina',
    event: previousForumEvents[0] as any,
    category: 'social',
    photographer: 'Camila Santos',
    location: 'Terraza Principal',
    date: new Date('2023-09-16T20:30:00'),
    tags: ['cultura', 'música', 'danza', 'celebración'],
    createdAt: new Date('2023-09-16'),
    updatedAt: new Date('2023-09-16')
  },

  // Buenos Aires 2024 Photos
  {
    id: 'ba-001',
    title: 'Inauguración en Casa Rosada',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=600&fit=crop',
    description: 'Ceremonia especial de inauguración en los jardines de la Casa Rosada con autoridades nacionales',
    event: previousForumEvents[1] as any,
    category: 'ceremonies',
    photographer: 'Roberto Silva',
    location: 'Casa Rosada, Buenos Aires',
    date: new Date('2024-03-08T10:00:00'),
    tags: ['casa-rosada', 'inauguración', 'autoridades', 'protocolo'],
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-08')
  },
  {
    id: 'ba-002',
    title: 'Mesa Redonda: Mujeres en Política',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    description: 'Panel histórico con 100% participación femenina discutiendo el empoderamiento político',
    event: previousForumEvents[1] as any,
    category: 'panel',
    photographer: 'Isabella Martínez',
    location: 'Centro Cultural Recoleta',
    date: new Date('2024-03-08T15:00:00'),
    tags: ['mujeres', 'política', 'empoderamiento', 'género'],
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-08')
  },
  {
    id: 'ba-003',
    title: 'Diálogo Intergeneracional',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
    description: 'Encuentro único entre jóvenes líderes y ex-presidentes latinoamericanos',
    event: previousForumEvents[1] as any,
    category: 'panel',
    photographer: 'Marco Rodríguez',
    location: 'Hotel Panamericano',
    date: new Date('2024-03-09T11:00:00'),
    tags: ['intergeneracional', 'ex-presidentes', 'diálogo', 'experiencia'],
    createdAt: new Date('2024-03-09'),
    updatedAt: new Date('2024-03-09')
  },
  {
    id: 'ba-004',
    title: 'Taller de Comunicación Política',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    description: 'Sesión intensiva sobre storytelling y comunicación efectiva en redes sociales',
    event: previousForumEvents[1] as any,
    category: 'workshops',
    photographer: 'Sofía Herrera',
    location: 'Sala de Medios',
    date: new Date('2024-03-09T14:00:00'),
    tags: ['comunicación', 'redes-sociales', 'storytelling', 'medios'],
    createdAt: new Date('2024-03-09'),
    updatedAt: new Date('2024-03-09')
  },
  {
    id: 'ba-005',
    title: 'Presentación de Proyectos Innovadores',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop',
    description: 'Jóvenes presentando sus proyectos de impacto social ante un panel de inversores',
    event: previousForumEvents[1] as any,
    category: 'speakers',
    photographer: 'Alejandro Torres',
    location: 'Auditorio de Innovación',
    date: new Date('2024-03-09T16:30:00'),
    tags: ['proyectos', 'innovación', 'presentaciones', 'inversores'],
    createdAt: new Date('2024-03-09'),
    updatedAt: new Date('2024-03-09')
  },
  {
    id: 'ba-006',
    title: 'Tango Night - Networking Argentino',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop',
    description: 'Noche especial de tango con lecciones de baile y networking informal',
    event: previousForumEvents[1] as any,
    category: 'social',
    photographer: 'Carlos Vega',
    location: 'Café Tortoni',
    date: new Date('2024-03-09T21:00:00'),
    tags: ['tango', 'baile', 'networking', 'cultura-argentina'],
    createdAt: new Date('2024-03-09'),
    updatedAt: new Date('2024-03-09')
  },
  {
    id: 'ba-007',
    title: 'Firma del Observatorio de Políticas Juveniles',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    description: 'Momento histórico de la firma del acuerdo para crear el primer observatorio regional',
    event: previousForumEvents[1] as any,
    category: 'ceremonies',
    photographer: 'Patricia López',
    location: 'Salón Dorado',
    date: new Date('2024-03-10T12:00:00'),
    tags: ['firma', 'observatorio', 'acuerdo', 'histórico'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: 'ba-008',
    title: 'Ceremonia de Clausura',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    description: 'Emocionante cierre con el compromiso de continuidad hacia Lima 2025',
    event: previousForumEvents[1] as any,
    category: 'ceremonies',
    photographer: 'Fernando Gutiérrez',
    location: 'Teatro San Martín',
    date: new Date('2024-03-10T18:00:00'),
    tags: ['clausura', 'compromiso', 'lima-2025', 'continuidad'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },

  // Instagram Posts - Buenos Aires 2024 (Contenido Real)
  
  // DÍA 1 - Buenos Aires 2024
  {
    id: 'ig-ba24-d1-video',
    title: 'Buenos Aires 2024 - Día 1 🎬',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    description: 'Resumen del primer día del Foro Buenos Aires 2024. ¡Los mejores momentos de apertura y primeras conferencias! #ForoBuenosAires2024 #Día1',
    category: 'instagram',
    type: 'video',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-19T20:00:00'),
    tags: ['buenos-aires-2024', 'día-1', 'apertura', 'video'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9TAruWRTtB/?hl=es-la',
    instagramPostId: 'C9TAruWRTtB',
    likes: 1847,
    comments: 156,
    createdAt: new Date('2024-07-19'),
    updatedAt: new Date('2024-07-19')
  },
  {
    id: 'ig-ba24-d1-fotos',
    title: 'Buenos Aires 2024 - Fotos Día 1 📸',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
    description: 'Galería de 8 fotos del primer día: ceremonias, paneles y networking. ¡Revive los momentos destacados! #ForoBuenosAires2024 #Fotos',
    category: 'instagram',
    type: 'photo',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-19T18:30:00'),
    tags: ['buenos-aires-2024', 'día-1', 'fotos', 'galería'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9Q3y3fMRgv/?hl=es-la&img_index=1',
    instagramPostId: 'C9Q3y3fMRgv',
    likes: 2134,
    comments: 198,
    createdAt: new Date('2024-07-19'),
    updatedAt: new Date('2024-07-19')
  },

  // DÍA 2 - Buenos Aires 2024
  {
    id: 'ig-ba24-d2-video',
    title: 'Buenos Aires 2024 - Día 2 🎬',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    description: 'Segundo día lleno de debates intensos y talleres de liderazgo. ¡La pasión política se vive en cada momento! #ForoBuenosAires2024 #Día2',
    category: 'instagram',
    type: 'video',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-20T20:30:00'),
    tags: ['buenos-aires-2024', 'día-2', 'debates', 'video'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9VznBhsTqI/?hl=es-la',
    instagramPostId: 'C9VznBhsTqI',
    likes: 1956,
    comments: 187,
    createdAt: new Date('2024-07-20'),
    updatedAt: new Date('2024-07-20')
  },
  {
    id: 'ig-ba24-d2-fotos',
    title: 'Buenos Aires 2024 - Fotos Día 2 📸',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
    description: 'Colección de 7 fotos del segundo día: paneles, talleres y momentos de camaradería entre líderes jóvenes. #ForoBuenosAires2024 #Liderazgo',
    category: 'instagram',
    type: 'photo',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-20T19:00:00'),
    tags: ['buenos-aires-2024', 'día-2', 'fotos', 'liderazgo'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9Tu1s8Mai1/?hl=es-la&img_index=1',
    instagramPostId: 'C9Tu1s8Mai1',
    likes: 2387,
    comments: 234,
    createdAt: new Date('2024-07-20'),
    updatedAt: new Date('2024-07-20')
  },

  // DÍA 3 - Buenos Aires 2024
  {
    id: 'ig-ba24-d3-video',
    title: 'Buenos Aires 2024 - Día 3 🎬',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop',
    description: 'Gran final del Foro Buenos Aires 2024. Clausura emotiva y compromisos para el futuro de América Latina. ¡Hasta Lima 2025! #ForoBuenosAires2024 #Clausura',
    category: 'instagram',
    type: 'video',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-21T21:00:00'),
    tags: ['buenos-aires-2024', 'día-3', 'clausura', 'video'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9aq7rlhoEm/?hl=es-la',
    instagramPostId: 'C9aq7rlhoEm',
    likes: 2845,
    comments: 312,
    createdAt: new Date('2024-07-21'),
    updatedAt: new Date('2024-07-21')
  },
  {
    id: 'ig-ba24-d3-fotos',
    title: 'Buenos Aires 2024 - Fotos Día 3 📸',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop',
    description: 'Últimas 9 fotos memorables: ceremonias de clausura, despedidas y promesas de reencuentro. ¡Gracias Buenos Aires! #ForoBuenosAires2024 #Memories',
    category: 'instagram',
    type: 'photo',
    location: 'Buenos Aires, Argentina',
    date: new Date('2024-07-21T19:30:00'),
    tags: ['buenos-aires-2024', 'día-3', 'fotos', 'clausura'],
    isInstagramPost: true,
    instagramUrl: 'https://www.instagram.com/p/C9WC95ps5BZ/?hl=es-la&img_index=1',
    instagramPostId: 'C9WC95ps5BZ',
    likes: 3156,
    comments: 287,
    createdAt: new Date('2024-07-21'),
    updatedAt: new Date('2024-07-21')
  }
];

// Update forum events with their photos
previousForumEvents[0].photos = galleryPhotos.filter(photo => photo.id.startsWith('ba23-'));
previousForumEvents[1].photos = galleryPhotos.filter(photo => photo.id.startsWith('ba-')); 