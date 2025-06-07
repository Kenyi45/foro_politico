import React from 'react';
import { ArrowRight, Users, Globe, Lightbulb } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick?: () => void;
  onLearnMoreClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onLearnMoreClick
}) => {
  const handleRegisterClick = () => {
    onRegisterClick?.();
    const element = document.querySelector('#registro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    onLearnMoreClick?.();
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Malecon Miraflores Lima */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/malecon-miraflores-lima.avif')",
        }}
      ></div>
      
      {/* Turquoise Overlay */}
      <div className="absolute inset-0 turquoise-gradient opacity-85"></div>
      
      {/* Additional Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/35 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-pulse-slow">
          <Users className="w-8 h-8 text-teal-200/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-slow animation-delay-150">
          <Globe className="w-6 h-6 text-cyan-200/45" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse-slow animation-delay-300">
          <Lightbulb className="w-7 h-7 text-blue-200/45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
            <span className="badge-text text-white">3ra Edición Panamericana • 2-4 Octubre 2025 • Lima, Perú</span>
          </div>

          {/* Main Title */}
          <h1 className="title-hero text-white mb-6 animate-slide-up tracking-elegant">
            América que{' '}
            <span className="text-primary-100 font-extrabold">
              Defiende
            </span>{' '}
            la Libertad
          </h1>

          {/* Official Slogan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-4xl mx-auto animate-slide-up animation-delay-75">
            <h2 className="text-formal text-white text-center leading-tight tracking-presidential">
              "DEFENDIENDO LA LIBERTAD FRENTE AL{' '}
              <span className="text-accent-300">SOCIALISMO</span> Y LA{' '}
              <span className="text-gold-200">CULTURA WOKE</span>"
            </h2>
          </div>

          {/* Subtitle */}
          <p className="subtitle-hero text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-150">
            Un encuentro continental para{' '}
            <span className="font-semibold text-accent-200">defender</span>,{' '}
            <span className="font-semibold text-gold-100">fortalecer</span> y{' '}
            <span className="font-semibold text-primary-100">preservar</span>{' '}
            los valores de libertad y democracia en América
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-bounce-in animation-delay-300">
            <button
              onClick={handleRegisterClick}
              className="group bg-accent-500 hover:bg-accent-600 text-white py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/25 flex items-center space-x-2"
            >
              <span className="button-text">Participa del Foro</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleLearnMoreClick}
              className="group bg-white/10 hover:bg-white/20 text-white py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 flex items-center space-x-2"
            >
              <span className="button-text">Conoce Más</span>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            <div className="text-center">
              <div className="stat-number text-white mb-2">250+</div>
              <div className="stat-label text-white/80">Invitados Esperados</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-white mb-2">23</div>
              <div className="stat-label text-white/80">Países Panamericanos</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-white mb-2">3</div>
              <div className="stat-label text-white/80">Días de Actividades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;