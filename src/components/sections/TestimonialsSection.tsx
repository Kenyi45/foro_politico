import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import { useForumStore } from '../../stores/useForumStore';
import Card from '../common/Card';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { testimonials } = useForumStore();
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Enhanced testimonials with more professional data
  const enhancedTestimonials = [
    {
      id: '1',
      participant: 'Andrea López Mendoza',
      content: 'El Foro de Jóvenes Políticos transformó mi perspectiva sobre el liderazgo. Las conexiones internacionales que establecí han sido fundamentales para desarrollar políticas públicas innovadoras en mi ciudad.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b302?w=400&h=400&fit=crop&crop=face',
      country: 'Argentina',
      position: 'Concejal Municipal de Buenos Aires',
      rating: 5,
      year: '2023'
    },
    {
      id: '2',
      participant: 'Miguel Rodríguez Santos',
      content: 'Gracias al foro, pude validar mi proyecto de participación ciudadana digital con expertos internacionales. Hoy, CiudadanIA impacta a más de 50,000 usuarios en Latinoamérica.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      country: 'España',
      position: 'Fundador & CEO de CiudadanIA',
      rating: 5,
      year: '2022'
    },
    {
      id: '3',
      participant: 'Valentina Chen Wu',
      content: 'La metodología del foro y la diversidad de perspectivas me permitieron diseñar un programa de liderazgo juvenil que ahora se implementa en 15 universidades chilenas.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      country: 'Chile',
      position: 'Directora de Políticas Juveniles, Universidad de Chile',
      rating: 5,
      year: '2023'
    },
    {
      id: '4',
      participant: 'Kwame Asante Johnson',
      content: 'El networking y los talleres especializados del foro me conectaron con organizaciones que ahora financian mis iniciativas de transparencia gubernamental en Ghana.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      country: 'Ghana',
      position: 'Director Ejecutivo, Transparency Ghana Youth',
      rating: 5,
      year: '2022'
    },
    {
      id: '5',
      participant: 'Elena Volkov Petrov',
      content: 'El programa de mentoría del foro fue clave para refinar mi propuesta de participación digital. Ahora lidero la transformación digital del parlamento juvenil europeo.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
      country: 'Estonia',
      position: 'Coordinadora Digital, Parlamento Juvenil Europeo',
      rating: 5,
      year: '2023'
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % enhancedTestimonials.length);
  }, [enhancedTestimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + enhancedTestimonials.length) % enhancedTestimonials.length);
  }, [enhancedTestimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const currentTestimonial = enhancedTestimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-gold-500 fill-current' : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4 sm:mb-6">
            <Quote className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            <span className="font-semibold text-xs sm:text-sm">Testimonios & Organizaciones</span>
          </div>
          
          <h2 className="title-section text-white mb-4 sm:mb-6 animate-slide-up">
            Conoce quiénes hacen{' '}
            <span className="text-accent-200 font-extrabold">
              posible el Foro
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Las organizaciones que impulsan el liderazgo juvenil y las historias de transformación 
            de nuestros participantes que ahora lideran el cambio en sus países
          </p>
        </div>

        {/* Organizations Section */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Organizaciones que hacen posible el foro
            </h3>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
              Conoce a las agrupaciones comprometidas con el desarrollo del liderazgo político juvenil
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Instituto Prudencia - Primero */}
            <Card 
              variant="elevated" 
              size="lg" 
              hover="lift"
              className="bg-gradient-to-br from-primary-900/95 to-primary-800/90 border border-primary-600/40 group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-6 sm:p-8 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 via-transparent to-primary-800/30 group-hover:from-primary-600/30 group-hover:to-primary-700/40 transition-all duration-500"></div>
                
                {/* Logo */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto bg-primary-800/60 rounded-2xl flex items-center justify-center p-4 sm:p-6 border border-primary-600/50 group-hover:border-primary-500/70 group-hover:bg-primary-700/70 transition-all duration-500 group-hover:scale-105">
                    <img 
                      src="/Logo_IP.png" 
                      alt="Instituto Prudencia Logo" 
                      className="w-full h-full object-contain filter brightness-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-bold text-primary-50 mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    Instituto Prudencia
                  </h4>
                  
                  <p className="text-primary-100/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    Think tank especializado en análisis político y desarrollo de políticas públicas 
                    para América Latina. Se enfoca en investigación aplicada, formación de líderes 
                    y promoción del diálogo democrático entre diferentes sectores de la sociedad civil 
                    y política regional.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-primary-800/50 rounded-lg py-3 px-2 border border-primary-600/40">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-200 mb-1">10+</div>
                      <div className="text-primary-300 text-xs sm:text-sm font-medium">Años de trayectoria</div>
                    </div>
                    <div className="text-center bg-primary-800/50 rounded-lg py-3 px-2 border border-primary-600/40">
                      <div className="text-2xl sm:text-3xl font-bold text-primary-200 mb-1">50+</div>
                      <div className="text-primary-300 text-xs sm:text-sm font-medium">Investigaciones</div>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="text-left bg-primary-800/40 rounded-xl p-4 sm:p-6 border border-primary-600/30">
                    <h5 className="font-semibold text-primary-100 mb-2 sm:mb-3 text-sm sm:text-base flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                      Visión
                    </h5>
                    <p className="text-primary-200 text-xs sm:text-sm leading-relaxed">
                      Ser el referente en análisis político y desarrollo institucional en América Latina, 
                      contribuyendo a la consolidación democrática a través de la investigación rigurosa 
                      y la formación de nuevos líderes políticos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Una Voz Diferente - Segundo */}
            <Card 
              variant="elevated" 
              size="lg" 
              hover="lift"
              className="bg-gradient-to-br from-accent-900/95 to-accent-800/90 border border-accent-600/40 group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-6 sm:p-8 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-700/20 via-transparent to-accent-800/30 group-hover:from-accent-600/30 group-hover:to-accent-700/40 transition-all duration-500"></div>
                
                {/* Logo */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto bg-accent-800/60 rounded-2xl flex items-center justify-center p-4 sm:p-6 border border-accent-600/50 group-hover:border-accent-500/70 group-hover:bg-accent-700/70 transition-all duration-500 group-hover:scale-105">
                    <img 
                      src="/Logo_UVD.png" 
                      alt="Una Voz Diferente Logo" 
                      className="w-full h-full object-contain filter brightness-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-bold text-accent-50 mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    Una Voz Diferente
                  </h4>
                  
                  <p className="text-accent-100/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    Organización dedicada a empoderar a jóvenes líderes políticos de América Latina, 
                    promoviendo espacios de diálogo, formación y networking para construir un futuro 
                    más democrático e inclusivo. Fundada con la visión de ser la voz de las nuevas 
                    generaciones en la política regional.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-accent-800/50 rounded-lg py-3 px-2 border border-accent-600/40">
                      <div className="text-2xl sm:text-3xl font-bold text-accent-200 mb-1">5+</div>
                      <div className="text-accent-300 text-xs sm:text-sm font-medium">Años de experiencia</div>
                    </div>
                    <div className="text-center bg-accent-800/50 rounded-lg py-3 px-2 border border-accent-600/40">
                      <div className="text-2xl sm:text-3xl font-bold text-accent-200 mb-1">15+</div>
                      <div className="text-accent-300 text-xs sm:text-sm font-medium">Países alcanzados</div>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="text-left bg-accent-800/40 rounded-xl p-4 sm:p-6 border border-accent-600/30">
                    <h5 className="font-semibold text-accent-100 mb-2 sm:mb-3 text-sm sm:text-base flex items-center">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-2"></div>
                      Misión
                    </h5>
                    <p className="text-accent-200 text-xs sm:text-sm leading-relaxed">
                      Fortalecer el liderazgo político juvenil en América Latina a través de programas 
                      de formación, intercambio cultural y construcción de redes colaborativas que 
                      impulsen el cambio social positivo.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 