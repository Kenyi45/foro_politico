import React, { useEffect } from 'react';
import { useForumStore } from './stores/useForumStore';
import {
  mockForumEvent,
  mockStatistics,
  mockOrganizers,
  mockTestimonials,
  mockBlogPosts,
  mockThematicAxes
} from './data/mockData';

// Layout Components
import Header from './components/layout/Header';

// Section Components
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import StatisticsSection from './components/sections/StatisticsSection';
import CountdownSection from './components/sections/CountdownSection';
import ThematicAxesSection from './components/sections/ThematicAxesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TeamSection from './components/sections/TeamSection';
import GallerySection from './components/sections/GallerySection';

// Common Components
import Button from './components/common/Button';
import Card, { CardHeader, CardTitle, CardContent, CardDescription } from './components/common/Card';

// Icons
import { Calendar, Award, Users } from 'lucide-react';

function App() {
  const {
    setNextEvent,
    setStatistics,
    setOrganizers,
    setTestimonials,
    setBlogPosts,
    setThematicAxes
  } = useForumStore();

  // Initialize data on component mount
  useEffect(() => {
    setNextEvent(mockForumEvent);
    setStatistics(mockStatistics);
    setOrganizers(mockOrganizers);
    setTestimonials(mockTestimonials);
    setBlogPosts(mockBlogPosts);
    setThematicAxes(mockThematicAxes);
  }, [
    setNextEvent,
    setStatistics,
    setOrganizers,
    setTestimonials,
    setBlogPosts,
    setThematicAxes
  ]);

  const handleRegisterClick = () => {
    console.log('Register button clicked');
    // Here you would typically open a registration modal or navigate to registration page
  };

  const handleLearnMoreClick = () => {
    console.log('Learn more button clicked');
    // Scroll to about section
  };

  return (
    <div className="min-h-screen bg-white custom-scrollbar">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onRegisterClick={handleRegisterClick}
          onLearnMoreClick={handleLearnMoreClick}
        />

        {/* Features Section */}
        <FeaturesSection />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Countdown Section */}
        <CountdownSection />

        {/* Thematic Axes Section */}
        <ThematicAxesSection />

        {/* About Section - Enhanced */}
        <section id="sobre" className="section-padding institutional-gradient">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  <span className="badge-text">Nuestra Historia</span>
                </div>
                
                <h2 className="title-section text-neutral-900 mb-6">
                  Sobre el{' '}
                  <span className="text-primary-700 font-extrabold">3er Foro Panamericano</span>
                </h2>
                
                <p className="subtitle-section text-neutral-600 max-w-4xl mx-auto">
                  El Foro Panamericano de Jóvenes Políticos es una plataforma continental dedicada a la 
                  defensa de la libertad frente al socialismo y la cultura woke. Reúne a líderes emergentes 
                  de América comprometidos con los valores democráticos tradicionales y la preservación de 
                  las libertades fundamentales. En su tercera edición, se realizará en Lima, Perú, esperando 
                  entre 200 a 300 participantes de todo el continente.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="title-card text-neutral-900 mb-6">Misión: Defendiendo la Libertad</h3>
                  <p className="text-institutional text-neutral-600 mb-6">
                    Formar una nueva generación de líderes políticos panamericanos comprometidos con la 
                    defensa de la libertad frente al socialismo y la cultura woke, fortaleciendo los 
                    valores democráticos tradicionales en América.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">Defender la libertad y los valores democráticos tradicionales</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">Combatir la influencia del socialismo y la cultura woke</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">Fortalecer el liderazgo juvenil conservador en América</p>
                    </div>
                  </div>
                </div>
                
                <Card variant="elevated" className="p-8">
                  <h4 className="title-card text-neutral-900 mb-4">Nuestros Valores</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">D</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">Democracia</h5>
                        <p className="text-sm text-neutral-600">Creemos en la participación democrática</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <span className="text-accent-600 font-bold">I</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">Inclusión</h5>
                        <p className="text-sm text-neutral-600">Valoramos la diversidad de perspectivas</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                        <span className="text-gold-600 font-bold">T</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">Transparencia</h5>
                        <p className="text-sm text-neutral-600">Promovemos la apertura y honestidad</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Events Section - Enhanced */}
        <section id="eventos" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                <span className="badge-text">Programa Completo</span>
              </div>
              
              <h2 className="title-section text-neutral-900 mb-6">
                Eventos y{' '}
                <span className="text-primary-700 font-extrabold">Actividades</span>
              </h2>
              
              <p className="subtitle-section text-neutral-600 max-w-3xl mx-auto">
                Próximamente: Lista completa de paneles, talleres, conferencias magistrales 
                y actividades de networking programadas para el foro.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="elevated" hover="lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-primary-600 font-bold text-xl">🎤</span>
                  </div>
                  <CardTitle>Conferencias Magistrales</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Charlas inspiradoras con líderes mundiales, ex-presidentes y figuras 
                    destacadas de la política internacional.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="elevated" hover="lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-accent-600 font-bold text-xl">🛠️</span>
                  </div>
                  <CardTitle>Talleres Prácticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sesiones interactivas de desarrollo de habilidades en liderazgo, 
                    comunicación política y gestión de campañas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="elevated" hover="lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gold-600 font-bold text-xl">🤝</span>
                  </div>
                  <CardTitle>Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Oportunidades exclusivas de conexión con jóvenes líderes, mentores 
                    y organizaciones internacionales.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Registration CTA Section */}
        <section id="registro" className="relative overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-500 to-primary-800"></div>
          <div className="absolute inset-0 turquoise-gradient opacity-20"></div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10 section-padding">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                
                {/* Main CTA Content */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white mb-8">
                    <span className="w-3 h-3 bg-gold-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="badge-text text-white">¡Inscripciones Abiertas para Lima 2025!</span>
                  </div>
                  
                  <h2 className="title-hero text-white mb-8 text-shadow-lg">
                    ¡Únete al{' '}
                    <span className="text-gold-300 font-extrabold animate-pulse">Cambio</span>!
                  </h2>
                  
                  <p className="subtitle-hero text-white/95 mb-12 max-w-4xl mx-auto text-shadow">
                    Sé parte de la próxima generación de líderes políticos que están 
                    <strong className="text-gold-200"> transformando América</strong>. 
                    Tu voz importa, tu participación marca la diferencia en el futuro de nuestro continente.
                  </p>
                  
                  {/* Primary CTA Buttons */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
                    <Button 
                      variant="secondary" 
                      size="xl"
                      onClick={handleRegisterClick}
                      className="bg-white text-primary-700 hover:bg-neutral-100 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 px-12 py-4 text-lg group"
                    >
                      <span className="mr-2">🚀</span>
                      Registrarse Ahora
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="xl"
                      className="text-white border-2 border-white/40 hover:bg-white/15 backdrop-blur-md px-12 py-4 text-lg transition-all duration-300"
                    >
                      <span className="mr-2">📋</span>
                      Conocer Más Detalles
                    </Button>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <Card variant="glass" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🌟</span>
                      </div>
                      <h3 className="title-card text-white mb-4">Networking Elite</h3>
                      <p className="text-institutional text-white/80">
                        Conecta con líderes jóvenes de 23 países americanos y construye 
                        alianzas estratégicas para tu carrera política.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="glass" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-accent-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h3 className="title-card text-white mb-4">Certificación Internacional</h3>
                      <p className="text-institutional text-white/80">
                        Obtén un certificado reconocido internacionalmente que potenciará 
                        tu perfil profesional y político.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="glass" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl">💼</span>
                      </div>
                      <h3 className="title-card text-white mb-4">Oportunidades de Carrera</h3>
                      <p className="text-institutional text-white/80">
                        Accede a mentorías, becas de estudio y ofertas laborales 
                        exclusivas en organizaciones internacionales.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Registration Information */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column - Registration Details */}
                    <div>
                      <h3 className="title-card text-white mb-6">Información de Registro</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-gold-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Fechas Importantes</h4>
                            <p className="text-white/80 text-sm">
                              <span className="block">Registro Temprano: Hasta el 15 de Julio</span>
                              <span className="block">Registro Regular: Hasta el 15 de Septiembre</span>
                              <span className="block">Evento: 2-4 Octubre 2025, Lima</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-accent-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Becas Disponibles</h4>
                            <p className="text-white/80 text-sm">
                              Hasta 50% de descuento para estudiantes destacados y 
                              líderes juveniles de organizaciones sin fines de lucro.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">Cupos Limitados</h4>
                            <p className="text-white/80 text-sm">
                              Solo 300 participantes seleccionados. El proceso de selección 
                              prioriza diversidad geográfica y excelencia académica.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Quick Stats */}
                    <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                      <h3 className="title-card text-white mb-8 text-center">¿Por Qué Participar?</h3>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="stat-number text-gold-300 mb-2">23</div>
                          <div className="stat-label text-white/80">Países Participantes</div>
                        </div>
                        <div className="text-center">
                          <div className="stat-number text-accent-300 mb-2">50+</div>
                          <div className="stat-label text-white/80">Expertos Internacionales</div>
                        </div>
                        <div className="text-center">
                          <div className="stat-number text-primary-300 mb-2">15</div>
                          <div className="stat-label text-white/80">Talleres Especializados</div>
                        </div>
                        <div className="text-center">
                          <div className="stat-number text-white mb-2">72h</div>
                          <div className="stat-label text-white/80">Networking Intensivo</div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white mb-2">Registro Temprano</div>
                          <div className="text-2xl font-extrabold text-gold-300 mb-1">50% OFF</div>
                          <div className="text-white/70 text-sm">Válido hasta el 15 de Julio</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mt-16">
                  <div className="inline-flex items-center space-x-6 text-white/80 text-sm mb-6">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Proceso de registro seguro
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Confirmación inmediata
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      Soporte 24/7
                    </span>
                  </div>
                  
                  <p className="text-white/60 text-sm">
                    ¿Tienes preguntas? Escríbenos a{' '}
                    <a href="mailto:registro@forumjp.org" className="text-gold-300 hover:text-gold-200 underline">
                      registro@forumjp.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Enhanced */}
      <footer className="bg-neutral-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FJP</span>
                </div>
                <h3 className="title-card text-white">Foro de Jóvenes Políticos</h3>
              </div>
              <p className="text-institutional text-neutral-400 mb-6 max-w-md">
                Construyendo el futuro de la política desde la perspectiva de las nuevas generaciones. 
                Formando líderes comprometidos con la democracia y el cambio social.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/forojovenes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/foro-jovenes-politicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/forojovenes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551-.293-.403-.293-.931 0-1.334.293-.403.766-.403 1.059 0 .488.67 1.308 1.096 2.073 1.096.765 0 1.585-.426 2.073-1.096.293-.403.766-.403 1.059 0 .293.403.293.931 0 1.334-.684.94-1.835 1.551-3.132 1.551zm7.132 0c-1.297 0-2.448-.611-3.132-1.551-.293-.403-.293-.931 0-1.334.293-.403.766-.403 1.059 0 .488.67 1.308 1.096 2.073 1.096.765 0 1.585-.426 2.073-1.096.293-.403.766-.403 1.059 0 .293.403.293.931 0 1.334-.684.94-1.835 1.551-3.132 1.551z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-neutral-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#sobre" className="text-neutral-400 hover:text-white transition-colors">Sobre el Foro</a></li>
                <li><a href="#eventos" className="text-neutral-400 hover:text-white transition-colors">Eventos</a></li>
                <li><a href="#equipo" className="text-neutral-400 hover:text-white transition-colors">Equipo</a></li>
                <li><a href="#registro" className="text-neutral-400 hover:text-white transition-colors">Registro</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-neutral-400">
                <li>📧 info@forumjp.org</li>
                <li>📱 +1 (555) 123-4567</li>
                <li>🌍 forumjovenes.org</li>
                <li>📍 Global Network</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-500 text-sm">
              © 2024 Foro de Jóvenes Políticos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">Privacidad</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">Términos</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
