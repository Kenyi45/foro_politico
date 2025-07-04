import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CreditCard, CheckCircle } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { mockForumEvent } from '../../data/mockData';
import { useLanguage } from '../../contexts/LanguageContext';
import PaymentButton from '../payment/PaymentButton';

const RegistrationSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    email: '',
    name: '',
    phone: ''
  });

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
    setShowPayment(true);
  };

  const handlePaymentSuccess = (paymentResult: any) => {
    console.log('Pago exitoso:', paymentResult);
    setPaymentCompleted(true);
    setShowPayment(false);
    // Aquí puedes agregar lógica adicional como enviar email de confirmación
  };

  const handlePaymentError = (error: any) => {
    console.error('Error en pago:', error);
    // Aquí puedes mostrar un mensaje de error al usuario
  };

  return (
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
            {paymentCompleted && (
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
            {!paymentCompleted && !showPayment && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <button
                  onClick={handleRegisterClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>{t('registration.cta.register')}</span>
                </button>
                
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300">
                  {t('registration.cta.info')}
                </button>
              </div>
            )}

            {/* Payment Component */}
            {showPayment && !paymentCompleted && (
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{t('registration.finalize.title')}</h4>
                  <p className="text-white/80">{t('registration.finalize.description')}</p>
                </div>
                <PaymentButton
                  description="Registro - Foro de Jóvenes Políticos"
                  customerEmail={paymentData.email}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  fullWidth
                />
                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 font-semibold px-6 py-3 text-base rounded-xl transition-all duration-300"
                >
                  {t('registration.back')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection; 