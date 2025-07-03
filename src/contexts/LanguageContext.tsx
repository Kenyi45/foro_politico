import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones en español únicamente
const translations: Record<string, string> = {
  // Navbar
  'nav.inicio': 'Inicio',
  'nav.caracteristicas': 'Características',
  'nav.sobre': 'Sobre el Foro',
  'nav.ejes': 'Ejes Temáticos',
  'nav.equipo': 'Panelistas',
  'nav.testimonios': 'Organización',
  'nav.galeria': 'Galería',
  'nav.eventos': 'Eventos',
  'nav.registro': 'Regístrate Ahora',
  
  // Hero Section
  'hero.badge': 'III Edición Panamericana • 2-4 Octubre 2025 • Lima, Perú',
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
  'hero.subtitle.preserve': 'y preservar',
  'hero.subtitle.part2': 'los valores de libertad y democracia en América',
  'hero.cta.participate': 'Participa del Foro',
  'hero.cta.learn': 'Conoce Más',
  'hero.stats.guests': 'Invitados Esperados',
  'hero.stats.countries': 'Países de America y Europa',
  'hero.stats.days': 'Días de Actividades',

  // About Section
  'about.badge': 'Nuestra Historia',
  'about.title': 'Sobre el',
  'about.title.highlight': 'III Foro Panamericano',
  'about.description': 'El Foro Panamericano de Jóvenes Políticos es una plataforma continental del Instituto Prudencia dedicada a la defensa de la libertad frente al socialismo y la cultura woke. Reúne a líderes emergentes de América comprometidos con la defensa de  los valores occidentales que han hecho grande a Europa y América. En 2023 y 2024, durante sus anteriores ediciones, el Foro convocó a más de 500 dirigentes en la ciudad de Buenos Aires. Este año se celebrará en Lima, Perú, esperando contar con la participación de 300 jóvenes politicos de todo el continente.',
  'about.mission.title': 'Misión: Defendiendo la Libertad',
  'about.mission.description': 'Formar una nueva generación de líderes políticos panamericanos comprometidos con la defensa de la libertad frente al socialismo y la cultura woke, fortaleciendo los valores democráticos tradicionales en América.',
  'about.mission.point1': 'Defender la libertad y los valores democráticos tradicionales.',
  'about.mission.point2': 'Combatir la influencia del socialismo y la cultura woke.',
  'about.mission.point3': 'Fortalecer el liderazgo juvenil conservador en América.',
  'about.values.title': 'Nuestros Valores',
  'about.values.democracy': 'Democracia',
  'about.values.democracy.desc': 'Creemos en la participación democrática',
  'about.values.inclusion': 'Inclusión',
  'about.values.inclusion.desc': 'Valoramos la diversidad de perspectivas',
  'about.values.transparency': 'Transparencia',
  'about.values.transparency.desc': 'Promovemos la apertura y honestidad',

  // Features Section
  'features.badge': 'Nuestras Fortalezas',
  'features.title': '¿Qué nos hace',
  'features.title.highlight': 'únicos',
  'features.description': 'Nuestro foro se distingue por crear un ambiente donde la juventud puede desarrollar todo su potencial político y social ocupándose de los temas más urgentes del siglo XXI promoviendo una agenda occidental.',
  'features.leadership.title': 'Liderazgo Joven',
  'features.leadership.desc': 'Desarrollamos las habilidades de liderazgo necesarias para los desafíos del siglo XXI',
  'features.dialogue.title': 'Diálogo Democrático',
  'features.dialogue.desc': 'Fomentamos el debate constructivo y el intercambio de ideas entre diferentes perspectivas',
  'features.networks.title': 'Redes Internacionales',
  'features.networks.desc': 'Conectamos jóvenes líderes de América y Europa para tener impacto regional y global frentes  a los desafíos del wokismo.',
  'features.impact.title': 'Impacto Local',
  'features.impact.desc': 'Transformamos las ideas en acciones concretas que benefician a nuestras comunidades',
  'features.cta': '¿Listo para formar parte de esta experiencia?',

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
  'gallery.badge': 'Momentos Memorables',
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
  'gallery.categories.instagram': 'Instagram',
  'gallery.instagram.follow': 'Síguenos en Instagram',
  'gallery.instagram.realtime': 'Los mejores momentos en tiempo real',
  'gallery.instagram.follow.button': 'Seguir',
  'gallery.instagram.view': 'Ver en Instagram',
  'gallery.instagram.likes': 'Me gusta',
  'gallery.instagram.comments': 'Comentarios',

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

  // Testimonials Section - Historias de Transformación
  'testimonials.badge': 'Testimonios de Impacto',
  'testimonials.title': 'Historias de',
  'testimonials.title.highlight': 'Transformación',
  'testimonials.description': 'Conoce cómo el foro ha impactado la carrera de jóvenes líderes que ahora transforman sus comunidades y países',

  // Thematic Axes Section - Ejes Temáticos del Foro
  'thematic.badge': 'Temas Centrales',
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
  'footer.quicklinks.testimonials': 'Organización',
  'footer.quicklinks.events': 'Eventos',
  'footer.quicklinks.team': 'Panelistas',
  'footer.quicklinks.register': 'Registro',
  'footer.contact.title': 'Contacto',
  'footer.contact.global': 'Red Global',
  'footer.copyright': '© 2024 Foro de Jóvenes Políticos. Todos los derechos reservados.',
  'footer.privacy': 'Privacidad',
  'footer.terms': 'Términos',
  'footer.cookies': 'Cookies',
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
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