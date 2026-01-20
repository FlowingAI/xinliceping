import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { useTranslation } from '../contexts/LanguageContext';

const QuestionPage = ({ question, currentIndex, totalQuestions, onAnswer }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);

  // Get translated question text
  const translatedQuestion = t.questions[question.id] || question;
  const questionText = translatedQuestion.question;
  const translatedOptions = translatedQuestion.options || question.options.map(opt => opt.text);

  const handleAnswer = (score) => {
    if (selectedOption !== null) return; // 防止重复点击

    setSelectedOption(score);
    // 延迟一下，让用户看到选择效果
    setTimeout(() => {
      onAnswer(score);
      setSelectedOption(null); // 重置状态
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 safe-area">
      {/* 进度条 */}
      <ProgressBar
        current={currentIndex + 1}
        total={totalQuestions}
        dimension={question.dimension}
      />

      {/* 题目卡片 */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full max-w-2xl">
          <motion.div
            className="glass-card rounded-2xl p-6 md:p-8 mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            key={question.id}
          >
            {/* 题目编号 */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentIndex + 1}
              </motion.div>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* 题目文字 */}
            <motion.h2
              className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {questionText}
            </motion.h2>
          </motion.div>

          {/* 选项列表 */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {question.options.map((option, index) => (
                <motion.button
                  key={option.text}
                  onClick={() => handleAnswer(option.score)}
                  className={`w-full text-left glass-button rounded-xl p-4 md:p-5 relative overflow-hidden group ${
                    selectedOption === option.score
                      ? 'border-accent-gold/50 bg-accent-gold/10'
                      : ''
                  }`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={selectedOption !== null}
                >
                  {/* 悬停效果背景 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* 选项文字 */}
                  <span className="relative z-10 text-text-primary text-base md:text-lg flex items-center">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-text-secondary mr-3 flex-shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {translatedOptions[index]}
                  </span>

                  {/* 选中指示器 */}
                  {selectedOption === option.score && (
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center">
                        <svg className="w-4 h-4 text-bg-start" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* 底部提示 */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-xs text-text-secondary/50">
          {t.selectHint}
        </p>
      </motion.div>
    </div>
  );
};

export default QuestionPage;
