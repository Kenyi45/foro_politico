import React from 'react';
import { Users, MessageCircle, Globe, Zap } from 'lucide-react';
import { Feature } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      id: '1',
      title: t('features.leadership.title'),
      description: t('features.leadership.desc'),
      icon: <Users className="w-8 h-8" />,
      color: 'primary'
    },
    {
      id: '2',
      title: t('features.dialogue.title'),
      description: t('features.dialogue.desc'),
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'accent'
    },
    {
      id: '3',
      title: t('features.networks.title'),
      description: t('features.networks.desc'),
      icon: <Globe className="w-8 h-8" />,
      color: 'gold'
    },
    {
      id: '4',
      title: t('features.impact.title'),
      description: t('features.impact.desc'),
      icon: <Zap className="w-8 h-8" />,
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          border: 'border-primary-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'text-accent-600',
          border: 'border-accent-200'
        };
      case 'gold':
        return {
          bg: 'bg-gold-100',
          icon: 'text-gold-600',
          border: 'border-gold-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          icon: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="caracteristicas">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            <span className="badge-text">{t('features.badge')}</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('features.title')}{' '}
            <span className="text-primary-700 font-extrabold">{t('features.title.highlight')}</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('features.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <div
                key={feature.id}
                className={`group card p-8 text-center hover:shadow-2xl transition-all duration-500 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon Container */}
                <div className={`
                  w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                  ${colorClasses.bg} ${colorClasses.border} border-2
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <div className={colorClasses.icon}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-primary-600 font-semibold">
            <span>{t('features.cta')}</span>
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 