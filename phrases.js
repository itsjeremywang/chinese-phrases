// The phrase list. To add a phrase, copy one block and edit it.
// Kept as a .js file (not .json) so the app works by double-clicking index.html.
const PHRASES = [
  {
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "hello",
    examples: [
      { zh: "你好，我叫李明。", pinyin: "Nǐ hǎo, wǒ jiào Lǐ Míng.", en: "Hello, my name is Li Ming." },
      { zh: "老师，你好！", pinyin: "Lǎoshī, nǐ hǎo!", en: "Hello, teacher!" },
      { zh: "你好，请问洗手间在哪儿？", pinyin: "Nǐ hǎo, qǐngwèn xǐshǒujiān zài nǎr?", en: "Hello, excuse me, where is the restroom?" }
    ]
  },
  {
    hanzi: "谢谢",
    pinyin: "xièxie",
    meaning: "thank you",
    examples: [
      { zh: "谢谢你的帮助。", pinyin: "Xièxie nǐ de bāngzhù.", en: "Thank you for your help." },
      { zh: "谢谢，我吃饱了。", pinyin: "Xièxie, wǒ chī bǎo le.", en: "Thanks, I'm full." },
      { zh: "谢谢老师！", pinyin: "Xièxie lǎoshī!", en: "Thank you, teacher!" }
    ]
  },
  {
    hanzi: "朋友",
    pinyin: "péngyou",
    meaning: "friend",
    examples: [
      { zh: "他是我的好朋友。", pinyin: "Tā shì wǒ de hǎo péngyou.", en: "He is my good friend." },
      { zh: "我周末和朋友去看电影。", pinyin: "Wǒ zhōumò hé péngyou qù kàn diànyǐng.", en: "I'm going to see a movie with friends this weekend." },
      { zh: "你在中国有朋友吗？", pinyin: "Nǐ zài Zhōngguó yǒu péngyou ma?", en: "Do you have friends in China?" }
    ]
  },
  {
    hanzi: "喜欢",
    pinyin: "xǐhuan",
    meaning: "to like",
    examples: [
      { zh: "我喜欢喝茶。", pinyin: "Wǒ xǐhuan hē chá.", en: "I like drinking tea." },
      { zh: "你喜欢什么颜色？", pinyin: "Nǐ xǐhuan shénme yánsè?", en: "What color do you like?" },
      { zh: "她很喜欢这本书。", pinyin: "Tā hěn xǐhuan zhè běn shū.", en: "She really likes this book." }
    ]
  },
  {
    hanzi: "学习",
    pinyin: "xuéxí",
    meaning: "to study; to learn",
    examples: [
      { zh: "我在学习中文。", pinyin: "Wǒ zài xuéxí Zhōngwén.", en: "I'm studying Chinese." },
      { zh: "他每天学习两个小时。", pinyin: "Tā měitiān xuéxí liǎng ge xiǎoshí.", en: "He studies for two hours every day." },
      { zh: "学习一门新语言很有意思。", pinyin: "Xuéxí yì mén xīn yǔyán hěn yǒu yìsi.", en: "Learning a new language is very interesting." }
    ]
  },
  {
    hanzi: "工作",
    pinyin: "gōngzuò",
    meaning: "work; job; to work",
    examples: [
      { zh: "你在哪儿工作？", pinyin: "Nǐ zài nǎr gōngzuò?", en: "Where do you work?" },
      { zh: "我今天工作很忙。", pinyin: "Wǒ jīntiān gōngzuò hěn máng.", en: "I'm very busy with work today." },
      { zh: "她找到了一个新工作。", pinyin: "Tā zhǎodào le yí ge xīn gōngzuò.", en: "She found a new job." }
    ]
  },
  {
    hanzi: "时间",
    pinyin: "shíjiān",
    meaning: "time",
    examples: [
      { zh: "你明天有时间吗？", pinyin: "Nǐ míngtiān yǒu shíjiān ma?", en: "Do you have time tomorrow?" },
      { zh: "时间过得真快！", pinyin: "Shíjiān guò de zhēn kuài!", en: "Time flies!" },
      { zh: "我没有时间吃早饭。", pinyin: "Wǒ méiyǒu shíjiān chī zǎofàn.", en: "I don't have time to eat breakfast." }
    ]
  },
  {
    hanzi: "今天",
    pinyin: "jīntiān",
    meaning: "today",
    examples: [
      { zh: "今天天气很好。", pinyin: "Jīntiān tiānqì hěn hǎo.", en: "The weather is nice today." },
      { zh: "今天是星期几？", pinyin: "Jīntiān shì xīngqī jǐ?", en: "What day of the week is it today?" },
      { zh: "我今天不想出去。", pinyin: "Wǒ jīntiān bù xiǎng chūqù.", en: "I don't want to go out today." }
    ]
  },
  {
    hanzi: "吃饭",
    pinyin: "chī fàn",
    meaning: "to eat (a meal)",
    examples: [
      { zh: "我们一起去吃饭吧。", pinyin: "Wǒmen yìqǐ qù chī fàn ba.", en: "Let's go eat together." },
      { zh: "你吃饭了吗？", pinyin: "Nǐ chī fàn le ma?", en: "Have you eaten? (a common greeting)" },
      { zh: "我晚上七点吃饭。", pinyin: "Wǒ wǎnshang qī diǎn chī fàn.", en: "I eat dinner at 7 p.m." }
    ]
  },
  {
    hanzi: "知道",
    pinyin: "zhīdào",
    meaning: "to know",
    examples: [
      { zh: "我不知道他的名字。", pinyin: "Wǒ bù zhīdào tā de míngzi.", en: "I don't know his name." },
      { zh: "你知道地铁站在哪儿吗？", pinyin: "Nǐ zhīdào dìtiě zhàn zài nǎr ma?", en: "Do you know where the subway station is?" },
      { zh: "我知道了，谢谢！", pinyin: "Wǒ zhīdào le, xièxie!", en: "Got it, thanks!" }
    ]
  },
  {
    hanzi: "高兴",
    pinyin: "gāoxìng",
    meaning: "happy; glad",
    examples: [
      { zh: "认识你很高兴。", pinyin: "Rènshi nǐ hěn gāoxìng.", en: "Nice to meet you." },
      { zh: "她今天看起来很高兴。", pinyin: "Tā jīntiān kàn qǐlái hěn gāoxìng.", en: "She looks very happy today." },
      { zh: "听到这个消息，我很高兴。", pinyin: "Tīngdào zhège xiāoxi, wǒ hěn gāoxìng.", en: "I'm happy to hear this news." }
    ]
  },
  {
    hanzi: "明白",
    pinyin: "míngbai",
    meaning: "to understand",
    examples: [
      { zh: "你明白我的意思吗？", pinyin: "Nǐ míngbai wǒ de yìsi ma?", en: "Do you understand what I mean?" },
      { zh: "我明白了！", pinyin: "Wǒ míngbai le!", en: "I understand now!" },
      { zh: "这个问题我还不太明白。", pinyin: "Zhège wèntí wǒ hái bú tài míngbai.", en: "I still don't quite understand this question." }
    ]
  }
];
