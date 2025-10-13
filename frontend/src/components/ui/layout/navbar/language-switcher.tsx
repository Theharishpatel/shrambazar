// components/layout/navbar/language-switcher.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { LANGUAGES, type Language } from './nav-items';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Here you can add logic to change the actual language
    console.log('Language changed to:', language.code);
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* Language Switch Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2  cursor-pointer rounded-lg ',
          'hover:border-gray-400 transition-colors text-sm font-light',
          ' hover:bg-gray-100'
        )}
        aria-label="Change language"
      >
        <span className='flex justify-center items-center gap-0.5'>
        <span className="hidden sm:block">{selectedLanguage.code.toUpperCase()}</span>
        <span className="text-base">{selectedLanguage.flag}</span>
        </span>
        <svg 
          className={cn(
            'w-4 h-4 transition-transform',
            isOpen ? 'rotate-180' : 'rotate-0'
          )} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Select Language
          </div>
          
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={cn(
                'flex items-center space-x-3 w-full px-3 py-2 text-sm transition-colors',
                'hover:bg-gray-50 text-left',
                selectedLanguage.code === language.code 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-gray-700'
              )}
            >
              <span className="text-base">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {selectedLanguage.code === language.code && (
                <span className="text-primary-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}