import React from 'react';
import { motion } from 'framer-motion';
import ResultCard from './ResultCard';
import { useTranslation } from '../contexts/LanguageContext';

const ResultPage = ({ result, onRestart, onViewReport }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 safe-area">
      {/* 结果卡片 */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ResultCard result={result} />
      </motion.div>

      {/* 深度分析报告按钮 - 带脉冲动画 */}
      <motion.div
        className="max-w-lg w-full mx-auto mb-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.button
          onClick={onViewReport}
          className="w-full py-4 px-6 bg-gradient-to-r from-accent-gold to-yellow-500 text-bg-start font-bold rounded-xl text-lg shadow-lg relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(251, 191, 36, 0.3)',
              '0 0 40px rgba(251, 191, 36, 0.6)',
              '0 0 20px rgba(251, 191, 36, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* 扫光动画效果 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
          />

          <div className="flex items-center justify-center gap-2 relative z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{t.viewFullReport}</span>
          </div>
        </motion.button>

        {/* 重新测试按钮 */}
        <motion.button
          onClick={onRestart}
          className="w-full mt-3 py-3 px-6 glass-button rounded-xl text-text-secondary text-sm"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {t.restart}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultPage;
