import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import { useForumStore } from '../../stores/useForumStore';
import Card from '../common/Card';
import Button from '../common/Button';

const TestimonialsSection: React.FC = () => {
  // const { testimonials } = useForumStore(); // Using enhanced testimonials instead
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <Quote className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Testimonios de Impacto</span>
          </div>
          
          <h2 className="title-section text-white mb-6">
            Historias de{' '}
            <span className="text-accent-200 font-extrabold">
              Transformación
            </span>
          </h2>
          
          <p className="text-xl text-white/80 leading-relaxed">
            Conoce cómo el foro ha impactado la carrera de jóvenes líderes 
            que ahora transforman sus comunidades y países
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card 
            variant="glass" 
            size="lg" 
            hover="none"
            className="bg-white/10 backdrop-blur-lg border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-2 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.participant}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start mb-6">
                  {renderStars(currentTestimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">
                    {currentTestimonial.participant}
                  </h4>
                  
                  <p className="text-accent-200 font-semibold">
                    {currentTestimonial.position}
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/70">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTestimonial.country}</span>
                    <span>•</span>
                    <span>Promoción {currentTestimonial.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <Button
            variant="ghost"
            size="md"
            onClick={prevTestimonial}
            className="text-white hover:bg-white/10 border border-white/20"
            icon={<ChevronLeft />}
          >
            Anterior
          </Button>
          
          {/* Indicators */}
          <div className="flex space-x-2">
            {enhancedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="md"
            onClick={nextTestimonial}
            className="text-white hover:bg-white/10 border border-white/20"
            icon={<ChevronRight />}
            iconPosition="right"
          >
            Siguiente
          </Button>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            {isAutoPlaying ? 'Pausar rotación automática' : 'Activar rotación automática'}
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card variant="glass" className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para escribir tu historia de éxito?
            </h3>
            <p className="text-white/80 mb-6">
              Únete a la próxima generación de líderes que están transformando el mundo
            </p>
            <Button variant="secondary" size="lg">
              Aplicar al Foro 2024
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 