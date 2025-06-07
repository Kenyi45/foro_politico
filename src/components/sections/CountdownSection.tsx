import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { mockForumEvent } from '../../data/mockData';
import { useLanguage } from '../../contexts/LanguageContext';

const CountdownSection: React.FC = () => {
  const { t } = useLanguage();
  const { timeLeft, isExpired, formatTime } = useCountdown({
    targetDate: mockForumEvent.startDate,
    onComplete: () => {
      console.log('¡El evento ha comenzado!');
    }
  });

  const timeUnits = [
    { label: t('countdown.time.days'), value: timeLeft.days },
    { label: t('countdown.time.hours'), value: timeLeft.hours },
    { label: t('countdown.time.minutes'), value: timeLeft.minutes },
    { label: t('countdown.time.seconds'), value: timeLeft.seconds }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-200 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{t('countdown.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isExpired ? t('countdown.title.started') : t('countdown.title.remaining')}
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {mockForumEvent.title}
          </p>
        </div>

        {/* Countdown Display */}
        {!isExpired && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <div
                key={unit.label}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {formatTime(unit.value)}
                  </div>
                  <div className="text-white/70 font-medium uppercase tracking-wider text-sm">
                    {unit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Details */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Date & Location */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{t('countdown.location.title')}</h3>
                  <p className="text-white/80 mb-1">{mockForumEvent.location}</p>
                  <p className="text-white/60 text-sm">
                    {mockForumEvent.startDate.toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{t('countdown.duration.title')}</h3>
                  <p className="text-white/80 mb-1">{t('countdown.duration.intensive')}</p>
                  <p className="text-white/60 text-sm">
                    {t('countdown.duration.activities')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Status */}
          <div className="text-center bg-gradient-to-r from-accent-500/20 to-gold-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">{t('countdown.registration.open')}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mb-6 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{mockForumEvent.registeredCount}</div>
                <div className="text-sm">{t('countdown.registration.registered')}</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{mockForumEvent.capacity - mockForumEvent.registeredCount}</div>
                <div className="text-sm">{t('countdown.registration.available')}</div>
              </div>
            </div>

            <button className="btn-secondary text-lg px-8 py-4">
              {t('countdown.registration.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection; 