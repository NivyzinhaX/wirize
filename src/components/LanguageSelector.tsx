import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return (
    <motion.div 
      className="fixed top-20 right-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative group">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-blue-500/20"
        >
          <Globe className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 flex items-center gap-2">
            {languages.find(lang => lang.code === i18n.language)?.flag}
            {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
          </span>
        </motion.button>
        
        <div className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left hover:bg-blue-500/10 transition-colors flex items-center gap-2 ${
                i18n.language === lang.code ? 'text-blue-400' : 'text-white'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}