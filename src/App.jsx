import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import WelcomePage from './components/WelcomePage';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import DeepReportPage from './components/DeepReportPage';
import LanguageSelector from './components/LanguageSelector';
import { questions } from './data/questions';
import { calculateResult } from './utils/calculateResult';

function App() {
  // 页面状态: 'welcome' | 'quiz' | 'result' | 'report'
  const [currentPage, setCurrentPage] = useState('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  // 开始测试
  const handleStart = () => {
    setCurrentPage('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  // 回答问题
  const handleAnswer = (score) => {
    const newAnswers = [
      ...answers,
      {
        questionId: questions[currentQuestionIndex].id,
        dimension: questions[currentQuestionIndex].dimension,
        score: score
      }
    ];
    setAnswers(newAnswers);

    // 检查是否还有下一题
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 所有题目答完，计算结果
      const testResult = calculateResult(newAnswers);
      setResult(testResult);
      setCurrentPage('result');
    }
  };

  // 查看深度报告
  const handleViewReport = () => {
    setCurrentPage('report');
  };

  // 返回结果页
  const handleBackToResult = () => {
    setCurrentPage('result');
  };

  // 重新测试
  const handleRestart = () => {
    setCurrentPage('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  // 页面切换动画配置
  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen bg-gradient-dark text-text-primary relative ${currentPage === 'report' ? '' : 'overflow-hidden'}`}>
        {/* 语言切换器 */}
        <LanguageSelector />

        {/* 背景光晕装饰 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* 主内容区 */}
        <div className="relative z-10">
          <AnimatePresence mode="wait" initial={false}>
          {currentPage === 'welcome' && (
            <motion.div
              key="welcome"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              custom={1}
            >
              <WelcomePage onStart={handleStart} />
            </motion.div>
          )}

          {currentPage === 'quiz' && (
            <motion.div
              key="quiz"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              custom={1}
            >
              <QuestionPage
                question={questions[currentQuestionIndex]}
                currentIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
              />
            </motion.div>
          )}

          {currentPage === 'result' && result && (
            <motion.div
              key="result"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              custom={1}
            >
              <ResultPage
                result={result}
                onRestart={handleRestart}
                onViewReport={handleViewReport}
              />
            </motion.div>
          )}

          {currentPage === 'report' && result && (
            <motion.div
              key="report"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              custom={1}
            >
              <DeepReportPage
                result={result}
                onBack={handleBackToResult}
              />
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
