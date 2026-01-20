import { resultTypes } from '../data/questions';

/**
 * 计算测试结果
 * @param {Array} answers - 用户答案数组，每项包含 {questionId, score}
 * @returns {Object} - 结果对象
 */
export function calculateResult(answers) {
  // 分离社交电量和内耗程度的分数
  let socialScore = 0;    // 社交电量分数 (1-7题)
  let consumptionScore = 0;  // 内耗程度分数 (8-15题)

  answers.forEach((answer, index) => {
    if (index < 7) {
      // 前7题：社交电量
      socialScore += answer.score;
    } else {
      // 后8题：内耗程度
      consumptionScore += answer.score;
    }
  });

  // 社交电量范围: 7-35 分
  // 内耗程度范围: 8-40 分

  // 判断结果类型
  let resultType;

  const isHighSocial = socialScore >= 26;  // 社交电量高
  const isHighConsumption = consumptionScore > 20;  // 内耗程度高

  if (isHighSocial && !isHighConsumption) {
    // 高社交 + 低内耗 = 社交达人
    resultType = 'social_butterfly';
  } else if (!isHighSocial && !isHighConsumption) {
    // 低社交 + 低内耗 = 思考行者
    resultType = 'thinker';
  } else if (isHighSocial && isHighConsumption) {
    // 高社交 + 高内耗 = 敏感探索者
    resultType = 'sensitive_explorer';
  } else {
    // 低社交 + 高内耗 = 内省诗人
    resultType = 'introspective_poet';
  }

  const result = resultTypes[resultType];

  return {
    type: resultType,
    ...result,
    scores: {
      social: socialScore,
      socialMax: 35,
      consumption: consumptionScore,
      consumptionMax: 40,
      socialPercent: Math.round((socialScore / 35) * 100),
      consumptionPercent: Math.round((consumptionScore / 40) * 100)
    },
    analysis: {
      socialLevel: socialScore >= 26 ? '高' : '较低',
      consumptionLevel: consumptionScore > 20 ? '高' : '较低',
      socialDesc: getSocialDescription(socialScore),
      consumptionDesc: getConsumptionDescription(consumptionScore)
    }
  };
}

// 社交电量描述
function getSocialDescription(score) {
  if (score >= 32) return '极度外向，从社交中获取大量能量';
  if (score >= 26) return '外向倾向明显，享受社交互动';
  if (score >= 20) return '社交平衡，能适应不同场合';
  if (score >= 14) return '内向倾向，享受独处时光';
  return '极度内向，社交会消耗大量能量';
}

// 内耗程度描述
function getConsumptionDescription(score) {
  if (score >= 35) return '内耗严重，容易被情绪困扰';
  if (score >= 28) return '内耗较高，需要关注心理健康';
  if (score >= 21) return '内耗适中，偶尔会过度思考';
  if (score >= 14) return '内耗较低，心态较为平和';
  return '几乎无内耗，内心强大稳定';
}

/**
 * 获取结果类型用于显示
 * @param {string} type - 结果类型ID
 * @returns {Object}
 */
export function getResultType(type) {
  return resultTypes[type];
}
