// 多语言翻译配置
export const translations = {
  en: {
    // 通用
    appName: 'Subconscious Personality Mirror',
    appSubtitle: 'Discover Your Social Energy & Inner Consumption',
    startExploration: 'Start Exploration',
    restart: 'Restart Test',
    back: 'Back',
    loading: 'Loading...',

    // 欢迎页
    welcomeTitle: 'Subconscious Personality Mirror',
    welcomeSubtitle: 'Discover Your Social Energy & Inner Consumption',
    welcomeDescription: 'A mirror for your soul\n15 questions, 3 minutes, discover your true self',
    welcomeButton: 'Start Exploration',
    welcomePrivacy: '🔒 Your answers are only used for analysis and will not be stored',

    // 进度条
    questionProgress: '{current} / {total}',
    percentComplete: '{percent}% complete',

    // 答题页
    questionPrefix: 'Question',
    selectHint: 'Choose the option that best reflects your true thoughts',

    // 结果类型
    resultType: {
      social_butterfly: {
        name: 'Social Butterfly',
        title: 'The Radiant Generator',
        icon: '⚡',
        description: `You are a natural social star who derives energy from interacting with people.

In your world, every conversation is a recharge, and every new friend is a new energy source. You are like a small sun that not only illuminates yourself but also warms those around you.

Your social intuition is keen, good at breaking the ice and enlivening the atmosphere. In the crowd, you are at ease and often become the focus and bond.

Advice: While your energy comes from socializing, don't forget to save some time for yourself. Occasional solitude can give you more depth and inner peace amidst the noise.`,
        goldenSentence: 'Your light never needs to be deliberately lit, because you are the light source itself.'
      },
      thinker: {
        name: 'Thoughtful Traveler',
        title: 'The Philosopher of Quiet Depths',
        icon: '🌊',
        description: `You enjoy solitude and inner peace, not easily disturbed by the outside world.

Your energy comes from quiet time, and in solitude you find your true self. You are like a deep pool, calm on the surface but containing infinite wisdom and insight in the depths.

You don't crave being the center of attention, but your depth often surprises people. In a noisy world, you maintain rare clarity and independence.

Advice: Solitude is your superpower, but适度 opening your heart and letting trusted people into your world, you will discover another beauty of connection.`,
        goldenSentence: 'True strength often comes from the quietest places.'
      },
      sensitive_explorer: {
        name: 'Sensitive Explorer',
        title: 'Fireworks Blooming in Contradiction',
        icon: '🎆',
        description: `You crave connection but are filled with conflict and anxiety inside.

You are a beautiful contradiction: you long for excitement but fear judgment; you need companionship but are easily consumed by social interactions. Your sensitivity allows you to perceive the world delicately, but also makes you prone to over-interpretation.

In crowds, you try hard to perform but are often exhausted inside. You crave understanding and acceptance but fear showing your true self.

Advice: Embrace your sensitivity, it's not a flaw but a gift. Learn to set boundaries and choose relationships that truly nourish you, rather than pursuing everyone's approval.`,
        goldenSentence: 'Your sensitivity is your unique language of communicating with the world.'
      },
      introspective_poet: {
        name: 'Introspective Poet',
        title: 'The Whale That Glows Alone in the Deep Sea',
        icon: '🐋',
        description: `You are sensitive and delicate, with a rich inner world, but often feel exhausted.

Like a whale in the deep sea, you swim alone in your own world, making sounds that only your kind can understand. Your inner world is spectacular, but the noise of the outside world often makes you feel out of place.

You are extremely sensitive to others' emotional changes, often tossing and turning over others' words and looks. Your imagination is rich, but also easily swallowed by inner voices.

Advice: Your depth is a precious gift, but don't let it become a burden. Find safe ways to express yourself, whether through writing, art, or confiding in trusted people.`,
        goldenSentence: 'The most precious light often shines alone in the deepest sea.'
      }
    },

    // 分数标签
    scores: {
      socialEnergy: 'Social Energy',
      consumptionLevel: 'Inner Consumption',
      high: 'High',
      low: 'Low'
    },

    // 结果页
    viewFullReport: 'View My In-Depth Psychological Analysis Report',
    yourResult: 'Your Result',
    goldenQuote: 'Exclusive Quote',
    traits: {
      social: 'Social',
      consumption: 'Consumption'
    },

    // 深度报告页
    deepReportTitle: 'In-Depth Psychological Analysis Report',
    yourPersonality: 'Your Personality Portrait',
    coreMetrics: 'Core Metrics Analysis',
    socialEnergyIndex: 'Social Energy Index',
    consumptionIndex: 'Inner Consumption Index',
    coreStrengths: 'Your Core Strengths',
    potentialChallenges: 'Challenges to Watch For',
    growthSuggestions: 'Exclusive Growth Suggestions',
    growthPlan: 'Three-Stage Growth Plan',
    workEnvironment: 'Suitable Work Environments',
    recommended: 'Recommended Directions',
    avoid: 'Need to Avoid',
    shortTerm: 'Short-term (1-3 months)',
    midTerm: 'Mid-term (3-6 months)',
    longTerm: 'Long-term (6-12 months)',
    reportDisclaimer: 'This report is generated based on your answers and is for reference only',
    reportCopyright: '© 2026 Subconscious Personality Mirror Test',

    // 性格分析内容
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          'Natural communicator, skilled at building connections',
          'Gain energy from socializing, more active means more energy',
          'Sharp intuition, good at reading people',
          'Optimistic and cheerful, can lift team atmosphere',
          'Strong adaptability, quickly integrate into new environments'
        ],
        challenges: [
          'May feel empty when alone',
          'Easily rely on external feedback to confirm self-worth',
          'Sometimes neglect deep relationships due to excessive socializing',
          'May struggle to focus in quiet environments'
        ],
        suggestions: [
          'Schedule 30 minutes of daily solitude for reflection and recharging',
          'Cultivate 1-2 deep friendships instead of many shallow ones',
          'Learn to enjoy quiet and find inner peace',
          'Be selective in socializing - quality over quantity'
        ],
        environments: [
          'Jobs requiring frequent human interaction (sales, PR, event planning)',
          'Team collaboration projects',
          'Open office environments',
          'Occasions needing creative collisions'
        ],
        avoid: [
          'Long-term independent work',
          'Highly repetitive mechanical work',
          'Environments lacking human contact'
        ],
        growthPlan: [
          { phase: 'Short-term (1-3 months)', action: 'Practice solitude, record 3 things you\'re grateful for daily' },
          { phase: 'Mid-term (3-6 months)', action: 'Deepen 2-3 core relationships, develop deep conversation skills' },
          { phase: 'Long-term (6-12 months)', action: 'Balance socializing and solitude, develop personal hobbies' }
        ]
      },
      thinker: {
        strengths: [
          'Inner strength, not relying on external validation',
          'Deep thinker with strong insight',
          'Focused on long-term goals, not easily distracted',
          'Independent and self-driven',
          'Emotionally stable, not easily influenced by others'
        ],
        challenges: [
          'May miss social opportunities and resources',
          'Struggle in situations requiring quick relationship building',
          'Sometimes misunderstood as cold or unsociable',
          'Excessive introversion may limit perspective'
        ],
        suggestions: [
          'Set small goals: initiate one social interaction per week',
          'Choose quality over quantity in socializing',
          'Use your deep thinking advantage to provide value in conversations',
          'Find balance: recharge in solitude,适度 expand social connections'
        ],
        environments: [
          'Jobs requiring deep thinking and independent work',
          'Research, analysis, strategic planning roles',
          'Remote work with flexible schedules',
          'Quiet and focused office environments'
        ],
        avoid: [
          'High-intensity social work (like sales, customer service)',
          'Occasions requiring frequent impromptu speeches',
          'Overly noisy open environments'
        ],
        growthPlan: [
          { phase: 'Short-term (1-3 months)', action: 'Join one activity or gathering of interest per week' },
          { phase: 'Mid-term (3-6 months)', action: 'Build 3-5 meaningful professional relationships' },
          { phase: 'Long-term (6-12 months)', action: 'Establish influence in your professional field, become a thought leader' }
        ]
      },
      sensitive_explorer: {
        strengths: [
          'Rich emotions and strong empathy',
          'Sensitive to others\' emotional changes, good at listening',
          'Rich creativity and imagination',
          'Pursue deep connections, not satisfied with surface relationships',
          'Strong self-reflection ability'
        ],
        challenges: [
          'Easily over-interpret others\' words and actions',
          'Consume lots of energy before and after socializing',
          'Overly sensitive to criticism and negative feedback',
          'Often conflicted between "wanting to socialize" and "fearing socializing"',
          'Prone to anxiety and self-doubt'
        ],
        suggestions: [
          'Learn to distinguish facts from imagination, don\'t over-interpret',
          'Set social boundaries and learn to say "no"',
          'Cultivate self-compassion, accept your sensitive traits',
          'Start with small, safe social situations',
          'Build a support system and find understanding people'
        ],
        environments: [
          'Jobs that leverage empathy and creativity',
          'One-on-one or small team collaboration',
          'Supportive and inclusive team culture',
          'Work environments with clear feedback and communication'
        ],
        avoid: [
          'Highly competitive and critical environments',
          'Situations requiring frequent conflict handling',
          'Unclear team relationships'
        ],
        growthPlan: [
          { phase: 'Short-term (1-3 months)', action: 'Practice mindfulness and self-acceptance, keep an emotion journal' },
          { phase: 'Mid-term (3-6 months)', action: 'Gradually expand your social comfort zone, one small challenge at a time' },
          { phase: 'Long-term (6-12 months)', action: 'Transform sensitivity into strength, engage in work requiring empathy' }
        ]
      },
      introspective_poet: {
        strengths: [
          'Extremely rich and deep inner world',
          'Strong artistic and aesthetic sense',
          'Profound insight and understanding',
          'Independent thinking, not following the crowd',
          'Capable of creating touching works'
        ],
        challenges: [
          'Social interaction consumes enormous energy, easily exhausted',
          'Overly sensitive, easily hurt by outside world',
          'Often feel lonely and misunderstood',
          'Mood swings may be significant',
          'Difficult to work in noisy environments'
        ],
        suggestions: [
          'Accept your uniqueness - you don\'t need to become someone else',
          'Find safe outlets for expression (writing, art, music)',
          'Carefully select a few truly understanding people to enter your life',
          'Establish strict energy management mechanisms',
          'Seek professional psychological counseling support when necessary'
        ],
        environments: [
          'Creative and artistic work',
          'Deep work that can be completed independently',
          'Flexible and autonomous work arrangements',
          'Culture that respects personal space'
        ],
        avoid: [
          'High-pressure sales and customer service work',
          'Occasions requiring frequent public speaking',
          'Environments with complex office politics'
        ],
        growthPlan: [
          { phase: 'Short-term (1-3 months)', action: 'Establish a daily energy management routine, find ways to recharge' },
          { phase: 'Mid-term (3-6 months)', action: 'Connect with like-minded people through your work or creations' },
          { phase: 'Long-term (6-12 months)', action: 'Deepen expertise in your field, let your work speak for itself' }
        ]
      }
    },

    // Questions (1-7: Social Energy, 8-15: Inner Consumption)
    questions: {
      1: {
        question: "The weekend is finally here, you tend to?",
        options: [
          "Stay home alone, recharge all day",
          "Gather with 1-2 close friends",
          "Attend a small party",
          "Party with friends until late night",
          "Organize a large party"
        ]
      },
      2: {
        question: "In unfamiliar situations, your first reaction is?",
        options: [
          "Find a corner and observe silently",
          "Wait for others to approach",
          "Politely greet people nearby",
          "Actively look for topics to break the ice",
          "Become the party focus and drive the atmosphere"
        ]
      },
      3: {
        question: "When you need to give a public speech, you feel?",
        options: [
          "Extremely anxious, want to avoid it",
          "Nervous but can overcome it",
          "A bit uneasy, but can accept it",
          "A bit excited, well prepared",
          "Totally enjoy the stage"
        ]
      },
      4: {
        question: "After chatting with a group of people, you usually feel?",
        options: [
          "Exhausted, need solitude to recover",
          "A bit tired, want to rest for a while",
          "Not tired nor excited, neutral state",
          "Still energized",
          "Energy bursting, want to continue"
        ]
      },
      5: {
        question: "Facing conflict, you will?",
        options: [
          "Avoid conflict, endure silently",
          "Communicate privately, avoid public",
          "Discuss rationally, seek consensus",
          "Express directly, neither humble nor pushy",
          "Actively challenge, not afraid of controversy"
        ]
      },
      6: {
        question: "On social media, you tend to?",
        options: [
          "Lurk and browse, rarely interact",
          "Occasionally like, cautious commenting",
          "Share life, moderate interaction",
          "Frequently update, actively socialize",
          "Internet celebrity, topic creator"
        ]
      },
      7: {
        question: "In friends' eyes, you are more likely to be?",
        options: [
          "A quiet and mysterious person",
          "A gentle and introverted person",
          "A balanced and coordinated person",
          "A warm and cheerful person",
          "Social butterfly, center of attention"
        ]
      },
      8: {
        question: "Lying in bed late at night, you will?",
        options: [
          "Fall asleep instantly, worry-free",
          "Occasionally recall today's events",
          "Think about tomorrow's plans",
          "Repeatedly struggle with details from the day",
          "Mind explodes, cannot sleep"
        ]
      },
      9: {
        question: "After posting a moment on social media, you will?",
        options: [
          "Completely don't care about likes and comments",
          "Occasionally check",
          "Will pay attention to feedback",
          "Frequently refresh, care about evaluations",
          "Overly anxious, even want to delete"
        ]
      },
      10: {
        question: "When someone casually says something, you will?",
        options: [
          "Completely don't care",
          "Forget it immediately",
          "Briefly think about it",
          "Repeatedly chew on its meaning",
          "Fall into a vortex of over-interpretation"
        ]
      },
      11: {
        question: "When making decisions, you usually?",
        options: [
          "Quick and decisive",
          "Think briefly",
          "Weigh pros and cons",
          "Repeatedly struggle",
          "Indecisive, choice paralysis"
        ]
      },
      12: {
        question: "Facing failure, you will?",
        options: [
          "Quickly adjust, move forward",
          "Disappointed but can accept",
          "Need time to digest",
          "Repeatedly blame yourself",
          "Completely deny yourself"
        ]
      },
      13: {
        question: "Regarding others' expectations, you will?",
        options: [
          "Don't care, be yourself",
          "Reference but don't obsess",
          "Moderately care",
          "Strive to meet, feel pressure",
          "Overly cater, fear disappointing"
        ]
      },
      14: {
        question: "In crowds, do you often feel?",
        options: [
          "Completely relaxed and natural",
          "Occasionally uncomfortable",
          "Have certain pressure",
          "Nervous, care about others' views",
          "Extremely anxious, want to escape"
        ]
      },
      15: {
        question: "At the end of the day, you feel?",
        options: [
          "Relaxed and satisfied",
          "Slightly tired",
          "Normal state",
          "Mentally and physically exhausted",
          "Emotionally collapsed"
        ]
      }
    }
  },

  zh: {
    // 通用
    appName: '潜意识性格镜像',
    appSubtitle: '测测你的社交电量与内耗来源',
    startExploration: '开启探索',
    restart: '重新测试',
    back: '返回',
    loading: '加载中...',

    // 欢迎页
    welcomeTitle: '潜意识性格镜像',
    welcomeSubtitle: '测测你的社交电量与内耗来源',
    welcomeDescription: '给灵魂照照镜子\n15道题，3分钟，发现真实的自己',
    welcomeButton: '开启探索',
    welcomePrivacy: '🔒 你的答案仅用于分析，不会存储',

    // 进度条
    questionProgress: '{current} / {total}',
    percentComplete: '完成 {percent}%',

    // 答题页
    questionPrefix: '题目',
    selectHint: '选择最符合你真实想法的选项',

    // 结果类型
    resultType: {
      social_butterfly: {
        name: '社交达人',
        title: '「自带光芒的发电机」',
        icon: '⚡',
        description: `你是天生的社交明星，从与人交往中获取能量。

在你的世界里，每一次对话都是充电，每一个新朋友都是新的能量来源。你像一个小太阳，不仅能照亮自己，更能温暖周围的人。

你的社交直觉敏锐，擅长破冰和调动气氛。在人群中游刃有余的你，往往能成为焦点和粘合剂。

建议：虽然你的能量来自社交，但也别忘了留点时间给自己。偶尔的独处能让你更有深度，在喧嚣中保持内心的宁静。`,
        goldenSentence: '你的光芒，从不需要刻意点亮，因为你本身就是光源。'
      },
      thinker: {
        name: '思考行者',
        title: '「静谧深潭的哲学家」',
        icon: '🌊',
        description: `你享受独处，内心平静，不被外界轻易干扰。

你的能量来源于宁静的时光，在独处中你能找到最真实的自己。你像一汪深潭，表面波澜不惊，深处却蕴含着无限的智慧和洞察力。

你不渴望成为焦点，但你的深度常常让人惊艳。在浮躁的世界里，你保持着难得的清醒和独立。

建议：独处是你的超能力，但适度打开心扉，让信任的人进入你的世界，你会发现连接的另一种美好。`,
        goldenSentence: '真正的力量，往往来自最安静的地方。'
      },
      sensitive_explorer: {
        name: '敏感探索者',
        title: '「矛盾中绽放的烟花」',
        icon: '🎆',
        description: `你渴望连接，但内心充满矛盾和焦虑。

你是一个美丽的矛盾体：既向往热闹，又害怕被评判；既需要陪伴，又容易被社交消耗。你的敏感让你能细腻地感知世界，但也容易让你陷入过度解读。

在人群中你努力表现，但内心往往疲惫不堪。你渴望被理解和接纳，又害怕展露真实的自己。

建议：接纳自己的敏感，它不是缺点而是天赋。学会设定边界，选择那些真正滋养你的关系，而非追求所有人的认可。`,
        goldenSentence: '你的敏感，是你与世界对话的独特语言。'
      },
      introspective_poet: {
        name: '内省诗人',
        title: '「深海中独自发光的鲸」',
        icon: '🐋',
        description: `你敏感细腻，内心世界丰富而深邃，却也常感疲惫。

你像深海中的鲸，在自己的世界里独游，发出只有同类能听懂的声音。你的内心世界精彩绝伦，但现实世界的喧嚣常让你感到格格不入。

你对他人的情绪变化极其敏感，常常为别人的话语和眼神而辗转反侧。你的想象力丰富，但也容易被内心的声音吞噬。

建议：你的深度是珍贵的礼物，但不要让它成为负担。找到安全的方式表达自己，无论是写作、艺术还是和信任的人倾诉。`,
        goldenSentence: '最珍贵的光，往往在最深的海底独自闪耀。'
      }
    },

    // 分数标签
    scores: {
      socialEnergy: '社交电量',
      consumptionLevel: '内耗程度',
      high: '高',
      low: '较低'
    },

    // 结果页
    viewFullReport: '查看我的深度心理分析报告',
    yourResult: '你的结果',
    goldenQuote: '专属金句',
    traits: {
      social: '社交',
      consumption: '内耗'
    },

    // 深度报告页
    deepReportTitle: '深度心理分析报告',
    yourPersonality: '您的性格画像',
    coreMetrics: '核心指标分析',
    socialEnergyIndex: '社交电量指数',
    consumptionIndex: '内耗程度指数',
    coreStrengths: '你的核心优势',
    potentialChallenges: '需要注意的挑战',
    growthSuggestions: '专属成长建议',
    growthPlan: '三阶段成长计划',
    workEnvironment: '适合的工作环境',
    recommended: '推荐方向',
    avoid: '需要避免',
    shortTerm: '短期（1-3个月）',
    midTerm: '中期（3-6个月）',
    longTerm: '长期（6-12个月）',
    reportDisclaimer: '本报告基于您的答题结果生成，仅供参考',
    reportCopyright: '© 2026 潜意识性格镜像测试',

    // 性格分析内容（中文）
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          '天生的沟通者，擅长与人建立联系',
          '在社交中获取能量，越活跃越精神',
          '直觉敏锐，善于察言观色',
          '乐观开朗，能带动团队氛围',
          '适应力强，快速融入新环境'
        ],
        challenges: [
          '可能在独处时感到空虚',
          '容易依赖外界反馈来确认自我价值',
          '有时会因为过度社交而忽视深度关系',
          '在安静环境中可能难以专注'
        ],
        suggestions: [
          '每天安排30分钟独处时间，反思和充电',
          '培养1-2个深度友谊，而非泛泛之交',
          '学会享受安静，找到内心的平静',
          '在社交中也要有所选择，质量胜于数量'
        ],
        environments: [
          '需要频繁人际互动的工作（销售、公关、活动策划）',
          '团队协作型项目',
          '开放式办公环境',
          '需要创意碰撞的场合'
        ],
        avoid: [
          '长期独立工作',
          '高度重复的机械性工作',
          '缺乏人际接触的环境'
        ],
        growthPlan: [
          { phase: '短期（1-3个月）', action: '练习独处，每天记录3件感恩的事' },
          { phase: '中期（3-6个月）', action: '深化2-3个核心关系，培养深度对话能力' },
          { phase: '长期（6-12个月）', action: '平衡社交与独处，发展个人兴趣爱好' }
        ]
      },
      thinker: {
        strengths: [
          '内心强大，不依赖外界认可',
          '深度思考者，洞察力强',
          '专注于长期目标，不易分心',
          '独立自主，自我驱动',
          '情绪稳定，不易被他人影响'
        ],
        challenges: [
          '可能错失社交机会和资源',
          '在需要快速建立关系的场合感到吃力',
          '有时被误解为冷漠或不合群',
          '过度内向可能导致视野受限'
        ],
        suggestions: [
          '设定小目标：每周主动一次社交互动',
          '选择质量而非数量的社交方式',
          '利用你的深度思考优势，在交流中提供价值',
          '找到平衡点：独处充电，适度社交拓展'
        ],
        environments: [
          '需要深度思考和独立工作的岗位',
          '研究、分析、策略规划类工作',
          '可以灵活安排时间的远程工作',
          '安静专注的办公环境'
        ],
        avoid: [
          '高强度的社交工作（如销售、客服）',
          '频繁需要即兴演讲的场合',
          '过度嘈杂开放的环境'
        ],
        growthPlan: [
          { phase: '短期（1-3个月）', action: '每周参加一次感兴趣的活动或聚会' },
          { phase: '中期（3-6个月）', action: '建立3-5个有意义的职业关系' },
          { phase: '长期（6-12个月）', action: '在专业领域建立影响力，成为意见领袖' }
        ]
      },
      sensitive_explorer: {
        strengths: [
          '情感丰富，共情能力强',
          '对他人情绪变化敏感，善于倾听',
          '创造力和想象力丰富',
          '追求深度连接，不满足于表面关系',
          '自我反省能力强'
        ],
        challenges: [
          '容易过度解读他人的言行',
          '在社交前后可能消耗大量精力',
          '对批评和负面反馈过于敏感',
          '常常在"想社交"和"怕社交"间矛盾',
          '容易陷入焦虑和自我怀疑'
        ],
        suggestions: [
          '学习区分事实和想象，不要过度解读',
          '设定社交边界，学会说"不"',
          '培养自我关怀，接纳自己的敏感特质',
          '从小型、安全的社交场合开始练习',
          '建立支持系统，寻找理解你的人'
        ],
        environments: [
          '能发挥共情和创意的工作',
          '一对一或小团队协作',
          '支持性和包容性强的团队文化',
          '有明确反馈和沟通的工作环境'
        ],
        avoid: [
          '高度竞争和批判性强的环境',
          '需要频繁应对冲突的场合',
          '模糊不清的团队关系'
        ],
        growthPlan: [
          { phase: '短期（1-3个月）', action: '练习正念和自我接纳，记录情绪日记' },
          { phase: '中期（3-6个月）', action: '逐步扩大社交舒适圈，每次一个小挑战' },
          { phase: '长期（6-12个月）', action: '将敏感转化为优势，从事需要共情的工作' }
        ]
      },
      introspective_poet: {
        strengths: [
          '内心世界极其丰富深邃',
          '艺术感和审美能力强',
          '深刻的洞察力和理解力',
          '独立思考，不随波逐流',
          '能创作出触动人心的作品'
        ],
        challenges: [
          '社交消耗极大，容易感到疲惫',
          '过度敏感，容易被外界伤害',
          '常常感到孤独和不被理解',
          '情绪波动可能较大',
          '难以在嘈杂环境中工作'
        ],
        suggestions: [
          '接受自己的独特性，你不需要变成别人',
          '找到安全的出口表达自己（写作、艺术、音乐）',
          '精心选择少数真正理解你的人进入你的生活',
          '建立严格的能量管理机制',
          '必要时寻求专业心理咨询支持'
        ],
        environments: [
          '创作性、艺术性工作',
          '可以独立完成的深度工作',
          '灵活自主的工作安排',
          '尊重个人空间的文化'
        ],
        avoid: [
          '高压销售和客服工作',
          '频繁需要公开演讲的场合',
          '办公室政治复杂的环境'
        ],
        growthPlan: [
          { phase: '短期（1-3个月）', action: '建立每日能量管理routine，找到充电方式' },
          { phase: '中期（3-6个月）', action: '通过作品或创作连接同频的人' },
          { phase: '长期（6-12个月）', action: '在专业领域深耕，让作品说话' }
        ]
      }
    },

    // 题目翻译 (1-7: 社交电量, 8-15: 内耗程度)
    questions: {
      1: {
        question: "周末终于到了，你更倾向于？",
        options: [
            "独自宅家，充电一整天",
            "和1-2个好友小聚",
            "参加一个小型聚会",
            "和朋友狂欢到深夜",
            "组织一场大型派对"
          ]
      },
      2: {
        question: "在陌生场合，你的第一反应是？",
        options: [
            "找个角落默默观察",
            "等待别人来搭话",
            "礼貌地和身边人打招呼",
            "主动寻找话题破冰",
            "成为派对焦点，带动气氛"
          ]
      },
      3: {
        question: "当需要公开演讲时，你的感受是？",
        options: [
            "极度焦虑，想要逃避",
            "紧张但能克服",
            "有些忐忑，但能接受",
            "有点兴奋，准备充分",
            "完全享受舞台"
          ]
      },
      4: {
        question: "和一群人聊天后，你通常感觉？",
        options: [
            "精疲力竭，需要独处恢复",
            "有点累，想休息一会儿",
            "不累也不兴奋，中性状态",
            "依然精神焕发",
            "能量爆棚，还想继续"
          ]
      },
      5: {
        question: "面对冲突，你会？",
        options: [
            "回避冲突，默默忍受",
            "私下沟通，避免公开",
            "理性讨论，寻求共识",
            "直接表达，不卑不亢",
            "主动挑战，不怕争议"
          ]
      },
      6: {
        question: "社交媒体上，你更倾向于？",
        options: [
            "潜水浏览，很少互动",
            "偶尔点赞，谨慎评论",
            "分享生活，适度互动",
            "频繁更新，主动社交",
            "网络达人，话题制造者"
          ]
      },
      7: {
        question: "朋友眼中的你，更可能是？",
        options: [
            "安静神秘的人",
            "温和内向的人",
            "平衡协调的人",
            "热情开朗的人",
            "社交达人，人群中心"
          ]
      },
      8: {
        question: "深夜躺在床上，你会？",
        options: [
            "秒睡，无忧无虑",
            "偶尔回想今天的事",
            "思考明天的计划",
            "反复纠结白天的细节",
            "思维爆炸，无法入睡"
          ]
      },
      9: {
        question: "发了一条朋友圈后，你会？",
        options: [
            "完全不在意点赞评论",
            "偶尔看看",
            "会关注反馈",
            "频繁刷新，在意评价",
            "过度焦虑，甚至想删除"
          ]
      },
      10: {
        question: "别人随口一句话，你会？",
        options: [
            "完全不在意",
            "略过即忘",
            "短暂思考",
            "反复咀嚼其含义",
            "陷入过度解读的漩涡"
          ]
      },
      11: {
        question: "做决定时，你通常？",
        options: [
            "快速果断",
            "稍作考虑",
            "权衡利弊",
            "反复纠结",
            "陷入选择困难症"
          ]
      },
      12: {
        question: "面对失败，你会？",
        options: [
            "快速调整，继续前进",
            "失落但能接受",
            "需要时间消化",
            "反复自责",
            "彻底否定自己"
          ]
      },
      13: {
        question: "对于别人的期待，你会？",
        options: [
            "不在意，做自己",
            "参考但不纠结",
            "适度关注",
            "努力满足，感到压力",
            "过度迎合，害怕失望"
          ]
      },
      14: {
        question: "在人群中，你是否常觉得？",
        options: [
            "完全放松自在",
            "偶尔不自在",
            "有一定压力",
            "紧张在意他人看法",
            "极度焦虑，想逃离"
          ]
      },
      15: {
        question: "一天结束后，你感到？",
        options: [
            "轻松满足",
            "略有小疲惫",
            "正常状态",
            "心力交瘁",
            "被掏空，情绪崩溃"
          ]
      }
    }
  },

  'zh-TW': {
    // 通用
    appName: '潛意識性格鏡像',
    appSubtitle: '測測你的社交電量與內耗來源',
    startExploration: '開啟探索',
    restart: '重新測試',
    back: '返回',
    loading: '載入中...',

    // 歡迎頁
    welcomeTitle: '潛意識性格鏡像',
    welcomeSubtitle: '測測你的社交電量與內耗來源',
    welcomeDescription: '給靈魂照照鏡子\n15道題，3分鐘，發現真實的自己',
    welcomeButton: '開啟探索',
    welcomePrivacy: '🔒 你的答案僅用於分析，不會存儲',

    // 進度條
    questionProgress: '{current} / {total}',
    percentComplete: '完成 {percent}%',

    // 答題頁
    questionPrefix: '題目',
    selectHint: '選擇最符合你真實想法的選項',

    // 結果類型
    resultType: {
      social_butterfly: {
        name: '社交達人',
        title: '「自帶光芒的發電機」',
        icon: '⚡',
        description: `你是天生的社交明星，從與人交往中獲取能量。

在你的世界裡，每一次對話都是充電，每一個新朋友都是新的能量來源。你像一個小太陽，不僅能照亮自己，更能溫暖周圍的人。

你的社交直覺敏銳，擅長破冰和調動氣氛。在人群中遊刃有餘的你，往往能成為焦點和粘合劑。

建議：雖然你的能量來自社交，但也別忘了留點時間給自己。偶爾的獨處能讓你更有深度，在喧囂中保持內心的寧靜。`,
        goldenSentence: '你的光芒，從不需要刻意點亮，因為你本身就是光源。'
      },
      thinker: {
        name: '思考行者',
        title: '「靜謐深潭的哲學家」',
        icon: '🌊',
        description: `你享受獨處，內心平靜，不被外界輕易干擾。

你的能量來源於寧靜的時光，在獨處中你能找到最真實的自己。你像一汪深潭，表面波瀾不驚，深處卻蘊含著無限的智慧和洞察力。

你不渴望成為焦點，但你的深度常常讓人驚艷。在浮躁的世界裡，你保持著難得的清醒和獨立。

建議：獨處是你的超能力，但適度打開心扉，讓信任的人進入你的世界，你會發現連接的另一種美好。`,
        goldenSentence: '真正的力量，往往來自最安靜的地方。'
      },
      sensitive_explorer: {
        name: '敏感探索者',
        title: '「矛盾中綻放的煙花」',
        icon: '🎆',
        description: `你渴望連接，但內心充滿矛盾和焦慮。

你是一個美麗的矛盾體：既向往熱鬧，又害怕被評判；既需要陪伴，又容易被社交消耗。你的敏感讓你能細膻地感知世界，但也容易讓你陷入過度解讀。

在人群中你努力表現，但內心往往疲憊不堪。你渴望被理解和接納，又害怕展露真實的自己。

建議：接納自己的敏感，它不是缺點而是天賦。學會設定邊界，選擇那些真正滋養你的關係，而非追求所有人的認可。`,
        goldenSentence: '你的敏感，是你與世界對話的獨特語言。'
      },
      introspective_poet: {
        name: '內省詩人',
        title: '「深海中獨自發光的鯨」',
        icon: '🐋',
        description: `你敏感細膻，內心世界豐富而深邃，卻也常感疲憊。

你像深海中的鯨，在自己的世界裡獨遊，發出只有同類能聽懂的聲音。你的內心世界精彩絕倫，但現實世界的喧囂常讓你感到格格不入。

你對他人的情緒變化極其敏感，常常為別人的話語和眼神而輾轉反側。你的想像力豐富，但也容易被內心的聲音吞噬。

建議：你的深度是珍貴的禮物，但不要讓它成為負擔。找到安全的方式表達自己，無論是寫作、藝術還是和信任的人傾訴。`,
        goldenSentence: '最珍貴的光，往往在最深的海底獨自閃耀。'
    }
      },

    // 分數標籤
    scores: {
      socialEnergy: '社交電量',
      consumptionLevel: '內耗程度',
      high: '高',
      low: '較低'
      },

    // 結果頁
    viewFullReport: '查看我的深度心理分析報告',
    yourResult: '你的結果',
    goldenQuote: '專屬金句',
    traits: {
      social: '社交',
      consumption: '內耗'
      },

    // 深度報告頁
    deepReportTitle: '深度心理分析報告',
    yourPersonality: '您的性格畫像',
    coreMetrics: '核心指標分析',
    socialEnergyIndex: '社交電量指數',
    consumptionIndex: '內耗程度指數',
    coreStrengths: '你的核心優勢',
    potentialChallenges: '需要注意的挑戰',
    growthSuggestions: '專屬成長建議',
    growthPlan: '三階段成長計劃',
    workEnvironment: '適合的工作環境',
    recommended: '推薦方向',
    avoid: '需要避免',
    shortTerm: '短期（1-3個月）',
    midTerm: '中期（3-6個月）',
    longTerm: '長期（6-12個月）',
    reportDisclaimer: '本報告基於您的答題結果生成，僅供參考',
    reportCopyright: '© 2026 潛意識性格鏡像測試',

    // 性格分析內容（繁體中文）
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          '天生的溝通者，擅長與人建立聯繫',
          '在社交中獲取能量，越活躍越精神',
          '直覺敏銳，善於察言觀色',
          '樂觀開朗，能帶動團隊氛圍',
          '適應力強，快速融入新環境'
          ],
        challenges: [
          '可能在獨處時感到空虛',
          '容易依賴外界反饋來確認自我價值',
          '有時會因為過度社交而忽視深度關係',
          '在安靜環境中可能難以專注'
          ],
        suggestions: [
          '每天安排30分鐘獨處時間，反思和充電',
          '培養1-2個深度友誼，而非泛泛之交',
          '學會享受安靜，找到內心的平靜',
          '在社交中也要有所選擇，質量勝於數量'
          ],
        environments: [
          '需要頻繁人際互動的工作（銷售、公關、活動策劃）',
          '團隊協作型項目',
          '開放式辦公環境',
          '需要創意碰撞的場合'
          ],
        avoid: [
          '長期獨立工作',
          '高度重複的機械性工作',
          '缺乏人際接觸的環境'
          ],
        growthPlan: [
          { phase: '短期（1-3個月）', action: '練習獨處，每天記錄3件感恩的事' },
          { phase: '中期（3-6個月）', action: '深化2-3個核心關係，培養深度對話能力' },
          { phase: '長期（6-12個月）', action: '平衡社交與獨處，發展個人興趣愛好' }
          ]
      },
      thinker: {
        strengths: [
          '內心強大，不依賴外界認可',
          '深度思考者，洞察力強',
          '專注於長期目標，不易分心',
          '獨立自主，自我驅動',
          '情緒穩定，不易被他人影響'
          ],
        challenges: [
          '可能錯失社交機會和資源',
          '在需要快速建立關係的場合感到吃力',
          '有時被誤解為冷漠或不合群',
          '過度內向可能導致視野受限'
          ],
        suggestions: [
          '設定小目標：每週主動一次社交互動',
          '選擇質量而非數量的社交方式',
          '利用你的深度思考優勢，在交流中提供價值',
          '找到平衡點：獨處充電，適度社交拓展'
          ],
        environments: [
          '需要深度思考和獨立工作的崗位',
          '研究、分析、策略規劃類工作',
          '可以靈活安排時間的遠程工作',
          '安靜專注的辦公環境'
          ],
        avoid: [
          '高強度的社交工作（如銷售、客服）',
          '頻繁需要即興演講的場合',
          '過度嘈雜開放的環境'
          ],
        growthPlan: [
          { phase: '短期（1-3個月）', action: '每週參加一次感興趣的活動或聚會' },
          { phase: '中期（3-6個月）', action: '建立3-5個有意義的職業關係' },
          { phase: '長期（6-12個月）', action: '在專業領域建立影響力，成為意見領袖' }
          ]
      },
      sensitive_explorer: {
        strengths: [
          '情感豐富，共情能力強',
          '對他人情緒變化敏感，善於傾聽',
          '創造力和想像力豐富',
          '追求深度連接，不滿足於表面關係',
          '自我反省能力強'
          ],
        challenges: [
          '容易過度解讀他人的言行',
          '在社交前後可能消耗大量精力',
          '對批評和負面反饋過於敏感',
          '常常在"想社交"和"怕社交"間矛盾',
          '容易陷入焦慮和自我懷疑'
          ],
        suggestions: [
          '學習區分事實和想像，不要過度解讀',
          '設定社交邊界，學會說"不"',
          '培養自我關懷，接納自己的敏感特質',
          '從小型、安全的社交場合開始練習',
          '建立支持系統，尋找理解你的人'
          ],
        environments: [
          '能發揮共情和創意的工作',
          '一對一或小團隊協作',
          '支持性和包容性強的團隊文化',
          '有明確反饋和溝通的工作環境'
          ],
        avoid: [
          '高度競爭和批判性強的環境',
          '需要頻繁應對衝突的場合',
          '模糊不清的團隊關係'
          ],
        growthPlan: [
          { phase: '短期（1-3個月）', action: '練習正念和自我接納，記錄情緒日記' },
          { phase: '中期（3-6個月）', action: '逐步擴大社交舒適圈，每次一個小挑戰' },
          { phase: '長期（6-12個月）', action: '將敏感轉化為優勢，從事需要共情的工作' }
          ]
      },
      introspective_poet: {
        strengths: [
          '內心世界極其豐富深邃',
          '藝術感和審美能力強',
          '深刻的洞察力和理解力',
          '獨立思考，不隨波逐流',
          '能創作出觸動人心的作品'
          ],
        challenges: [
          '社交消耗極大，容易感到疲憊',
          '過度敏感，容易被外界傷害',
          '常常感到孤獨和不被理解',
          '情緒波動可能較大',
          '難以在嘈雜環境中工作'
          ],
        suggestions: [
          '接受自己的獨特性，你不需要變成別人',
          '找到安全的出口表達自己（寫作、藝術、音樂）',
          '精心選擇少數真正理解你的人進入你的生活',
          '建立嚴格的能量管理機制',
          '必要時尋求專業心理諮詢支持'
          ],
        environments: [
          '創作性、藝術性工作',
          '可以獨立完成的深度工作',
          '靈活自主的工作安排',
          '尊重個人空間的文化'
          ],
        avoid: [
          '高壓銷售和客服工作',
          '頻繁需要公開演講的場合',
          '辦公室政治複雜的環境'
          ],
        growthPlan: [
          { phase: '短期（1-3個月）', action: '建立每日能量管理routine，找到充電方式' },
          { phase: '中期（3-6個月）', action: '通過作品或創作連接同頻的人' },
          { phase: '長期（6-12個月）', action: '在專業領域深耕，讓作品說話' }
          ]
    }
      },

    // 題目翻譯 (1-7: 社交電量, 8-15: 內耗程度)
    questions: {
      1: {
        question: "週終於到了，你更傾向於？",
        options: [
          "獨自宅家，充電一整天",
          "和1-2個好友小聚",
          "參加一個小型聚會",
          "和朋友狂歡到深夜",
          "組織一場大型派對"
          ]
      },
      2: {
        question: "在陌生場合，你的第一反應是？",
        options: [
          "找個角落默默觀察",
          "等待別人來搭話",
          "禮貌地和身邊人打招呼",
          "主動尋找話題破冰",
          "成為派對焦點，帶動氣氛"
          ]
      },
      3: {
        question: "當需要公開演講時，你的感受是？",
        options: [
          "極度焦慮，想要逃避",
          "緊張但能克服",
          "有些忐忑，但能接受",
          "有點興奮，準備充分",
          "完全享受舞台"
          ]
      },
      4: {
        question: "和一群人聊天後，你通常感覺？",
        options: [
          "精疲力竭，需要獨處恢復",
          "有點累，想休息一會兒",
          "不累也不興奮，中性狀態",
          "依然精神煥發",
          "能量爆棚，還想繼續"
          ]
      },
      5: {
        question: "面對衝突，你會？",
        options: [
          "回避衝突，默默忍受",
          "私下溝通，避免公開",
          "理性討論，尋求共識",
          "直接表達，不卑不亢",
          "主動挑戰，不怕爭議"
          ]
      },
      6: {
        question: "社交媒體上，你更傾向於？",
        options: [
          "潛水瀏覽，很少互動",
          "偶爾點贊，謹慎評論",
          "分享生活，適度互動",
          "頻繁更新，主動社交",
          "網絡達人，話題製造者"
          ]
      },
      7: {
        question: "朋友眼中的你，更可能是？",
        options: [
          "安靜神秘的人",
          "溫和內向的人",
          "平衡協調的人",
          "熱情開朗的人",
          "社交達人，人群中心"
          ]
      },
      8: {
        question: "深夜躺在床上，你會？",
        options: [
          "秒睡，無憂無慮",
          "偶爾回想今天的事",
          "思考明天的計劃",
          "反覆糾結白天的細節",
          "思維爆炸，無法入睡"
          ]
      },
      9: {
        question: "發了一條朋友圈後，你會？",
        options: [
          "完全不在意點贊評論",
          "偶爾看看",
          "會關注反饋",
          "頻繁刷新，在意評價",
          "過度焦慮，甚至想刪除"
          ]
      },
      10: {
        question: "別人隨口一句話，你會？",
        options: [
          "完全不在意",
          "略過即忘",
          "短暫思考",
          "反覆咀嚼其含義",
          "陷入過度解讀的漩渦"
          ]
      },
      11: {
        question: "做決定時，你通常？",
        options: [
          "快速果斷",
          "稍作考慮",
          "權衡利弊",
          "反覆糾結",
          "陷入選擇困難症"
          ]
      },
      12: {
        question: "面對失敗，你會？",
        options: [
          "快速調整，繼續前進",
          "失落但能接受",
          "需要時間消化",
          "反覆自責",
          "徹底否定自己"
          ]
      },
      13: {
        question: "對於別人的期待，你會？",
        options: [
          "不在意，做自己",
          "參考但不糾結",
          "適度關注",
          "努力滿足，感到壓力",
          "過度迎合，害怕失望"
          ]
      },
      14: {
        question: "在人群中，你是否常覺得？",
        options: [
          "完全放鬆自在",
          "偶爾不自在",
          "有一定壓力",
          "緊張在意他人看法",
          "極度焦慮，想逃離"
          ]
      },
      15: {
        question: "一天結束後，你感到？",
        options: [
          "輕鬆滿足",
          "略有小疲憊",
          "正常狀態",
          "心力交瘁",
          "被掏空，情緒崩潰"
          ]
    }
    }
      },

  de: {
    // 通用
    appName: 'Spiegel des Unterbewusstseins',
    appSubtitle: 'Entdecken Sie Ihre soziale Energie & inneren Verbrauch',
    startExploration: 'Entdeckung starten',
    restart: 'Neustart',
    back: 'Zurück',
    loading: 'Laden...',

    // 欢迎页
    welcomeTitle: 'Spiegel des Unterbewusstseins',
    welcomeSubtitle: 'Entdecken Sie Ihre soziale Energie & inneren Verbrauch',
    welcomeDescription: 'Ein Spiegel für Ihre Seele\n15 Fragen, 3 Minuten, entdecken Sie Ihr wahres Ich',
    welcomeButton: 'Entdeckung starten',
    welcomePrivacy: '🔒 Ihre Antworten werden nur zur Analyse verwendet und nicht gespeichert',

    // 进度条
    questionProgress: '{current} / {total}',
    percentComplete: '{percent}% abgeschlossen',

    // 答题页
    questionPrefix: 'Frage',
    selectHint: 'Wählen Sie die Option, die Ihre wahren Gedanken am besten widerspiegelt',

    // 结果类型
    resultType: {
      social_butterfly: {
        name: 'Sozialer Schmetterling',
        title: 'Der strahlende Generator',
        icon: '⚡',
        description: `Sie sind ein natürlicher sozialer Stern, der Energie aus der Interaktion mit Menschen gewinnt.

In Ihrer Welt ist jedes Gespräch ein Aufladen und jeder neue Freund eine neue Energiequelle. Sie sind wie eine kleine Sonne, die nicht nur sich selbst beleuchtet, sondern auch die Menschen um Sie herum erwärmt.

Ihre soziale Intuition ist scharf, gut im Eisbrechen und Beleben der Atmosphäre. In der Menschenmenge fühlen Sie sich wohl und werden oft zum Fokus und Bindemittel.

Rat: Obwohl Ihre Energie aus der Sozialisierung kommt, vergessen Sie nicht, sich Zeit für sich selbst zu nehmen. Gelegentliche Einsamkeit kann Ihnen mehr Tiefe geben und innere Ruhe mitten im Lärm bewahren.`,
        goldenSentence: 'Ihr Licht muss nie absichtlich entzündet werden, denn Sie sind selbst die Lichtquelle.'
      },
      thinker: {
        name: 'Denkender Reisender',
        title: 'Der Philosoph der ruhigen Tiefen',
        icon: '🌊',
        description: `Sie genießen Einsamkeit und inneren Frieden, nicht leicht von der Außenwelt gestört.

Ihre Energie stammt aus stiller Zeit, und in Einsamkeit finden Sie Ihr wahres Ich. Sie sind wie ein tiefer Teich, ruhig an der Oberfläche, aber unendliche Weisheit und Einsicht in der Tiefe enthaltend.

Sie sehnen sich nicht danach, im Mittelpunkt zu stehen, aber Ihre Tiefe überrascht oft die Menschen. In einer hektischen Welt bewahren Sie seltene Klarheit und Unabhängigkeit.

Rat: Einsamkeit ist Ihre Superkraft, aber öffnen Sie sich angemessen und lassen Sie vertrauenswürdige Menschen in Ihre Welt, Sie werden eine andere Schönheit der Verbindung entdecken.`,
        goldenSentence: 'Wahre Kraft kommt oft aus den leisesten Orten.'
      },
      sensitive_explorer: {
        name: 'Sensibler Entdecker',
        title: 'Feuerwerk, das im Widerspruch blüht',
        icon: '🎆',
        description: `Sie sehnen sich nach Verbindung, sind aber voller Widersprüche und Ängste im Inneren.

Sie sind ein schöner Widerspruch: Sie sehnen sich nach Aufregung, fürchten aber Beurteilung; Sie brauchen Gesellschaft, werden aber leicht durch soziale Interaktionen verbraucht. Ihre Sensibilität ermöglicht es Ihnen, die Welt fein wahrzunehmen, führt aber auch dazu, dass Sie dazu neigen, zu überinterpretieren.

In der Menschenmenge versuchen Sie, Ihr Bestes zu geben, sind aber oft innerlich erschöpft. Sie sehnen sich nach Verständnis und Akzeptanz, fürchten aber, Ihr wahres Ich zu zeigen.

Rat: Akzeptieren Sie Ihre Sensibilität, sie ist kein Fehler, sondern ein Geschenk. Lernen Sie, Grenzen zu setzen und wählen Sie Beziehungen, die Sie wirklich nähren, anstatt die Zustimmung aller zu suchen.`,
        goldenSentence: 'Ihre Sensibilität ist Ihre einzigartige Sprache der Kommunikation mit der Welt.'
      },
      introspective_poet: {
        name: 'Introspektiver Dichter',
        title: 'Der Wal, der in der Tiefe des Meeres allein leuchtet',
        icon: '🐋',
        description: `Sie sind sensibel und feinfühlig, mit einer reichen inneren Welt, fühlen sich aber oft erschöpft.

Wie ein Wal in der tiefen See schwimmen Sie allein in Ihrer Welt und machen Geräusche, die nur Ihre Art verstehen kann. Ihre innere Welt ist spektakulär, aber der Lärm der realen Welt lässt Sie oft fehl am Platz fühlen.

Sie sind extrem empfindlich gegenüber emotionale Veränderungen anderer, wenden sich oft wegen der Worte und Blicke anderer hin und her. Ihre Vorstellungskraft ist reich, kann aber auch leicht von inneren Stimmen verschlungen werden.

Rat: Ihre Tiefe ist ein kostbares Geschenk, aber lassen Sie es nicht zur Last werden. Finden Sie sichere Wege, sich auszudrücken, sei es durch Schreiben, Kunst oder das Sprechen mit vertrauenswürdigen Menschen.`,
        goldenSentence: 'Das kostbarste Licht leuchtet oft allein in der tiefsten See.'
    }
      },

    // 分数标签
    scores: {
      socialEnergy: 'Soziale Energie',
      consumptionLevel: 'Innerer Verbrauch',
      high: 'Hoch',
      low: 'Niedrig'
      },

    // 结果页
    viewFullReport: 'Meinen tiefgehenden psychologischen Analysebericht anzeigen',
    yourResult: 'Ihr Ergebnis',
    goldenQuote: 'Exklusives Zitat',
    traits: {
      social: 'Sozial',
      consumption: 'Verbrauch'
      },

    // 深度报告页
    deepReportTitle: 'Tiefgehender psychologischer Analysebericht',
    yourPersonality: 'Ihre Persönlichkeitsportrait',
    coreMetrics: 'Kernkennzahlenanalyse',
    socialEnergyIndex: 'Sozialer Energieindex',
    consumptionIndex: 'Index des inneren Verbrauchs',
    coreStrengths: 'Ihre Kernstärken',
    potentialChallenges: 'Herausforderungen, die Sie beachten sollten',
    growthSuggestions: 'Exklusive Wachstumsvorschläge',
    growthPlan: 'Drei-Phasen-Wachstumsplan',
    workEnvironment: 'Geeignete Arbeitsumgebungen',
    recommended: 'Empfohlene Richtungen',
    avoid: 'Sollte vermieden werden',
    shortTerm: 'Kurzfristig (1-3 Monate)',
    midTerm: 'Mittelfristig (3-6 Monate)',
    longTerm: 'Langfristig (6-12 Monate)',
    reportDisclaimer: 'Dieser Bericht basiert auf Ihren Antworten und dient nur als Referenz',
    reportCopyright: '© 2026 Test zum Spiegel des Unterbewusstseins',

    // 性格分析内容（德文）- 由于篇幅限制，这里简化处理
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          'Natürlicher Kommunikator, geschickt im Aufbau von Verbindungen',
          'Bezieht Energie aus Sozialisierung, aktiver bedeutet mehr Energie',
          'Scharfe Intuition, gut darin, Menschen zu lesen',
          'Optimistisch und fröhlich, kann Teamatmosphäre heben',
          'Starke Anpassungsfähigkeit, schnelle Integration in neue Umgebungen'
          ],
        challenges: [
          'Kann sich bei Einsamkeit leer fühlen',
          'Einfach abhängig von externem Feedback zur Bestätigung des Selbstwerts',
          'Manchmal tiefe Beziehungen durch übermäßige Sozialisierung vernachlässigen',
          'Kann sich in ruhigen Umgebungen schwer konzentrieren'
          ],
        suggestions: [
          'Planen Sie täglich 30 Minuten Einsamkeit für Reflexion und Aufladen',
          'Pflegen Sie 1-2 tiefe Freundschaften statt vieler oberflächlicher',
          'Lernen Sie, Ruhe zu genießen und finden Sie inneren Frieden',
          'Seien Sie beim Sozialisieren selektiv - Qualität vor Quantität'
          ],
        environments: [
          'Arbeiten, die häufige menschliche Interaktion erfordern (Vertrieb, PR, Eventplanung)',
          'Team-Kollaborationsprojekte',
          'Offene BüroUmgebungen',
          'Gelegenheiten, die kreative Kollisionen benötigen'
          ],
        avoid: [
          'Langfristige unabhängige Arbeit',
          'Hoch repetitive mechanische Arbeit',
          'Umgebungen ohne menschlichen Kontakt'
          ],
        growthPlan: [
          { phase: 'Kurzfristig (1-3 Monate)', action: 'Üben Sie Einsamkeit, notieren Sie täglich 3 Dinge, für die Sie dankbar sind' },
          { phase: 'Mittelfristig (3-6 Monate)', action: 'Vertiefen Sie 2-3 Kernbeziehungen, entwickeln Sie Fähigkeiten zu tiefen Gesprächen' },
          { phase: 'Langfristig (6-12 Monate)', action: 'Balancieren Sie Sozialisierung und Einsamkeit, entwickeln Sie persönliche Hobbys' }
          ]
      },
      // 其他类型类似，为节省空间，使用英文默认
      thinker: {
        strengths: ['Innere Stärke', 'Tiefer Denker', 'Fokussiert', 'Unabhängig', 'Emotional stabil'],
        challenges: ['Verpasst soziale Chancen', 'Schwierige Beziehungsaufbauten', 'Missverstanden als kalt', 'Begrenzte Perspektive'],
        suggestions: ['Wöchentliche soziale Interaktion', 'Qualität vor Quantität', 'Tiefes Denken nutzen', 'Balance finden'],
        environments: ['Forschung', 'Analyse', 'Strategie', 'Remote-Arbeit', 'Ruhiges Büro'],
        avoid: ['Vertrieb', 'Kundendienst', 'Impulsreden', 'Laut'],
        growthPlan: [
          { phase: 'Kurzfristig', action: 'Wöchentlich Aktivitäten' },
          { phase: 'Mittelfristig', action: 'Beziehungen aufbauen' },
          { phase: 'Langfristig', action: 'Einfluss entwickeln' }
          ]
      },
      sensitive_explorer: {
        strengths: ['Reiche Emotionen', 'Empathisch', 'Kreativ', 'Tiefe Verbindungen', 'Selbstreflexion'],
        challenges: ['Überinterpretation', 'Energieverbrauch', 'Empfindlich', 'Widersprüchlich', 'Ängstlich'],
        suggestions: ['Fakten vs. Fantasie', 'Grenzen setzen', 'Selbstakzeptanz', 'Kleine Schritte', 'Unterstützungssystem'],
        environments: ['Kreativ', 'Einzelgespräche', 'Unterstützend', 'Klare Kommunikation'],
        avoid: ['Wettbewerb', 'Konflikte', 'Unklar'],
        growthPlan: [
          { phase: 'Kurzfristig', action: 'Achtsamkeit' },
          { phase: 'Mittelfristig', action: 'Komfortzone erweitern' },
          { phase: 'Langfristig', action: 'Stärke nutzen' }
          ]
      },
      introspective_poet: {
        strengths: ['Reiche innere Welt', 'Künstlerisch', 'Tiefes Verständnis', 'Unabhängig', 'Kreativ'],
        challenges: ['Soziale Erschöpfung', 'Empfindlichkeit', 'Einsamkeit', 'Stimmungsschwankungen', 'Lärm'],
        suggestions: ['Einzigartigkeit akzeptieren', 'Sicherer Ausdruck', 'Wenige verstehen', 'Energiemanagement', 'Professionelle Hilfe'],
        environments: ['Kreativ', 'Unabhängig', 'Flexibel', 'Respektvoll'],
        avoid: ['Vertrieb', 'Öffentliches Sprechen', 'Büropolitik'],
        growthPlan: [
          { phase: 'Kurzfristig', action: 'Routine etablieren' },
          { phase: 'Mittelfristig', action: 'Gleichgesinnte finden' },
          { phase: 'Langfristig', action: 'Expertise vertiefen' }
          ]
    }
      },

    // Fragen (1-7: Soziale Energie, 8-15: Innerer Verbrauch)
    questions: {
      1: {
        question: "Das Wochenende ist endlich, was neigst du zu?",
        options: [
          "Alleine zu Hause bleiben, den ganzen Tag auftanken",
          "Mit 1-2 engen Freunden treffen",
          "Einer kleinen Party besuchen",
          "Mit Freunden bis spät in die Nacht feiern",
          "Eine große Party organisieren"
          ]
      },
      2: {
        question: "In unbekannten Situationen ist deine erste Reaktion?",
        options: [
          "In eine Ecke gehen und still beobachten",
          "Warten bis andere auf einen zukommen",
          "Höflich Leute in der Nähe grüßen",
          "Aktiv nach Themen suchen um Eis zu brechen",
          "Life der Party werden und Atmosphäre bringen"
          ]
      },
      3: {
        question: "Wenn du eine öffentliche Rede halten musst, wie fühlst du dich?",
        options: [
          "Extrem ängstlich, willst es vermeiden",
          "Nervös aber kannst es überwinden",
          "Ein wenig unwohl, aber kannst es akzeptieren",
          "Ein wenig aufgeregt, gut vorbereitet",
          "Genießt die Bühne vollkommen"
          ]
      },
      4: {
        question: "Nachdem du mit einer Gruppe geplaudert hast, fühlst du dich meistens?",
        options: [
          "Völlig erschöpft, brauche Alleinsein zur Erholung",
          "Ein wenig müde, will kurz ruhen",
          "Weder müde noch aufgeregt, neutraler Zustand",
          "Noch immer energiegeladen",
          "Energie explodiert, will weitermachen"
          ]
      },
      5: {
        question: "Konflikten gegenüber, wirst du?",
        options: [
          "Konflikte ausweichen, still ertragen",
          "Privat kommunizieren, öffentlich vermeiden",
          "Rational diskutieren, Konsens suchen",
          "Direkt ausdrücken, weder demütig noch anspruchsvoll",
          "Aktiv herausfordern, keine Angst vor Kontroversen"
          ]
      },
      6: {
        question: "In sozialen Medien neigst du zu?",
        options: [
          "Lurken und browsen, selten interagieren",
          "Gelegentlich liken, vorsichtig kommentieren",
          "Leben teilen, mäßige Interaktion",
          "Häufig aktualisieren, aktiv sozialisieren",
          "Internet-Berühmtheit, Themen-Macher"
          ]
      },
      7: {
        question: "In den Augen deiner Freunde bist du wahrscheinlich?",
        options: [
          "Ein ruhiger und mysteriöser Mensch",
          "Ein sanfter und introvertierter Mensch",
          "Ein ausgeglichener und koordinierter Mensch",
          "Ein warmherziger und fröhlicher Mensch",
          "Sozialer Schmetterling, Mittelpunkt der Aufmerksamkeit"
          ]
      },
      8: {
        question: "Spät im Bett liegend, wirst du?",
        options: [
          "Sofort einschlafen, sorgenfrei",
          "Gelegentlich an heutige Ereignisse denken",
          "An morgen Pläne denken",
          "Wiederholt Details vom Tag durchdenken",
          "Gedanken explodieren, kannst nicht einschlafen"
          ]
      },
      9: {
        question: "Nachdem du einen Moment in sozialen Medien gepostet hast, wirst du?",
        options: [
          "Komplett egal bezüglich Likes und Kommentaren",
          "Gelegentlich nachsehen",
          "Wirst Feedback beachten",
          "Häufig aktualisieren, Bewertung beachten",
          "Übermäßig ängstlich, willst sogar löschen"
          ]
      },
      10: {
        question: "Wenn jemand beiläufig etwas sagt, wirst du?",
        options: [
          "Komplett egal",
          "Sofort vergessen",
          "Kurz darüber nachdenken",
          "Wiederholt Bedeutung kauen",
          "In Strudel der Überinterpretation geraten"
          ]
      },
      11: {
        question: "Bei Entscheidungen, üblicherweise?",
        options: [
          "Schnell und entschieden",
          "Kurz überlegen",
          "Vor- und Nachteile abwägen",
          "Wiederholt kämpfen",
          "Entscheidungsunfähig, Wahlparalyse"
          ]
      },
      12: {
        question: "Versagen gegenüber, wirst du?",
        options: [
          "Schnell anpassen, weitermachen",
          "Enttäuscht aber kannst akzeptieren",
          "Brauche Zeit zu verarbeiten",
          "Wiederholt dich selbst verantworten",
          "Komplett dich selbst verneinen"
          ]
      },
      13: {
        question: "Erwartungen anderer gegenüber, wirst du?",
        options: [
          "Egal, du selbst sein",
          "Referenz aber nicht obsessiv",
          "Mäßig achten",
          "Bemühen zu erfüllen, Druck fühlen",
          "Übermäßig anpassen, Enttäuschung fürchten"
          ]
      },
      14: {
        question: "In Menschenmengen, fühlst du oft?",
        options: [
          "Komplett entspannt und natürlich",
          "Gelegentlich unwohl",
          "Bestimmten Druck",
          "Nervös, Meinung anderer beachten",
          "Extrem ängstlich, wollen fliehen"
          ]
      },
      15: {
        question: "Ende des Tages, fühlst du?",
        options: [
          "Entspannt und zufrieden",
          "Leicht müde",
          "Normaler Zustand",
          "Völlig erschöpft",
          "Emotional zusammengebrochen"
          ]
    }
    }
      },

  ru: {
    // 通用
    appName: 'Зеркало Подсознания',
    appSubtitle: 'Узнайте вашу социальную энергию и внутреннее потребление',
    startExploration: 'Начать исследование',
    restart: 'Начать заново',
    back: 'Назад',
    loading: 'Загрузка...',

    // 欢迎页
    welcomeTitle: 'Зеркало Подсознания',
    welcomeSubtitle: 'Узнайте вашу социальную энергию и внутреннее потребление',
    welcomeDescription: 'Зеркало для вашей души\n15 вопросов, 3 минуты, откройте свое истинное "я"',
    welcomeButton: 'Начать исследование',
    welcomePrivacy: '🔒 Ваши ответы используются только для анализа и не сохраняются',

    // 进度条
    questionProgress: '{current} / {total}',
    percentComplete: '{percent}% завершено',

    // 答题页
    questionPrefix: 'Вопрос',
    selectHint: 'Выберите вариант, который лучше всего отражает ваши истинные мысли',

    // 结果类型
    resultType: {
      social_butterfly: {
        name: 'Социальная Бабочка',
        title: 'Сияющий Генератор',
        icon: '⚡',
        description: `Вы прирожденная социальная звезда, которая получает энергию от общения с людьми.

В вашем мире каждый разговор - это подзарядка, а каждый новый друг - новый источник энергии. Вы как маленькое солнце, которое не только освещает себя, но и согревает окружающих.

Ваша социальная интуиция остра, вы мастерски ломаете лёд и поднимаете настроение. В толпе вы чувствуете себя как рыба в воде и часто становитесь центром внимания и объединяющим звеном.

Совет: Хотя ваша энергия приходит от общения, не забудьте уделить время себе. Иногда одиночество может дать вам больше глубины и внутреннего покоя среди шума.`,
        goldenSentence: 'Ваш свет никогда не нужно зажигать специально, потому что вы сами являетесь источником света.'
      },
      thinker: {
        name: 'Думающий Путник',
        title: 'Философ Тихой Глубины',
        icon: '🌊',
        description: `Вы наслаждаетесь одиночеством и внутренним покоем, не легко потревожены внешним миром.

Ваша энергия происходит из тихого времени, и в одиночестве вы находите свое истинное "я". Вы как глубокое озеро, спокойное на поверхности, но содержащее бесконечную мудрость и проницательность в глубине.

Вы не жаждете быть в центре внимания, но ваша глубина часто удивляет людей. в суетном мире вы сохраняете редкую ясность и независимость.

Совет: Одиночество - ваша суперсила, но умеренно откройте свое сердце и позвольте доверенным людям войти в ваш мир, вы откроете другую красоту связи.`,
        goldenSentence: 'Истинная сила часто приходит из самых тихих мест.'
      },
      sensitive_explorer: {
        name: 'Чувствительный Исследователь',
        title: 'Фейерверк, Расцветающий в Противоречии',
        icon: '🎆',
        description: `Вы жаждете связи, но полны противоречий и тревог внутри.

Вы красивое противоречие: жаждете Excitement, но боитесь осуждения; нуждаетесь в компании, но легко истощаетесь социальными взаимодействиями. Ваша чувствительность позволяет вам тонко воспринимать мир, но также склоняет вас к сверхинтерпретации.

В толпе вы стараетесь показать себя, но часто внутри истощены. Вы жаждете понимания и принятия, но боитесь показать свое истинное "я".

Совет: Примите свою чувствительность, это не недостаток, а дар. Научитесь устанавливать границы и выбирать отношения, которые действительно питают вас, а не искать одобрения всех.`,
        goldenSentence: 'Ваша чувствительность - ваш уникальный язык общения с миром.'
      },
      introspective_poet: {
        name: 'Интроспективный Поэт',
        title: 'Кит, Светящийся Alone в Глубине Моря',
        icon: '🐋',
        description: `Вы чувствительны и деликатны, с богатым внутренним миром, но часто чувствуете истощение.

Как кит в глубоком море, вы плаваете alone в своем мире, издавая звуки, которые понимает только ваш вид. Ваш внутренний世界 великолепен, но шум реального мира часто заставляет вас чувствовать себя не на месте.

Вы крайне чувствительны к эмоциональным изменениям других, часто辗转反侧 из-за слов и взглядов других. Ваше воображение богато, но также может быть легко поглощено внутренними голосами.

Совет: Ваша глубина - ценный подарок, но не позволяйте ей стать бременем. Найдите безопасные способы выразить себя, будь то письмо, искусство или разговор с доверенными людьми.`,
        goldenSentence: 'Самый драгоценный свет часто сияет alone в самой глубокой море.'
    }
      },

    // 分数标签
    scores: {
      socialEnergy: 'Социальная Энергия',
      consumptionLevel: 'Внутреннее Потребление',
      high: 'Высокая',
      low: 'Низкая'
      },

    // 结果页
    viewFullReport: 'Посмотреть мой глубокий психологический аналитический отчет',
    yourResult: 'Ваш Результат',
    goldenQuote: 'Эксклюзивная Цитата',
    traits: {
      social: 'Социальность',
      consumption: 'Потребление'
      },

    // 深度报告页
    deepReportTitle: 'Глубокий Психологический Аналитический Отчет',
    yourPersonality: 'Ваш Портрет Личности',
    coreMetrics: 'Анализ Основных Показателей',
    socialEnergyIndex: 'Индекс Социальной Энергии',
    consumptionIndex: 'Индекс Внутреннего Потребления',
    coreStrengths: 'Ваши Основные Сильные Стороны',
    potentialChallenges: 'Вызовы, на Которые Стоит Обратить Внимание',
    growthSuggestions: 'Эксклюзивные Предложения по Росту',
    growthPlan: 'Трехэтапный План Роста',
    workEnvironment: 'Подходящая Рабочая Среда',
    recommended: 'Рекомендуемые Направления',
    avoid: 'Следует Избегать',
    shortTerm: 'Краткосрочный (1-3 месяца)',
    midTerm: 'Среднесрочный (3-6 месяцев)',
    longTerm: 'Долгосрочный (6-12 месяцев)',
    reportDisclaimer: 'Этот отчет основан на ваших ответах и только для справки',
    reportCopyright: '© 2026 Тест "Зеркало Подсознания"',

    // 性格分析内容（俄文）- 简化版
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          'Естественный коммуникатор',
          'Получает энергию от общения',
          'Острая интуиция',
          'Оптимистичный',
          'Адаптивный'
          ],
        challenges: [
          'Может чувствовать пустоту в одиночестве',
          'Зависит от внешнего одобрения',
          'Пренебрегает глубокими связями',
          'Трудно фокусируется в тишине'
          ],
        suggestions: [
          '30 минут одиночества ежедневно',
          'Культивируйте глубокие дружбы',
          'Наслаждайтесь тишиной',
          'Качество важнее количества'
          ],
        environments: ['Продажи', 'Командная работа', 'Открытый офис', 'Креатив'],
        avoid: ['Изолированная работа', 'Механическая работа', 'Изоляция'],
        growthPlan: [
          { phase: 'Краткосрочный', action: 'Практиковать одиночество' },
          { phase: 'Среднесрочный', action: 'Углубить отношения' },
          { phase: 'Долгосрочный', action: 'Балансировать социальное и личное' }
          ]
      },
      thinker: {
        strengths: ['Внутренняя сила', 'Глубокий мыслитель', 'Фокус', 'Независимость', 'Стабильность'],
        challenges: ['Упускает возможности', 'Трудности в общении', 'Недопонимание', 'Ограниченный кругозор'],
        suggestions: ['Еженедельное общение', 'Качество', 'Использовать глубину мышления', 'Баланс'],
        environments: ['Исследование', 'Анализ', 'Стратегия', 'Удаленная работа'],
        avoid: ['Продажи', 'Спонтанные речи', 'Шум'],
        growthPlan: [
          { phase: 'Краткосрочный', action: 'Участвовать в мероприятиях' },
          { phase: 'Среднесрочный', action: 'Построить отношения' },
          { phase: 'Долгосрочный', action: 'Стать лидером мнений' }
          ]
      },
      sensitive_explorer: {
        strengths: ['Богатые эмоции', 'Эмпатия', 'Креативность', 'Глубина', 'Рефлексия'],
        challenges: ['Сверхинтерпретация', 'Истощение', 'Чувствительность', 'Противоречие', 'Тревога'],
        suggestions: ['Факты против фантазии', 'Границы', 'Самопринятие', 'Маленькие шаги', 'Поддержка'],
        environments: ['Креатив', 'Диалоги', 'Поддержка', 'Ясная коммуникация'],
        avoid: ['Конкуренция', 'Конфликты', 'Неясность'],
        growthPlan: [
          { phase: 'Краткосрочный', action: 'Осознанность' },
          { phase: 'Среднесрочный', action: 'Расширить зону комфорта' },
          { phase: 'Долгосрочный', action: 'Использовать силу' }
          ]
      },
      introspective_poet: {
        strengths: ['Богатый внутренний мир', 'Художник', 'Понимание', 'Независимость', 'Творчество'],
        challenges: ['Социальное истощение', 'Чувствительность', 'Одиночество', 'Перепады настроения', 'Шум'],
        suggestions: ['Принять уникальность', 'Безопасное выражение', 'Понимающие люди', 'Менеджмент энергии', 'Профессиональная помощь'],
        environments: ['Творчество', 'Независимость', 'Гибкость', 'Уважение'],
        avoid: ['Продажи', 'Публичные речи', 'Политика'],
        growthPlan: [
          { phase: 'Краткосрочный', action: 'Установить рутину' },
          { phase: 'Среднесрочный', action: 'Найти единомышленников' },
          { phase: 'Долгосрочный', action: 'Углубить экспертизу' }
          ]
    }
      },

    // Вопросы (1-7: Социальная энергия, 8-15: Внутреннее потребление)
    questions: {
      1: {
        question: "Выходные наконец настали, вы склонны к?",
        options: [
          "Остаться дома одному, заряжаться весь день",
          "Встретиться с 1-2 близкими друзьями",
          "Посетить небольшую вечеринку",
          "Веселиться с друзьями до глубокой ночи",
          "Организовать большую вечеринку"
          ]
      },
      2: {
        question: "В незнакомых местах ваша первая реакция?",
        options: [
          "Найти угол и молча наблюдать",
          "Ждать пока другие подойдут",
          "Вежливо приветствовать людей рядом",
          "Активно искать темы для беседы",
          "Стать центром вечеринки и поднять настроение"
          ]
      },
      3: {
        question: "Когда нужно выступать публично, вы чувствуете?",
        options: [
          "Чрезвычайная тревога, хотите избежать",
          "Нервозность но можете преодолеть",
          "Немного беспокойства, но можете принять",
          "Немного возбуждены, хорошо подготовлены",
          "Полностью наслаждаетесь сценой"
          ]
      },
      4: {
        question: "После беседы с группой людей вы обычно чувствуете?",
        options: [
          "Полностью истощены, нужно одиночество для восстановления",
          "Немного устали, хотите немного отдохнуть",
          "Ни усталости ни возбуждения, нейтральное состояние",
          "Все еще полны энергии",
          "Энергия взрывается, хотите продолжать"
          ]
      },
      5: {
        question: "Столкнувшись с конфликтом, вы?",
        options: [
          "Избегаете конфликта, молча терпите",
          "Общаетесь частным образом, избегаете публичного",
          "Обсуждаете рационально, ищете консенсус",
          "Выражаетесь прямо, ни униженно ни требовательно",
          "Активно бросаете вызов, не боитесь споров"
          ]
      },
      6: {
        question: "В социальных сетях вы склонны к?",
        options: [
          "Луркать и просматривать, редко взаимодействуете",
          "Иногда лайкать, осторожно комментировать",
          "Делиться жизнью, умеренное взаимодействие",
          "Часто обновлять, активно социализирует",
          "Интернет-знаменитость, создатель тем"
          ]
      },
      7: {
        question: "В глазах друзей вы, вероятно?",
        options: [
          "Тихий и загадочный человек",
          "Мягкий и интровертный человек",
          "Сбалансированный и координированный человек",
          "Теплый и веселый человек",
          "Социальная бабочка, центр внимания"
          ]
      },
      8: {
        question: "Поздно ночью лежа в кровати, вы?",
        options: [
          "Сразу засыпаете, беззаботны",
          "Иногда вспоминаете сегодняшние события",
          "Думаете о завтрашних планах",
          "Повторяете детали дня",
          "Мысли взрываются, не можете уснуть"
          ]
      },
      9: {
        question: "Опубликовав момент в социальных сетях, вы?",
        options: [
          "Совершенно все равно относительно лайков и комментариев",
          "Иногда проверяете",
          "Будете обращать внимание на обратную связь",
          "Часто обновляете, заботитесь об оценке",
          "Чрезмерно тревожны, даже хотите удалить"
          ]
      },
      10: {
        question: "Когда кто-то говорит что-то мимоходом, вы?",
        options: [
          "Совершенно все равно",
          "Сразу забываете",
          "Кратко думаете",
          "Повторяете пережевывая значение",
          "Падаете в водоворот переинтерпретации"
          ]
      },
      11: {
        question: "Принимая решения, вы обычно?",
        options: [
          "Быстро и решительно",
          "Коротко думаете",
          "Взвешиваете плюсы и минусы",
          "Повторяете борьбу",
          "Нерешительны, паралич выбора"
          ]
      },
      12: {
        question: "Столкнувшись с неудачей, вы?",
        options: [
          "Быстро адаптирует, продолжаете",
          "Разочарованы но можете принять",
          "Нужно время переварить",
          "Повторяете самобичевание",
          "Полностью отрицаете себя"
          ]
      },
      13: {
        question: "Относительно ожиданий других, вы?",
        options: [
          "Все равно, быть собой",
          "Ссылаетесь но не одержимы",
          "Умеренно обращаете внимание",
          "Стремитесь выполнить, чувствуете давление",
          "Чрезмерно угождаете, боитесь разочаровать"
          ]
      },
      14: {
        question: "В толпе часто чувствуете?",
        options: [
          "Полностью расслабленны и естественны",
          "Иногда дискомфорт",
          "Определенное давление",
          "Нервны, обращаете внимание на мнение других",
          "Чрезвычайно тревожны, хотите сбежать"
          ]
      },
      15: {
        question: "В конце дня чувствуете?",
        options: [
          "Расслабленны и удовлетворены",
          "Немного устали",
          "Нормальное состояние",
          "Полностью истощены",
          "Эмоционально рухнули"
          ]
    }
    }
      },

  pt: {
    // 通用
    appName: 'Espelho do Subconsciente',
    appSubtitle: 'Descubra sua Energia Social & Consumo Interno',
    startExploration: 'Iniciar Exploração',
    restart: 'Reiniciar',
    back: 'Voltar',
    loading: 'Carregando...',

    // 欢迎页
    welcomeTitle: 'Espelho do Subconsciente',
    welcomeSubtitle: 'Descubra sua Energia Social & Consumo Interno',
    welcomeDescription: 'Um espelho para sua alma\n15 perguntas, 3 minutos, descubra seu verdadeiro eu',
    welcomeButton: 'Iniciar Exploração',
    welcomePrivacy: '🔒 Suas respostas são usadas apenas para análise e não serão armazenadas',

    // 进度条
    questionProgress: '{current} / {total}',
    percentComplete: '{percent}% completo',

    // 答题页
    questionPrefix: 'Pergunta',
    selectHint: 'Escolha a opção que melhor reflete seus pensamentos verdadeiros',

    // 结果类型
    resultType: {
      social_butterfly: {
        name: 'Borboleta Social',
        title: 'O Gerador Radiante',
        icon: '⚡',
        description: `Você é uma estrela social natural que obtém energia da interação com pessoas.

No seu mundo, cada conversa é uma recarga e cada novo amigo é uma nova fonte de energia. Você é como um pequeno sol que não apenas ilumina a si mesmo, mas também aquece aqueles ao seu redor.

Sua intuição social é afiada, boa em quebrar o gelo e animar a atmosfera. Na multidão, você está à vontade e muitas vezes se torna o foco e elo de ligação.

Conselho: Embora sua energia venha da socialização, não esqueça de reservar algum tempo para si. Ocasional solidão pode lhe dar mais profundidade e paz interior em meio ao barulho.`,
        goldenSentence: 'Sua luz nunca precisa ser acesa deliberadamente, porque você é a própria fonte de luz.'
      },
      thinker: {
        name: 'Viajante Pensativo',
        title: 'O Filósofo das Profundezas Silenciosas',
        icon: '🌊',
        description: `Você desfruta de solidão e paz interior, não facilmente perturbado pelo mundo exterior.

Sua energia vem de tempos silenciosos, e na solidão você encontra seu verdadeiro eu. Você é como um lago profundo, calmo na superfície, mas contendo infinita sabedoria e insight nas profundezas.

Você não deseja ser o centro das atenções, mas sua profundidade frequentemente surpreende as pessoas. Em um mundo agitado, você mantém rara clareza e independência.

Conselho: Solidão é seu superpoder, mas moderadamente abra seu coração e deixe pessoas confiáveis entrarem em seu mundo, você descobrirá outra beleza de conexão.`,
        goldenSentence: 'A verdadeira força frequentemente vem dos lugares mais silenciosos.'
      },
      sensitive_explorer: {
        name: 'Explorador Sensível',
        title: 'Fogos de Artifício Florescendo em Contradição',
        icon: '🎆',
        description: `Você anseia por conexão, mas está cheio de contradições e ansiedades internas.

Você é uma bela contradição: anseia por empolgação, mas tem julgamento; precisa de companhia, mas é facilmente consumido por interações sociais. Sua sensibilidade permite perceber o mundo delicadamente, mas também o leva a superinterpretação.

Na multidão, você tenta se apresentar, mas muitas vezes está exausto internamente. Você anseia por compreensão e aceitação, mas tem mostrar seu verdadeiro eu.

Conselho: Aceite sua sensibilidade, não é uma falha mas um dom. Aprenda a definir limites e escolher relacionamentos que verdadeiramente nutrem você, em vez de buscar aprovação de todos.`,
        goldenSentence: 'Sua sensibilidade é sua linguagem única de comunicação com o mundo.'
      },
      introspective_poet: {
        name: 'Poeta Introspectivo',
        title: 'A Baleia que Brilha Alone nas Profundezas do Mar',
        icon: '🐋',
        description: `Você é sensível e delicado, com um rico mundo interior, mas muitas vezes se sente exausto.

Como uma baleia no mar profundo, você nada alone em seu mundo, fazendo sons que apenas sua espécie pode entender. Seu mundo interior é espetacular, mas o barulho do mundo real frequentemente faz você se sentir fora do lugar.

Você é extremamente sensível a mudanças emocionais dos outros, frequentemente se virando na cama por causa das palavras e olhares dos outros. Sua imaginação é rica, mas também pode ser facilmente engolida por vozes internas.

Conselho: Sua profundidade é um presente precioso, mas não a deixe se tornar um fardo. Encontre maneiras seguras de se expressar, seja escrevendo, arte ou conversando com pessoas confiáveis.`,
        goldenSentence: 'A luz mais preciosa frequentemente brilha alone nas profundezas do mar.'
    }
      },

    // 分数标签
    scores: {
      socialEnergy: 'Energia Social',
      consumptionLevel: 'Consumo Interno',
      high: 'Alta',
      low: 'Baixa'
      },

    // 结果页
    viewFullReport: 'Ver Meu Relatório de Análise Psicológica Profunda',
    yourResult: 'Seu Resultado',
    goldenQuote: 'Citação Exclusiva',
    traits: {
      social: 'Social',
      consumption: 'Consumo'
      },

    // 深度报告页
    deepReportTitle: 'Relatório de Análise Psicológica Profunda',
    yourPersonality: 'Seu Retrato de Personalidade',
    coreMetrics: 'Análise de Métricas Principais',
    socialEnergyIndex: 'Índice de Energia Social',
    consumptionIndex: 'Índice de Consumo Interno',
    coreStrengths: 'Seus Pontos Fortes Principais',
    potentialChallenges: 'Desafios a Observar',
    growthSuggestions: 'Sugestões Exclusivas de Crescimento',
    growthPlan: 'Plano de Crescimento de Três Fases',
    workEnvironment: 'Ambientes de Trabalho Adequados',
    recommended: 'Direções Recomendadas',
    avoid: 'Deve Evitar',
    shortTerm: 'Curto Prazo (1-3 meses)',
    midTerm: 'Médio Prazo (3-6 meses)',
    longTerm: 'Longo Prazo (6-12 meses)',
    reportDisclaimer: 'Este relatório é baseado nas suas respostas e é apenas para referência',
    reportCopyright: '© 2026 Teste do Espelho do Subconsciente',

    // 性格分析内容（葡萄牙文）- 简化版
    personalityAnalysis: {
      social_butterfly: {
        strengths: [
          'Comunicador natural',
          'Obtém energia da socialização',
          'Intuição afiada',
          'Otimista',
          'Adaptável'
          ],
        challenges: [
          'Pode sentir vazio na solidão',
          'Depende de aprovação externa',
          'Negliga relacionamentos profundos',
          'Difícil focar no silêncio'
          ],
        suggestions: [
          '30 minutos de solidão diariamente',
          'Cultive amizades profundas',
          'Desfrute do silêncio',
          'Qualidade sobre quantidade'
          ],
        environments: ['Vendas', 'Trabalho em equipe', 'Escritório aberto', 'Criatividade'],
        avoid: ['Trabalho isolado', 'Trabalho mecânico', 'Isolamento'],
        growthPlan: [
          { phase: 'Curto Prazo', action: 'Praticar solidão' },
          { phase: 'Médio Prazo', action: 'Aprofundar relacionamentos' },
          { phase: 'Longo Prazo', action: 'Equilibrar social e pessoal' }
          ]
      },
      thinker: {
        strengths: ['Força interna', 'Pensador profundo', 'Foco', 'Independente', 'Estabilidade'],
        challenges: ['Perde oportunidades', 'Dificuldades sociais', 'Mal-entendido', 'Perspectiva limitada'],
        suggestions: ['Interação semanal', 'Qualidade', 'Usar profundidade', 'Equilíbrio'],
        environments: ['Pesquisa', 'Análise', 'Estratégia', 'Trabalho remoto'],
        avoid: ['Vendas', 'Discursos espontâneos', 'Barulho'],
        growthPlan: [
          { phase: 'Curto Prazo', action: 'Participar de eventos' },
          { phase: 'Médio Prazo', action: 'Construir relacionamentos' },
          { phase: 'Longo Prazo', action: 'Tornar-se líder de opinião' }
          ]
      },
      sensitive_explorer: {
        strengths: ['Emoções ricas', 'Empatia', 'Criatividade', 'Profundidade', 'Reflexão'],
        challenges: ['Superinterpretação', 'Exaustão', 'Sensibilidade', 'Contradição', 'Ansiedade'],
        suggestions: ['Fatos vs fantasia', 'Limites', 'Autoaceitação', 'Pequenos passos', 'Apoio'],
        environments: ['Criativo', 'Diálogos', 'Apoio', 'Comunicação clara'],
        avoid: ['Competição', 'Conflitos', 'Incerteza'],
        growthPlan: [
          { phase: 'Curto Prazo', action: 'Mindfulness' },
          { phase: 'Médio Prazo', action: 'Expandir zona de conforto' },
          { phase: 'Longo Prazo', action: 'Usar força' }
          ]
      },
      introspective_poet: {
        strengths: ['Mundo interior rico', 'Artístico', 'Compreensão', 'Independência', 'Criatividade'],
        challenges: ['Exaustão social', 'Sensibilidade', 'Solidão', 'Mudanças de humor', 'Barulho'],
        suggestions: ['Aceitar singularidade', 'Expressão segura', 'Pessoas compreensivas', 'Gestão de energia', 'Ajuda profissional'],
        environments: ['Criatividade', 'Independência', 'Flexibilidade', 'Respeito'],
        avoid: ['Vendas', 'Discursos públicos', 'Política'],
        growthPlan: [
          { phase: 'Curto Prazo', action: 'Estabelecer rotina' },
          { phase: 'Médio Prazo', action: 'Encontrar semelhantes' },
          { phase: 'Longo Prazo', action: 'Aprofundar expertise' }
          ]
    }
      },

    // Perguntas (1-7: Energia Social, 8-15: Consumo Interno)
    questions: {
      1: {
        question: "O fim de semana finalmente chegou, você tende a?",
        options: [
          "Ficar em casa sozinho, carregar o dia todo",
          "Encontrar com 1-2 amigos próximos",
          "Participar de uma pequena festa",
          "Festar com amigos até tarde da noite",
          "Organizar uma grande festa"
          ]
      },
      2: {
        question: "Em situações desconhecidas, sua primeira reação é?",
        options: [
          "Encontrar um canto e observar silenciosamente",
          "Esperar outros abordarem",
          "Cumprimentar educadamente pessoas próximas",
          "Procurar ativamente tópicos para quebrar gelo",
          "Tornar-se foco da festa e animar atmosfera"
          ]
      },
      3: {
        question: "Quando precisa fazer um discurso público, você sente?",
        options: [
          "Extrema ansiedade, quer evitar",
          "Nervoso mas pode superar",
          "Um pouco desconfortável, mas pode aceitar",
          "Um pouco excitado, bem preparado",
          "Desfruta completamente o palco"
          ]
      },
      4: {
        question: "Depois de conversar com um grupo de pessoas, você geralmente sente?",
        options: [
          "Completamente exausto, precisa de solidão para recuperar",
          "Um pouco cansado, quer descansar um pouco",
          "Nem cansado nem excitado, estado neutro",
          "Ainda cheio de energia",
          "Energia explodindo, quer continuar"
          ]
      },
      5: {
        question: "Diante de conflitos, você?",
        options: [
          "Evita conflitos, suporta silenciosamente",
          "Comunica-se privadamente, evita público",
          "Discute racionalmente, busca consenso",
          "Expressa-se diretamente, nem humilde nem exigente",
          "Desafia ativamente, não tem controvérsias"
          ]
      },
      6: {
        question: "Em redes sociais, você tende a?",
        options: [
          "Lurcar e navegar, raramente interage",
          "Ocasionalmente curtir, comentar cautelosamente",
          "Compartilhar vida, interação moderada",
          "Frequentemente atualizar, socializar ativamente",
          "Celebridade da internet, criador de tópicos"
          ]
      },
      7: {
        question: "Nos olhos dos amigos, você provavelmente é?",
        options: [
          "Uma pessoa quieta e misteriosa",
          "Uma pessoa gentil e introvertida",
          "Uma pessoa equilibrada e coordenada",
          "Uma pessoa calorosa e alegre",
          "Borboleta social, centro de atenção"
          ]
      },
      8: {
        question: "Tarde na noite deitado na cama, você?",
        options: [
          "Adormece instantaneamente, sem preocupações",
          "Ocasionalmente lembra eventos do dia",
          "Pensa sobre planos de amanhã",
          "Repensa repetidamente detalhes do dia",
          "Pensamentos explodem, não conseguir dormir"
          ]
      },
      9: {
        question: "Depois de postar um momento nas redes sociais, você?",
        options: [
          "Completamente indiferente sobre curtidas e comentários",
          "Ocasionalmente verifica",
          "Prestará atenção ao feedback",
          "Frequentemente atualiza, cuida da avaliação",
          "Excessivamente ansioso, até quer deletar"
          ]
      },
      10: {
        question: "Quando alguém casualmente diz algo, você?",
        options: [
          "Completamente indiferente",
          "Esquece instantaneamente",
          "Pensa brevemente",
          "Masca repetidamente significado",
          "Cai em redemoinho de superinterpretação"
          ]
      },
      11: {
        question: "Ao tomar decisões, você geralmente?",
        options: [
          "Rápido e decisivo",
          "Pensa brevemente",
          "Pesa prós e contras",
          "Luta repetidamente",
          "Indeciso, paralisia de escolha"
          ]
      },
      12: {
        question: "Diante da falha, você?",
        options: [
          "Adapta-se rapidamente, continua",
          "Desapontado mas pode aceitar",
          "Precisa tempo para digerir",
          "Culpa-se repetidamente",
          "Completamente nega a si mesmo"
          ]
      },
      13: {
        question: "Sobre expectativas dos outros, você?",
        options: [
          "Indiferente, ser você mesmo",
          "Referencia mas não obceca",
          "Moderadamente atende",
          "Esforça para satisfazer, sente pressão",
          "Excessivamente agrada, tem decepcionar"
          ]
      },
      14: {
        question: "Em multidões, você frequentemente sente?",
        options: [
          "Completamente relaxado e natural",
          "Ocasionalmente desconfortável",
          " Certa pressão",
          "Nervoso, atende opinião dos outros",
          "Extremamente ansioso, quer fugir"
          ]
      },
      15: {
        question: "No final do dia, você sente?",
        options: [
          "Relaxado e satisfeito",
          "Levemente cansado",
          "Estado normal",
          "Completamente exausto",
          "Emocionalmente colapsado"
          ]
    }
    }
    }
};

// 语言配置
export const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ru', name: 'Русский' },
  { code: 'pt', name: 'Português' }
];

// 浏览器语言映射
export const browserLanguageMap = {
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-TW': 'zh-TW',
  'zh-HK': 'zh-TW',
  'de': 'de',
  'de-DE': 'de',
  'de-AT': 'de',
  'de-CH': 'de',
  'ru': 'ru',
  'ru-RU': 'ru',
  'pt': 'pt',
  'pt-BR': 'pt',
  'pt-PT': 'pt'
};
