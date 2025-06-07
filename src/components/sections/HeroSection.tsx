import React from 'react';
import { ArrowRight, Users, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroSectionProps {
  onRegisterClick?: () => void;
  onLearnMoreClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onLearnMoreClick
}) => {
  const { t } = useLanguage();

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
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-neutral-900/90"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements - Hidden on small screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 left-1/4 animate-pulse-slow">
          <Users className="w-8 h-8 text-teal-200/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse-slow animation-delay-150">
          <Globe className="w-6 h-6 text-cyan-200/45" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse-slow animation-delay-300">
                          <Lightbulb className="w-7 h-7 text-primary-200/45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Main Content in Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-6 sm:mb-8 items-center">
            {/* Left Column - Main Forum Logo Centered */}
            <div className="animate-slide-up">
              <div className="flex justify-center">
                <img 
                  src="/Logo_FORO.png" 
                  alt="III Foro Panamericano de Jóvenes Políticos" 
                  className="h-40 sm:h-52 md:h-64 lg:h-56 xl:h-72 2xl:h-80 w-auto object-contain logo-glow"
                />
              </div>
            </div>

            {/* Right Column - Official Slogan Centered and Expanded */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 animate-slide-up animation-delay-100 flex items-center">
              <h3 className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-tight tracking-presidential font-semibold text-center">
                <span className="block">"{t('hero.slogan')}{' '}</span>
                <span className="block">
                  <span className="text-accent-300">{t('hero.slogan.socialism')}</span> {t('hero.slogan.and')}{' '}
                  <span className="text-gold-200">{t('hero.slogan.woke')}</span>"
                </span>
              </h3>
            </div>
          </div>

          {/* Organizers Section */}
          <div className="mb-6 sm:mb-8 animate-slide-up animation-delay-150">
            <p className="text-white/80 text-sm sm:text-base mb-4 font-medium">
              Un evento hecho posible por:
            </p>
            <div className="flex items-center justify-center space-x-8 sm:space-x-12 md:space-x-16">
              {/* Universidad Vida y Desarrollo Logo */}
              <div className="flex items-center justify-center">
                <img 
                  src="/Logo_UVD.png" 
                  alt="Universidad Vida y Desarrollo" 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain logo-glow"
                />
              </div>
              
              {/* Separator */}
              <div className="w-px h-8 sm:h-12 bg-white/30"></div>
              
              {/* Interamericana Partners Logo */}
              <div className="flex items-center justify-center">
                <img 
                  src="/Logo_IP.png" 
                  alt="Interamericana Partners" 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain logo-glow"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-bounce-in animation-delay-300">
            <button
              onClick={handleRegisterClick}
              className="w-full sm:w-auto group bg-accent-500 hover:bg-accent-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/25 flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold"
            >
              <span>{t('hero.cta.participate')}</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleLearnMoreClick}
              className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold"
            >
              <span>{t('hero.cta.learn')}</span>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">250+</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">{t('hero.stats.guests')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">23</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">{t('hero.stats.countries')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">3</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">{t('hero.stats.days')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;