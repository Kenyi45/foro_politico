import React, { useState } from 'react';
import { Calendar, CreditCard, CheckCircle, X, User, Mail, Phone, MapPin as MapPinIcon, FileText, Globe, Building, Calendar as CalendarIcon } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { mockForumEvent } from '../../data/mockData';
import { useLanguage } from '../../contexts/LanguageContext';

const RegistrationSection: React.FC = () => {
  const { t } = useLanguage();
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showPaymentNotification, setShowPaymentNotification] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    fechaNacimiento: '',
    nacionalidad: '',
    genero: '',
    documento: '',
    ocupacion: '',
    organizacion: '',
    telefono: '',
    direccion: '',
    comoSeEntero: '',
    participacionElecciones: '',
    añoElecciones: '',
    curriculum: ''
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
    setShowRegistrationForm(true);
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ['email', 'nombre', 'fechaNacimiento', 'nacionalidad', 'genero', 'documento', 'ocupacion', 'organizacion', 'telefono', 'direccion', 'participacionElecciones', 'curriculum'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    if (missingFields.length > 0) {
      setFormError('Por favor, completa todos los campos requeridos marcados con *');
      return;
    }
    try {
      const googleFormData = new FormData();
      googleFormData.append('entry.1876053177', formData.email);
      googleFormData.append('entry.1150976519', formData.nombre);
      if (formData.fechaNacimiento) {
        const fecha = new Date(formData.fechaNacimiento);
        googleFormData.append('entry.950660790_year', fecha.getFullYear().toString());
        googleFormData.append('entry.950660790_month', (fecha.getMonth() + 1).toString());
        googleFormData.append('entry.950660790_day', fecha.getDate().toString());
      }
      // Note: Nacionalidad shares the same entry ID as email in the form
      // This might be an issue with the Google Form configuration
      googleFormData.append('entry.1876053177', formData.nacionalidad);
      googleFormData.append('entry.1359745950', formData.genero);
      googleFormData.append('entry.969671877', formData.documento);
      googleFormData.append('entry.989222933', formData.ocupacion);
      googleFormData.append('entry.555315055', formData.organizacion);
      googleFormData.append('entry.1929049539', formData.telefono);
      googleFormData.append('entry.1612702848', formData.direccion);
      googleFormData.append('entry.298256039', formData.comoSeEntero);
      googleFormData.append('entry.168457685', formData.participacionElecciones);
      googleFormData.append('entry.1464855928', formData.añoElecciones);
      googleFormData.append('entry.376236169', formData.curriculum);
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-3uEhXs7UrNJsv_BPBMPnd3sNk2PipWG_rgNBnDaa_r55NA/formResponse';
      await fetch(googleFormURL, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      });
      setFormSubmitted(true);
      setFormError('');
      setFormData({
        email: '', nombre: '', fechaNacimiento: '', nacionalidad: '', genero: '',
        documento: '', ocupacion: '', organizacion: '', telefono: '', direccion: '',
        comoSeEntero: '', participacionElecciones: '', añoElecciones: '', curriculum: ''
      });
      setShowRegistrationForm(false);
      setShowPaymentNotification(true);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setFormError('Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente.');
    }
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
              {formSubmitted && (
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
              {!formSubmitted && (
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

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowRegistrationForm(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 relative">
              <button
                onClick={() => setShowRegistrationForm(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-center">🌎 III FORO PANAMERICANO</h1>
              <p className="text-center text-white/90 mt-2">DE JÓVENES POLÍTICOS - LIMA / PERÚ 2025</p>
            </div>

            {/* Form Container */}
            <div className="p-6">
              {/* Intro Text */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">¡Tu voz puede transformar América! 🌎</h3>
                <p className="text-gray-700 mb-2">
                  Inscríbete al <strong>III Foro Panamericano de Jóvenes Políticos – Perú 2025</strong> y forma parte de una generación decidida a liderar el cambio.
                </p>
                <p className="text-gray-700"><strong>👉 Inscríbete ahora y haz historia.</strong></p>
              </div>

              {/* Success Message */}
              {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">¡Excelente! Tu inscripción ha sido enviada exitosamente.</span>
                  </div>
                  <p className="mt-2">Te contactaremos pronto con más información sobre el evento.</p>
                </div>
              )}

              {/* Error Message */}
              {formError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {formError}
                </div>
              )}

              {/* Registration Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Email */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu dirección de correo electrónico"
                    required
                  />
                </div>

                {/* Nombre completo */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* Fecha de nacimiento */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <CalendarIcon className="w-4 h-4 inline mr-2" />
                    Fecha de nacimiento <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    required
                  />
                </div>

                {/* Nacionalidad */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Nacionalidad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu nacionalidad"
                    required
                  />
                </div>

                {/* Género */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Género <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="genero"
                        value="Masculino"
                        checked={formData.genero === 'Masculino'}
                        onChange={handleFormInputChange}
                        className="w-4 h-4 text-blue-600"
                        required
                      />
                      <span className="ml-2">Masculino</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="genero"
                        value="Femenino"
                        checked={formData.genero === 'Femenino'}
                        onChange={handleFormInputChange}
                        className="w-4 h-4 text-blue-600"
                        required
                      />
                      <span className="ml-2">Femenino</span>
                    </label>
                  </div>
                </div>

                {/* Documento de identidad */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Documento de identidad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="documento"
                    value={formData.documento}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu documento de identidad"
                    required
                  />
                </div>

                {/* Ocupación */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ocupación actual <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ocupacion"
                    value={formData.ocupacion}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu ocupación actual"
                    required
                  />
                </div>

                {/* Organización */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Organización o entidad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organizacion"
                    value={formData.organizacion}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu organización o entidad"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu número de teléfono"
                    required
                  />
                  <small className="text-gray-500 text-sm">IMPORTANTE: Colocar el indicativo del país</small>
                </div>

                {/* Dirección */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPinIcon className="w-4 h-4 inline mr-2" />
                    Dirección (Ciudad y País) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu dirección (ciudad y país)"
                    required
                  />
                </div>

                {/* Cómo se enteró */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Cómo se enteró del evento?
                  </label>
                  <textarea
                    name="comoSeEntero"
                    value={formData.comoSeEntero}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu respuesta"
                    rows={3}
                  />
                </div>

                {/* Participación en elecciones */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Ha participado en ediciones anteriores? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="participacionElecciones"
                        value="Sí"
                        checked={formData.participacionElecciones === 'Sí'}
                        onChange={handleFormInputChange}
                        className="w-4 h-4 text-blue-600"
                        required
                      />
                      <span className="ml-2">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="participacionElecciones"
                        value="No"
                        checked={formData.participacionElecciones === 'No'}
                        onChange={handleFormInputChange}
                        className="w-4 h-4 text-blue-600"
                        required
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                {/* Año de elecciones */}
                {formData.participacionElecciones === 'Sí' && (
                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ¿En qué año?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="añoElecciones"
                          value="Buenos Aires 2023"
                          checked={formData.añoElecciones === 'Buenos Aires 2023'}
                          onChange={handleFormInputChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2">Buenos Aires 2023</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="añoElecciones"
                          value="Buenos Aires 2024"
                          checked={formData.añoElecciones === 'Buenos Aires 2024'}
                          onChange={handleFormInputChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="ml-2">Buenos Aires 2024</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Curriculum */}
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Breve descripción del Curriculum (máx. 150 palabras) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleFormInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Tu respuesta"
                    rows={4}
                    maxLength={1000}
                    required
                  />
                  <small className="text-gray-500 text-sm">Máximo 150 palabras</small>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg uppercase tracking-wide"
                >
                  Enviar Inscripción
                </button>
              </form>
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