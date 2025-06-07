import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Filter, 
  Grid, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Download,
  Share2,
  ZoomIn,
  Play
} from 'lucide-react';
import { previousForumEvents, galleryPhotos } from '../../data/mockData';
import { GalleryPhoto, ForumEventSummary } from '../../types/index';
import Card, { CardContent, CardHeader, CardTitle } from '../common/Card';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className = '' }) => {
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredPhotos, setFilteredPhotos] = useState<GalleryPhoto[]>(galleryPhotos);
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('gallery.filter.all.categories'), icon: <Grid className="w-4 h-4" /> },
    { id: 'ceremonies', label: t('gallery.categories.ceremonies'), icon: <Award className="w-4 h-4" /> },
    { id: 'panel', label: t('gallery.categories.panel'), icon: <Users className="w-4 h-4" /> },
    { id: 'workshops', label: t('gallery.categories.workshops'), icon: <Filter className="w-4 h-4" /> },
    { id: 'networking', label: t('gallery.categories.networking'), icon: <Share2 className="w-4 h-4" /> },
    { id: 'social', label: t('gallery.categories.social'), icon: <Camera className="w-4 h-4" /> },
    { id: 'speakers', label: t('gallery.categories.speakers'), icon: <Award className="w-4 h-4" /> }
  ];

  useEffect(() => {
    let filtered = galleryPhotos;

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
      workshops: 'bg-green-100 text-green-800',
      networking: 'bg-blue-100 text-blue-800',
      social: 'bg-accent-100 text-accent-800',
      speakers: 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className={`section-padding bg-neutral-50 ${className}`} id="galeria">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="title-section text-neutral-900 mb-6 animate-slide-up">
            {t('gallery.title')}{' '}
            <span className="text-primary-700 font-extrabold">{t('gallery.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('gallery.description')}
          </p>
        </div>

        {/* Event Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card variant="elevated" hover="lift" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-neutral-900">Buenos Aires 2023</h3>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                1ra Edición
              </span>
            </div>
            <p className="text-neutral-600 mb-4">
              Nuestra primera edición reunió a 180 jóvenes líderes de 15 países para 
              discutir el futuro de la democracia en América Latina.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">180</div>
                <div className="text-sm text-neutral-600">Participantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-600">15</div>
                <div className="text-sm text-neutral-600">Países</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-600">25</div>
                <div className="text-sm text-neutral-600">Conferencias</div>
              </div>
            </div>
          </Card>

          <Card variant="elevated" hover="lift" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-neutral-900">Buenos Aires 2024</h3>
              <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                2da Edición
              </span>
            </div>
            <p className="text-neutral-600 mb-4">
              La segunda edición expandió nuestro alcance con 220 participantes 
              y un enfoque especial en innovación política y tecnología.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">220</div>
                <div className="text-sm text-neutral-600">Participantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-600">18</div>
                <div className="text-sm text-neutral-600">Países</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-600">32</div>
                <div className="text-sm text-neutral-600">Conferencias</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Event Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {t('gallery.filter.event')}
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedEvent('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedEvent === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {t('gallery.filter.all.events')}
                </button>
                <button
                  onClick={() => setSelectedEvent('buenos-aires-2023')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedEvent === 'buenos-aires-2023'
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Buenos Aires 2023
                </button>
                <button
                  onClick={() => setSelectedEvent('buenos-aires-2024')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedEvent === 'buenos-aires-2024'
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Buenos Aires 2024
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {t('gallery.filter.category')}
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-accent-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-100 aspect-square"
              onClick={() => openLightbox(index)}
            >
              {/* Photo placeholder with gradient */}
              <div 
                className="w-full h-full bg-gradient-to-br from-primary-200 via-accent-200 to-gold-200 
                         group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {photo.type === 'video' ? (
                      <Play className="w-6 h-6 text-white" />
                    ) : (
                      <Grid className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <h4 className="font-medium text-sm mb-1">{photo.title}</h4>
                  <p className="text-xs opacity-80">{formatDate(photo.date)}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${getCategoryColor(photo.category)}`}>
                    {categories.find(c => c.id === photo.category)?.label || photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No hay fotos disponibles</h3>
            <p className="text-neutral-600">Intenta cambiar los filtros para ver más contenido.</p>
          </div>
        )}

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

              {/* Navigation Arrows */}
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

              {/* Image */}
              <div className="bg-gradient-to-br from-primary-300 via-accent-300 to-gold-300 rounded-lg max-h-[80vh] aspect-video flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-2">{filteredPhotos[currentImageIndex]?.title}</h3>
                  <p className="text-lg opacity-90">{formatDate(filteredPhotos[currentImageIndex]?.date)}</p>
                </div>
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