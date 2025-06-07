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

// Language Context
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const {
    setNextEvent,
    setStatistics,
    setOrganizers,
    setTestimonials,
    setBlogPosts,
    setThematicAxes
  } = useForumStore();

  const { t } = useLanguage();

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
                  <span className="badge-text">{t('about.badge')}</span>
                </div>
                
                <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
                  {t('about.title')}{' '}
                  <span className="text-primary-700 font-extrabold">{t('about.title.highlight')}</span>
                </h2>
                
                <p className="subtitle-section text-neutral-600 max-w-4xl mx-auto">
                  {t('about.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="title-card text-neutral-900 mb-6">{t('about.mission.title')}</h3>
                  <p className="text-institutional text-neutral-600 mb-6">
                    {t('about.mission.description')}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">{t('about.mission.point1')}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">{t('about.mission.point2')}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600">{t('about.mission.point3')}</p>
                    </div>
                  </div>
                </div>
                
                <Card variant="elevated" className="p-8">
                  <h4 className="title-card text-neutral-900 mb-4">{t('about.values.title')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">D</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">{t('about.values.democracy')}</h5>
                        <p className="text-sm text-neutral-600">{t('about.values.democracy.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <span className="text-accent-600 font-bold">I</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">{t('about.values.inclusion')}</h5>
                        <p className="text-sm text-neutral-600">{t('about.values.inclusion.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                        <span className="text-gold-600 font-bold">T</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-neutral-900">{t('about.values.transparency')}</h5>
                        <p className="text-sm text-neutral-600">{t('about.values.transparency.desc')}</p>
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
                <span className="badge-text">{t('events.badge')}</span>
              </div>
              
              <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
                {t('events.title')}{' '}
                <span className="text-primary-700 font-extrabold">{t('events.title.highlight')}</span>
              </h2>
              
              <p className="subtitle-section text-neutral-600 max-w-3xl mx-auto">
                {t('events.description')}
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

        {/* Registration CTA Section - Dark Style like Testimonials */}
        <section id="registro" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
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
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span className="font-semibold text-sm">{t('registration.badge')}</span>
                </div>
                
                <h2 className="title-section text-white mb-6 animate-slide-up">
                  {t('registration.title')}{' '}
                  <span className="text-accent-200 font-extrabold">{t('registration.title.highlight')}</span>!
                </h2>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  {t('registration.description')}
                </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="mb-6">
                                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/20 text-gold-200 text-sm font-medium mb-4">
                      {t('registration.discount')}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleRegisterClick}
                      className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      {t('registration.cta.register')}
                    </button>
                    
                    <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300">
                      {t('registration.cta.info')}
                    </button>
                </div>

                <div className="mt-6 text-sm text-white/70">
                                      <div className="flex items-center justify-center space-x-4">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {t('registration.secure')}
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {t('registration.immediate')}
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {t('registration.support')}
                      </span>
                    </div>
                    <p className="mt-3">
                      {t('registration.email.text')}{' '}
                      <a href="mailto:registro@forumjp.org" className="text-accent-200 hover:text-accent-100 font-medium">
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
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/foro_politicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
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
                <a href="https://instagram.com/foro_politicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quicklinks.title')}</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-neutral-400 hover:text-white transition-colors">{t('footer.quicklinks.home')}</a></li>
                <li><a href="#sobre" className="text-neutral-400 hover:text-white transition-colors">{t('footer.quicklinks.about')}</a></li>
                <li><a href="#eventos" className="text-neutral-400 hover:text-white transition-colors">{t('footer.quicklinks.events')}</a></li>
                <li><a href="#equipo" className="text-neutral-400 hover:text-white transition-colors">{t('footer.quicklinks.team')}</a></li>
                <li><a href="#registro" className="text-neutral-400 hover:text-white transition-colors">{t('footer.quicklinks.register')}</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
              <ul className="space-y-3 text-neutral-400">
                <li>📧 info@forumjp.org</li>
                <li>📱 +1 (555) 123-4567</li>
                <li>🌍 forumjovenes.org</li>
                <li>📍 {t('footer.contact.global')}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-500 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">{t('footer.privacy')}</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">{t('footer.terms')}</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors">{t('footer.cookies')}</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
