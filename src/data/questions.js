// 15道心理测试题
// 维度A (1-7题): 社交电量 - 测试你的外向倾向和能量来源
// 维度B (8-15题): 内耗程度 - 测试你的心理负担和焦虑程度

export const questions = [
  // === 社交电量测试题 (1-7) ===
  {
    id: 1,
    dimension: 'social',
    question: "周末终于到了，你更倾向于？",
    options: [
      { text: "独自宅家，充电一整天", score: 1 },
      { text: "和1-2个好友小聚", score: 2 },
      { text: "参加一个小型聚会", score: 3 },
      { text: "和朋友狂欢到深夜", score: 4 },
      { text: "组织一场大型派对", score: 5 }
    ]
  },
  {
    id: 2,
    dimension: 'social',
    question: "在陌生场合，你的第一反应是？",
    options: [
      { text: "找个角落默默观察", score: 1 },
      { text: "等待别人来搭话", score: 2 },
      { text: "礼貌地和身边人打招呼", score: 3 },
      { text: "主动寻找话题破冰", score: 4 },
      { text: "成为派对焦点，带动气氛", score: 5 }
    ]
  },
  {
    id: 3,
    dimension: 'social',
    question: "当需要公开演讲时，你的感受是？",
    options: [
      { text: "极度焦虑，想要逃避", score: 1 },
      { text: "紧张但能克服", score: 2 },
      { text: "有些忐忑，但能接受", score: 3 },
      { text: "有点兴奋，准备充分", score: 4 },
      { text: "完全享受舞台", score: 5 }
    ]
  },
  {
    id: 4,
    dimension: 'social',
    question: "和一群人聊天后，你通常感觉？",
    options: [
      { text: "精疲力竭，需要独处恢复", score: 1 },
      { text: "有点累，想休息一会儿", score: 2 },
      { text: "不累也不兴奋，中性状态", score: 3 },
      { text: "依然精神焕发", score: 4 },
      { text: "能量爆棚，还想继续", score: 5 }
    ]
  },
  {
    id: 5,
    dimension: 'social',
    question: "面对冲突，你会？",
    options: [
      { text: "回避冲突，默默忍受", score: 1 },
      { text: "私下沟通，避免公开", score: 2 },
      { text: "理性讨论，寻求共识", score: 3 },
      { text: "直接表达，不卑不亢", score: 4 },
      { text: "主动挑战，不怕争议", score: 5 }
    ]
  },
  {
    id: 6,
    dimension: 'social',
    question: "社交媒体上，你更倾向于？",
    options: [
      { text: "潜水浏览，很少互动", score: 1 },
      { text: "偶尔点赞，谨慎评论", score: 2 },
      { text: "分享生活，适度互动", score: 3 },
      { text: "频繁更新，主动社交", score: 4 },
      { text: "网络达人，话题制造者", score: 5 }
    ]
  },
  {
    id: 7,
    dimension: 'social',
    question: "朋友眼中的你，更可能是？",
    options: [
      { text: "安静神秘的人", score: 1 },
      { text: "温和内向的人", score: 2 },
      { text: "平衡协调的人", score: 3 },
      { text: "热情开朗的人", score: 4 },
      { text: "社交达人，人群中心", score: 5 }
    ]
  },

  // === 内耗程度测试题 (8-15) ===
  {
    id: 8,
    dimension: 'consumption',
    question: "深夜躺在床上，你会？",
    options: [
      { text: "秒睡，无忧无虑", score: 1 },
      { text: "偶尔回想今天的事", score: 2 },
      { text: "思考明天的计划", score: 3 },
      { text: "反复纠结白天的细节", score: 4 },
      { text: "思维爆炸，无法入睡", score: 5 }
    ]
  },
  {
    id: 9,
    dimension: 'consumption',
    question: "发了一条朋友圈后，你会？",
    options: [
      { text: "完全不在意点赞评论", score: 1 },
      { text: "偶尔看看", score: 2 },
      { text: "会关注反馈", score: 3 },
      { text: "频繁刷新，在意评价", score: 4 },
      { text: "过度焦虑，甚至想删除", score: 5 }
    ]
  },
  {
    id: 10,
    dimension: 'consumption',
    question: "别人随口一句话，你会？",
    options: [
      { text: "完全不在意", score: 1 },
      { text: "略过即忘", score: 2 },
      { text: "短暂思考", score: 3 },
      { text: "反复咀嚼其含义", score: 4 },
      { text: "陷入过度解读的漩涡", score: 5 }
    ]
  },
  {
    id: 11,
    dimension: 'consumption',
    question: "做决定时，你通常？",
    options: [
      { text: "快速果断", score: 1 },
      { text: "稍作考虑", score: 2 },
      { text: "权衡利弊", score: 3 },
      { text: "反复纠结", score: 4 },
      { text: "陷入选择困难症", score: 5 }
    ]
  },
  {
    id: 12,
    dimension: 'consumption',
    question: "面对失败，你会？",
    options: [
      { text: "快速调整，继续前进", score: 1 },
      { text: "失落但能接受", score: 2 },
      { text: "需要时间消化", score: 3 },
      { text: "反复自责", score: 4 },
      { text: "彻底否定自己", score: 5 }
    ]
  },
  {
    id: 13,
    dimension: 'consumption',
    question: "对于别人的期待，你会？",
    options: [
      { text: "不在意，做自己", score: 1 },
      { text: "参考但不纠结", score: 2 },
      { text: "适度关注", score: 3 },
      { text: "努力满足，感到压力", score: 4 },
      { text: "过度迎合，害怕失望", score: 5 }
    ]
  },
  {
    id: 14,
    dimension: 'consumption',
    question: "在人群中，你是否常觉得？",
    options: [
      { text: "完全放松自在", score: 1 },
      { text: "偶尔不自在", score: 2 },
      { text: "有一定压力", score: 3 },
      { text: "紧张在意他人看法", score: 4 },
      { text: "极度焦虑，想逃离", score: 5 }
    ]
  },
  {
    id: 15,
    dimension: 'consumption',
    question: "一天结束后，你感到？",
    options: [
      { text: "轻松满足", score: 1 },
      { text: "略有小疲惫", score: 2 },
      { text: "正常状态", score: 3 },
      { text: "心力交瘁", score: 4 },
      { text: "被掏空，情绪崩溃", score: 5 }
    ]
  }
];

// 四种结果类型定义
export const resultTypes = {
  social_butterfly: {
    id: 'social_butterfly',
    name: '社交达人',
    title: '「自带光芒的发电机」',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-500',
    description: `你是天生的社交明星，从与人交往中获取能量。

在你的世界里，每一次对话都是充电，每一个新朋友都是新的能量来源。你像一个小太阳，不仅能照亮自己，更能温暖周围的人。

你的社交直觉敏锐，擅长破冰和调动气氛。在人群中游刃有余的你，往往能成为焦点和粘合剂。

建议：虽然你的能量来自社交，但也别忘了留点时间给自己。偶尔的独处能让你更有深度，在喧嚣中保持内心的宁静。`,
    goldenSentence: '你的光芒，从不需要刻意点亮，因为你本身就是光源。'
  },
  thinker: {
    id: 'thinker',
    name: '思考行者',
    title: '「静谧深潭的哲学家」',
    icon: '🌊',
    color: 'from-blue-400 to-cyan-500',
    description: `你享受独处，内心平静，不被外界轻易干扰。

你的能量来源于宁静的时光，在独处中你能找到最真实的自己。你像一汪深潭，表面波澜不惊，深处却蕴含着无限的智慧和洞察力。

你不渴望成为焦点，但你的深度常常让人惊艳。在浮躁的世界里，你保持着难得的清醒和独立。

建议：独处是你的超能力，但适度打开心扉，让信任的人进入你的世界，你会发现连接的另一种美好。`,
    goldenSentence: '真正的力量，往往来自最安静的地方。'
  },
  sensitive_explorer: {
    id: 'sensitive_explorer',
    name: '敏感探索者',
    title: '「矛盾中绽放的烟花」',
    icon: '🎆',
    color: 'from-purple-400 to-pink-500',
    description: `你渴望连接，但内心充满矛盾和焦虑。

你是一个美丽的矛盾体：既向往热闹，又害怕被评判；既需要陪伴，又容易被社交消耗。你的敏感让你能细腻地感知世界，但也容易让你陷入过度解读。

在人群中你努力表现，但内心往往疲惫不堪。你渴望被理解和接纳，又害怕展露真实的自己。

建议：接纳自己的敏感，它不是缺点而是天赋。学会设定边界，选择那些真正滋养你的关系，而非追求所有人的认可。`,
    goldenSentence: '你的敏感，是你与世界对话的独特语言。'
  },
  introspective_poet: {
    id: 'introspective_poet',
    name: '内省诗人',
    title: '「深海中独自发光的鲸」',
    icon: '🐋',
    color: 'from-indigo-400 to-purple-600',
    description: `你敏感细腻，内心世界丰富而深邃，却也常感疲惫。

你像深海中的鲸，在自己的世界里独游，发出只有同类能听懂的声音。你的内心世界精彩绝伦，但现实世界的喧嚣常让你感到格格不入。

你对他人的情绪变化极其敏感，常常为别人的话语和眼神而辗转反侧。你的想象力丰富，但也容易被内心的声音吞噬。

建议：你的深度是珍贵的礼物，但不要让它成为负担。找到安全的方式表达自己，无论是写作、艺术还是和信任的人倾诉。`,
    goldenSentence: '最珍贵的光，往往在最深的海底独自闪耀。'
  }
};
