import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages, getCurrentLanguageInfo } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = getCurrentLanguageInfo();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* 语言按钮 */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-button rounded-full px-4 py-2 flex items-center gap-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-text-primary font-medium">{currentLang.name}</span>
          <motion.svg
            className="w-4 h-4 text-text-secondary"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        {/* 下拉菜单 */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* 点击外部关闭 */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="absolute right-0 mt-2 w-48 glass-card rounded-xl overflow-hidden z-50"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-sm transition-colors ${
                      currentLanguage === lang.code
                        ? 'bg-accent-gold/20 text-accent-gold'
                        : 'text-text-primary hover:bg-white/5'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <span className="flex-1 text-left">{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <motion.svg
                        className="w-4 h-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSelector;
