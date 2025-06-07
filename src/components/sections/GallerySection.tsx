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
  ZoomIn
} from 'lucide-react';
import { previousForumEvents, galleryPhotos } from '../../data/mockData';
import { GalleryPhoto, ForumEventSummary } from '../../types/index';
import Card, { CardContent, CardHeader, CardTitle } from '../common/Card';
import Button from '../common/Button';

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className = '' }) => {
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredPhotos, setFilteredPhotos] = useState<GalleryPhoto[]>(galleryPhotos);

  const categories = [
    { id: 'all', label: 'Todas las Categorías', icon: <Grid className="w-4 h-4" /> },
    { id: 'ceremonies', label: 'Ceremonias', icon: <Award className="w-4 h-4" /> },
    { id: 'panel', label: 'Paneles', icon: <Users className="w-4 h-4" /> },
    { id: 'workshops', label: 'Talleres', icon: <Filter className="w-4 h-4" /> },
    { id: 'networking', label: 'Networking', icon: <Share2 className="w-4 h-4" /> },
    { id: 'social', label: 'Eventos Sociales', icon: <Camera className="w-4 h-4" /> },
    { id: 'speakers', label: 'Conferencias', icon: <Award className="w-4 h-4" /> }
  ];

  useEffect(() => {
    let filtered = galleryPhotos;

    if (selectedEvent !== 'all') {
      filtered = filtered.filter(photo => 
        selectedEvent === 'bogota-2023' ? photo.id.startsWith('bog-') : photo.id.startsWith('ba-')
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
          <h2 className="title-section text-gray-900 mb-6">
            Galería de{' '}
            <span className="text-primary-700 font-extrabold">Momentos</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Revive los momentos más memorables de nuestros foros anteriores 
            en Bogotá 2023 y Buenos Aires 2024
          </p>
        </div>

        {/* Event Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {previousForumEvents.map((event) => (
            <Card key={event.id} variant="elevated" hover="lift">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{event.city} {event.year}</h3>
                  <p className="text-white/90">{event.dates}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{event.participants}</div>
                    <div className="text-sm text-neutral-600">Participantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">{event.countries}</div>
                    <div className="text-sm text-neutral-600">Países</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {event.keyHighlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Event Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Filtrar por Evento
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
                  Todos los Eventos
                </button>
                <button
                  onClick={() => setSelectedEvent('bogota-2023')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedEvent === 'bogota-2023'
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Bogotá 2023
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
                Filtrar por Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold text-sm mb-1 line-clamp-2">{photo.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-white/80">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(photo.date)}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(photo.category)}`}>
                    {categories.find(c => c.id === photo.category)?.label}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-70" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center text-neutral-600">
          <p>Mostrando {filteredPhotos.length} de {galleryPhotos.length} fotografías</p>
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={filteredPhotos[currentImageIndex]?.image}
                  alt={filteredPhotos[currentImageIndex]?.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {filteredPhotos[currentImageIndex]?.title}
                      </h3>
                      <p className="text-neutral-700 mb-3">
                        {filteredPhotos[currentImageIndex]?.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(filteredPhotos[currentImageIndex]?.category)}`}>
                      {categories.find(c => c.id === filteredPhotos[currentImageIndex]?.category)?.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(filteredPhotos[currentImageIndex]?.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{filteredPhotos[currentImageIndex]?.location}</span>
                      </div>
                      {filteredPhotos[currentImageIndex]?.photographer && (
                        <div className="flex items-center space-x-1">
                          <Camera className="w-4 h-4" />
                          <span>{filteredPhotos[currentImageIndex]?.photographer}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-neutral-500">
                      {currentImageIndex + 1} de {filteredPhotos.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 