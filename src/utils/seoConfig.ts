// SEO Configuration for III Foro Panamericano de Jóvenes Políticos

export const seoConfig = {
  // Site Information
  site: {
    name: 'Foro Panamericano de Jóvenes Políticos',
    url: 'https://foropanamericanodejovenespoliticos.org/',
    logo: 'https://foropanamericanodejovenespoliticos.org/Logo_FORO.png',
    description: 'Organización dedicada a promover el liderazgo político juvenil en América Latina',
    language: 'es',
    locale: 'es_ES',
  },

  // Event Information
  event: {
    name: 'III Foro Panamericano de Jóvenes Políticos',
    description: 'Evento internacional que reunirá a jóvenes líderes para debatir, proponer y construir soluciones políticas con impacto real.',
    startDate: '2025-01-01',
    endDate: '2025-01-31',
    location: {
      name: 'Lima, Perú',
      address: {
        addressLocality: 'Lima',
        addressCountry: 'PE',
        addressRegion: 'Lima'
      },
      geo: {
        latitude: -12.0464,
        longitude: -77.0428
      }
    },
    organizer: {
      name: 'Foro Panamericano de Jóvenes Políticos',
      url: 'https://foropanamericanodejovenespoliticos.org/',
      email: 'info@foropanamericanodejovenespoliticos.org'
    },
    offers: {
      url: 'https://foropanamericanodejovenespoliticos.org/#registro',
      availability: 'https://schema.org/InStock',
      price: '50',
      priceCurrency: 'USD'
    }
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/foropanamericanodejovenespoliticos',
    instagram: 'https://www.instagram.com/foropanamericano_jovenes',
    twitter: 'https://twitter.com/ForoPanamericano',
    linkedin: 'https://www.linkedin.com/company/foro-panamericano-de-jovenes-politicos',
    youtube: 'https://www.youtube.com/@foropanamericanodejovenespoliticos'
  },

  // Keywords for different sections
  keywords: {
    main: 'foro panamericano, jóvenes políticos, lima perú 2025, política internacional, liderazgo juvenil, foro político, américa latina, jóvenes líderes',
    registration: 'inscripción foro, registro jóvenes políticos, inscripción lima 2025, foro político internacional',
    about: 'sobre foro panamericano, misión jóvenes políticos, valores foro político, historia foro panamericano',
    team: 'equipo foro panamericano, organizadores jóvenes políticos, liderazgo foro político, directiva foro panamericano',
    gallery: 'galería foro panamericano, fotos jóvenes políticos, imágenes foro político, eventos anteriores foro panamericano'
  },

  // Meta descriptions for different sections
  descriptions: {
    main: '¡Tu voz puede transformar América! Inscríbete al III Foro Panamericano de Jóvenes Políticos – Perú 2025. Evento internacional que reunirá a jóvenes líderes para debatir, proponer y construir soluciones políticas con impacto real.',
    registration: 'Inscríbete ahora al III Foro Panamericano de Jóvenes Políticos en Lima, Perú 2025. Únete a jóvenes líderes de América Latina en este evento internacional.',
    about: 'Conoce más sobre el Foro Panamericano de Jóvenes Políticos, nuestra misión, valores y el impacto que generamos en el liderazgo político juvenil.',
    team: 'Descubre el equipo organizador del III Foro Panamericano de Jóvenes Políticos. Conoce a los líderes que hacen posible este evento internacional.',
    gallery: 'Explora la galería de imágenes del Foro Panamericano de Jóvenes Políticos. Revive los momentos más importantes de ediciones anteriores.'
  }
};

// Generate structured data for the event
export const generateEventStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": seoConfig.event.name,
    "description": seoConfig.event.description,
    "startDate": seoConfig.event.startDate,
    "endDate": seoConfig.event.endDate,
    "location": {
      "@type": "Place",
      "name": seoConfig.event.location.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": seoConfig.event.location.address.addressLocality,
        "addressCountry": seoConfig.event.location.address.addressCountry,
        "addressRegion": seoConfig.event.location.address.addressRegion
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": seoConfig.event.location.geo.latitude,
        "longitude": seoConfig.event.location.geo.longitude
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": seoConfig.event.organizer.name,
      "url": seoConfig.event.organizer.url,
      "email": seoConfig.event.organizer.email
    },
    "offers": {
      "@type": "Offer",
      "url": seoConfig.event.offers.url,
      "availability": seoConfig.event.offers.availability,
      "price": seoConfig.event.offers.price,
      "priceCurrency": seoConfig.event.offers.priceCurrency
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "audience": {
      "@type": "Audience",
      "audienceType": "Jóvenes políticos y líderes de América Latina"
    },
    "performer": {
      "@type": "Organization",
      "name": "Foro Panamericano de Jóvenes Políticos"
    }
  };
};

// Generate structured data for the organization
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.site.name,
    "url": seoConfig.site.url,
    "logo": seoConfig.site.logo,
    "description": seoConfig.site.description,
    "sameAs": [
      seoConfig.social.facebook,
      seoConfig.social.instagram,
      seoConfig.social.twitter,
      seoConfig.social.linkedin,
      seoConfig.social.youtube
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": seoConfig.event.organizer.email,
      "availableLanguage": ["Spanish", "English", "Portuguese"]
    },
    "foundingDate": "2020",
    "areaServed": "América Latina",
    "serviceType": "Eventos políticos y de liderazgo juvenil"
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el Foro Panamericano de Jóvenes Políticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Foro Panamericano de Jóvenes Políticos es un evento internacional que reúne a jóvenes líderes políticos de América Latina para debatir, proponer y construir soluciones políticas con impacto real."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuándo y dónde se realizará el III Foro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El III Foro Panamericano de Jóvenes Políticos se realizará en Lima, Perú durante el año 2025."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo inscribirme al Foro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes inscribirte haciendo clic en el botón 'Registrarse Ahora' en nuestra página web, donde encontrarás el formulario de inscripción."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el costo de inscripción?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo de inscripción es de $50 USD. Recibirás un correo electrónico con las instrucciones de pago después de completar tu registro."
        }
      },
      {
        "@type": "Question",
        "name": "¿Quiénes pueden participar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Foro está dirigido a jóvenes políticos, líderes comunitarios, estudiantes de ciencias políticas y personas interesadas en el liderazgo político juvenil de América Latina."
        }
      }
    ]
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
};

// Generate article structured data (for blog posts if applicable)
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": seoConfig.site.name,
      "logo": {
        "@type": "ImageObject",
        "url": seoConfig.site.logo
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "image": article.image || seoConfig.site.logo,
    "url": article.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
};

// Generate local business structured data
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": seoConfig.site.name,
    "description": seoConfig.site.description,
    "url": seoConfig.site.url,
    "logo": seoConfig.site.logo,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressCountry": "PE",
      "addressRegion": "Lima"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.0464,
      "longitude": -77.0428
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": seoConfig.event.organizer.email
    },
    "sameAs": [
      seoConfig.social.facebook,
      seoConfig.social.instagram,
      seoConfig.social.twitter
    ]
  };
}; 