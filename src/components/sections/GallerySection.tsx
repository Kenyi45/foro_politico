import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Users, 
  Award, 
  Filter, 
  Grid, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  ZoomIn,
  Play,
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { galleryPhotos } from '../../data/mockData';
import { GalleryPhoto } from '../../types/index';
import Card from '../common/Card';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/gallery-animations.css';

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'fotos' | 'instagram'>('fotos');
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredPhotos, setFilteredPhotos] = useState<GalleryPhoto[]>(galleryPhotos);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhotoSlide, setCurrentPhotoSlide] = useState(0);
  const { t } = useLanguage();

  // Componente mejorado para embeds de Instagram
  const InstagramEmbed: React.FC<{ url: string; maxWidth?: number; height?: number }> = ({ 
    url, 
    maxWidth = 350, 
    height = 450 
  }) => {
    const embedUrl = `${url}embed/`;
    
    return (
      <div className="instagram-embed w-full" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
          <iframe
            src={embedUrl}
            width="100%"
            height={height}
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            style={{ 
              border: 'none',
              width: '100%',
              minWidth: '300px'
            }}
            title="Instagram Post"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/10 to-transparent p-3">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-gray-600 hover:text-accent-700 transition-colors bg-white/80 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Ver en Instagram</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Datos para el slider de Instagram
  const instagramSlides = [
    {
      id: 1,
      day: 'Día 1',
      date: 'Viernes, 19 de Julio 2024',
      color: 'blue',
      posts: [
        {
          type: 'video',
          title: 'Video Resumen',
          description: 'Destacados del primer día',
          url: 'https://www.instagram.com/p/C9TAruWRTtB/'
        },
        {
          type: 'photos',
          title: 'Galería de Fotos',
          description: '8 fotos • Momentos clave',
          url: 'https://www.instagram.com/p/C9Q3y3fMRgv/'
        }
      ]
    },
    {
      id: 2,
      day: 'Día 2',
      date: 'Sábado, 20 de Julio 2024',
      color: 'emerald',
      posts: [
        {
          type: 'video',
          title: 'Video Resumen',
          description: 'Lo mejor del segundo día',
          url: 'https://www.instagram.com/p/C9VznBhsTqI/'
        },
        {
          type: 'photos',
          title: 'Galería de Fotos',
          description: '7 fotos • Debates intensos',
          url: 'https://www.instagram.com/p/C9Tu1s8Mai1/'
        }
      ]
    },
    {
      id: 3,
      day: 'Día 3',
      date: 'Domingo, 21 de Julio 2024',
      color: 'purple',
      posts: [
        {
          type: 'video',
          title: 'Video Resumen',
          description: 'Gran cierre del evento',
          url: 'https://www.instagram.com/p/C9aq7rlhoEm/'
        },
        {
          type: 'photos',
          title: 'Galería de Fotos',
          description: '9 fotos • Momentos finales',
          url: 'https://www.instagram.com/p/C9WC95ps5BZ/'
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instagramSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + instagramSlides.length) % instagramSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Datos para el slider de fotos
  const photoSlides = [
    {
      id: 'buenos-aires-2023',
      title: 'Buenos Aires 2023',
      subtitle: '1ra Edición',
      date: 'Primera edición del foro',
      description: 'Nuestra primera edición reunió a 180 jóvenes líderes de 15 países',
      color: 'primary',
      stats: [
        { number: '180', label: 'Participantes' },
        { number: '15', label: 'Países' },
        { number: '25', label: 'Conferencias' }
      ],
      categories: ['all', 'ceremonies', 'panel', 'workshops', 'networking', 'social', 'speakers']
    },
    {
      id: 'buenos-aires-2024',
      title: 'Buenos Aires 2024',
      subtitle: '2da Edición',
      date: 'Segunda edición expandida',
      description: 'La segunda edición expandió nuestro alcance con 220 participantes',
      color: 'accent',
      stats: [
        { number: '220', label: 'Participantes' },
        { number: '18', label: 'Países' },
        { number: '32', label: 'Conferencias' }
      ],
      categories: ['all', 'ceremonies', 'panel', 'workshops', 'networking', 'social', 'speakers']
    }
  ];

  const nextPhotoSlide = () => {
    setCurrentPhotoSlide((prev) => (prev + 1) % photoSlides.length);
    setSelectedEvent(photoSlides[(currentPhotoSlide + 1) % photoSlides.length].id);
  };

  const prevPhotoSlide = () => {
    const newSlide = (currentPhotoSlide - 1 + photoSlides.length) % photoSlides.length;
    setCurrentPhotoSlide(newSlide);
    setSelectedEvent(photoSlides[newSlide].id);
  };

  const goToPhotoSlide = (index: number) => {
    setCurrentPhotoSlide(index);
    setSelectedEvent(photoSlides[index].id);
  };

  const categories = [
    { id: 'all', label: t('gallery.filter.all.categories'), icon: <Grid className="w-4 h-4" /> },
    { id: 'ceremonies', label: t('gallery.categories.ceremonies'), icon: <Award className="w-4 h-4" /> },
    { id: 'panel', label: t('gallery.categories.panel'), icon: <Users className="w-4 h-4" /> },
    { id: 'workshops', label: t('gallery.categories.workshops'), icon: <Filter className="w-4 h-4" /> },
    { id: 'networking', label: t('gallery.categories.networking'), icon: <Share2 className="w-4 h-4" /> },
    { id: 'social', label: t('gallery.categories.social'), icon: <Camera className="w-4 h-4" /> },
    { id: 'speakers', label: t('gallery.categories.speakers'), icon: <Award className="w-4 h-4" /> },

  ];

  useEffect(() => {
    // Solo mostrar posts reales de Instagram para la nueva sección
    let filtered = galleryPhotos.filter(photo => !photo.isInstagramPost);

    if (selectedEvent !== 'all') {
      filtered = filtered.filter(photo => 
        selectedEvent === 'buenos-aires-2023' ? photo.id.startsWith('ba23-') : photo.id.startsWith('ba-')
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }

    setFilteredPhotos(filtered);
  }, [selectedEvent, selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      ceremonies: 'bg-gold-100 text-gold-800',
      panel: 'bg-primary-100 text-primary-800',
      workshops: 'bg-success-100 text-success-800',
      networking: 'bg-primary-100 text-primary-800',
      social: 'bg-accent-100 text-accent-800',
      speakers: 'bg-primary-100 text-primary-800',
      instagram: 'bg-accent-100 text-accent-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const handleInstagramClick = (photo: GalleryPhoto) => {
    if (photo.isInstagramPost && photo.instagramUrl) {
      window.open(photo.instagramUrl, '_blank');
    }
  };

  return (
    <section className={`section-padding bg-neutral-50 ${className}`} id="galeria">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            <span className="badge-text">{t('gallery.badge')}</span>
          </div>
          
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('gallery.title')}{' '}
            <span className="text-primary-700 font-extrabold">{t('gallery.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('gallery.description')}
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-8">
          {/* Tab Navigation */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-2">
            <div className="flex space-x-2 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab('fotos')}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === 'fotos'
                    ? 'bg-white text-primary-700 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <Camera className="w-5 h-5" />
                <span>Galería de Fotos</span>
              </button>
              <button
                onClick={() => setActiveTab('instagram')}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === 'instagram'
                    ? 'bg-gradient-to-r from-accent-600 to-accent-800 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </button>
              </div>
            </div>

          {/* Tab Content */}
          <div className="p-8">
                        {activeTab === 'fotos' && (
              <div className="animate-fade-in">
                {/* Photo Gallery Header */}
                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl mb-4 shadow-2xl">
                    <Camera className="w-8 h-8 text-white" />
            </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Galería del Evento</h3>
                  <p className="text-lg text-gray-600 mb-6">Explora los momentos más importantes de cada edición</p>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full border border-primary-200">
                    <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
                    <span className="text-primary-800 font-medium text-sm">Fotos profesionales del evento</span>
            </div>
        </div>

                {/* Photo Slider Navigation */}
                <div className="flex justify-center items-center space-x-4 mb-6">
                <button
                    onClick={prevPhotoSlide}
                    className="nav-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                  
                  <div className="flex space-x-2">
                    {photoSlides.map((_, index) => (
                <button
                        key={index}
                        onClick={() => goToPhotoSlide(index)}
                        className={`dot-indicator w-3 h-3 rounded-full ${
                          currentPhotoSlide === index 
                            ? 'bg-primary-600 active' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                <button
                    onClick={nextPhotoSlide}
                    className="nav-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
                </div>

                {/* Photo Slider Container */}
                <div className="slider-container relative overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentPhotoSlide * 100}%)` }}
                  >
                    {photoSlides.map((slide, index) => (
                      <div key={slide.id} className="slide-content w-full flex-shrink-0 px-4">
                        {/* Event Header */}
                        <div className="text-center mb-6">
                          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-2xl shadow-lg mb-4 ${
                            slide.color === 'primary' ? 'bg-gradient-to-r from-primary-600 to-primary-700' : 'bg-gradient-to-r from-accent-600 to-accent-700'
                          } text-white`}>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <Camera className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <h4 className="text-xl font-bold">{slide.title}</h4>
                              <p className="text-sm opacity-90">{slide.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{slide.description}</p>
                          
                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                            {slide.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="text-center">
                                <div className={`text-2xl font-bold ${
                                  slide.color === 'primary' ? 'text-primary-700' : 'text-accent-700'
                                }`}>{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                              </div>
                            ))}
              </div>
            </div>

                        {/* Category Filters */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6">
                          <div className="text-center mb-4">
                            <label className="text-sm font-medium text-gray-700">
                              <Filter className="w-4 h-4 inline mr-2" />
                              Filtrar por categoría
              </label>
                          </div>
                          <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center space-x-1 ${
                      selectedCategory === category.id
                                    ? `${slide.color === 'primary' ? 'bg-primary-700' : 'bg-accent-700'} text-white shadow-lg transform scale-105`
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </button>
                ))}
          </div>
        </div>

        {/* Photo Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
                          {filteredPhotos.slice(0, 12).map((photo, photoIndex) => (
            <div
              key={photo.id}
                              className="photo-card group relative cursor-pointer overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-all duration-300"
                              onClick={() => openLightbox(photoIndex)}
            >
              {/* Photo placeholder with gradient */}
                              <div className={`w-full h-full ${
                                slide.color === 'primary' 
                                  ? 'bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400' 
                                  : 'bg-gradient-to-br from-accent-200 via-accent-300 to-accent-400'
                              } group-hover:scale-110 transition-transform duration-500`} />
              
              {/* Overlay */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    {photo.type === 'video' ? (
                      <Play className="w-6 h-6 text-white" />
                    ) : (
                                      <ZoomIn className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Photo Info */}
                              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-white">
                                  <h4 className="font-medium text-xs mb-1 line-clamp-1">{photo.title}</h4>
                                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${getCategoryColor(photo.category)} bg-opacity-80`}>
                    {categories.find(c => c.id === photo.category)?.label || photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

                        {/* Show more button */}
                        {filteredPhotos.length > 12 && (
                          <div className="text-center mt-6">
                            <button
                              onClick={() => {/* Logic to show all photos */}}
                              className={`inline-flex items-center space-x-2 px-6 py-3 ${
                                slide.color === 'primary' 
                                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800' 
                                  : 'bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800'
                              } text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                            >
                              <Grid className="w-4 h-4" />
                              <span>Ver todas las fotos ({filteredPhotos.length})</span>
                            </button>
                          </div>
                        )}

        {/* No results message */}
        {filteredPhotos.length === 0 && (
                          <div className="text-center py-12">
                            <div className={`w-24 h-24 ${
                              slide.color === 'primary' 
                                ? 'bg-gradient-to-br from-primary-100 to-primary-200' 
                                : 'bg-gradient-to-br from-accent-100 to-accent-200'
                            } rounded-full flex items-center justify-center mx-auto mb-4`}>
                              <Camera className={`w-12 h-12 ${
                                slide.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                              }`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No hay fotos disponibles</h3>
                            <p className="text-gray-600">Intenta cambiar los filtros para ver más contenido.</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
            </div>
          </div>
        )}

            {activeTab === 'instagram' && (
              <div className="animate-fade-in">
                {/* Instagram Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-800 rounded-3xl mb-4 shadow-2xl">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Momentos destacados</h3>
                  <p className="text-lg text-gray-600 mb-6">Buenos Aires 2024 • Julio 19-21</p>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-success-50 to-success-100 rounded-full border border-success-200">
                    <span className="w-2 h-2 bg-success-600 rounded-full animate-pulse"></span>
                    <span className="text-success-800 font-medium text-sm">Contenido en tiempo real</span>
                  </div>
                </div>

                {/* Slider Navigation */}
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <button
                    onClick={prevSlide}
                    className="nav-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {instagramSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`dot-indicator w-3 h-3 rounded-full ${
                          currentSlide === index 
                            ? 'bg-accent-600 active' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="nav-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Slider Container */}
                <div className="slider-container relative overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {instagramSlides.map((slide, index) => (
                      <div key={slide.id} className="slide-content w-full flex-shrink-0 px-4">
                        {/* Day Header */}
                        <div className="text-center mb-6">
                          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-2xl shadow-lg mb-4 ${
                            slide.color === 'blue' ? 'bg-gradient-to-r from-primary-600 to-primary-700' :
                            slide.color === 'emerald' ? 'bg-gradient-to-r from-success-600 to-success-700' :
                            'bg-gradient-to-r from-accent-600 to-accent-700'
                          } text-white`}>
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="font-bold">{slide.id}</span>
                            </div>
                            <div className="text-left">
                              <h4 className="text-xl font-bold">{slide.day}</h4>
                              <p className="text-sm opacity-90">{slide.date}</p>
                            </div>
                          </div>
                        </div>

                        {/* Posts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                          {slide.posts.map((post, postIndex) => (
                            <div key={postIndex} className={`bg-white rounded-3xl p-6 shadow-xl border ${
                              slide.color === 'blue' ? 'border-primary-100' :
                              slide.color === 'emerald' ? 'border-success-100' :
                              'border-accent-100'
                            }`}>
                              <div className="flex items-center space-x-4 mb-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                  slide.color === 'blue' ? 'bg-primary-100' :
                                  slide.color === 'emerald' ? 'bg-success-100' :
                                  'bg-accent-100'
                                }`}>
                                  {post.type === 'video' ? (
                                    <Play className={`w-6 h-6 ${
                                      slide.color === 'blue' ? 'text-primary-700' :
                                      slide.color === 'emerald' ? 'text-success-700' :
                                      'text-accent-700'
                                    }`} />
                                  ) : (
                                    <Camera className={`w-6 h-6 ${
                                      slide.color === 'blue' ? 'text-primary-700' :
                                      slide.color === 'emerald' ? 'text-success-700' :
                                      'text-accent-700'
                                    }`} />
                                  )}
                                </div>
                                <div>
                                  <h5 className="text-lg font-bold text-gray-900">{post.title}</h5>
                                  <p className="text-gray-600 text-sm">{post.description}</p>
                                </div>
                              </div>
                              <InstagramEmbed url={post.url} maxWidth={400} height={480} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">¿Te perdiste algo?</h4>
                    <p className="text-gray-600 mb-6">Síguenos en Instagram para no perderte ningún momento</p>
                    <button
                      onClick={() => window.open('https://www.instagram.com/foro_politicos/?hl=es-la', '_blank')}
                      className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-800 text-white rounded-2xl hover:from-accent-700 hover:to-accent-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                      <Instagram className="w-6 h-6" />
                      <span className="text-lg font-bold">Seguir @foro_politicos</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lightbox */}
        {isLightboxOpen && filteredPhotos.length > 0 && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Instagram Post Button */}
              {filteredPhotos[currentImageIndex]?.isInstagramPost && (
                <button
                  onClick={() => handleInstagramClick(filteredPhotos[currentImageIndex])}
                  className="absolute top-4 right-16 w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-800 rounded-full flex items-center justify-center text-white hover:from-accent-700 hover:to-accent-900 transition-all z-10"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              )}

              {/* Navigation Arrows - Only show if more than one photo and current is not Instagram */}
              {!filteredPhotos[currentImageIndex]?.isInstagramPost && (
                <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
                </>
              )}

              {/* Image */}
              <div className={`${
                filteredPhotos[currentImageIndex]?.isInstagramPost 
                  ? 'bg-gradient-to-br from-accent-300 via-accent-400 to-gold-300' 
                  : 'bg-gradient-to-br from-primary-300 via-accent-300 to-gold-300'
              } rounded-lg max-h-[80vh] aspect-video flex items-center justify-center relative overflow-hidden`}>
                
                {/* Instagram Post Preview */}
                {filteredPhotos[currentImageIndex]?.isInstagramPost ? (
                  <div className="text-white text-center p-8 max-w-md">
                    <div className="mb-4">
                      <Instagram className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{filteredPhotos[currentImageIndex]?.title}</h3>
                    <p className="text-base opacity-90 mb-4 leading-relaxed">{filteredPhotos[currentImageIndex]?.description}</p>
                    
                    {/* Instagram Stats */}
                    <div className="flex items-center justify-center space-x-6 mb-4">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5" />
                        <span className="font-semibold">{filteredPhotos[currentImageIndex]?.likes?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{filteredPhotos[currentImageIndex]?.comments}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm opacity-75">{formatDate(filteredPhotos[currentImageIndex]?.date)}</p>
                    
                    <button
                      onClick={() => handleInstagramClick(filteredPhotos[currentImageIndex])}
                      className="mt-6 flex items-center space-x-2 mx-auto px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('gallery.instagram.view')}</span>
                    </button>
                  </div>
                ) : (
                  /* Regular Photo Preview */
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-2">{filteredPhotos[currentImageIndex]?.title}</h3>
                    <p className="text-lg opacity-90 mb-2">{formatDate(filteredPhotos[currentImageIndex]?.date)}</p>
                    <p className="text-base opacity-75">{filteredPhotos[currentImageIndex]?.description}</p>
                </div>
                )}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {currentImageIndex + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 