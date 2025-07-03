import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavigationItem } from '../../types/index';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledState, setIsScrolledState] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { t } = useLanguage();

  const navigationItems: NavigationItem[] = useMemo(() => [
    { label: t('nav.inicio'), href: '#inicio' },
    { label: t('nav.caracteristicas'), href: '#caracteristicas' },
    { label: t('nav.sobre'), href: '#sobre' },
    { label: 'Video', href: '#video' },
    { label: t('nav.testimonios'), href: '#organizacion' },
    { label: t('nav.galeria'), href: '#galeria' },
    { label: t('nav.eventos'), href: '#eventos' }
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolledState(scrollTop > 50);

      // Detectar sección activa
      const sections = navigationItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const sectionId = href.replace('#', '');
      setActiveSection(sectionId);
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrolled = isScrolled || isScrolledState;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-neutral-100/80'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo mejorado */}
          <div className="flex items-center space-x-4">
            <div className={`relative w-14 h-14 transition-all duration-300 ${
              scrolled 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75 sm:opacity-100 sm:scale-100'
            }`}>
              <img 
                src="/Logo.png" 
                alt="Foro de Jóvenes Políticos" 
                className={`w-full h-full object-contain transition-all duration-300 filter ${
                  scrolled 
                    ? 'drop-shadow-lg' 
                    : 'drop-shadow-2xl'
                }`}
                style={{
                  filter: scrolled 
                    ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(33, 61, 108, 0.1))'
                    : 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15)) drop-shadow(0 4px 8px rgba(33, 61, 108, 0.2))'
                }}
              />
            </div>
            <div className={`transition-all duration-300 ${
              scrolled 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75 sm:opacity-100 sm:scale-100'
            }`}>
              <h1 className={`font-primary font-bold text-sm sm:text-lg leading-tight tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-neutral-900' : 'text-white drop-shadow-sm'
              }`}>
                <span className="hidden xs:inline">Foro Panamericano de</span>
                <span className="xs:hidden">Foro Panamericano de</span>
                <br className="hidden xs:block" />
                <span className={`transition-colors duration-300 ${
                  scrolled ? 'text-accent-600' : 'text-accent-300'
                }`}>
                  <span className="hidden xs:inline">Jóvenes Políticos</span>
                  <span className="xs:hidden">
                    <br />
                    Jóvenes Políticos
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation mejorada */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group ${
                    scrolled 
                      ? (isActive 
                          ? 'text-primary-700 bg-primary-50' 
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50')
                      : (isActive 
                          ? 'text-white bg-white/20 backdrop-blur-sm' 
                          : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm')
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      scrolled 
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200/50' 
                        : 'bg-white/20 backdrop-blur-md border border-white/20'
                    }`}></div>
                  )}
                  <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-8 transform -translate-x-1/2 ${
                    scrolled 
                      ? 'from-primary-500 to-accent-500' 
                      : 'from-white to-accent-300'
                  }`}></div>
                </button>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu Toggle mejorados */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('#registro')}
              className={`hidden sm:flex items-center px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                scrolled
                  ? 'bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-lg shadow-accent-600/25 hover:shadow-xl hover:shadow-accent-600/30'
                  : 'bg-white/90 hover:bg-white text-primary-700 shadow-lg hover:shadow-xl backdrop-blur-sm'
              }`}
            >
              <span>{t('nav.registro')}</span>
              <ChevronDown className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Mobile Menu Toggle mejorado */}
            <button
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                scrolled 
                  ? 'text-neutral-700 hover:bg-neutral-100 shadow-sm' 
                  : 'text-white hover:bg-white/10 backdrop-blur-sm shadow-lg'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation mejorada */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-100/50 p-6 mt-2">
            <div className="space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] group ${
                      isActive 
                        ? 'text-primary-700 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200/50 shadow-sm' 
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideUp 0.4s ease-out forwards' : ''
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                      )}
                    </div>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-neutral-200/50">
                <button 
                  onClick={() => handleNavClick('#registro')}
                  className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent-600/25 hover:shadow-xl hover:shadow-accent-600/30"
                >
                  {t('nav.registro')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;