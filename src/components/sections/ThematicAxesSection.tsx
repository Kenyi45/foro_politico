import React, { useState } from 'react';
import { 
  Shield, 
  Leaf, 
  Smartphone, 
  Heart, 
  MapPin, 
  GraduationCap,
  LucideIcon,
  ArrowRight,
  Users,
  Clock,
  BookOpen
} from 'lucide-react';
import { mockThematicAxes, detailedThematicAxes } from '../../data/mockData';
import ThematicAxisDetailView from './ThematicAxisDetailView';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Leaf,
  Smartphone,
  Heart,
  MapPin,
  GraduationCap
};

const ThematicAxesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedAxis, setSelectedAxis] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
      primary: { 
        bg: 'bg-primary-100', 
        text: 'text-primary-600',
        gradient: 'from-primary-500 to-primary-600'
      },
      green: { 
        bg: 'bg-green-100', 
        text: 'text-green-600',
        gradient: 'from-green-500 to-green-600'
      },
      blue: { 
        bg: 'bg-blue-100', 
        text: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600'
      },
      red: { 
        bg: 'bg-red-100', 
        text: 'text-red-600',
        gradient: 'from-red-500 to-red-600'
      },
      purple: { 
        bg: 'bg-purple-100', 
        text: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600'
      },
      indigo: { 
        bg: 'bg-indigo-100', 
        text: 'text-indigo-600',
        gradient: 'from-indigo-500 to-indigo-600'
      }
    };
    return colorMap[color] || { bg: 'bg-gray-100', text: 'text-gray-600', gradient: 'from-gray-500 to-gray-600' };
  };

  if (selectedAxis) {
    const axisDetail = detailedThematicAxes.find(axis => axis.id === selectedAxis);
    if (axisDetail) {
      return (
        <ThematicAxisDetailView 
          axis={axisDetail} 
          onBack={() => setSelectedAxis(null)} 
        />
      );
    }
  }

  return (
    <section className="section-padding bg-white" id="ejes-tematicos">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('thematic.title')}{' '}
            <span className="text-primary-700 font-extrabold">{t('thematic.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('thematic.description')}
          </p>
        </div>

        {/* Thematic Axes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockThematicAxes.map((axis, index) => {
            const IconComponent = iconMap[axis.icon];
            const colorClasses = getColorClasses(axis.color);
            
            return (
              <Card
                key={axis.id}
                variant="elevated"
                hover="lift"
                className={`group overflow-hidden animate-slide-up relative`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${colorClasses.gradient}`}></div>
                
                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses.bg} ${colorClasses.text} transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {t(`thematic.${getThematicKey(axis.title)}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`thematic.${getThematicKey(axis.title)}.desc`)}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{detailedThematicAxes.find(d => d.id === axis.id)?.sessions.length || 0} {t('thematic.sessions')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{detailedThematicAxes.find(d => d.id === axis.id)?.resources.length || 0} {t('thematic.resources')}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      {t('thematic.details')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('thematic.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('thematic.cta.description')}
            </p>
            <button className="btn-primary">
              {t('thematic.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get thematic key
const getThematicKey = (title: string): string => {
  const keyMap: { [key: string]: string } = {
    'Gobernanza y Transparencia': 'governance',
    'Juventud y Medio Ambiente': 'environment',
    'Tecnología y Participación': 'technology',
    'Derechos Humanos': 'rights',
    'Política Local': 'local',
    'Educación Cívica': 'education'
  };
  return keyMap[title] || 'governance';
};

export default ThematicAxesSection;