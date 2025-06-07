import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.inicio': 'Inicio',
    'nav.caracteristicas': 'Características',
    'nav.sobre': 'Sobre el Foro',
    'nav.ejes': 'Ejes Temáticos',
    'nav.equipo': 'Panelistas',
    'nav.galeria': 'Galería',
    'nav.eventos': 'Eventos',
    'nav.registro': 'Regístrate Ahora',
    
    // Hero Section
    'hero.badge': '3ra Edición Panamericana • 2-4 Octubre 2025 • Lima, Perú',
    'hero.title': 'América que',
    'hero.title.highlight': 'Defiende',
    'hero.title.end': 'la Libertad',
    'hero.slogan': 'DEFENDIENDO LA LIBERTAD FRENTE AL',
    'hero.slogan.socialism': 'SOCIALISMO',
    'hero.slogan.and': 'Y LA',
    'hero.slogan.woke': 'CULTURA WOKE',
    'hero.subtitle.part1': 'Un encuentro continental para',
    'hero.subtitle.defend': 'defender',
    'hero.subtitle.strengthen': 'fortalecer',
    'hero.subtitle.preserve': 'preservar',
    'hero.subtitle.part2': 'los valores de libertad y democracia en América',
    'hero.cta.participate': 'Participa del Foro',
    'hero.cta.learn': 'Conoce Más',
    'hero.stats.guests': 'Invitados Esperados',
    'hero.stats.countries': 'Países Panamericanos',
    'hero.stats.days': 'Días de Actividades',

    // About Section
    'about.badge': 'Nuestra Historia',
    'about.title': 'Sobre el',
    'about.title.highlight': '3er Foro Panamericano',
    'about.description': 'El Foro Panamericano de Jóvenes Políticos es una plataforma continental dedicada a la defensa de la libertad frente al socialismo y la cultura woke. Reúne a líderes emergentes de América comprometidos con los valores democráticos tradicionales y la preservación de las libertades fundamentales. En su tercera edición, se realizará en Lima, Perú, esperando entre 200 a 300 participantes de todo el continente.',
    'about.mission.title': 'Misión: Defendiendo la Libertad',
    'about.mission.description': 'Formar una nueva generación de líderes políticos panamericanos comprometidos con la defensa de la libertad frente al socialismo y la cultura woke, fortaleciendo los valores democráticos tradicionales en América.',
    'about.mission.point1': 'Defender la libertad y los valores democráticos tradicionales',
    'about.mission.point2': 'Combatir la influencia del socialismo y la cultura woke',
    'about.mission.point3': 'Fortalecer el liderazgo juvenil conservador en América',
    'about.values.title': 'Nuestros Valores',
    'about.values.democracy': 'Democracia',
    'about.values.democracy.desc': 'Creemos en la participación democrática',
    'about.values.inclusion': 'Inclusión',
    'about.values.inclusion.desc': 'Valoramos la diversidad de perspectivas',
    'about.values.transparency': 'Transparencia',
    'about.values.transparency.desc': 'Promovemos la apertura y honestidad',

    // Features Section
    'features.title': '¿Qué nos hace',
    'features.title.highlight': 'únicos',
    'features.description': 'Nuestro foro se distingue por crear un ambiente donde la juventud puede desarrollar su potencial político y social de manera integral',
    'features.leadership.title': 'Liderazgo Joven',
    'features.leadership.desc': 'Desarrollamos las habilidades de liderazgo necesarias para los desafíos del siglo XXI',
    'features.dialogue.title': 'Diálogo Democrático',
    'features.dialogue.desc': 'Fomentamos el debate constructivo y el intercambio de ideas entre diferentes perspectivas',
    'features.networks.title': 'Redes Internacionales',
    'features.networks.desc': 'Conectamos jóvenes líderes de todo el mundo para crear impacto global',
    'features.impact.title': 'Impacto Local',
    'features.impact.desc': 'Transformamos las ideas en acciones concretas que benefician a nuestras comunidades',
    'features.cta': '¿Listo para formar parte de esta experiencia?',

    // Statistics Section
    'stats.badge': 'Nuestro Impacto Global',
    'stats.title': 'Transformando el',
    'stats.title.highlight': 'Futuro Político',
    'stats.description': 'Cada número representa el compromiso de jóvenes líderes que están construyendo un mundo más justo, participativo y democrático',
    'stats.leaders': 'Jóvenes Líderes',
    'stats.leaders.desc': 'Participantes activos de 18-35 años',
    'stats.countries': 'Países Representados',
    'stats.countries.desc': 'Presencia en 5 continentes',
    'stats.projects': 'Proyectos Incubados',
    'stats.projects.desc': 'Iniciativas políticas y sociales',
    'stats.years': 'Años de Trayectoria',
    'stats.years.desc': 'Construyendo liderazgo juvenil',
    'stats.awards': 'Premios Recibidos',
    'stats.awards.desc': 'Reconocimientos internacionales',
    'stats.cities': 'Ciudades Sede',
    'stats.cities.desc': 'Eventos realizados mundialmente',
    'stats.satisfaction': 'Tasa de satisfacción',
    'stats.followers': 'Seguidores en redes',
    'stats.community': 'Comunidad activa',

    // Team Section
    'team.badge': 'Nuestros Panelistas',
    'team.title': 'Líderes Experimentados',
    'team.title.highlight': 'Formando Líderes',
    'team.description': 'Un equipo multidisciplinario de expertos internacionales comprometidos con el desarrollo del liderazgo político juvenil',
    'team.achievements': 'Logros Destacados',
    'team.languages': 'Idiomas',
    'team.social': 'Redes Sociales',
    'team.advisor.title': 'Consejo Asesor Internacional',
    'team.advisor.description': 'Nuestro equipo cuenta con el respaldo de un prestigioso consejo asesor integrado por ex-presidentes, ministros, académicos y líderes de organizaciones internacionales de 6 continentes.',
    'team.advisor.stats.advisors': 'Asesores',
    'team.advisor.stats.countries': 'Países',
    'team.advisor.stats.experience': 'Años experiencia',
    'team.advisor.stats.continents': 'Continentes',

    // Gallery Section
    'gallery.title': 'Galería de',
    'gallery.title.highlight': 'Momentos',
    'gallery.description': 'Revive los momentos más memorables de nuestros foros anteriores en Buenos Aires 2023 y Buenos Aires 2024',
    'gallery.filter.event': 'Filtrar por Evento',
    'gallery.filter.category': 'Filtrar por Categoría',
    'gallery.filter.all.events': 'Todos los Eventos',
    'gallery.filter.all.categories': 'Todas las Categorías',
    'gallery.categories.ceremonies': 'Ceremonias',
    'gallery.categories.panel': 'Paneles',
    'gallery.categories.workshops': 'Talleres',
    'gallery.categories.networking': 'Networking',
    'gallery.categories.social': 'Eventos Sociales',
    'gallery.categories.speakers': 'Conferencias',

    // Events Section
    'events.badge': 'Programa Completo',
    'events.title': 'Eventos y',
    'events.title.highlight': 'Actividades',
    'events.description': 'Próximamente: Lista completa de paneles, talleres, conferencias magistrales y actividades de networking programadas para el foro.',

    // Registration Section
    'registration.badge': '¡Inscripciones Abiertas para Lima 2025!',
    'registration.title': '¡Únete al',
    'registration.title.highlight': 'Cambio',
    'registration.description': 'Sé parte de la próxima generación de líderes políticos que están transformando América. Tu voz importa, tu participación marca la diferencia en el futuro de nuestro continente.',
    'registration.cta.register': '🚀 Registrarse Ahora',
    'registration.cta.info': '📋 Más Información',
    'registration.secure': 'Proceso seguro',
    'registration.immediate': 'Confirmación inmediata',
    'registration.support': 'Soporte 24/7',
    'registration.email.text': '¿Dudas? Escríbenos a',
    'registration.discount': '⚡ Descuento por Registro Temprano: 50% OFF',

    // Testimonials Section - Historias de Transformación
    'testimonials.badge': 'Testimonios de Impacto',
    'testimonials.title': 'Historias de',
    'testimonials.title.highlight': 'Transformación',
    'testimonials.description': 'Conoce cómo el foro ha impactado la carrera de jóvenes líderes que ahora transforman sus comunidades y países',

    // Thematic Axes Section - Ejes Temáticos del Foro
    'thematic.title': 'Ejes Temáticos del',
    'thematic.title.highlight': 'Foro',
    'thematic.description': 'Exploramos las temáticas más relevantes para el desarrollo político y social de las nuevas generaciones',
    'thematic.sessions': 'sesiones',
    'thematic.resources': 'recursos',
    'thematic.details': 'Ver detalles completos',
    'thematic.cta.title': '¿Tienes una propuesta innovadora?',
    'thematic.cta.description': 'Invitamos a los participantes a presentar sus proyectos e ideas dentro de estos ejes temáticos para ser considerados en nuestras sesiones especiales.',
    'thematic.cta.button': 'Proponer tu proyecto',

    // Thematic Axes Content
    'thematic.governance.title': 'Gobernanza y Transparencia',
    'thematic.governance.desc': 'Políticas públicas transparentes y participación ciudadana',
    'thematic.environment.title': 'Juventud y Medio Ambiente',
    'thematic.environment.desc': 'Sostenibilidad y cambio climático desde la perspectiva juvenil',
    'thematic.technology.title': 'Tecnología y Participación',
    'thematic.technology.desc': 'Innovación tecnológica para la participación democrática',
    'thematic.rights.title': 'Derechos Humanos',
    'thematic.rights.desc': 'Promoción y defensa de los derechos fundamentales',
    'thematic.local.title': 'Política Local',
    'thematic.local.desc': 'Fortalecimiento de la democracia a nivel municipal',
    'thematic.education.title': 'Educación Cívica',
    'thematic.education.desc': 'Formación ciudadana y participación electoral',

    // Countdown Section - Faltan solo...
    'countdown.badge': 'Próximo Evento',
    'countdown.title.started': '¡El Foro ya comenzó!',
    'countdown.title.remaining': 'Faltan solo...',
    'countdown.time.days': 'Días',
    'countdown.time.hours': 'Horas',
    'countdown.time.minutes': 'Minutos',
    'countdown.time.seconds': 'Segundos',
    'countdown.location.title': 'Ubicación y Fecha',
    'countdown.duration.title': 'Duración del Evento',
    'countdown.duration.intensive': '3 días intensivos',
    'countdown.duration.activities': 'Conferencias, talleres y networking',
    'countdown.registration.open': 'Inscripciones Abiertas',
    'countdown.registration.registered': 'Registrados',
    'countdown.registration.available': 'Cupos disponibles',
    'countdown.registration.button': 'Asegurar mi lugar',

    // Footer Section
    'footer.description': 'Construyendo el futuro de la política desde la perspectiva de las nuevas generaciones. Formando líderes comprometidos con la democracia y el cambio social.',
    'footer.quicklinks.title': 'Enlaces Rápidos',
    'footer.quicklinks.home': 'Inicio',
    'footer.quicklinks.about': 'Sobre el Foro',
    'footer.quicklinks.events': 'Eventos',
    'footer.quicklinks.team': 'Panelistas',
    'footer.quicklinks.register': 'Registro',
    'footer.contact.title': 'Contacto',
    'footer.contact.global': 'Red Global',
    'footer.copyright': '© 2024 Foro de Jóvenes Políticos. Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.cookies': 'Cookies',
  },
  en: {
    // Navbar
    'nav.inicio': 'Home',
    'nav.caracteristicas': 'Features',
    'nav.sobre': 'About the Forum',
    'nav.ejes': 'Thematic Areas',
    'nav.equipo': 'Panelists',
    'nav.galeria': 'Gallery',
    'nav.eventos': 'Events',
    'nav.registro': 'Register Now',
    
    // Hero Section
    'hero.badge': '3rd Pan-American Edition • October 2-4, 2025 • Lima, Peru',
    'hero.title': 'America that',
    'hero.title.highlight': 'Defends',
    'hero.title.end': 'Freedom',
    'hero.slogan': 'DEFENDING FREEDOM AGAINST',
    'hero.slogan.socialism': 'SOCIALISM',
    'hero.slogan.and': 'AND',
    'hero.slogan.woke': 'WOKE CULTURE',
    'hero.subtitle.part1': 'A continental gathering to',
    'hero.subtitle.defend': 'defend',
    'hero.subtitle.strengthen': 'strengthen',
    'hero.subtitle.preserve': 'preserve',
    'hero.subtitle.part2': 'the values of freedom and democracy in America',
    'hero.cta.participate': 'Join the Forum',
    'hero.cta.learn': 'Learn More',
    'hero.stats.guests': 'Expected Guests',
    'hero.stats.countries': 'Pan-American Countries',
    'hero.stats.days': 'Days of Activities',

    // About Section
    'about.badge': 'Our Story',
    'about.title': 'About the',
    'about.title.highlight': '3rd Pan-American Forum',
    'about.description': 'The Pan-American Forum of Young Politicians is a continental platform dedicated to defending freedom against socialism and woke culture. It brings together emerging leaders from America committed to traditional democratic values and the preservation of fundamental freedoms. In its third edition, it will be held in Lima, Peru, expecting between 200 to 300 participants from across the continent.',
    'about.mission.title': 'Mission: Defending Freedom',
    'about.mission.description': 'To form a new generation of Pan-American political leaders committed to defending freedom against socialism and woke culture, strengthening traditional democratic values in America.',
    'about.mission.point1': 'Defend freedom and traditional democratic values',
    'about.mission.point2': 'Combat the influence of socialism and woke culture',
    'about.mission.point3': 'Strengthen conservative youth leadership in America',
    'about.values.title': 'Our Values',
    'about.values.democracy': 'Democracy',
    'about.values.democracy.desc': 'We believe in democratic participation',
    'about.values.inclusion': 'Inclusion',
    'about.values.inclusion.desc': 'We value diversity of perspectives',
    'about.values.transparency': 'Transparency',
    'about.values.transparency.desc': 'We promote openness and honesty',

    // Features Section
    'features.title': 'What makes us',
    'features.title.highlight': 'unique',
    'features.description': 'Our forum stands out by creating an environment where youth can develop their political and social potential comprehensively',
    'features.leadership.title': 'Youth Leadership',
    'features.leadership.desc': 'We develop the leadership skills necessary for 21st century challenges',
    'features.dialogue.title': 'Democratic Dialogue',
    'features.dialogue.desc': 'We foster constructive debate and exchange of ideas between different perspectives',
    'features.networks.title': 'International Networks',
    'features.networks.desc': 'We connect young leaders from around the world to create global impact',
    'features.impact.title': 'Local Impact',
    'features.impact.desc': 'We transform ideas into concrete actions that benefit our communities',
    'features.cta': 'Ready to be part of this experience?',

    // Statistics Section
    'stats.badge': 'Our Global Impact',
    'stats.title': 'Transforming the',
    'stats.title.highlight': 'Political Future',
    'stats.description': 'Each number represents the commitment of young leaders who are building a more just, participatory and democratic world',
    'stats.leaders': 'Young Leaders',
    'stats.leaders.desc': 'Active participants aged 18-35',
    'stats.countries': 'Countries Represented',
    'stats.countries.desc': 'Presence in 5 continents',
    'stats.projects': 'Incubated Projects',
    'stats.projects.desc': 'Political and social initiatives',
    'stats.years': 'Years of Experience',
    'stats.years.desc': 'Building youth leadership',
    'stats.awards': 'Awards Received',
    'stats.awards.desc': 'International recognitions',
    'stats.cities': 'Host Cities',
    'stats.cities.desc': 'Events held worldwide',
    'stats.satisfaction': 'Satisfaction rate',
    'stats.followers': 'Social media followers',
    'stats.community': 'Active community',

    // Team Section
    'team.badge': 'Our Panelists',
    'team.title': 'Experienced Leaders',
    'team.title.highlight': 'Training Leaders',
    'team.description': 'A multidisciplinary team of international experts committed to developing youth political leadership',
    'team.achievements': 'Outstanding Achievements',
    'team.languages': 'Languages',
    'team.social': 'Social Networks',
    'team.advisor.title': 'International Advisory Board',
    'team.advisor.description': 'Our team has the support of a prestigious advisory board made up of former presidents, ministers, academics and leaders of international organizations from 6 continents.',
    'team.advisor.stats.advisors': 'Advisors',
    'team.advisor.stats.countries': 'Countries',
    'team.advisor.stats.experience': 'Years experience',
    'team.advisor.stats.continents': 'Continents',

    // Gallery Section
    'gallery.title': 'Gallery of',
    'gallery.title.highlight': 'Moments',
    'gallery.description': 'Relive the most memorable moments from our previous forums in Buenos Aires 2023 and Buenos Aires 2024',
    'gallery.filter.event': 'Filter by Event',
    'gallery.filter.category': 'Filter by Category',
    'gallery.filter.all.events': 'All Events',
    'gallery.filter.all.categories': 'All Categories',
    'gallery.categories.ceremonies': 'Ceremonies',
    'gallery.categories.panel': 'Panels',
    'gallery.categories.workshops': 'Workshops',
    'gallery.categories.networking': 'Networking',
    'gallery.categories.social': 'Social Events',
    'gallery.categories.speakers': 'Conferences',

    // Events Section
    'events.badge': 'Full Program',
    'events.title': 'Events and',
    'events.title.highlight': 'Activities',
    'events.description': 'Coming soon: Complete list of panels, workshops, keynote speeches and networking activities scheduled for the forum.',

    // Registration Section
    'registration.badge': 'Registration Open for Lima 2025!',
    'registration.title': 'Join the',
    'registration.title.highlight': 'Change',
    'registration.description': 'Be part of the next generation of political leaders transforming America. Your voice matters, your participation makes a difference in the future of our continent.',
    'registration.cta.register': '🚀 Register Now',
    'registration.cta.info': '📋 More Information',
    'registration.secure': 'Secure process',
    'registration.immediate': 'Immediate confirmation',
    'registration.support': '24/7 support',
    'registration.email.text': 'Questions? Write to us at',
    'registration.discount': '⚡ Early Registration Discount: 50% OFF',

    // Testimonials Section - Transformation Stories
    'testimonials.badge': 'Impact Testimonials',
    'testimonials.title': 'Stories of',
    'testimonials.title.highlight': 'Transformation',
    'testimonials.description': 'Learn how the forum has impacted the careers of young leaders who now transform their communities and countries',

    // Thematic Axes Section - Forum Thematic Axes
    'thematic.title': 'Forum Thematic',
    'thematic.title.highlight': 'Axes',
    'thematic.description': 'We explore the most relevant themes for the political and social development of new generations',
    'thematic.sessions': 'sessions',
    'thematic.resources': 'resources',
    'thematic.details': 'View full details',
    'thematic.cta.title': 'Do you have an innovative proposal?',
    'thematic.cta.description': 'We invite participants to present their projects and ideas within these thematic axes to be considered in our special sessions.',
    'thematic.cta.button': 'Propose your project',

    // Thematic Axes Content
    'thematic.governance.title': 'Governance and Transparency',
    'thematic.governance.desc': 'Transparent public policies and citizen participation',
    'thematic.environment.title': 'Youth and Environment',
    'thematic.environment.desc': 'Sustainability and climate change from a youth perspective',
    'thematic.technology.title': 'Technology and Participation',
    'thematic.technology.desc': 'Technological innovation for democratic participation',
    'thematic.rights.title': 'Human Rights',
    'thematic.rights.desc': 'Promotion and defense of fundamental rights',
    'thematic.local.title': 'Local Politics',
    'thematic.local.desc': 'Strengthening democracy at the municipal level',
    'thematic.education.title': 'Civic Education',
    'thematic.education.desc': 'Civic training and electoral participation',

    // Countdown Section - Only X left...
    'countdown.badge': 'Next Event',
    'countdown.title.started': 'The Forum has started!',
    'countdown.title.remaining': 'Only... left',
    'countdown.time.days': 'Days',
    'countdown.time.hours': 'Hours',
    'countdown.time.minutes': 'Minutes',
    'countdown.time.seconds': 'Seconds',
    'countdown.location.title': 'Location and Date',
    'countdown.duration.title': 'Event Duration',
    'countdown.duration.intensive': '3 intensive days',
    'countdown.duration.activities': 'Conferences, workshops and networking',
    'countdown.registration.open': 'Registration Open',
    'countdown.registration.registered': 'Registered',
    'countdown.registration.available': 'Available slots',
    'countdown.registration.button': 'Secure my spot',

    // Footer Section
    'footer.description': 'Building the future of politics from the perspective of new generations. Training leaders committed to democracy and social change.',
    'footer.quicklinks.title': 'Quick Links',
    'footer.quicklinks.home': 'Home',
    'footer.quicklinks.about': 'About the Forum',
    'footer.quicklinks.events': 'Events',
    'footer.quicklinks.team': 'Panelists',
    'footer.quicklinks.register': 'Register',
    'footer.contact.title': 'Contact',
    'footer.contact.global': 'Global Network',
    'footer.copyright': '© 2024 Pan-American Forum of Young Politicians. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookies',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};