import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationItem } from '../../types/index';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledState, setIsScrolledState] = useState(false);
  const { t } = useLanguage();

  const navigationItems: NavigationItem[] = [
    { label: t('nav.inicio'), href: '#inicio' },
    { label: t('nav.caracteristicas'), href: '#caracteristicas' },
    { label: t('nav.sobre'), href: '#sobre' },
    { label: t('nav.ejes'), href: '#ejes-tematicos' },
    { label: t('nav.equipo'), href: '#equipo' },
    { label: t('nav.galeria'), href: '#galeria' },
    { label: t('nav.eventos'), href: '#eventos' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolledState(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrolled = isScrolled || isScrolledState;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">FJP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-display font-bold text-lg leading-tight tracking-tight ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Foro de Jóvenes<br />
                <span className="text-accent-500">Políticos</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`nav-text transition-colors duration-200 hover:text-accent-500 ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-accent-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button, Language Selector & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector variant={scrolled ? 'light' : 'dark'} />
            
            <button 
              onClick={() => handleNavClick('#registro')}
              className="btn-secondary hidden sm:block"
            >
              {t('nav.registro')}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-6'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 mt-2">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-accent-500 hover:bg-accent-50 rounded-lg nav-text transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                {/* Language Selector Mobile */}
                <div className="px-4">
                  <LanguageSelector variant="light" />
                </div>
                <button 
                  onClick={() => handleNavClick('#registro')}
                  className="btn-secondary w-full text-center"
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