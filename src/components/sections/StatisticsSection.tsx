import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, Lightbulb, Calendar, Award, MapPin } from 'lucide-react';
import { useForumStore } from '../../stores/useForumStore';
import Card from '../common/Card';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={elementRef} className="tabular-nums font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  // const { statistics } = useForumStore(); // Using hardcoded enhanced stats instead

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
      label: 'Jóvenes Líderes',
      value: 2847,
      suffix: '+',
      icon: 'Users',
      color: 'primary',
      description: 'Participantes activos de 18-35 años'
    },
    {
      id: '2',
      label: 'Países Representados',
      value: 45,
      icon: 'Globe',
      color: 'accent',
      description: 'Presencia en 5 continentes'
    },
    {
      id: '3',
      label: 'Proyectos Incubados',
      value: 287,
      suffix: '+',
      icon: 'Lightbulb',
      color: 'gold',
      description: 'Iniciativas políticas y sociales'
    },
    {
      id: '4',
      label: 'Años de Trayectoria',
      value: 8,
      icon: 'Calendar',
      color: 'primary',
      description: 'Construyendo liderazgo juvenil'
    },
    {
      id: '5',
      label: 'Premios Recibidos',
      value: 12,
      icon: 'Award',
      color: 'gold',
      description: 'Reconocimientos internacionales'
    },
    {
      id: '6',
      label: 'Ciudades Sede',
      value: 23,
      icon: 'MapPin',
      color: 'accent',
      description: 'Eventos realizados mundialmente'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-500',
        gradient: 'from-primary-500 to-primary-600',
        text: 'text-primary-600',
        glow: 'shadow-glow'
      },
      accent: {
        bg: 'bg-accent-500',
        gradient: 'from-accent-500 to-accent-600',
        text: 'text-accent-600',
        glow: 'shadow-glow-accent'
      },
      gold: {
        bg: 'bg-gold-500',
        gradient: 'from-gold-500 to-gold-600',
        text: 'text-gold-600',
        glow: 'shadow-glow-gold'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m20 20 20-20v40z'/%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6 animate-fade-in">
            <Award className="w-4 h-4 mr-2" />
            <span className="font-semibold text-sm">Nuestro Impacto Global</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            Transformando el{' '}
            <span className="text-primary-700 font-extrabold">
              Futuro Político
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 leading-relaxed animate-slide-up animation-delay-150">
            Cada número representa el compromiso de jóvenes líderes que están 
            construyendo un mundo más justo, participativo y democrático
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
                <p className="text-neutral-600">Tasa de satisfacción</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">3.2k</div>
                <p className="text-neutral-600">Seguidores en redes</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 mb-2">24/7</div>
                <p className="text-neutral-600">Comunidad activa</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;