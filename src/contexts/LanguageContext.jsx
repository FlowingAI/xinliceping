import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages, browserLanguageMap } from '../locales/translations';

// 创建Context
const LanguageContext = createContext();

// 自定义Hook
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Provider组件
export const LanguageProvider = ({ children }) => {
  // 从localStorage获取保存的语言，或检测浏览器语言
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('appLanguage');
    if (saved) return saved;

    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = browserLanguageMap[browserLang];

    // 如果检测到的语言支持，则使用它，否则默认英语
    return detectedLang || 'en';
  });

  const t = translations[currentLanguage] || translations.en;

  // 动态更新页面标题和描述
  useEffect(() => {
    // 设置页面标题
    document.title = t.appName;

    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.appSubtitle);
    }

    // 更新 html lang 属性
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, t.appName, t.appSubtitle]);

  // 切换语言
  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('appLanguage', langCode);
  };

  // 获取当前语言信息
  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const value = {
    currentLanguage,
    t,
    changeLanguage,
    languages,
    getCurrentLanguageInfo
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
