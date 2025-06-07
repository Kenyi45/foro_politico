import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../../contexts/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'light' | 'dark';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'light' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
    { code: 'en' as Language, label: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const buttonClasses = variant === 'light' 
    ? 'text-gray-700 hover:text-accent-500 hover:bg-gray-100' 
    : 'text-white hover:text-accent-200 hover:bg-white/10';

  const dropdownClasses = variant === 'light'
    ? 'bg-white border-gray-200 shadow-lg'
    : 'bg-gray-800 border-gray-600 shadow-xl';

  const itemClasses = variant === 'light'
    ? 'text-gray-700 hover:bg-accent-50 hover:text-accent-600'
    : 'text-white hover:bg-white/10 hover:text-accent-200';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${buttonClasses}`}
        aria-label="Cambiar idioma"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className={`absolute right-0 top-full mt-2 w-40 rounded-lg border z-50 ${dropdownClasses}`}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center space-x-2 ${itemClasses} ${
                  language === lang.code ? 'bg-accent-500 text-white' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 