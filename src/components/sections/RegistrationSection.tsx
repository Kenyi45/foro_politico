import React, { useState } from 'react';
import { Calendar, CreditCard, CheckCircle, X } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { mockForumEvent } from '../../data/mockData';
import { useLanguage } from '../../contexts/LanguageContext';

const RegistrationSection: React.FC = () => {
  const { t } = useLanguage();
  const [showPaymentNotification, setShowPaymentNotification] = useState(false);
  const [showGoogleFormIframe, setShowGoogleFormIframe] = useState(false);
  const [googleFormIframeURL, setGoogleFormIframeURL] = useState('');

  const { timeLeft, isExpired, formatTime } = useCountdown({
    targetDate: mockForumEvent.startDate,
    onComplete: () => {
      console.log(t('countdown.title.started'));
    }
  });

  const timeUnits = [
    { label: t('countdown.time.days'), value: timeLeft.days },
    { label: t('countdown.time.hours'), value: timeLeft.hours },
    { label: t('countdown.time.minutes'), value: timeLeft.minutes },
    { label: t('countdown.time.seconds'), value: timeLeft.seconds }
  ];

  const handleRegisterClick = () => {
    setShowGoogleFormIframe(true);
    setGoogleFormIframeURL('https://docs.google.com/forms/d/e/1FAIpQLSe-3uEhXs7UrNJsv_BPBMPnd3sNk2PipWG_rgNBnDaa_r55NA/viewform?embedded=true');
  };

  return (
    <>
      <section id="registro" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-200 mb-4 sm:mb-6">
              <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              <span className="badge-text">{t('countdown.badge')}</span>
            </div>

            <h2 className="title-section text-white mb-4 sm:mb-6">
              {isExpired ? t('countdown.title.started') : t('countdown.title.remaining')}
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              {t('event.title')}
            </p>
          </div>

          {/* Countdown Display */}
          {!isExpired && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
              {timeUnits.map((unit, index) => (
                <div
                  key={unit.label}
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {formatTime(unit.value)}
                    </div>
                    <div className="text-white/70 font-medium uppercase tracking-wider text-xs sm:text-sm">
                      {unit.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Registration CTA Title */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12 px-4">
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto text-center">
              {t('registration.description')}
            </p>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center px-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span className="font-semibold text-xs sm:text-sm">{t('registration.badge')}</span>
                </div>
              </div>

              {/* Payment Success Message */}
              {showPaymentNotification && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center justify-center space-x-2 text-green-200">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">{t('registration.success.title')}</span>
                  </div>
                  <p className="text-green-300 text-sm mt-2 text-center">
                    {t('registration.success.message')}
                  </p>
                </div>
              )}

              {/* CTA Buttons */}
              {!showPaymentNotification && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                  <button
                    onClick={handleRegisterClick}
                    className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Registrarse Ahora</span>
                  </button>

                  <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300">
                    {t('registration.cta.info')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Forms Iframe Modal */}
      {showGoogleFormIframe && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGoogleFormIframe(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] p-6 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Formulario de Inscripción</h2>
              <button
                onClick={() => setShowGoogleFormIframe(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Google Forms Iframe */}
            <div className="flex-1 relative">
              <iframe
                src={googleFormIframeURL}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg border border-gray-200"
                title="Formulario de inscripción del III Foro Panamericano de Jóvenes Políticos"
              >
                Cargando formulario...
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* Payment Notification Modal */}
      {showPaymentNotification && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPaymentNotification(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Inscripción Exitosa!</h2>
              <p className="text-gray-600">Tu registro ha sido recibido correctamente</p>
            </div>

            {/* Payment Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Información de Pago</h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Durante el día recibirás un correo electrónico con el enlace para realizar el pago correspondiente a tu inscripción.
                  </p>
                  <p className="text-blue-700 text-sm mt-2 font-medium">
                    Por favor, revisa tu bandeja de entrada y carpeta de spam.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">¿Tienes alguna pregunta?</h4>
              <p className="text-gray-600 text-sm">
                Si no recibes el correo en las próximas 24 horas, contáctanos a través de nuestras redes sociales o correo electrónico.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPaymentNotification(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationSection; 