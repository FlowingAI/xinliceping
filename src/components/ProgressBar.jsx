import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const ProgressBar = ({ current, total, dimension }) => {
  const { t } = useTranslation();
  const progress = (current / total) * 100;

  const dimensionText = {
    social: t.appName,
    consumption: t.appSubtitle
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 mb-6">
      {/* 进度信息 */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-text-secondary/80">
          {dimensionText[dimension] || t.appName}
        </span>
        <span className="text-sm font-medium text-accent-gold">
          {t.questionProgress.replace('{current}', current).replace('{total}', total)}
        </span>
      </div>

      {/* 进度条背景 */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        {/* 进度条填充 */}
        <motion.div
          className="h-full bg-gradient-to-r from-accent-gold to-accent-purple rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* 百分比 */}
      <motion.div
        className="text-right mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={current}
      >
        <span className="text-xs text-text-secondary/60">
          {t.percentComplete.replace('{percent}', Math.round(progress))}
        </span>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
