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
  const [selectedAxis, setSelectedAxis] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: 'from-primary-500 to-primary-600',
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      red: 'from-red-500 to-red-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
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
          <h2 className="title-section text-gray-900 mb-6">
            Ejes Temáticos del{' '}
            <span className="text-primary-700 font-extrabold">Foro</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Exploramos las temáticas más relevantes para el desarrollo 
            político y social de las nuevas generaciones
          </p>
        </div>

        {/* Thematic Axes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockThematicAxes.map((axis, index) => {
            const IconComponent = iconMap[axis.icon];
            const gradientClasses = getColorClasses(axis.color);
            
            return (
              <div
                key={axis.id}
                className="group card p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedAxis(axis.id)}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`
                    w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClasses} 
                    flex items-center justify-center flex-shrink-0
                    group-hover:scale-110 transition-transform duration-300
                    shadow-lg
                  `}>
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {axis.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {axis.description}
                </p>

                {/* Stats Preview */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{detailedThematicAxes.find(d => d.id === axis.id)?.sessions.length || 0} sesiones</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{detailedThematicAxes.find(d => d.id === axis.id)?.resources.length || 0} recursos</span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    Ver detalles completos
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes una propuesta innovadora?
            </h3>
            <p className="text-gray-600 mb-6">
              Invitamos a los participantes a presentar sus proyectos e ideas 
              dentro de estos ejes temáticos para ser considerados en nuestras sesiones especiales.
            </p>
            <button className="btn-primary">
              Proponer tu proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAxesSection;