import React, { useEffect, useState } from 'react';
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
import OrganizationsSection from './components/sections/TestimonialsSection';
import GallerySection from './components/sections/GallerySection';
import RegistrationSection from './components/sections/RegistrationSection';

// Common Components
import Card, { CardHeader, CardTitle, CardContent, CardDescription } from './components/common/Card';

// Language Context
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Icons
import { Play, X } from 'lucide-react';

function AppContent() {
  const {
    setNextEvent,
    setStatistics,
    setOrganizers,
    setTestimonials,
    setBlogPosts,
    setThematicAxes
  } = useForumStore();

  const { t, currentLanguage } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Get video source based on current language
  const getVideoSource = () => {
    switch (currentLanguage) {
      case 'en':
        return '/videos/video_ingles.webm';
      case 'pt':
        return '/videos/video_portugues.webm';
      case 'es':
      default:
        return '/Video.webm';
    }
  };

  const videoSource = getVideoSource();

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

  // Close video modal with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

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

        {/* Thematic Axes Section */}
        {/* <ThematicAxesSection /> */}

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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                <div className="space-y-6">
                  <h3 className="title-card text-neutral-900 mb-6 leading-tight">{t('about.mission.title')}</h3>
                  <p className="text-institutional text-neutral-600 mb-8 leading-relaxed">
                    {t('about.mission.description')}
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600 leading-relaxed">{t('about.mission.point1')}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600 leading-relaxed">{t('about.mission.point2')}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-institutional text-neutral-600 leading-relaxed">{t('about.mission.point3')}</p>
                    </div>
                  </div>
                </div>
                
                <Card variant="elevated" className="p-8 h-fit">
                  <h4 className="title-card text-neutral-900 mb-6 leading-tight">{t('about.values.title')}</h4>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-bold text-lg">R</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-neutral-900 mb-2 leading-tight">{t('about.values.democracy')}</h5>
                        <p className="text-sm text-neutral-600 leading-relaxed">{t('about.values.democracy.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-600 font-bold text-lg">D</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-neutral-900 mb-2 leading-tight">{t('about.values.inclusion')}</h5>
                        <p className="text-sm text-neutral-600 leading-relaxed">{t('about.values.inclusion.desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gold-600 font-bold text-lg">L</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-neutral-900 mb-2 leading-tight">{t('about.values.transparency')}</h5>
                        <p className="text-sm text-neutral-600 leading-relaxed">{t('about.values.transparency.desc')}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Video Presentation Section */}
        <section id="video" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  <span className="badge-text">{t('video.launch.badge')}</span> 
                </div>
                
                <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
                  {t('video.launch.title')}{' '}
                  <span className="text-primary-700 font-extrabold">{t('video.launch.title.highlight')}</span>
                </h2>
                
                <p className="subtitle-section text-neutral-600 max-w-3xl mx-auto mb-8">
                  {t('video.launch.description')}
                </p>
              </div>

              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Video Preview - Vertical Format */}
                  <div className="w-full max-w-md mx-auto aspect-[9/16] bg-gradient-to-br from-primary-600 to-accent-600 relative">
                    <video
                      src={videoSource}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    >
                      <source src={videoSource} type="video/webm" />
                    </video>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{t('video.launch.thumbnail.title')}</h3>
                      <p className="text-white/80 text-sm">{t('video.launch.thumbnail.click')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="mt-8 text-center">
                <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                  {t('video.launch.details')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organizations Section */}
        <OrganizationsSection />

        {/* Team Section */}

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
              <Card variant="elevated" hover="lift" className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-primary-600 font-bold text-2xl">🎤</span>
                  </div>
                  <CardTitle className="leading-tight">{t('events.conferences.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="leading-relaxed">
                    {t('events.conferences.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="elevated" hover="lift" className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-accent-600 font-bold text-2xl">🛠️</span>
                  </div>
                  <CardTitle className="leading-tight">{t('events.workshops.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="leading-relaxed">
                    {t('events.workshops.description')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card variant="elevated" hover="lift" className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gold-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-gold-600 font-bold text-2xl">🤝</span>
                  </div>
                  <CardTitle className="leading-tight">{t('events.networking.title')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="leading-relaxed">
                    {t('events.networking.description')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Section - Combined with Countdown */}
        <RegistrationSection />
      </main>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Video Container - Vertical Format */}
            <div className="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Local Video */}
              <video
                src={videoSource}
                title={`${t('video.launch.thumbnail.title')} - ${t('video.title')}`}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src={videoSource} type="video/webm" />
                {t('video.subtitle')}
              </video>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{t('video.title')}</h3>
              <p className="text-white/80">{t('video.subtitle')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer - Enhanced */}
      <footer className="bg-neutral-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <img 
                  src="/Logo_FORO.png" 
                  alt={t('video.title')} 
                  className="h-20 sm:h-32 md:h-44 lg:h-36 xl:h-52 2xl:h-50 w-auto object-contain"
                />
              </div>
              <p className="text-institutional text-neutral-400 mb-8 max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/foro_politicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@foropanamericano.jp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
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
              <h4 className="text-lg font-semibold mb-6 leading-tight">{t('footer.quicklinks.title')}</h4>
              <ul className="space-y-4">
                <li><a href="#inicio" className="text-neutral-400 hover:text-white transition-colors leading-relaxed">{t('footer.quicklinks.home')}</a></li>
                <li><a href="#sobre" className="text-neutral-400 hover:text-white transition-colors leading-relaxed">{t('footer.quicklinks.about')}</a></li>
                <li><a href="#organizacion" className="text-neutral-400 hover:text-white transition-colors leading-relaxed">{t('footer.quicklinks.testimonials')}</a></li>
                <li><a href="#eventos" className="text-neutral-400 hover:text-white transition-colors leading-relaxed">{t('footer.quicklinks.events')}</a></li>
                <li><a href="#registro" className="text-neutral-400 hover:text-white transition-colors leading-relaxed">{t('footer.quicklinks.register')}</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-6 leading-tight">{t('footer.contact.title')}</h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="leading-relaxed">📧 foropanamericano.jp@gmail.com</li>
                <li className="leading-relaxed">📱 +54 9 11 2481-9302</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-500 text-sm leading-relaxed text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-neutral-500 hover:text-white text-sm transition-colors leading-relaxed">{t('footer.privacy')}</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors leading-relaxed">{t('footer.terms')}</button>
              <button className="text-neutral-500 hover:text-white text-sm transition-colors leading-relaxed">{t('footer.cookies')}</button>
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
