import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const WelcomePage = ({ onStart }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 safe-area"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 装饰性光晕 */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* 主内容卡片 */}
      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full relative z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* 图标/装饰 */}
        <motion.div
          className="text-6xl mb-6 text-center"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          🪞
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t.welcomeTitle}
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-lg md:text-xl text-center text-text-secondary mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t.welcomeSubtitle}
        </motion.p>

        {/* 分隔线 */}
        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-accent-gold to-accent-purple rounded-full mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />

        {/* 描述文字 */}
        <motion.p
          className="text-sm text-center text-text-secondary mb-10 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {t.welcomeDescription.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t.welcomeDescription.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* 开始按钮 */}
        <motion.button
          onClick={onStart}
          className="w-full py-4 px-8 bg-gradient-gold text-bg-start font-bold rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t.welcomeButton}
        </motion.button>

        {/* 底部提示 */}
        <motion.p
          className="text-xs text-center text-text-secondary/60 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {t.welcomePrivacy}
        </motion.p>
      </motion.div>

      {/* 底部装饰 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-text-secondary/50 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;
