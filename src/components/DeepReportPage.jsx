import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

const DeepReportPage = ({ result, onBack }) => {
  const { t } = useTranslation();

  // 获取对应语言的分析数据
  const analysis = t.personalityAnalysis[result.type] || t.personalityAnalysis.social_butterfly;
  const resultData = t.resultType[result.type] || t.resultType.social_butterfly;

  return (
    <div
      className="min-h-screen bg-gradient-dark px-4 py-6 pb-20 overflow-y-auto absolute inset-0"
      style={{
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain'
      }}
    >
      {/* 返回按钮 */}
      <motion.button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 glass-button rounded-full p-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <div className="max-w-3xl mx-auto">
        {/* 头部标题卡片 */}
        <motion.div
          className="glass-card rounded-3xl p-6 mb-6 relative overflow-hidden"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-20`} />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-text-secondary mb-1">{t.deepReportTitle}</div>
                <h1 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                  {resultData.title}
                </h1>
              </div>
              <div className="text-5xl">{resultData.icon}</div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              {t.yourPersonality}
            </p>
          </div>
        </motion.div>

        {/* 核心指标可视化 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>📊</span> {t.coreMetrics}
          </h2>

          <div className="space-y-4">
            {/* 社交电量 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">{t.socialEnergyIndex}</span>
                <span className="text-sm font-bold text-accent-gold">{result.scores.socialPercent}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-gold to-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.scores.socialPercent}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>

            {/* 内耗程度 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">{t.consumptionIndex}</span>
                <span className="text-sm font-bold text-accent-purple">{result.scores.consumptionPercent}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-purple to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.scores.consumptionPercent}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 核心优势 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>💪</span> {t.coreStrengths}
          </h2>
          <div className="space-y-3">
            {analysis.strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-text-primary leading-relaxed">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 潜在挑战 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>⚠️</span> {t.potentialChallenges}
          </h2>
          <div className="space-y-3">
            {analysis.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-text-primary leading-relaxed">{challenge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 成长建议 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>💡</span> {t.growthSuggestions}
          </h2>
          <div className="space-y-3">
            {analysis.suggestions && analysis.suggestions.length > 0 ? (
              analysis.suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  className="glass-button rounded-xl p-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎯</div>
                    <p className="text-sm text-text-primary leading-relaxed">{suggestion}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center text-text-secondary/60 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-4xl mb-3">🌱</div>
                <p>{t.loading}</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* 成长计划 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>📅</span> {t.growthPlan}
          </h2>
          <div className="space-y-4">
            {analysis.growthPlan.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative pl-6 pb-6 ${index < analysis.growthPlan.length - 1 ? 'border-l-2 border-accent-gold/30' : ''}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent-gold -translate-x-[9px] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-bg-start" />
                </div>
                <div className="text-xs text-accent-gold font-bold mb-1">{plan.phase}</div>
                <p className="text-sm text-text-primary">{plan.action}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 职业环境建议 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span>💼</span> {t.workEnvironment}
          </h2>

          <div className="mb-4">
            <div className="text-xs text-text-secondary mb-2">✅ {t.recommended}</div>
            <div className="flex flex-wrap gap-2">
              {analysis.environments.map((env, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg bg-accent-gold/20 text-accent-gold text-xs"
                >
                  {env}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-text-secondary mb-2">❌ {t.avoid}</div>
            <div className="flex flex-wrap gap-2">
              {analysis.avoid.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg bg-accent-purple/20 text-accent-purple text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 金句卡片 */}
        <motion.div
          className="glass-card rounded-2xl p-6 mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        >
          <div className={`bg-gradient-to-r ${result.color} p-[1px] rounded-2xl`}>
            <div className="bg-bg-start/90 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-xs text-text-secondary/60 mb-2">✨ {t.goldenQuote}</div>
              <p className="text-lg font-medium text-text-primary italic leading-relaxed">
                "{resultData.goldenSentence}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* 底部提示 */}
        <motion.div
          className="text-center text-xs text-text-secondary/50 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>{t.reportDisclaimer}</p>
          <p className="mt-1">{t.reportCopyright}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default DeepReportPage;
