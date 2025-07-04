import React from 'react';
import { Quote } from 'lucide-react';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';

const OrganizationsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="organizacion" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
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
            <span className="font-semibold text-sm sm:text-base">{t('organization.badge')}</span>
          </div>
          
          <h2 className="title-section text-white mb-6 sm:mb-8 animate-slide-up">
            {t('organization.title')}{' '}
            <span className="text-accent-300 font-extrabold">
              {t('organization.title.highlight')}
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
            {t('organization.description')}
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
                    {t('organization.ip.title')}
                  </h4>
                  
                  <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
                    {t('organization.ip.description')}
                  </p>
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
                    {t('organization.uvd.title')}
                  </h4>
                  
                  <p className="text-neutral-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
                    {t('organization.uvd.description')}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection; 