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
  },

  // ---------- Phrases covering the 200 most common characters ----------
  {
    hanzi: "的确", pinyin: "díquè", meaning: "indeed; really",
    examples: [
      { zh: "这个菜的确很好吃。", pinyin: "Zhège cài díquè hěn hǎochī.", en: "This dish really is delicious." },
      { zh: "他的确很忙。", pinyin: "Tā díquè hěn máng.", en: "He is indeed very busy." }
    ]
  },
  {
    hanzi: "一起", pinyin: "yìqǐ", meaning: "together",
    examples: [
      { zh: "我们一起去吧。", pinyin: "Wǒmen yìqǐ qù ba.", en: "Let's go together." },
      { zh: "我和妈妈住在一起。", pinyin: "Wǒ hé māma zhù zài yìqǐ.", en: "I live with my mom." }
    ]
  },
  {
    hanzi: "但是", pinyin: "dànshì", meaning: "but; however",
    examples: [
      { zh: "我想去，但是我没有时间。", pinyin: "Wǒ xiǎng qù, dànshì wǒ méiyǒu shíjiān.", en: "I want to go, but I don't have time." },
      { zh: "中文很难，但是很有意思。", pinyin: "Zhōngwén hěn nán, dànshì hěn yǒu yìsi.", en: "Chinese is hard, but it's very interesting." }
    ]
  },
  {
    hanzi: "不同", pinyin: "bùtóng", meaning: "different",
    examples: [
      { zh: "我们的想法不同。", pinyin: "Wǒmen de xiǎngfǎ bùtóng.", en: "Our ideas are different." },
      { zh: "这两个字有什么不同？", pinyin: "Zhè liǎng ge zì yǒu shénme bùtóng?", en: "What's the difference between these two characters?" }
    ]
  },
  {
    hanzi: "了解", pinyin: "liǎojiě", meaning: "to understand; to get to know",
    examples: [
      { zh: "我想了解中国文化。", pinyin: "Wǒ xiǎng liǎojiě Zhōngguó wénhuà.", en: "I want to learn about Chinese culture." },
      { zh: "你了解他吗？", pinyin: "Nǐ liǎojiě tā ma?", en: "Do you know him well?" }
    ]
  },
  {
    hanzi: "现在", pinyin: "xiànzài", meaning: "now",
    examples: [
      { zh: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", en: "What time is it now?" },
      { zh: "我现在很忙。", pinyin: "Wǒ xiànzài hěn máng.", en: "I'm busy right now." }
    ]
  },
  {
    hanzi: "人民", pinyin: "rénmín", meaning: "the people",
    examples: [
      { zh: "这是人民币。", pinyin: "Zhè shì Rénmínbì.", en: "This is Renminbi (Chinese currency)." },
      { zh: "政府应该为人民服务。", pinyin: "Zhèngfǔ yīnggāi wèi rénmín fúwù.", en: "The government should serve the people." }
    ]
  },
  {
    hanzi: "没有", pinyin: "méiyǒu", meaning: "to not have; there isn't",
    examples: [
      { zh: "我没有钱。", pinyin: "Wǒ méiyǒu qián.", en: "I don't have any money." },
      { zh: "这里没有人。", pinyin: "Zhèlǐ méiyǒu rén.", en: "There's nobody here." }
    ]
  },
  {
    hanzi: "我们", pinyin: "wǒmen", meaning: "we; us",
    examples: [
      { zh: "我们是好朋友。", pinyin: "Wǒmen shì hǎo péngyou.", en: "We are good friends." },
      { zh: "明天我们去公园吧。", pinyin: "Míngtiān wǒmen qù gōngyuán ba.", en: "Let's go to the park tomorrow." }
    ]
  },
  {
    hanzi: "他们", pinyin: "tāmen", meaning: "they; them",
    examples: [
      { zh: "他们是我的同学。", pinyin: "Tāmen shì wǒ de tóngxué.", en: "They are my classmates." },
      { zh: "他们明天回家。", pinyin: "Tāmen míngtiān huíjiā.", en: "They're going home tomorrow." }
    ]
  },
  {
    hanzi: "她们", pinyin: "tāmen", meaning: "they; them (women)",
    examples: [
      { zh: "她们是姐妹。", pinyin: "Tāmen shì jiěmèi.", en: "They are sisters." },
      { zh: "她们正在跳舞。", pinyin: "Tāmen zhèngzài tiàowǔ.", en: "They're dancing." }
    ]
  },
  {
    hanzi: "这样", pinyin: "zhèyàng", meaning: "like this; this way",
    examples: [
      { zh: "你不应该这样做。", pinyin: "Nǐ bù yīnggāi zhèyàng zuò.", en: "You shouldn't do it this way." },
      { zh: "原来是这样！", pinyin: "Yuánlái shì zhèyàng!", en: "So that's how it is!" }
    ]
  },
  {
    hanzi: "个性", pinyin: "gèxìng", meaning: "personality",
    examples: [
      { zh: "她很有个性。", pinyin: "Tā hěn yǒu gèxìng.", en: "She has a lot of personality." },
      { zh: "每个人的个性都不一样。", pinyin: "Měi ge rén de gèxìng dōu bù yíyàng.", en: "Everyone's personality is different." }
    ]
  },
  {
    hanzi: "中国", pinyin: "Zhōngguó", meaning: "China",
    examples: [
      { zh: "我想去中国旅游。", pinyin: "Wǒ xiǎng qù Zhōngguó lǚyóu.", en: "I want to travel to China." },
      { zh: "中国很大。", pinyin: "Zhōngguó hěn dà.", en: "China is very big." }
    ]
  },
  {
    hanzi: "后来", pinyin: "hòulái", meaning: "afterwards; later",
    examples: [
      { zh: "后来我们成了好朋友。", pinyin: "Hòulái wǒmen chéng le hǎo péngyou.", en: "Later we became good friends." },
      { zh: "后来发生了什么？", pinyin: "Hòulái fāshēng le shénme?", en: "What happened after that?" }
    ]
  },
  {
    hanzi: "上次", pinyin: "shàngcì", meaning: "last time",
    examples: [
      { zh: "上次我们在哪儿见面的？", pinyin: "Shàngcì wǒmen zài nǎr jiànmiàn de?", en: "Where did we meet last time?" },
      { zh: "上次的考试很难。", pinyin: "Shàngcì de kǎoshì hěn nán.", en: "The last exam was very hard." }
    ]
  },
  {
    hanzi: "大家", pinyin: "dàjiā", meaning: "everyone",
    examples: [
      { zh: "大家好！", pinyin: "Dàjiā hǎo!", en: "Hello, everyone!" },
      { zh: "大家都很喜欢他。", pinyin: "Dàjiā dōu hěn xǐhuan tā.", en: "Everyone likes him." }
    ]
  },
  {
    hanzi: "因为", pinyin: "yīnwèi", meaning: "because",
    examples: [
      { zh: "因为下雨，我们没有出去。", pinyin: "Yīnwèi xià yǔ, wǒmen méiyǒu chūqù.", en: "Because it rained, we didn't go out." },
      { zh: "我学中文是因为我喜欢中国文化。", pinyin: "Wǒ xué Zhōngwén shì yīnwèi wǒ xǐhuan Zhōngguó wénhuà.", en: "I study Chinese because I like Chinese culture." }
    ]
  },
  {
    hanzi: "和平", pinyin: "hépíng", meaning: "peace",
    examples: [
      { zh: "大家都希望世界和平。", pinyin: "Dàjiā dōu xīwàng shìjiè hépíng.", en: "Everyone hopes for world peace." },
      { zh: "这是一个和平的国家。", pinyin: "Zhè shì yí ge hépíng de guójiā.", en: "This is a peaceful country." }
    ]
  },
  {
    hanzi: "地方", pinyin: "dìfang", meaning: "place",
    examples: [
      { zh: "这个地方很漂亮。", pinyin: "Zhège dìfang hěn piàoliang.", en: "This place is beautiful." },
      { zh: "你住在什么地方？", pinyin: "Nǐ zhù zài shénme dìfang?", en: "Where do you live?" }
    ]
  },
  {
    hanzi: "得到", pinyin: "dédào", meaning: "to get; to obtain",
    examples: [
      { zh: "他得到了一个好工作。", pinyin: "Tā dédào le yí ge hǎo gōngzuò.", en: "He got a good job." },
      { zh: "我得到了很多帮助。", pinyin: "Wǒ dédào le hěn duō bāngzhù.", en: "I received a lot of help." }
    ]
  },
  {
    hanzi: "可以", pinyin: "kěyǐ", meaning: "can; may",
    examples: [
      { zh: "我可以进来吗？", pinyin: "Wǒ kěyǐ jìnlái ma?", en: "May I come in?" },
      { zh: "这里可以拍照。", pinyin: "Zhèlǐ kěyǐ pāizhào.", en: "You can take photos here." }
    ]
  },
  {
    hanzi: "说话", pinyin: "shuōhuà", meaning: "to speak; to talk",
    examples: [
      { zh: "请不要在图书馆说话。", pinyin: "Qǐng búyào zài túshūguǎn shuōhuà.", en: "Please don't talk in the library." },
      { zh: "他说话很快。", pinyin: "Tā shuōhuà hěn kuài.", en: "He talks very fast." }
    ]
  },
  {
    hanzi: "重要", pinyin: "zhòngyào", meaning: "important",
    examples: [
      { zh: "身体健康最重要。", pinyin: "Shēntǐ jiànkāng zuì zhòngyào.", en: "Good health is the most important thing." },
      { zh: "这是一个很重要的问题。", pinyin: "Zhè shì yí ge hěn zhòngyào de wèntí.", en: "This is a very important question." }
    ]
  },
  {
    hanzi: "就是", pinyin: "jiùshì", meaning: "exactly; that is",
    examples: [
      { zh: "他就是我的老师。", pinyin: "Tā jiùshì wǒ de lǎoshī.", en: "He's my teacher (that's him)." },
      { zh: "这就是我想要的。", pinyin: "Zhè jiùshì wǒ xiǎng yào de.", en: "This is exactly what I want." }
    ]
  },
  {
    hanzi: "出发", pinyin: "chūfā", meaning: "to set off; to depart",
    examples: [
      { zh: "我们几点出发？", pinyin: "Wǒmen jǐ diǎn chūfā?", en: "What time do we set off?" },
      { zh: "火车八点出发。", pinyin: "Huǒchē bā diǎn chūfā.", en: "The train departs at eight." }
    ]
  },
  {
    hanzi: "开会", pinyin: "kāihuì", meaning: "to have a meeting",
    examples: [
      { zh: "老板正在开会。", pinyin: "Lǎobǎn zhèngzài kāihuì.", en: "The boss is in a meeting." },
      { zh: "我们下午三点开会。", pinyin: "Wǒmen xiàwǔ sān diǎn kāihuì.", en: "We have a meeting at 3 p.m." }
    ]
  },
  {
    hanzi: "也许", pinyin: "yěxǔ", meaning: "maybe; perhaps",
    examples: [
      { zh: "也许他明天会来。", pinyin: "Yěxǔ tā míngtiān huì lái.", en: "Maybe he'll come tomorrow." },
      { zh: "你说得也许对。", pinyin: "Nǐ shuō de yěxǔ duì.", en: "You might be right." }
    ]
  },
  {
    hanzi: "生日", pinyin: "shēngrì", meaning: "birthday",
    examples: [
      { zh: "祝你生日快乐！", pinyin: "Zhù nǐ shēngrì kuàilè!", en: "Happy birthday!" },
      { zh: "你的生日是几月几号？", pinyin: "Nǐ de shēngrì shì jǐ yuè jǐ hào?", en: "When is your birthday?" }
    ]
  },
  {
    hanzi: "能力", pinyin: "nénglì", meaning: "ability",
    examples: [
      { zh: "他的工作能力很强。", pinyin: "Tā de gōngzuò nénglì hěn qiáng.", en: "He's very capable at work." },
      { zh: "我相信你的能力。", pinyin: "Wǒ xiāngxìn nǐ de nénglì.", en: "I believe in your ability." }
    ]
  },
  {
    hanzi: "而且", pinyin: "érqiě", meaning: "and also; moreover",
    examples: [
      { zh: "这家饭馆便宜，而且好吃。", pinyin: "Zhè jiā fànguǎn piányi, érqiě hǎochī.", en: "This restaurant is cheap, and the food is good too." },
      { zh: "她会说中文，而且说得很好。", pinyin: "Tā huì shuō Zhōngwén, érqiě shuō de hěn hǎo.", en: "She speaks Chinese, and speaks it well." }
    ]
  },
  {
    hanzi: "儿子", pinyin: "érzi", meaning: "son",
    examples: [
      { zh: "我儿子今年五岁。", pinyin: "Wǒ érzi jīnnián wǔ suì.", en: "My son is five this year." },
      { zh: "他们有一个儿子。", pinyin: "Tāmen yǒu yí ge érzi.", en: "They have a son." }
    ]
  },
  {
    hanzi: "那些", pinyin: "nàxiē", meaning: "those",
    examples: [
      { zh: "那些书是谁的？", pinyin: "Nàxiē shū shì shéi de?", en: "Whose books are those?" },
      { zh: "我不认识那些人。", pinyin: "Wǒ bú rènshi nàxiē rén.", en: "I don't know those people." }
    ]
  },
  {
    hanzi: "关于", pinyin: "guānyú", meaning: "about; regarding",
    examples: [
      { zh: "这是一本关于中国历史的书。", pinyin: "Zhè shì yì běn guānyú Zhōngguó lìshǐ de shū.", en: "This is a book about Chinese history." },
      { zh: "关于这件事，我们明天再谈。", pinyin: "Guānyú zhè jiàn shì, wǒmen míngtiān zài tán.", en: "We'll talk about this matter tomorrow." }
    ]
  },
  {
    hanzi: "接着", pinyin: "jiēzhe", meaning: "then; next; to continue",
    examples: [
      { zh: "请接着说。", pinyin: "Qǐng jiēzhe shuō.", en: "Please go on." },
      { zh: "我们先吃饭，接着去看电影。", pinyin: "Wǒmen xiān chī fàn, jiēzhe qù kàn diànyǐng.", en: "We'll eat first, then go see a movie." }
    ]
  },
  {
    hanzi: "下午", pinyin: "xiàwǔ", meaning: "afternoon",
    examples: [
      { zh: "我下午有课。", pinyin: "Wǒ xiàwǔ yǒu kè.", en: "I have class this afternoon." },
      { zh: "明天下午你有空吗？", pinyin: "Míngtiān xiàwǔ nǐ yǒu kòng ma?", en: "Are you free tomorrow afternoon?" }
    ]
  },
  {
    hanzi: "自己", pinyin: "zìjǐ", meaning: "oneself",
    examples: [
      { zh: "我自己做饭。", pinyin: "Wǒ zìjǐ zuò fàn.", en: "I cook for myself." },
      { zh: "你要相信自己。", pinyin: "Nǐ yào xiāngxìn zìjǐ.", en: "You have to believe in yourself." }
    ]
  },
  {
    hanzi: "之前", pinyin: "zhīqián", meaning: "before",
    examples: [
      { zh: "睡觉之前别喝咖啡。", pinyin: "Shuìjiào zhīqián bié hē kāfēi.", en: "Don't drink coffee before bed." },
      { zh: "我之前没来过这里。", pinyin: "Wǒ zhīqián méi láiguo zhèlǐ.", en: "I haven't been here before." }
    ]
  },
  {
    hanzi: "新年", pinyin: "xīnnián", meaning: "New Year",
    examples: [
      { zh: "新年快乐！", pinyin: "Xīnnián kuàilè!", en: "Happy New Year!" },
      { zh: "新年的时候我们回家。", pinyin: "Xīnnián de shíhou wǒmen huíjiā.", en: "We go home for the New Year." }
    ]
  },
  {
    hanzi: "过去", pinyin: "guòqù", meaning: "the past; to go over",
    examples: [
      { zh: "过去的事情就别想了。", pinyin: "Guòqù de shìqing jiù bié xiǎng le.", en: "Don't dwell on the past." },
      { zh: "你过去看看。", pinyin: "Nǐ guòqu kànkan.", en: "Go over and take a look." }
    ]
  },
  {
    hanzi: "里面", pinyin: "lǐmiàn", meaning: "inside",
    examples: [
      { zh: "里面有人吗？", pinyin: "Lǐmiàn yǒu rén ma?", en: "Is anyone inside?" },
      { zh: "包里面有什么？", pinyin: "Bāo lǐmiàn yǒu shénme?", en: "What's in the bag?" }
    ]
  },
  {
    hanzi: "对面", pinyin: "duìmiàn", meaning: "opposite; across from",
    examples: [
      { zh: "银行在超市对面。", pinyin: "Yínháng zài chāoshì duìmiàn.", en: "The bank is across from the supermarket." },
      { zh: "他就住在我家对面。", pinyin: "Tā jiù zhù zài wǒ jiā duìmiàn.", en: "He lives right across from me." }
    ]
  },
  {
    hanzi: "使用", pinyin: "shǐyòng", meaning: "to use",
    examples: [
      { zh: "这个手机很容易使用。", pinyin: "Zhège shǒujī hěn róngyì shǐyòng.", en: "This phone is easy to use." },
      { zh: "你会使用这个软件吗？", pinyin: "Nǐ huì shǐyòng zhège ruǎnjiàn ma?", en: "Do you know how to use this software?" }
    ]
  },
  {
    hanzi: "行动", pinyin: "xíngdòng", meaning: "action; to take action",
    examples: [
      { zh: "我们马上行动吧。", pinyin: "Wǒmen mǎshàng xíngdòng ba.", en: "Let's take action right away." },
      { zh: "行动比说话更重要。", pinyin: "Xíngdòng bǐ shuōhuà gèng zhòngyào.", en: "Actions matter more than words." }
    ]
  },
  {
    hanzi: "所以", pinyin: "suǒyǐ", meaning: "so; therefore",
    examples: [
      { zh: "我病了，所以没去上班。", pinyin: "Wǒ bìng le, suǒyǐ méi qù shàngbān.", en: "I was sick, so I didn't go to work." },
      { zh: "因为下雨，所以比赛取消了。", pinyin: "Yīnwèi xià yǔ, suǒyǐ bǐsài qǔxiāo le.", en: "Because it rained, the game was canceled." }
    ]
  },
  {
    hanzi: "当然", pinyin: "dāngrán", meaning: "of course",
    examples: [
      { zh: "当然可以！", pinyin: "Dāngrán kěyǐ!", en: "Of course!" },
      { zh: "我当然记得你。", pinyin: "Wǒ dāngrán jìde nǐ.", en: "Of course I remember you." }
    ]
  },
  {
    hanzi: "各种", pinyin: "gèzhǒng", meaning: "all kinds of",
    examples: [
      { zh: "这家店有各种水果。", pinyin: "Zhè jiā diàn yǒu gèzhǒng shuǐguǒ.", en: "This shop has all kinds of fruit." },
      { zh: "他试了各种办法。", pinyin: "Tā shì le gèzhǒng bànfǎ.", en: "He tried every method he could think of." }
    ]
  },
  {
    hanzi: "事情", pinyin: "shìqing", meaning: "thing; matter",
    examples: [
      { zh: "我有一件事情想问你。", pinyin: "Wǒ yǒu yí jiàn shìqing xiǎng wèn nǐ.", en: "There's something I want to ask you." },
      { zh: "事情没有那么简单。", pinyin: "Shìqing méiyǒu nàme jiǎndān.", en: "Things aren't that simple." }
    ]
  },
  {
    hanzi: "成功", pinyin: "chénggōng", meaning: "success; to succeed",
    examples: [
      { zh: "祝你成功！", pinyin: "Zhù nǐ chénggōng!", en: "I wish you success!" },
      { zh: "他的计划成功了。", pinyin: "Tā de jìhuà chénggōng le.", en: "His plan succeeded." }
    ]
  },
  {
    hanzi: "多少", pinyin: "duōshao", meaning: "how many; how much",
    examples: [
      { zh: "这个多少钱？", pinyin: "Zhège duōshao qián?", en: "How much is this?" },
      { zh: "你们班有多少学生？", pinyin: "Nǐmen bān yǒu duōshao xuésheng?", en: "How many students are in your class?" }
    ]
  },
  {
    hanzi: "已经", pinyin: "yǐjīng", meaning: "already",
    examples: [
      { zh: "我已经吃饭了。", pinyin: "Wǒ yǐjīng chī fàn le.", en: "I've already eaten." },
      { zh: "已经十点了。", pinyin: "Yǐjīng shí diǎn le.", en: "It's already ten o'clock." }
    ]
  },
  {
    hanzi: "什么", pinyin: "shénme", meaning: "what",
    examples: [
      { zh: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", en: "What's your name?" },
      { zh: "你在做什么？", pinyin: "Nǐ zài zuò shénme?", en: "What are you doing?" }
    ]
  },
  {
    hanzi: "想法", pinyin: "xiǎngfǎ", meaning: "idea; opinion",
    examples: [
      { zh: "这是个好想法。", pinyin: "Zhè shì ge hǎo xiǎngfǎ.", en: "That's a good idea." },
      { zh: "你有什么想法？", pinyin: "Nǐ yǒu shénme xiǎngfǎ?", en: "What do you think?" }
    ]
  },
  {
    hanzi: "如果", pinyin: "rúguǒ", meaning: "if",
    examples: [
      { zh: "如果明天下雨，我们就不去了。", pinyin: "Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.", en: "If it rains tomorrow, we won't go." },
      { zh: "如果你有问题，可以问我。", pinyin: "Rúguǒ nǐ yǒu wèntí, kěyǐ wèn wǒ.", en: "If you have questions, you can ask me." }
    ]
  },
  {
    hanzi: "首都", pinyin: "shǒudū", meaning: "capital city",
    examples: [
      { zh: "北京是中国的首都。", pinyin: "Běijīng shì Zhōngguó de shǒudū.", en: "Beijing is the capital of China." },
      { zh: "日本的首都是东京。", pinyin: "Rìběn de shǒudū shì Dōngjīng.", en: "Tokyo is the capital of Japan." }
    ]
  },
  {
    hanzi: "看见", pinyin: "kànjiàn", meaning: "to see",
    examples: [
      { zh: "你看见我的手机了吗？", pinyin: "Nǐ kànjiàn wǒ de shǒujī le ma?", en: "Have you seen my phone?" },
      { zh: "我看见他进去了。", pinyin: "Wǒ kànjiàn tā jìnqù le.", en: "I saw him go in." }
    ]
  },
  {
    hanzi: "一定", pinyin: "yídìng", meaning: "definitely; must",
    examples: [
      { zh: "我一定会来。", pinyin: "Wǒ yídìng huì lái.", en: "I'll definitely come." },
      { zh: "你一定要小心。", pinyin: "Nǐ yídìng yào xiǎoxīn.", en: "You must be careful." }
    ]
  },
  {
    hanzi: "部分", pinyin: "bùfen", meaning: "part; portion",
    examples: [
      { zh: "大部分学生都来了。", pinyin: "Dà bùfen xuésheng dōu lái le.", en: "Most of the students came." },
      { zh: "这是工作的一部分。", pinyin: "Zhè shì gōngzuò de yí bùfen.", en: "This is part of the job." }
    ]
  },
  {
    hanzi: "还是", pinyin: "háishi", meaning: "or (in questions); still",
    examples: [
      { zh: "你喝茶还是喝咖啡？", pinyin: "Nǐ hē chá háishi hē kāfēi?", en: "Would you like tea or coffee?" },
      { zh: "我还是不明白。", pinyin: "Wǒ háishi bù míngbai.", en: "I still don't understand." }
    ]
  },
  {
    hanzi: "进步", pinyin: "jìnbù", meaning: "progress; to improve",
    examples: [
      { zh: "你的中文进步很大！", pinyin: "Nǐ de Zhōngwén jìnbù hěn dà!", en: "Your Chinese has improved a lot!" },
      { zh: "每天都有一点进步。", pinyin: "Měitiān dōu yǒu yìdiǎn jìnbù.", en: "A little progress every day." }
    ]
  },
  {
    hanzi: "小心", pinyin: "xiǎoxīn", meaning: "careful; to be careful",
    examples: [
      { zh: "小心！车来了！", pinyin: "Xiǎoxīn! Chē lái le!", en: "Careful! A car is coming!" },
      { zh: "路上小心。", pinyin: "Lùshang xiǎoxīn.", en: "Take care on the way." }
    ]
  },
  {
    hanzi: "主要", pinyin: "zhǔyào", meaning: "main; mainly",
    examples: [
      { zh: "主要的问题是没有时间。", pinyin: "Zhǔyào de wèntí shì méiyǒu shíjiān.", en: "The main problem is lack of time." },
      { zh: "我来这里主要是为了学习。", pinyin: "Wǒ lái zhèlǐ zhǔyào shì wèile xuéxí.", en: "I came here mainly to study." }
    ]
  },
  {
    hanzi: "理由", pinyin: "lǐyóu", meaning: "reason",
    examples: [
      { zh: "你有什么理由？", pinyin: "Nǐ yǒu shénme lǐyóu?", en: "What's your reason?" },
      { zh: "他没有理由生气。", pinyin: "Tā méiyǒu lǐyóu shēngqì.", en: "He has no reason to be angry." }
    ]
  },
  {
    hanzi: "身体", pinyin: "shēntǐ", meaning: "body; health",
    examples: [
      { zh: "你身体好吗？", pinyin: "Nǐ shēntǐ hǎo ma?", en: "How is your health?" },
      { zh: "多运动对身体好。", pinyin: "Duō yùndòng duì shēntǐ hǎo.", en: "Exercising more is good for your body." }
    ]
  },
  {
    hanzi: "日本", pinyin: "Rìběn", meaning: "Japan",
    examples: [
      { zh: "我去过日本。", pinyin: "Wǒ qùguo Rìběn.", en: "I've been to Japan." },
      { zh: "她是日本人。", pinyin: "Tā shì Rìběn rén.", en: "She is Japanese." }
    ]
  },
  {
    hanzi: "只有", pinyin: "zhǐyǒu", meaning: "only; only if",
    examples: [
      { zh: "我只有十块钱。", pinyin: "Wǒ zhǐyǒu shí kuài qián.", en: "I only have ten yuan." },
      { zh: "只有你能帮我。", pinyin: "Zhǐyǒu nǐ néng bāng wǒ.", en: "Only you can help me." }
    ]
  },
  {
    hanzi: "从来", pinyin: "cónglái", meaning: "always; (with 不/没) never",
    examples: [
      { zh: "我从来没去过美国。", pinyin: "Wǒ cónglái méi qùguo Měiguó.", en: "I've never been to America." },
      { zh: "他从来不喝酒。", pinyin: "Tā cónglái bù hē jiǔ.", en: "He never drinks alcohol." }
    ]
  },
  {
    hanzi: "其实", pinyin: "qíshí", meaning: "actually; in fact",
    examples: [
      { zh: "其实我不喜欢咖啡。", pinyin: "Qíshí wǒ bù xǐhuan kāfēi.", en: "Actually, I don't like coffee." },
      { zh: "这个问题其实很简单。", pinyin: "Zhège wèntí qíshí hěn jiǎndān.", en: "This question is actually very simple." }
    ]
  },
  {
    hanzi: "军人", pinyin: "jūnrén", meaning: "soldier",
    examples: [
      { zh: "他爸爸是军人。", pinyin: "Tā bàba shì jūnrén.", en: "His dad is a soldier." },
      { zh: "他当了十年军人。", pinyin: "Tā dāng le shí nián jūnrén.", en: "He was a soldier for ten years." }
    ]
  },
  {
    hanzi: "或者", pinyin: "huòzhě", meaning: "or",
    examples: [
      { zh: "你可以坐地铁或者打车。", pinyin: "Nǐ kěyǐ zuò dìtiě huòzhě dǎchē.", en: "You can take the subway or a taxi." },
      { zh: "明天或者后天都可以。", pinyin: "Míngtiān huòzhě hòutiān dōu kěyǐ.", en: "Tomorrow or the day after both work." }
    ]
  },
  {
    hanzi: "意思", pinyin: "yìsi", meaning: "meaning",
    examples: [
      { zh: "这个字是什么意思？", pinyin: "Zhège zì shì shénme yìsi?", en: "What does this character mean?" },
      { zh: "这个电影很有意思。", pinyin: "Zhège diànyǐng hěn yǒu yìsi.", en: "This movie is very interesting." }
    ]
  },
  {
    hanzi: "无聊", pinyin: "wúliáo", meaning: "bored; boring",
    examples: [
      { zh: "我在家很无聊。", pinyin: "Wǒ zài jiā hěn wúliáo.", en: "I'm bored at home." },
      { zh: "这本书太无聊了。", pinyin: "Zhè běn shū tài wúliáo le.", en: "This book is so boring." }
    ]
  },
  {
    hanzi: "它们", pinyin: "tāmen", meaning: "they; them (things or animals)",
    examples: [
      { zh: "我有两只猫，它们都很可爱。", pinyin: "Wǒ yǒu liǎng zhī māo, tāmen dōu hěn kě'ài.", en: "I have two cats, and they're both cute." },
      { zh: "这些书很旧，它们是我爷爷的。", pinyin: "Zhèxiē shū hěn jiù, tāmen shì wǒ yéye de.", en: "These books are old; they were my grandpa's." }
    ]
  },
  {
    hanzi: "参与", pinyin: "cānyù", meaning: "to take part in",
    examples: [
      { zh: "很多人参与了这个活动。", pinyin: "Hěn duō rén cānyù le zhège huódòng.", en: "Many people took part in this event." },
      { zh: "我想参与这个项目。", pinyin: "Wǒ xiǎng cānyù zhège xiàngmù.", en: "I'd like to take part in this project." }
    ]
  },
  {
    hanzi: "长大", pinyin: "zhǎngdà", meaning: "to grow up",
    examples: [
      { zh: "我在北京长大。", pinyin: "Wǒ zài Běijīng zhǎngdà.", en: "I grew up in Beijing." },
      { zh: "你长大以后想做什么？", pinyin: "Nǐ zhǎngdà yǐhòu xiǎng zuò shénme?", en: "What do you want to be when you grow up?" }
    ]
  },
  {
    hanzi: "把握", pinyin: "bǎwò", meaning: "to seize; confidence (of success)",
    examples: [
      { zh: "我没有把握。", pinyin: "Wǒ méiyǒu bǎwò.", en: "I'm not sure I can do it." },
      { zh: "你要把握这个机会。", pinyin: "Nǐ yào bǎwò zhège jīhuì.", en: "You should seize this opportunity." }
    ]
  },
  {
    hanzi: "手机", pinyin: "shǒujī", meaning: "cell phone",
    examples: [
      { zh: "我的手机没电了。", pinyin: "Wǒ de shǒujī méi diàn le.", en: "My phone's battery is dead." },
      { zh: "你的手机号码是多少？", pinyin: "Nǐ de shǒujī hàomǎ shì duōshao?", en: "What's your phone number?" }
    ]
  },
  {
    hanzi: "十分", pinyin: "shífēn", meaning: "very; extremely",
    examples: [
      { zh: "我十分感谢你。", pinyin: "Wǒ shífēn gǎnxiè nǐ.", en: "I'm extremely grateful to you." },
      { zh: "今天十分热。", pinyin: "Jīntiān shífēn rè.", en: "It's extremely hot today." }
    ]
  },
  {
    hanzi: "第二", pinyin: "dì'èr", meaning: "second (2nd)",
    examples: [
      { zh: "这是我第二次来中国。", pinyin: "Zhè shì wǒ dì'èr cì lái Zhōngguó.", en: "This is my second time in China." },
      { zh: "他考了第二名。", pinyin: "Tā kǎo le dì'èr míng.", en: "He came in second on the exam." }
    ]
  },
  {
    hanzi: "公司", pinyin: "gōngsī", meaning: "company",
    examples: [
      { zh: "我在一家大公司工作。", pinyin: "Wǒ zài yì jiā dà gōngsī gōngzuò.", en: "I work at a big company." },
      { zh: "公司离我家很近。", pinyin: "Gōngsī lí wǒ jiā hěn jìn.", en: "The company is close to my home." }
    ]
  },
  {
    hanzi: "因此", pinyin: "yīncǐ", meaning: "therefore; so",
    examples: [
      { zh: "他很努力，因此进步很快。", pinyin: "Tā hěn nǔlì, yīncǐ jìnbù hěn kuài.", en: "He works hard, so he improves quickly." },
      { zh: "路上堵车，因此我迟到了。", pinyin: "Lùshang dǔchē, yīncǐ wǒ chídào le.", en: "There was traffic, so I was late." }
    ]
  },
  {
    hanzi: "安全", pinyin: "ānquán", meaning: "safe; safety",
    examples: [
      { zh: "这里很安全。", pinyin: "Zhèlǐ hěn ānquán.", en: "It's very safe here." },
      { zh: "开车要注意安全。", pinyin: "Kāichē yào zhùyì ānquán.", en: "Drive safely." }
    ]
  },
  {
    hanzi: "三月", pinyin: "sānyuè", meaning: "March",
    examples: [
      { zh: "三月天气开始暖和了。", pinyin: "Sānyuè tiānqì kāishǐ nuǎnhuo le.", en: "In March the weather starts to get warm." },
      { zh: "我三月去上海。", pinyin: "Wǒ sānyuè qù Shànghǎi.", en: "I'm going to Shanghai in March." }
    ]
  },
  {
    hanzi: "点头", pinyin: "diǎntóu", meaning: "to nod",
    examples: [
      { zh: "他点头说好。", pinyin: "Tā diǎntóu shuō hǎo.", en: "He nodded and said okay." },
      { zh: "她点头表示同意。", pinyin: "Tā diǎntóu biǎoshì tóngyì.", en: "She nodded in agreement." }
    ]
  },
  {
    hanzi: "正常", pinyin: "zhèngcháng", meaning: "normal",
    examples: [
      { zh: "这很正常。", pinyin: "Zhè hěn zhèngcháng.", en: "That's perfectly normal." },
      { zh: "他的身体一切正常。", pinyin: "Tā de shēntǐ yíqiè zhèngcháng.", en: "His health is completely normal." }
    ]
  },
  {
    hanzi: "作业", pinyin: "zuòyè", meaning: "homework",
    examples: [
      { zh: "我还没做完作业。", pinyin: "Wǒ hái méi zuòwán zuòyè.", en: "I haven't finished my homework yet." },
      { zh: "今天的作业很多。", pinyin: "Jīntiān de zuòyè hěn duō.", en: "There's a lot of homework today." }
    ]
  },
  {
    hanzi: "外国", pinyin: "wàiguó", meaning: "foreign country",
    examples: [
      { zh: "他是外国人。", pinyin: "Tā shì wàiguó rén.", en: "He's a foreigner." },
      { zh: "你去过外国吗？", pinyin: "Nǐ qùguo wàiguó ma?", en: "Have you been abroad?" }
    ]
  },
  {
    hanzi: "将来", pinyin: "jiānglái", meaning: "the future; in the future",
    examples: [
      { zh: "将来我想当医生。", pinyin: "Jiānglái wǒ xiǎng dāng yīshēng.", en: "In the future I want to be a doctor." },
      { zh: "谁也不知道将来会怎样。", pinyin: "Shéi yě bù zhīdào jiānglái huì zěnyàng.", en: "Nobody knows what the future holds." }
    ]
  },
  {
    hanzi: "两个", pinyin: "liǎng ge", meaning: "two (of something)",
    examples: [
      { zh: "我要两个包子。", pinyin: "Wǒ yào liǎng ge bāozi.", en: "I'd like two steamed buns." },
      { zh: "他有两个孩子。", pinyin: "Tā yǒu liǎng ge háizi.", en: "He has two children." }
    ]
  },
  {
    hanzi: "问题", pinyin: "wèntí", meaning: "question; problem",
    examples: [
      { zh: "我可以问你一个问题吗？", pinyin: "Wǒ kěyǐ wèn nǐ yí ge wèntí ma?", en: "Can I ask you a question?" },
      { zh: "没问题！", pinyin: "Méi wèntí!", en: "No problem!" }
    ]
  },
  {
    hanzi: "很多", pinyin: "hěn duō", meaning: "many; a lot",
    examples: [
      { zh: "这里有很多人。", pinyin: "Zhèlǐ yǒu hěn duō rén.", en: "There are a lot of people here." },
      { zh: "我学到了很多。", pinyin: "Wǒ xuédào le hěn duō.", en: "I learned a lot." }
    ]
  },
  {
    hanzi: "最近", pinyin: "zuìjìn", meaning: "recently; lately",
    examples: [
      { zh: "你最近怎么样？", pinyin: "Nǐ zuìjìn zěnmeyàng?", en: "How have you been lately?" },
      { zh: "我最近很忙。", pinyin: "Wǒ zuìjìn hěn máng.", en: "I've been busy lately." }
    ]
  },
  {
    hanzi: "并且", pinyin: "bìngqiě", meaning: "and; moreover",
    examples: [
      { zh: "他完成了工作，并且做得很好。", pinyin: "Tā wánchéng le gōngzuò, bìngqiě zuò de hěn hǎo.", en: "He finished the work, and did it well." },
      { zh: "这个方法简单，并且有用。", pinyin: "Zhège fāngfǎ jiǎndān, bìngqiě yǒuyòng.", en: "This method is simple and useful." }
    ]
  },
  {
    hanzi: "动物", pinyin: "dòngwù", meaning: "animal",
    examples: [
      { zh: "你喜欢什么动物？", pinyin: "Nǐ xǐhuan shénme dòngwù?", en: "What animals do you like?" },
      { zh: "我们去动物园吧。", pinyin: "Wǒmen qù dòngwùyuán ba.", en: "Let's go to the zoo." }
    ]
  },
  {
    hanzi: "应该", pinyin: "yīnggāi", meaning: "should; ought to",
    examples: [
      { zh: "你应该早点睡觉。", pinyin: "Nǐ yīnggāi zǎo diǎn shuìjiào.", en: "You should go to bed earlier." },
      { zh: "他应该到了。", pinyin: "Tā yīnggāi dào le.", en: "He should have arrived by now." }
    ]
  },
  {
    hanzi: "战争", pinyin: "zhànzhēng", meaning: "war",
    examples: [
      { zh: "没有人喜欢战争。", pinyin: "Méiyǒu rén xǐhuan zhànzhēng.", en: "Nobody likes war." },
      { zh: "这是一部关于战争的电影。", pinyin: "Zhè shì yí bù guānyú zhànzhēng de diànyǐng.", en: "This is a movie about war." }
    ]
  },
  {
    hanzi: "方向", pinyin: "fāngxiàng", meaning: "direction",
    examples: [
      { zh: "我们走错方向了。", pinyin: "Wǒmen zǒu cuò fāngxiàng le.", en: "We're going the wrong way." },
      { zh: "火车站在哪个方向？", pinyin: "Huǒchēzhàn zài nǎge fāngxiàng?", en: "Which direction is the train station?" }
    ]
  },
  {
    hanzi: "中文", pinyin: "Zhōngwén", meaning: "Chinese (language)",
    examples: [
      { zh: "你会说中文吗？", pinyin: "Nǐ huì shuō Zhōngwén ma?", en: "Can you speak Chinese?" },
      { zh: "我每天学一个小时中文。", pinyin: "Wǒ měitiān xué yí ge xiǎoshí Zhōngwén.", en: "I study Chinese for an hour every day." }
    ]
  },
  {
    hanzi: "政府", pinyin: "zhèngfǔ", meaning: "government",
    examples: [
      { zh: "政府决定修一条新路。", pinyin: "Zhèngfǔ juédìng xiū yì tiáo xīn lù.", en: "The government decided to build a new road." },
      { zh: "他在政府部门工作。", pinyin: "Tā zài zhèngfǔ bùmén gōngzuò.", en: "He works in a government department." }
    ]
  },
  {
    hanzi: "美国", pinyin: "Měiguó", meaning: "the United States",
    examples: [
      { zh: "我是美国人。", pinyin: "Wǒ shì Měiguó rén.", en: "I'm American." },
      { zh: "她在美国上大学。", pinyin: "Tā zài Měiguó shàng dàxué.", en: "She goes to college in the US." }
    ]
  },
  {
    hanzi: "相信", pinyin: "xiāngxìn", meaning: "to believe; to trust",
    examples: [
      { zh: "我相信你。", pinyin: "Wǒ xiāngxìn nǐ.", en: "I believe you." },
      { zh: "你相信吗？", pinyin: "Nǐ xiāngxìn ma?", en: "Do you believe it?" }
    ]
  },
  {
    hanzi: "再见", pinyin: "zàijiàn", meaning: "goodbye",
    examples: [
      { zh: "再见，明天见！", pinyin: "Zàijiàn, míngtiān jiàn!", en: "Goodbye, see you tomorrow!" },
      { zh: "他没说再见就走了。", pinyin: "Tā méi shuō zàijiàn jiù zǒu le.", en: "He left without saying goodbye." }
    ]
  },
  {
    hanzi: "被子", pinyin: "bèizi", meaning: "quilt; comforter",
    examples: [
      { zh: "天冷了，多盖一条被子。", pinyin: "Tiān lěng le, duō gài yì tiáo bèizi.", en: "It's getting cold, so use an extra quilt." },
      { zh: "起床以后要叠被子。", pinyin: "Qǐchuáng yǐhòu yào dié bèizi.", en: "Fold your quilt after you get up." }
    ]
  },
  {
    hanzi: "顺利", pinyin: "shùnlì", meaning: "smoothly; without a hitch",
    examples: [
      { zh: "祝你一路顺利！", pinyin: "Zhù nǐ yílù shùnlì!", en: "Have a smooth trip!" },
      { zh: "考试顺利吗？", pinyin: "Kǎoshì shùnlì ma?", en: "Did the exam go well?" }
    ]
  },
  {
    hanzi: "等待", pinyin: "děngdài", meaning: "to wait",
    examples: [
      { zh: "我们在等待消息。", pinyin: "Wǒmen zài děngdài xiāoxi.", en: "We're waiting for news." },
      { zh: "谢谢你的耐心等待。", pinyin: "Xièxie nǐ de nàixīn děngdài.", en: "Thank you for waiting patiently." }
    ]
  },
  {
    hanzi: "生产", pinyin: "shēngchǎn", meaning: "to produce; to manufacture",
    examples: [
      { zh: "这个工厂生产汽车。", pinyin: "Zhège gōngchǎng shēngchǎn qìchē.", en: "This factory makes cars." },
      { zh: "这些手机是在中国生产的。", pinyin: "Zhèxiē shǒujī shì zài Zhōngguó shēngchǎn de.", en: "These phones were made in China." }
    ]
  },
  {
    hanzi: "制度", pinyin: "zhìdù", meaning: "system; rules",
    examples: [
      { zh: "每个公司都有自己的制度。", pinyin: "Měi ge gōngsī dōu yǒu zìjǐ de zhìdù.", en: "Every company has its own rules." },
      { zh: "这个制度需要改变。", pinyin: "Zhège zhìdù xūyào gǎibiàn.", en: "This system needs to change." }
    ]
  },
  {
    hanzi: "加油", pinyin: "jiāyóu", meaning: "Come on! You can do it!; to refuel",
    examples: [
      { zh: "加油！你可以的！", pinyin: "Jiāyóu! Nǐ kěyǐ de!", en: "Go for it! You can do it!" },
      { zh: "车快没油了，我们去加油吧。", pinyin: "Chē kuài méi yóu le, wǒmen qù jiāyóu ba.", en: "The car is almost out of gas; let's go fill up." }
    ]
  },
  {
    hanzi: "东西", pinyin: "dōngxi", meaning: "thing; stuff",
    examples: [
      { zh: "你想买什么东西？", pinyin: "Nǐ xiǎng mǎi shénme dōngxi?", en: "What do you want to buy?" },
      { zh: "我的东西在哪儿？", pinyin: "Wǒ de dōngxi zài nǎr?", en: "Where are my things?" }
    ]
  },
  {
    hanzi: "斯文", pinyin: "sīwen", meaning: "refined; gentle",
    examples: [
      { zh: "他看起来很斯文。", pinyin: "Tā kàn qǐlái hěn sīwen.", en: "He looks very refined." },
      { zh: "她说话很斯文。", pinyin: "Tā shuōhuà hěn sīwen.", en: "She speaks very gently and politely." }
    ]
  },
  {
    hanzi: "合适", pinyin: "héshì", meaning: "suitable; the right fit",
    examples: [
      { zh: "这件衣服大小很合适。", pinyin: "Zhè jiàn yīfu dàxiǎo hěn héshì.", en: "This piece of clothing is just the right size." },
      { zh: "现在说这个不太合适。", pinyin: "Xiànzài shuō zhège bú tài héshì.", en: "It's not a good time to talk about this." }
    ]
  },
  {
    hanzi: "回家", pinyin: "huíjiā", meaning: "to go home",
    examples: [
      { zh: "我想回家。", pinyin: "Wǒ xiǎng huíjiā.", en: "I want to go home." },
      { zh: "你几点回家？", pinyin: "Nǐ jǐ diǎn huíjiā?", en: "What time are you going home?" }
    ]
  },
  {
    hanzi: "特别", pinyin: "tèbié", meaning: "especially; special",
    examples: [
      { zh: "今天特别冷。", pinyin: "Jīntiān tèbié lěng.", en: "It's especially cold today." },
      { zh: "这个礼物很特别。", pinyin: "Zhège lǐwù hěn tèbié.", en: "This gift is very special." }
    ]
  },
  {
    hanzi: "代表", pinyin: "dàibiǎo", meaning: "representative; to represent",
    examples: [
      { zh: "他代表公司参加会议。", pinyin: "Tā dàibiǎo gōngsī cānjiā huìyì.", en: "He attended the meeting on behalf of the company." },
      { zh: "红色在中国代表好运。", pinyin: "Hóngsè zài Zhōngguó dàibiǎo hǎoyùn.", en: "In China, red represents good luck." }
    ]
  },
  {
    hanzi: "内容", pinyin: "nèiróng", meaning: "content",
    examples: [
      { zh: "这本书的内容很有意思。", pinyin: "Zhè běn shū de nèiróng hěn yǒu yìsi.", en: "The content of this book is interesting." },
      { zh: "你还记得会议的内容吗？", pinyin: "Nǐ hái jìde huìyì de nèiróng ma?", en: "Do you still remember what the meeting covered?" }
    ]
  },
  {
    hanzi: "文化", pinyin: "wénhuà", meaning: "culture",
    examples: [
      { zh: "我对中国文化很感兴趣。", pinyin: "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.", en: "I'm very interested in Chinese culture." },
      { zh: "每个国家的文化都不一样。", pinyin: "Měi ge guójiā de wénhuà dōu bù yíyàng.", en: "Every country's culture is different." }
    ]
  },
  {
    hanzi: "老师", pinyin: "lǎoshī", meaning: "teacher",
    examples: [
      { zh: "我的中文老师很好。", pinyin: "Wǒ de Zhōngwén lǎoshī hěn hǎo.", en: "My Chinese teacher is great." },
      { zh: "老师，我有一个问题。", pinyin: "Lǎoshī, wǒ yǒu yí ge wèntí.", en: "Teacher, I have a question." }
    ]
  },
  {
    hanzi: "送给", pinyin: "sònggěi", meaning: "to give (as a gift)",
    examples: [
      { zh: "这是我送给你的礼物。", pinyin: "Zhè shì wǒ sònggěi nǐ de lǐwù.", en: "This is a gift for you." },
      { zh: "他送给妈妈一束花。", pinyin: "Tā sònggěi māma yí shù huā.", en: "He gave his mom a bouquet of flowers." }
    ]
  },
  {
    hanzi: "世界", pinyin: "shìjiè", meaning: "world",
    examples: [
      { zh: "我想去世界各地旅行。", pinyin: "Wǒ xiǎng qù shìjiè gèdì lǚxíng.", en: "I want to travel all over the world." },
      { zh: "世界很大。", pinyin: "Shìjiè hěn dà.", en: "The world is big." }
    ]
  },
  {
    hanzi: "座位", pinyin: "zuòwèi", meaning: "seat",
    examples: [
      { zh: "这个座位有人吗？", pinyin: "Zhège zuòwèi yǒu rén ma?", en: "Is this seat taken?" },
      { zh: "请回到你的座位上。", pinyin: "Qǐng huídào nǐ de zuòwèi shang.", en: "Please return to your seat." }
    ]
  },
  {
    hanzi: "门口", pinyin: "ménkǒu", meaning: "doorway; entrance",
    examples: [
      { zh: "我在门口等你。", pinyin: "Wǒ zài ménkǒu děng nǐ.", en: "I'll wait for you at the entrance." },
      { zh: "学校门口有一家咖啡店。", pinyin: "Xuéxiào ménkǒu yǒu yì jiā kāfēidiàn.", en: "There's a café at the school entrance." }
    ]
  },
  {
    hanzi: "任何", pinyin: "rènhé", meaning: "any",
    examples: [
      { zh: "有任何问题都可以问我。", pinyin: "Yǒu rènhé wèntí dōu kěyǐ wèn wǒ.", en: "If you have any questions, you can ask me." },
      { zh: "他不相信任何人。", pinyin: "Tā bù xiāngxìn rènhé rén.", en: "He doesn't trust anyone." }
    ]
  },
  {
    hanzi: "先生", pinyin: "xiānsheng", meaning: "Mr.; sir; husband",
    examples: [
      { zh: "王先生，你好！", pinyin: "Wáng xiānsheng, nǐ hǎo!", en: "Hello, Mr. Wang!" },
      { zh: "先生，您要喝什么？", pinyin: "Xiānsheng, nín yào hē shénme?", en: "Sir, what would you like to drink?" }
    ]
  },
  {
    hanzi: "上海", pinyin: "Shànghǎi", meaning: "Shanghai",
    examples: [
      { zh: "上海是一个大城市。", pinyin: "Shànghǎi shì yí ge dà chéngshì.", en: "Shanghai is a big city." },
      { zh: "我明天坐飞机去上海。", pinyin: "Wǒ míngtiān zuò fēijī qù Shànghǎi.", en: "Tomorrow I'm flying to Shanghai." }
    ]
  },
  {
    hanzi: "交通", pinyin: "jiāotōng", meaning: "traffic; transportation",
    examples: [
      { zh: "这里交通很方便。", pinyin: "Zhèlǐ jiāotōng hěn fāngbiàn.", en: "Getting around here is very convenient." },
      { zh: "早上的交通很堵。", pinyin: "Zǎoshang de jiāotōng hěn dǔ.", en: "Traffic is heavy in the morning." }
    ]
  },
  {
    hanzi: "教室", pinyin: "jiàoshì", meaning: "classroom",
    examples: [
      { zh: "教室里有三十个学生。", pinyin: "Jiàoshì lǐ yǒu sānshí ge xuésheng.", en: "There are thirty students in the classroom." },
      { zh: "请在教室里安静。", pinyin: "Qǐng zài jiàoshì lǐ ānjìng.", en: "Please be quiet in the classroom." }
    ]
  },
  {
    hanzi: "原来", pinyin: "yuánlái", meaning: "originally; so it turns out",
    examples: [
      { zh: "原来是你！", pinyin: "Yuánlái shì nǐ!", en: "Oh, it's you!" },
      { zh: "我原来住在北京。", pinyin: "Wǒ yuánlái zhù zài Běijīng.", en: "I originally lived in Beijing." }
    ]
  },
  {
    hanzi: "声音", pinyin: "shēngyīn", meaning: "sound; voice",
    examples: [
      { zh: "请把声音开大一点。", pinyin: "Qǐng bǎ shēngyīn kāi dà yìdiǎn.", en: "Please turn the volume up a bit." },
      { zh: "她的声音很好听。", pinyin: "Tā de shēngyīn hěn hǎotīng.", en: "She has a lovely voice." }
    ]
  },
  {
    hanzi: "提高", pinyin: "tígāo", meaning: "to improve; to raise",
    examples: [
      { zh: "我想提高我的中文水平。", pinyin: "Wǒ xiǎng tígāo wǒ de Zhōngwén shuǐpíng.", en: "I want to improve my Chinese." },
      { zh: "多听多说能提高口语。", pinyin: "Duō tīng duō shuō néng tígāo kǒuyǔ.", en: "Listening and speaking more improves your spoken Chinese." }
    ]
  },
  {
    hanzi: "立刻", pinyin: "lìkè", meaning: "immediately",
    examples: [
      { zh: "请立刻回来。", pinyin: "Qǐng lìkè huílai.", en: "Please come back right away." },
      { zh: "他听到消息，立刻给我打了电话。", pinyin: "Tā tīngdào xiāoxi, lìkè gěi wǒ dǎ le diànhuà.", en: "As soon as he heard the news, he called me." }
    ]
  },
  {
    hanzi: "及时", pinyin: "jíshí", meaning: "in time; timely",
    examples: [
      { zh: "谢谢你及时帮助我。", pinyin: "Xièxie nǐ jíshí bāngzhù wǒ.", en: "Thanks for helping me just in time." },
      { zh: "医生来得很及时。", pinyin: "Yīshēng lái de hěn jíshí.", en: "The doctor arrived just in time." }
    ]
  },
  {
    hanzi: "比较", pinyin: "bǐjiào", meaning: "relatively; to compare",
    examples: [
      { zh: "今天比较冷。", pinyin: "Jīntiān bǐjiào lěng.", en: "It's rather cold today." },
      { zh: "不要总是把自己和别人比较。", pinyin: "Búyào zǒngshì bǎ zìjǐ hé biérén bǐjiào.", en: "Don't always compare yourself with others." }
    ]
  },
  {
    hanzi: "演员", pinyin: "yǎnyuán", meaning: "actor; actress",
    examples: [
      { zh: "她是一位有名的演员。", pinyin: "Tā shì yí wèi yǒumíng de yǎnyuán.", en: "She's a famous actress." },
      { zh: "这个演员演得很好。", pinyin: "Zhège yǎnyuán yǎn de hěn hǎo.", en: "This actor is very good." }
    ]
  }
];
