import React, { useState, useEffect } from 'react';
import { Award, Users, Globe, Lightbulb, Calendar, MapPin } from 'lucide-react';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span id={`counter-${value}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatisticsSection: React.FC = () => {
  const { t } = useLanguage();

  const iconMap = {
    Users,
    Globe,
    Lightbulb,
    Calendar,
    Award,
    MapPin
  };

  const enhancedStats = [
    {
      id: '1',
      label: t('stats.leaders'),
      value: 2847,
      suffix: '+',
      icon: 'Users',
      color: 'primary',
      description: t('stats.leaders.desc')
    },
    {
      id: '2',
      label: t('stats.countries'),
      value: 45,
      icon: 'Globe',
      color: 'accent',
      description: t('stats.countries.desc')
    },
    {
      id: '3',
      label: t('stats.projects'),
      value: 287,
      suffix: '+',
      icon: 'Lightbulb',
      color: 'gold',
      description: t('stats.projects.desc')
    },
    {
      id: '4',
      label: t('stats.years'),
      value: 8,
      icon: 'Calendar',
      color: 'primary',
      description: t('stats.years.desc')
    },
    {
      id: '5',
      label: t('stats.awards'),
      value: 12,
      icon: 'Award',
      color: 'gold',
      description: t('stats.awards.desc')
    },
    {
      id: '6',
      label: t('stats.cities'),
      value: 23,
      icon: 'MapPin',
      color: 'accent',
      description: t('stats.cities.desc')
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          gradient: 'from-primary-500 to-primary-600',
          text: 'text-primary-600',
          glow: 'shadow-primary-500/25'
        };
      case 'accent':
        return {
          gradient: 'from-accent-500 to-accent-600', 
          text: 'text-accent-600',
          glow: 'shadow-accent-500/25'
        };
      case 'gold':
        return {
          gradient: 'from-gold-500 to-gold-600',
          text: 'text-gold-600', 
          glow: 'shadow-gold-500/25'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          text: 'text-gray-600',
          glow: 'shadow-gray-500/25'
        };
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-accent-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-16 left-1/3 w-64 h-64 bg-gold-100 rounded-full opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">{t('stats.badge')}</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('stats.title')}{' '}
            <span className="text-primary-700 font-extrabold">
              {t('stats.title.highlight')}
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 leading-relaxed animate-slide-up animation-delay-150">
            {t('stats.description')}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {enhancedStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            const colors = getColorClasses(stat.color);
            
            return (
              <Card
                key={stat.id}
                variant="elevated"
                hover="glow"
                className={`group text-center animate-bounce-in hover:${colors.glow}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} 
                    flex items-center justify-center shadow-lg
                    group-hover:scale-110 transition-transform duration-300
                    group-hover:rotate-3
                  `}>
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-white" />
                    )}
                  </div>
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold ${colors.text} mb-3`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    duration={2500 + index * 200}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <Card variant="gradient" className="max-w-4xl mx-auto p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-neutral-600">{t('stats.satisfaction')}</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">3.2k</div>
                <p className="text-neutral-600">{t('stats.followers')}</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 mb-2">24/7</div>
                <p className="text-neutral-600">{t('stats.community')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;