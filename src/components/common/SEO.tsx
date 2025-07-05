import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'event';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'III Foro Panamericano de Jóvenes Políticos - Lima, Perú 2025',
  description = '¡Tu voz puede transformar América! Inscríbete al III Foro Panamericano de Jóvenes Políticos – Perú 2025. Evento internacional que reunirá a jóvenes líderes para debatir, proponer y construir soluciones políticas con impacto real.',
  keywords = 'foro panamericano, jóvenes políticos, lima perú 2025, política internacional, liderazgo juvenil, foro político, américa latina, jóvenes líderes',
  image = 'https://foropanamericanodejovenespoliticos.org/Logo_FORO.png',
  url = 'https://foropanamericanodejovenespoliticos.org/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Foro Panamericano de Jóvenes Políticos',
  section,
  tags = []
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);

    // Update Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    updatePropertyTag('twitter:url', url);

    // Update article-specific tags if type is article
    if (type === 'article') {
      if (publishedTime) {
        updatePropertyTag('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        updatePropertyTag('article:modified_time', modifiedTime);
      }
      if (author) {
        updatePropertyTag('article:author', author);
      }
      if (section) {
        updatePropertyTag('article:section', section);
      }
      tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, publishedTime, modifiedTime, author, section, tags]);

  return null; // This component doesn't render anything
};

export default SEO; 