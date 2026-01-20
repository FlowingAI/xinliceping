import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const ResultCard = ({ result }) => {
  const { t } = useTranslation();
  const resultData = t.resultType[result.type] || t.resultType.social_butterfly;

  return (
    <motion.div
      className="glass-card rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 背景装饰渐变 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-10`} />

      {/* 顶部图标和标题 */}
      <motion.div
        className="text-center mb-6 relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-6xl mb-4">{resultData.icon}</div>
        <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
          {resultData.title}
        </h2>
        <div className="text-sm text-text-secondary mt-2">{resultData.name}</div>
      </motion.div>

      {/* 分数展示 */}
      <motion.div
        className="grid grid-cols-2 gap-4 mb-6 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="glass-button rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-accent-gold">
            {result.scores.socialPercent}%
          </div>
          <div className="text-xs text-text-secondary mt-1">{t.scores.socialEnergy}</div>
          <div className="text-xs text-text-secondary/60 mt-1">
            {result.scores.social}/{result.scores.socialMax}
          </div>
        </div>
        <div className="glass-button rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-accent-purple">
            {result.scores.consumptionPercent}%
          </div>
          <div className="text-xs text-text-secondary mt-1">{t.scores.consumptionLevel}</div>
          <div className="text-xs text-text-secondary/60 mt-1">
            {result.scores.consumption}/{result.scores.consumptionMax}
          </div>
        </div>
      </motion.div>

      {/* 分隔线 */}
      <motion.div
        className="w-16 h-1 bg-gradient-to-r from-accent-gold to-accent-purple rounded-full mx-auto mb-6 relative z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      {/* 详细描述 */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
          {resultData.description}
        </p>
      </motion.div>

      {/* 金句卡片 */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
      >
        <div className={`bg-gradient-to-r ${result.color} p-[1px] rounded-2xl`}>
          <div className="bg-bg-start/90 backdrop-blur-sm rounded-2xl p-5">
            <div className="text-xs text-text-secondary/60 mb-2">✨ {t.goldenQuote}</div>
            <p className="text-base font-medium text-text-primary italic text-center leading-relaxed">
              "{resultData.goldenSentence}"
            </p>
          </div>
        </div>
      </motion.div>

      {/* 性格分析标签 */}
      <motion.div
        className="flex gap-2 justify-center flex-wrap relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span className="px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs">
          {result.analysis.socialLevel} {t.traits.social}
        </span>
        <span className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs">
          {result.analysis.consumptionLevel} {t.traits.consumption}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;
