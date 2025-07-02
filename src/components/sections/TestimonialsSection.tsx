import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const TestimonialsSection: React.FC = () => {
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
    <section id="testimonios" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center px-4 sm:px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6 sm:mb-8">
            <Quote className="w-4 sm:w-5 h-4 sm:h-5 mr-3" />
            <span className="font-semibold text-sm sm:text-base">Organizaciones</span>
          </div>
          
          <h2 className="title-section text-white mb-6 sm:mb-8 animate-slide-up">
            Conoce quiénes hacen{' '}
            <span className="text-accent-300 font-extrabold">
              posible el Foro
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
            Las organizaciones que impulsan el liderazgo juvenil y las historias de transformación 
            de nuestros participantes que ahora lideran el cambio en sus países
          </p>
        </div>

        {/* Organizations Section */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Instituto Prudencia - Primero */}
            <Card 
              variant="elevated" 
              size="lg" 
              hover="lift"
              className="bg-gradient-to-br from-white to-neutral-50/90 border border-neutral-200/60 group shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm"
            >
              <div className="p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 group-hover:from-primary-100/40 group-hover:to-primary-200/30 transition-all duration-500"></div>
                
                {/* Logo */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center p-3 sm:p-4 lg:p-6 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500 group-hover:scale-105 shadow-lg">
                    <img 
                      src="/Logo_IP.png" 
                      alt="Instituto Prudencia Logo" 
                      className="w-full h-full object-contain filter brightness-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6 group-hover:text-primary-800 transition-colors duration-300">
                    Instituto Prudencia
                  </h4>
                  
                  <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
                    Think tank especializado en análisis político y desarrollo de políticas públicas 
                    para América Latina. Se enfoca en investigación aplicada, formación de líderes 
                    y promoción del diálogo democrático entre diferentes sectores de la sociedad civil 
                    y política regional.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100/70 rounded-xl py-4 px-3 border border-primary-200/60 shadow-md">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700 mb-1 sm:mb-2">10+</div>
                      <div className="text-primary-600 text-xs sm:text-sm lg:text-base font-semibold">Años de trayectoria</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100/70 rounded-xl py-4 px-3 border border-primary-200/60 shadow-md">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700 mb-1 sm:mb-2">5+</div>
                      <div className="text-primary-600 text-xs sm:text-sm lg:text-base font-semibold">Países</div>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="text-left bg-gradient-to-br from-primary-50/80 to-primary-100/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-primary-200/50 shadow-md">
                    <h5 className="font-bold text-primary-800 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-3 shadow-sm"></div>
                      Visión
                    </h5>
                    <p className="text-neutral-700 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
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
              className="bg-gradient-to-br from-white to-neutral-50/90 border border-neutral-200/60 group shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm"
            >
              <div className="p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-accent-100/20 group-hover:from-accent-100/40 group-hover:to-accent-200/30 transition-all duration-500"></div>
                
                {/* Logo */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <div className="w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 mx-auto bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center p-3 sm:p-4 lg:p-6 group-hover:bg-gradient-to-br group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-500 group-hover:scale-105 shadow-lg">
                    <img 
                      src="/Logo_UVD.png" 
                      alt="Una Voz Diferente Logo" 
                      className="w-full h-full object-contain filter brightness-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6 group-hover:text-accent-800 transition-colors duration-300">
                    Una Voz Diferente
                  </h4>
                  
                  <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
                    Organización dedicada a empoderar a jóvenes líderes políticos de América Latina, 
                    promoviendo espacios de diálogo, formación y networking para construir un futuro 
                    más democrático e inclusivo. Fundada con la visión de ser la voz de las nuevas 
                    generaciones en la política regional.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="text-center bg-gradient-to-br from-accent-50 to-accent-100/70 rounded-xl py-4 px-3 border border-accent-200/60 shadow-md">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-700 mb-1 sm:mb-2">5+</div>
                      <div className="text-accent-600 text-xs sm:text-sm lg:text-base font-semibold">Años de experiencia</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-accent-50 to-accent-100/70 rounded-xl py-4 px-3 border border-accent-200/60 shadow-md">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-700 mb-1 sm:mb-2">15+</div>
                      <div className="text-accent-600 text-xs sm:text-sm lg:text-base font-semibold">Países alcanzados</div>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="text-left bg-gradient-to-br from-accent-50/80 to-accent-100/60 rounded-xl p-4 sm:p-6 lg:p-8 border border-accent-200/50 shadow-md">
                    <h5 className="font-bold text-accent-800 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-600 rounded-full mr-3 shadow-sm"></div>
                      Misión
                    </h5>
                    <p className="text-neutral-700 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
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