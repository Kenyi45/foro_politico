import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LanguageSelectorProps {
  isScrolled?: boolean;
  isMobile?: boolean;
}

// Define the valid language codes
type LanguageCode = 'es' | 'en' | 'pt';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled = false, isMobile = false }) => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languageNames: Record<LanguageCode, string> = {
    es: 'Español',
    en: 'English',
    pt: 'Português'
  };

  const languageFlags: Record<LanguageCode, string> = {
    es: '🇪🇸',
    en: '🇺🇸',
    pt: '🇧🇷'
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Type assertion to ensure currentLanguage is a valid language code
  const currentLang = currentLanguage as LanguageCode;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
          isMobile
            ? 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
            : isScrolled
            ? 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
            : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:block">{languageFlags[currentLang]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute ${isMobile ? 'bottom-full left-0 mb-2' : 'top-full right-0 mt-2'} w-48 bg-white rounded-xl shadow-xl border border-neutral-100/50 backdrop-blur-xl z-50`}>
          <div className="py-2">
            {availableLanguages.map((lang) => {
              const langCode = lang as LanguageCode;
              return (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors ${
                    currentLanguage === lang ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'
                  }`}
                >
                  <span className="text-lg">{languageFlags[langCode]}</span>
                  <span className="font-medium">{languageNames[langCode]}</span>
                  {currentLanguage === lang && (
                    <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector; 