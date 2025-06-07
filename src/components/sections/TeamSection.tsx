import React from 'react';
import { Twitter, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import { useForumStore } from '../../stores/useForumStore';
import Card, { CardContent } from '../common/Card';

const TeamSection: React.FC = () => {
  // const { organizers } = useForumStore(); // Using enhanced team data instead

  // Enhanced team data with more professional information
  const enhancedTeam = [
    {
      id: '1',
      name: 'Dr. Sofía Hernández',
      position: 'Directora Ejecutiva',
      country: 'México',
      bio: 'Doctora en Ciencias Políticas por Harvard. Especialista en participación juvenil con 12 años de experiencia en organizaciones internacionales como ONU y Banco Mundial.',
      profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      achievements: ['Ph.D Harvard Kennedy School', 'Ex-Asesora ONU Juventud', 'TEDx Speaker'],
      socialMedia: {
        twitter: '@sofia_hernandez',
        linkedin: 'sofia-hernandez-politica',
        email: 'sofia@forumjp.org'
      },
      languages: ['Español', 'Inglés', 'Francés']
    },
    {
      id: '2',
      name: 'Diego Morales Rivera',
      position: 'Director de Programas',
      country: 'Colombia',
      bio: 'MBA en Gestión Pública y 8 años desarrollando programas de liderazgo juvenil. Experto en metodologías participativas y diseño de curricula política.',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      achievements: ['MBA Gestión Pública', 'Certificación PMP', '500+ Líderes Formados'],
      socialMedia: {
        twitter: '@diego_morales',
        linkedin: 'diego-morales-liderazgo',
        email: 'diego@forumjp.org'
      },
      languages: ['Español', 'Inglés', 'Portugués']
    },
    {
      id: '3',
      name: 'Camila Santos Da Silva',
      position: 'Directora de Comunicaciones',
      country: 'Brasil',
      bio: 'Comunicóloga especializada en marketing político digital. Ha dirigido campañas digitales para más de 30 candidatos jóvenes en Latinoamérica.',
      profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b302?w=400&h=400&fit=crop&crop=face',
      achievements: ['Master en Marketing Digital', 'Google Certified', '2M+ Alcance Digital'],
      socialMedia: {
        twitter: '@camila_santos',
        instagram: '@camila.santos.oficial',
        linkedin: 'camila-santos-comms',
        email: 'camila@forumjp.org'
      },
      languages: ['Portugués', 'Español', 'Inglés']
    },
    {
      id: '4',
      name: 'Dr. James Wellington',
      position: 'Asesor Académico Senior',
      country: 'Reino Unido',
      bio: 'Profesor Emérito de Oxford en Ciencias Políticas. Autor de 15 libros sobre democracia y juventud. Consultor de la Unión Europea en políticas juveniles.',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      achievements: ['Profesor Emérito Oxford', '15 Libros Publicados', 'Consultor UE'],
      socialMedia: {
        linkedin: 'james-wellington-oxford',
        email: 'james@forumjp.org'
      },
      languages: ['Inglés', 'Francés', 'Alemán']
    },
    {
      id: '5',
      name: 'Aisha Patel Kumar',
      position: 'Directora de Alianzas',
      country: 'India',
      bio: 'Especialista en cooperación internacional con experiencia en UNESCO y Fundación Gates. Conecta organizaciones juveniles globales desde hace 6 años.',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      achievements: ['Ex-UNESCO Program Officer', 'Gates Foundation Alumni', '50+ Alianzas Globales'],
      socialMedia: {
        twitter: '@aisha_patel',
        linkedin: 'aisha-patel-international',
        email: 'aisha@forumjp.org'
      },
      languages: ['Hindi', 'Inglés', 'Francés']
    },
    {
      id: '6',
      name: 'Ahmed Hassan Al-Rashid',
      position: 'Coordinador Regional MENA',
      country: 'Emiratos Árabes Unidos',
      bio: 'Politólogo y activista juvenil. Coordinador de la Red de Jóvenes Líderes Árabes y especialista en transformación democrática en Medio Oriente.',
      profileImage: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face',
      achievements: ['Red Líderes Árabes', 'Youth Peace Ambassador', 'Democracy Expert'],
      socialMedia: {
        twitter: '@ahmed_alrashid',
        linkedin: 'ahmed-hassan-mena',
        email: 'ahmed@forumjp.org'
      },
      languages: ['Árabe', 'Inglés', 'Francés']
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section className="section-padding bg-white" id="equipo">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            <span className="badge-text">Nuestros Ponentes</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6">
            Líderes Experimentados{' '}
            <span className="text-primary-600 font-bold">
              Formando Líderes
            </span>
          </h2>
          
          <p className="subtitle-section text-neutral-600">
            Un equipo multidisciplinario de expertos internacionales comprometidos 
            con el desarrollo del liderazgo político juvenil
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {enhancedTeam.map((member, index) => (
            <Card
              key={member.id}
              variant="elevated"
              hover="lift"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent>
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Flag or Country Indicator */}
                  <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {member.country}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h3 className="title-card text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-political text-accent-600 mb-3">
                    {member.position}
                  </p>
                  
                  <p className="text-institutional text-neutral-600 text-sm mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-3">Logros Destacados</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">Idiomas</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((language) => (
                      <span
                        key={language}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="border-t border-neutral-100 pt-4">
                  <div className="flex items-center justify-center space-x-3">
                    {Object.entries(member.socialMedia).map(([platform, handle]) => (
                      <a
                        key={platform}
                        href={platform === 'email' ? `mailto:${handle}` : `https://${platform}.com/${handle}`}
                        target={platform === 'email' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-100 hover:bg-primary-100 rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-all duration-200 hover:scale-110"
                        title={`${platform}: ${handle}`}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board Section */}
        <div className="text-center">
          <Card variant="gradient" className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Consejo Asesor Internacional
            </h3>
            <p className="text-neutral-600 mb-6">
              Nuestro equipo cuenta con el respaldo de un prestigioso consejo asesor 
              integrado por ex-presidentes, ministros, académicos y líderes de organizaciones 
              internacionales de 6 continentes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">25+</div>
                <div className="text-sm text-neutral-600">Asesores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-600">15+</div>
                <div className="text-sm text-neutral-600">Países</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-600">200+</div>
                <div className="text-sm text-neutral-600">Años experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">6</div>
                <div className="text-sm text-neutral-600">Continentes</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;