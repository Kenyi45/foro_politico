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
          <Lightbulb className="w-7 h-7 text-blue-200/45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
            <span className="badge-text text-white text-xs sm:text-sm">{t('hero.badge')}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight text-white mb-6 animate-slide-up text-shadow-lg">
            {t('hero.title')}{' '}
            <span className="text-primary-100 font-extrabold">
              {t('hero.title.highlight')}
            </span>{' '}
            {t('hero.title.end')}
          </h1>

          {/* Official Slogan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-4xl mx-auto animate-slide-up animation-delay-75">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center leading-tight tracking-presidential font-medium">
              "{t('hero.slogan')}{' '}
              <span className="text-accent-300">{t('hero.slogan.socialism')}</span> {t('hero.slogan.and')}{' '}
              <span className="text-gold-200">{t('hero.slogan.woke')}</span>"
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto animate-slide-up animation-delay-150">
            {t('hero.subtitle.part1')}{' '}
            <span className="font-semibold text-accent-200">{t('hero.subtitle.defend')}</span>,{' '}
            <span className="font-semibold text-gold-100">{t('hero.subtitle.strengthen')}</span> {t('hero.slogan.and')}{' '}
            <span className="font-semibold text-primary-100">{t('hero.subtitle.preserve')}</span>{' '}
            {t('hero.subtitle.part2')}
          </p>

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