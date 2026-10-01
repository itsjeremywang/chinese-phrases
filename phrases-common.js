// The 400 most common two-character words in spoken Chinese, most common first.
// Source: OpenSubtitles word frequencies (hermitdave/FrequencyWords, zh_cn), with
// traditional-character duplicates, fragments like 我要, names, and profanity removed.
const TOP_400_PHRASES = [
  "我们", "什么", "知道", "他们", "一个", "没有", "不是", "可以", "你们", "现在", "这个", "怎么", "就是", "如果", "这里", "这样", "自己", "不会", "告诉", "不能",
  "真的", "先生", "只是", "不要", "已经", "需要", "因为", "谢谢", "这么", "可能", "但是", "那个", "所以", "喜欢", "觉得", "还有", "时候", "东西", "一起", "应该",
  "这些", "孩子", "看到", "一下", "那么", "还是", "问题", "工作", "一样", "开始", "然后", "看看", "地方", "一定", "希望", "朋友", "今天", "事情", "一直", "所有",
  "找到", "当然", "回来", "不想", "没事", "那些", "明白", "的话", "爸爸", "离开", "一切", "时间", "相信", "妈妈", "想要", "发生", "起来", "真是", "你好", "抱歉",
  "必须", "认为", "一点", "非常", "那里", "也许", "大家", "哪里", "有人", "意思", "准备", "出来", "不过", "一些", "为了", "女人", "这儿", "只有", "过来", "一次",
  "得到", "很多", "任何", "这种", "感觉", "以为", "而且", "生活", "男人", "之前", "发现", "可是", "快点", "两个", "不用", "名字", "没错", "世界", "记得", "不错",
  "肯定", "最好", "不行", "等等", "出去", "亲爱", "担心", "如何", "到底", "有点", "最后", "小姐", "上帝", "认识", "正在", "那样", "父亲", "高兴", "明天", "重要",
  "警察", "只要", "好像", "再见", "继续", "今晚", "回家", "它们", "多少", "电话", "听到", "干嘛", "医生", "要是", "女孩", "马上", "过去", "以前", "儿子", "哪儿",
  "说话", "完全", "美国", "怎样", "回去", "其他", "永远", "家伙", "之后", "看见", "或者", "小心", "别人", "成为", "情况", "伙计", "一天", "见到", "晚上", "总是",
  "好好", "如此", "了解", "兄弟", "结束", "机会", "安全", "拜托", "决定", "确定", "里面", "还好", "无法", "小时", "清楚", "有些", "帮助", "长官", "公司", "房子",
  "根本", "办法", "不管", "关于", "计划", "唯一", "来说", "女儿", "看着", "宝贝", "每个", "其实", "漂亮", "人们", "真正", "甚至", "那边", "不好", "进来", "夫人",
  "愿意", "麻烦", "打算", "故事", "一种", "害怕", "房间", "那儿", "衣服", "母亲", "下来", "听说", "注意", "改变", "这次", "接受", "妻子", "失去", "回到", "以后",
  "是否", "生命", "她们", "进去", "女士", "原因", "刚才", "保护", "选择", "几个", "关系", "从来", "当时", "出现", "结婚", "至少", "成功", "奇怪", "虽然", "身上",
  "或许", "保证", "外面", "丈夫", "国家", "整个", "特别", "那种", "不同", "很快", "变成", "难道", "学校", "样子", "电影", "谈谈", "危险", "开心", "别的", "才能",
  "闭嘴", "进行", "照片", "刚刚", "而已", "完成", "方式", "做到", "声音", "看来", "只能", "太太", "下去", "绝对", "处理", "欢迎", "眼睛", "通过", "行动", "感到",
  "最近", "各位", "这边", "作为", "容易", "直到", "比赛", "像是", "更好", "有趣", "就算", "活着", "努力", "帮忙", "留下", "同意", "参加", "死亡", "上面", "结果",
  "消息", "要求", "理解", "曾经", "打开", "收到", "照顾", "人类", "主意", "保持", "存在", "晚安", "确实", "全部", "讨厌", "突然", "多久", "老婆", "不再", "放在",
  "进入", "父母", "总统", "伤害", "回答", "老师", "除了", "咱们", "自由", "可爱", "抓住", "简单", "身体", "想法", "早上", "能够", "昨晚", "哥哥", "秘密", "休息",
  "战争", "其中", "医院", "每天", "之间", "大概", "控制", "小孩", "带来", "停止", "因此", "证明", "飞机", "解释", "律师", "终于", "翻译", "调查", "为何", "留在",
  "糟糕", "任务", "武器", "家里", "来自", "后面", "小子", "来到", "解决", "家人", "坐下", "直接", "放弃", "加油", "方法", "游戏", "即使", "年轻", "大人", "使用"
];

// Phrases from that list that weren't already in phrases.js.
PHRASES.push(
  { hanzi: "一个", pinyin: "yí ge", meaning: "one; a / an", examples: [
    { zh: "我有一个问题。", pinyin: "Wǒ yǒu yí ge wèntí.", en: "I have a question." },
    { zh: "他是一个好人。", pinyin: "Tā shì yí ge hǎo rén.", en: "He's a good person." } ] },
  { hanzi: "不是", pinyin: "bú shì", meaning: "is not; no",
    examples: [
    { zh: "我不是老师。", pinyin: "Wǒ bú shì lǎoshī.", en: "I'm not a teacher." },
    { zh: "这不是我的错。", pinyin: "Zhè bú shì wǒ de cuò.", en: "This isn't my fault." } ] },
  { hanzi: "你们", pinyin: "nǐmen", meaning: "you (plural)", examples: [
    { zh: "你们好！", pinyin: "Nǐmen hǎo!", en: "Hello, everyone!" },
    { zh: "你们去哪儿？", pinyin: "Nǐmen qù nǎr?", en: "Where are you all going?" } ] },
  { hanzi: "这个", pinyin: "zhège", meaning: "this; this one", examples: [
    { zh: "这个多少钱？", pinyin: "Zhège duōshao qián?", en: "How much is this?" },
    { zh: "我要这个。", pinyin: "Wǒ yào zhège.", en: "I want this one." } ] },
  { hanzi: "怎么", pinyin: "zěnme", meaning: "how; why; what", examples: [
    { zh: "这个字怎么读？", pinyin: "Zhège zì zěnme dú?", en: "How do you pronounce this character?" },
    { zh: "你怎么了？", pinyin: "Nǐ zěnme le?", en: "What's wrong with you?" } ] },
  { hanzi: "这里", pinyin: "zhèlǐ", meaning: "here", examples: [
    { zh: "我住在这里。", pinyin: "Wǒ zhù zài zhèlǐ.", en: "I live here." },
    { zh: "这里很安静。", pinyin: "Zhèlǐ hěn ānjìng.", en: "It's very quiet here." } ] },
  { hanzi: "不会", pinyin: "bú huì", meaning: "can't (don't know how); won't", examples: [
    { zh: "我不会游泳。", pinyin: "Wǒ bú huì yóuyǒng.", en: "I can't swim." },
    { zh: "放心，他不会生气的。", pinyin: "Fàngxīn, tā bú huì shēngqì de.", en: "Don't worry, he won't get angry." } ] },
  { hanzi: "告诉", pinyin: "gàosu", meaning: "to tell", examples: [
    { zh: "请告诉我你的名字。", pinyin: "Qǐng gàosu wǒ nǐ de míngzi.", en: "Please tell me your name." },
    { zh: "别告诉他。", pinyin: "Bié gàosu tā.", en: "Don't tell him." } ] },
  { hanzi: "不能", pinyin: "bù néng", meaning: "cannot; must not", examples: [
    { zh: "这里不能抽烟。", pinyin: "Zhèlǐ bù néng chōuyān.", en: "You can't smoke here." },
    { zh: "我今天不能去。", pinyin: "Wǒ jīntiān bù néng qù.", en: "I can't go today." } ] },
  { hanzi: "真的", pinyin: "zhēn de", meaning: "really; true", examples: [
    { zh: "真的吗？", pinyin: "Zhēn de ma?", en: "Really?" },
    { zh: "我真的很累。", pinyin: "Wǒ zhēn de hěn lèi.", en: "I'm really tired." } ] },
  { hanzi: "只是", pinyin: "zhǐshì", meaning: "just; merely; but", examples: [
    { zh: "我只是想帮你。", pinyin: "Wǒ zhǐshì xiǎng bāng nǐ.", en: "I just want to help you." },
    { zh: "这只是一个开始。", pinyin: "Zhè zhǐshì yí ge kāishǐ.", en: "This is only the beginning." } ] },
  { hanzi: "不要", pinyin: "búyào", meaning: "don't; don't want", examples: [
    { zh: "不要担心。", pinyin: "Búyào dānxīn.", en: "Don't worry." },
    { zh: "我不要咖啡，谢谢。", pinyin: "Wǒ búyào kāfēi, xièxie.", en: "I don't want coffee, thanks." } ] },
  { hanzi: "需要", pinyin: "xūyào", meaning: "to need", examples: [
    { zh: "你需要帮忙吗？", pinyin: "Nǐ xūyào bāngmáng ma?", en: "Do you need help?" },
    { zh: "我需要休息一下。", pinyin: "Wǒ xūyào xiūxi yíxià.", en: "I need to rest for a bit." } ] },
  { hanzi: "这么", pinyin: "zhème", meaning: "so; like this", examples: [
    { zh: "你怎么来得这么早？", pinyin: "Nǐ zěnme lái de zhème zǎo?", en: "How come you're here so early?" },
    { zh: "今天这么冷！", pinyin: "Jīntiān zhème lěng!", en: "It's so cold today!" } ] },
  { hanzi: "可能", pinyin: "kěnéng", meaning: "maybe; possible", examples: [
    { zh: "明天可能会下雨。", pinyin: "Míngtiān kěnéng huì xià yǔ.", en: "It might rain tomorrow." },
    { zh: "这不可能！", pinyin: "Zhè bù kěnéng!", en: "That's impossible!" } ] },
  { hanzi: "那个", pinyin: "nàge", meaning: "that; that one", examples: [
    { zh: "那个人是谁？", pinyin: "Nàge rén shì shéi?", en: "Who is that person?" },
    { zh: "我喜欢那个。", pinyin: "Wǒ xǐhuan nàge.", en: "I like that one." } ] },
  { hanzi: "觉得", pinyin: "juéde", meaning: "to think; to feel", examples: [
    { zh: "你觉得怎么样？", pinyin: "Nǐ juéde zěnmeyàng?", en: "What do you think?" },
    { zh: "我觉得有点冷。", pinyin: "Wǒ juéde yǒudiǎn lěng.", en: "I feel a bit cold." } ] },
  { hanzi: "还有", pinyin: "hái yǒu", meaning: "also; there's still", examples: [
    { zh: "还有问题吗？", pinyin: "Hái yǒu wèntí ma?", en: "Any other questions?" },
    { zh: "我们还有时间。", pinyin: "Wǒmen hái yǒu shíjiān.", en: "We still have time." } ] },
  { hanzi: "时候", pinyin: "shíhou", meaning: "time; moment (when…)", examples: [
    { zh: "你什么时候来？", pinyin: "Nǐ shénme shíhou lái?", en: "When are you coming?" },
    { zh: "我小的时候住在上海。", pinyin: "Wǒ xiǎo de shíhou zhù zài Shànghǎi.", en: "When I was little I lived in Shanghai." } ] },
  { hanzi: "这些", pinyin: "zhèxiē", meaning: "these", examples: [
    { zh: "这些是我的书。", pinyin: "Zhèxiē shì wǒ de shū.", en: "These are my books." },
    { zh: "这些水果很新鲜。", pinyin: "Zhèxiē shuǐguǒ hěn xīnxiān.", en: "This fruit is very fresh." } ] },
  { hanzi: "孩子", pinyin: "háizi", meaning: "child", examples: [
    { zh: "你有孩子吗？", pinyin: "Nǐ yǒu háizi ma?", en: "Do you have children?" },
    { zh: "孩子们在外面玩。", pinyin: "Háizimen zài wàimiàn wán.", en: "The kids are playing outside." } ] },
  { hanzi: "看到", pinyin: "kàndào", meaning: "to see", examples: [
    { zh: "我看到他了。", pinyin: "Wǒ kàndào tā le.", en: "I saw him." },
    { zh: "很高兴看到你。", pinyin: "Hěn gāoxìng kàndào nǐ.", en: "Great to see you." } ] },
  { hanzi: "一下", pinyin: "yíxià", meaning: "a bit; briefly (softens a request)", examples: [
    { zh: "请等一下。", pinyin: "Qǐng děng yíxià.", en: "Please wait a moment." },
    { zh: "我看一下。", pinyin: "Wǒ kàn yíxià.", en: "Let me take a look." } ] },
  { hanzi: "那么", pinyin: "nàme", meaning: "so; then; in that case", examples: [
    { zh: "那么，我们走吧。", pinyin: "Nàme, wǒmen zǒu ba.", en: "Well then, let's go." },
    { zh: "他没有你那么高。", pinyin: "Tā méiyǒu nǐ nàme gāo.", en: "He isn't as tall as you." } ] },
  { hanzi: "一样", pinyin: "yíyàng", meaning: "the same", examples: [
    { zh: "我们的衣服一样。", pinyin: "Wǒmen de yīfu yíyàng.", en: "Our clothes are the same." },
    { zh: "他跟他爸爸一样高。", pinyin: "Tā gēn tā bàba yíyàng gāo.", en: "He's as tall as his dad." } ] },
  { hanzi: "开始", pinyin: "kāishǐ", meaning: "to begin; start", examples: [
    { zh: "电影几点开始？", pinyin: "Diànyǐng jǐ diǎn kāishǐ?", en: "What time does the movie start?" },
    { zh: "我们开始吧。", pinyin: "Wǒmen kāishǐ ba.", en: "Let's begin." } ] },
  { hanzi: "然后", pinyin: "ránhòu", meaning: "then; after that", examples: [
    { zh: "先洗手，然后吃饭。", pinyin: "Xiān xǐ shǒu, ránhòu chī fàn.", en: "Wash your hands first, then eat." },
    { zh: "然后呢？", pinyin: "Ránhòu ne?", en: "And then what?" } ] },
  { hanzi: "看看", pinyin: "kànkan", meaning: "to have a look", examples: [
    { zh: "让我看看。", pinyin: "Ràng wǒ kànkan.", en: "Let me have a look." },
    { zh: "我们去商店看看吧。", pinyin: "Wǒmen qù shāngdiàn kànkan ba.", en: "Let's go take a look in the shop." } ] },
  { hanzi: "希望", pinyin: "xīwàng", meaning: "to hope; hope", examples: [
    { zh: "我希望你能来。", pinyin: "Wǒ xīwàng nǐ néng lái.", en: "I hope you can come." },
    { zh: "不要放弃希望。", pinyin: "Búyào fàngqì xīwàng.", en: "Don't give up hope." } ] },
  { hanzi: "一直", pinyin: "yìzhí", meaning: "always; all along; straight", examples: [
    { zh: "我一直在等你。", pinyin: "Wǒ yìzhí zài děng nǐ.", en: "I've been waiting for you this whole time." },
    { zh: "一直往前走。", pinyin: "Yìzhí wǎng qián zǒu.", en: "Go straight ahead." } ] },
  { hanzi: "所有", pinyin: "suǒyǒu", meaning: "all", examples: [
    { zh: "所有的人都来了。", pinyin: "Suǒyǒu de rén dōu lái le.", en: "Everyone came." },
    { zh: "我做了所有的作业。", pinyin: "Wǒ zuò le suǒyǒu de zuòyè.", en: "I did all the homework." } ] },
  { hanzi: "找到", pinyin: "zhǎodào", meaning: "to find", examples: [
    { zh: "我找到我的钥匙了。", pinyin: "Wǒ zhǎodào wǒ de yàoshi le.", en: "I found my keys." },
    { zh: "你找到工作了吗？", pinyin: "Nǐ zhǎodào gōngzuò le ma?", en: "Did you find a job?" } ] },
  { hanzi: "回来", pinyin: "huílai", meaning: "to come back", examples: [
    { zh: "你什么时候回来？", pinyin: "Nǐ shénme shíhou huílai?", en: "When are you coming back?" },
    { zh: "我马上回来。", pinyin: "Wǒ mǎshàng huílai.", en: "I'll be right back." } ] },
  { hanzi: "不想", pinyin: "bù xiǎng", meaning: "don't want to", examples: [
    { zh: "我不想去。", pinyin: "Wǒ bù xiǎng qù.", en: "I don't want to go." },
    { zh: "他不想说话。", pinyin: "Tā bù xiǎng shuōhuà.", en: "He doesn't feel like talking." } ] },
  { hanzi: "没事", pinyin: "méishì", meaning: "it's okay; nothing's wrong", examples: [
    { zh: "没事，别担心。", pinyin: "Méishì, bié dānxīn.", en: "It's fine, don't worry." },
    { zh: "你没事吧？", pinyin: "Nǐ méishì ba?", en: "Are you okay?" } ] },
  { hanzi: "的话", pinyin: "dehuà", meaning: "if (at the end of a condition)", examples: [
    { zh: "下雨的话，我们就不去了。", pinyin: "Xià yǔ dehuà, wǒmen jiù bú qù le.", en: "If it rains, we won't go." },
    { zh: "有时间的话，来我家玩。", pinyin: "Yǒu shíjiān dehuà, lái wǒ jiā wán.", en: "If you have time, come over to my place." } ] },
  { hanzi: "爸爸", pinyin: "bàba", meaning: "dad", examples: [
    { zh: "我爸爸是医生。", pinyin: "Wǒ bàba shì yīshēng.", en: "My dad is a doctor." },
    { zh: "爸爸，我回来了！", pinyin: "Bàba, wǒ huílai le!", en: "Dad, I'm home!" } ] },
  { hanzi: "离开", pinyin: "líkāi", meaning: "to leave", examples: [
    { zh: "他已经离开了。", pinyin: "Tā yǐjīng líkāi le.", en: "He has already left." },
    { zh: "请不要离开我。", pinyin: "Qǐng búyào líkāi wǒ.", en: "Please don't leave me." } ] },
  { hanzi: "一切", pinyin: "yíqiè", meaning: "everything; all", examples: [
    { zh: "一切都会好的。", pinyin: "Yíqiè dōu huì hǎo de.", en: "Everything will be okay." },
    { zh: "谢谢你做的一切。", pinyin: "Xièxie nǐ zuò de yíqiè.", en: "Thank you for everything you've done." } ] },
  { hanzi: "妈妈", pinyin: "māma", meaning: "mom", examples: [
    { zh: "我妈妈做饭很好吃。", pinyin: "Wǒ māma zuò fàn hěn hǎochī.", en: "My mom is a great cook." },
    { zh: "妈妈，我饿了。", pinyin: "Māma, wǒ è le.", en: "Mom, I'm hungry." } ] },
  { hanzi: "想要", pinyin: "xiǎng yào", meaning: "to want; would like", examples: [
    { zh: "你想要什么？", pinyin: "Nǐ xiǎng yào shénme?", en: "What would you like?" },
    { zh: "我想要一杯水。", pinyin: "Wǒ xiǎng yào yì bēi shuǐ.", en: "I'd like a glass of water." } ] },
  { hanzi: "发生", pinyin: "fāshēng", meaning: "to happen", examples: [
    { zh: "发生了什么事？", pinyin: "Fāshēng le shénme shì?", en: "What happened?" },
    { zh: "这种事经常发生。", pinyin: "Zhè zhǒng shì jīngcháng fāshēng.", en: "This kind of thing happens often." } ] },
  { hanzi: "起来", pinyin: "qǐlai", meaning: "to get up; (after verbs) up, start to", examples: [
    { zh: "快起来，要迟到了！", pinyin: "Kuài qǐlai, yào chídào le!", en: "Get up, you're going to be late!" },
    { zh: "这个菜看起来很好吃。", pinyin: "Zhège cài kàn qǐlai hěn hǎochī.", en: "This dish looks delicious." } ] },
  { hanzi: "真是", pinyin: "zhēn shì", meaning: "really is; truly", examples: [
    { zh: "你真是个好人。", pinyin: "Nǐ zhēn shì ge hǎo rén.", en: "You really are a good person." },
    { zh: "今天真是太热了！", pinyin: "Jīntiān zhēn shì tài rè le!", en: "It's really way too hot today!" } ] },
  { hanzi: "抱歉", pinyin: "bàoqiàn", meaning: "sorry", examples: [
    { zh: "抱歉，我来晚了。", pinyin: "Bàoqiàn, wǒ lái wǎn le.", en: "Sorry I'm late." },
    { zh: "很抱歉给你添麻烦了。", pinyin: "Hěn bàoqiàn gěi nǐ tiān máfan le.", en: "Sorry for causing you trouble." } ] },
  { hanzi: "必须", pinyin: "bìxū", meaning: "must; have to", examples: [
    { zh: "我必须走了。", pinyin: "Wǒ bìxū zǒu le.", en: "I have to go." },
    { zh: "你必须早点儿睡觉。", pinyin: "Nǐ bìxū zǎo diǎnr shuìjiào.", en: "You must go to bed earlier." } ] },
  { hanzi: "认为", pinyin: "rènwéi", meaning: "to think; to believe (an opinion)", examples: [
    { zh: "我认为他是对的。", pinyin: "Wǒ rènwéi tā shì duì de.", en: "I think he's right." },
    { zh: "你认为呢？", pinyin: "Nǐ rènwéi ne?", en: "What do you think?" } ] },
  { hanzi: "一点", pinyin: "yìdiǎn", meaning: "a little; a bit", examples: [
    { zh: "我会说一点中文。", pinyin: "Wǒ huì shuō yìdiǎn Zhōngwén.", en: "I can speak a little Chinese." },
    { zh: "请说慢一点。", pinyin: "Qǐng shuō màn yìdiǎn.", en: "Please speak a bit more slowly." } ] },
  { hanzi: "非常", pinyin: "fēicháng", meaning: "very; extremely", examples: [
    { zh: "非常感谢！", pinyin: "Fēicháng gǎnxiè!", en: "Thank you very much!" },
    { zh: "这个地方非常漂亮。", pinyin: "Zhège dìfang fēicháng piàoliang.", en: "This place is extremely beautiful." } ] },
  { hanzi: "那里", pinyin: "nàlǐ", meaning: "there", examples: [
    { zh: "你去过那里吗？", pinyin: "Nǐ qùguo nàlǐ ma?", en: "Have you been there?" },
    { zh: "他在那里等你。", pinyin: "Tā zài nàlǐ děng nǐ.", en: "He's waiting for you there." } ] },
  { hanzi: "哪里", pinyin: "nǎlǐ", meaning: "where", examples: [
    { zh: "你住在哪里？", pinyin: "Nǐ zhù zài nǎlǐ?", en: "Where do you live?" },
    { zh: "洗手间在哪里？", pinyin: "Xǐshǒujiān zài nǎlǐ?", en: "Where's the restroom?" } ] },
  { hanzi: "有人", pinyin: "yǒu rén", meaning: "someone; there's somebody", examples: [
    { zh: "外面有人吗？", pinyin: "Wàimiàn yǒu rén ma?", en: "Is anyone outside?" },
    { zh: "有人找你。", pinyin: "Yǒu rén zhǎo nǐ.", en: "Someone is looking for you." } ] },
  { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "to prepare; to get ready", examples: [
    { zh: "你准备好了吗？", pinyin: "Nǐ zhǔnbèi hǎo le ma?", en: "Are you ready?" },
    { zh: "我在准备考试。", pinyin: "Wǒ zài zhǔnbèi kǎoshì.", en: "I'm preparing for an exam." } ] },
  { hanzi: "出来", pinyin: "chūlai", meaning: "to come out", examples: [
    { zh: "快出来！", pinyin: "Kuài chūlai!", en: "Come out, quick!" },
    { zh: "太阳出来了。", pinyin: "Tàiyáng chūlai le.", en: "The sun has come out." } ] },
  { hanzi: "不过", pinyin: "búguò", meaning: "but; however; only", examples: [
    { zh: "这件衣服很好看，不过太贵了。", pinyin: "Zhè jiàn yīfu hěn hǎokàn, búguò tài guì le.", en: "This piece of clothing looks great, but it's too expensive." },
    { zh: "我想去，不过没时间。", pinyin: "Wǒ xiǎng qù, búguò méi shíjiān.", en: "I'd like to go, but I don't have time." } ] },
  { hanzi: "一些", pinyin: "yìxiē", meaning: "some; a few", examples: [
    { zh: "我买了一些水果。", pinyin: "Wǒ mǎi le yìxiē shuǐguǒ.", en: "I bought some fruit." },
    { zh: "我有一些问题。", pinyin: "Wǒ yǒu yìxiē wèntí.", en: "I have a few questions." } ] },
  { hanzi: "为了", pinyin: "wèile", meaning: "in order to; for", examples: [
    { zh: "我学中文是为了工作。", pinyin: "Wǒ xué Zhōngwén shì wèile gōngzuò.", en: "I study Chinese for work." },
    { zh: "为了健康，他每天跑步。", pinyin: "Wèile jiànkāng, tā měitiān pǎobù.", en: "To stay healthy, he runs every day." } ] },
  { hanzi: "女人", pinyin: "nǚrén", meaning: "woman", examples: [
    { zh: "那个女人是谁？", pinyin: "Nàge nǚrén shì shéi?", en: "Who is that woman?" },
    { zh: "她是一个很聪明的女人。", pinyin: "Tā shì yí ge hěn cōngming de nǚrén.", en: "She's a very smart woman." } ] },
  { hanzi: "这儿", pinyin: "zhèr", meaning: "here (spoken, northern)", examples: [
    { zh: "你来这儿干什么？", pinyin: "Nǐ lái zhèr gàn shénme?", en: "What are you doing here?" },
    { zh: "把东西放这儿吧。", pinyin: "Bǎ dōngxi fàng zhèr ba.", en: "Put your things here." } ] },
  { hanzi: "过来", pinyin: "guòlai", meaning: "to come over", examples: [
    { zh: "你过来一下。", pinyin: "Nǐ guòlai yíxià.", en: "Come over here for a sec." },
    { zh: "他朝我走过来。", pinyin: "Tā cháo wǒ zǒu guòlai.", en: "He walked over toward me." } ] },
  { hanzi: "一次", pinyin: "yí cì", meaning: "once; one time", examples: [
    { zh: "请再说一次。", pinyin: "Qǐng zài shuō yí cì.", en: "Please say it again." },
    { zh: "我去过一次北京。", pinyin: "Wǒ qùguo yí cì Běijīng.", en: "I've been to Beijing once." } ] },
  { hanzi: "这种", pinyin: "zhè zhǒng", meaning: "this kind of", examples: [
    { zh: "我不喜欢这种天气。", pinyin: "Wǒ bù xǐhuan zhè zhǒng tiānqì.", en: "I don't like this kind of weather." },
    { zh: "这种水果叫什么？", pinyin: "Zhè zhǒng shuǐguǒ jiào shénme?", en: "What's this kind of fruit called?" } ] },
  { hanzi: "感觉", pinyin: "gǎnjué", meaning: "to feel; feeling", examples: [
    { zh: "你感觉怎么样？", pinyin: "Nǐ gǎnjué zěnmeyàng?", en: "How are you feeling?" },
    { zh: "我感觉好多了。", pinyin: "Wǒ gǎnjué hǎo duō le.", en: "I feel much better." } ] },
  { hanzi: "以为", pinyin: "yǐwéi", meaning: "to (wrongly) think; to assume", examples: [
    { zh: "我以为你走了。", pinyin: "Wǒ yǐwéi nǐ zǒu le.", en: "I thought you had left." },
    { zh: "我以为今天是星期六。", pinyin: "Wǒ yǐwéi jīntiān shì xīngqīliù.", en: "I thought today was Saturday." } ] },
  { hanzi: "生活", pinyin: "shēnghuó", meaning: "life; to live", examples: [
    { zh: "你在中国的生活怎么样？", pinyin: "Nǐ zài Zhōngguó de shēnghuó zěnmeyàng?", en: "How's your life in China?" },
    { zh: "他们生活得很幸福。", pinyin: "Tāmen shēnghuó de hěn xìngfú.", en: "They live very happily." } ] },
  { hanzi: "男人", pinyin: "nánrén", meaning: "man", examples: [
    { zh: "那个男人是我的邻居。", pinyin: "Nàge nánrén shì wǒ de línjū.", en: "That man is my neighbor." },
    { zh: "门口有一个男人。", pinyin: "Ménkǒu yǒu yí ge nánrén.", en: "There's a man at the door." } ] },
  { hanzi: "发现", pinyin: "fāxiàn", meaning: "to discover; to notice", examples: [
    { zh: "我发现我的钱包不见了。", pinyin: "Wǒ fāxiàn wǒ de qiánbāo bú jiàn le.", en: "I noticed my wallet was gone." },
    { zh: "你发现了什么？", pinyin: "Nǐ fāxiàn le shénme?", en: "What did you find?" } ] },
  { hanzi: "可是", pinyin: "kěshì", meaning: "but", examples: [
    { zh: "我很想去，可是我太忙了。", pinyin: "Wǒ hěn xiǎng qù, kěshì wǒ tài máng le.", en: "I really want to go, but I'm too busy." },
    { zh: "可是我不知道。", pinyin: "Kěshì wǒ bù zhīdào.", en: "But I don't know." } ] },
  { hanzi: "快点", pinyin: "kuài diǎn", meaning: "hurry up; a bit faster", examples: [
    { zh: "快点，我们要迟到了！", pinyin: "Kuài diǎn, wǒmen yào chídào le!", en: "Hurry up, we're going to be late!" },
    { zh: "你能走快点吗？", pinyin: "Nǐ néng zǒu kuài diǎn ma?", en: "Can you walk a bit faster?" } ] },
  { hanzi: "不用", pinyin: "búyòng", meaning: "no need to", examples: [
    { zh: "不用谢！", pinyin: "Búyòng xiè!", en: "You're welcome! (No need to thank me.)" },
    { zh: "你不用来了。", pinyin: "Nǐ búyòng lái le.", en: "You don't need to come." } ] },
  { hanzi: "名字", pinyin: "míngzi", meaning: "name", examples: [
    { zh: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", en: "What's your name?" },
    { zh: "我忘了他的名字。", pinyin: "Wǒ wàng le tā de míngzi.", en: "I forgot his name." } ] },
  { hanzi: "没错", pinyin: "méi cuò", meaning: "that's right; correct", examples: [
    { zh: "没错，就是他！", pinyin: "Méi cuò, jiùshì tā!", en: "That's right, it's him!" },
    { zh: "你说得没错。", pinyin: "Nǐ shuō de méi cuò.", en: "You're right." } ] },
  { hanzi: "记得", pinyin: "jìde", meaning: "to remember", examples: [
    { zh: "你还记得我吗？", pinyin: "Nǐ hái jìde wǒ ma?", en: "Do you still remember me?" },
    { zh: "记得带伞。", pinyin: "Jìde dài sǎn.", en: "Remember to bring an umbrella." } ] },
  { hanzi: "不错", pinyin: "búcuò", meaning: "not bad; pretty good", examples: [
    { zh: "这家饭馆不错。", pinyin: "Zhè jiā fànguǎn búcuò.", en: "This restaurant is pretty good." },
    { zh: "你的中文说得很不错。", pinyin: "Nǐ de Zhōngwén shuō de hěn búcuò.", en: "Your Chinese is really good." } ] },
  { hanzi: "肯定", pinyin: "kěndìng", meaning: "definitely; sure", examples: [
    { zh: "他肯定会来。", pinyin: "Tā kěndìng huì lái.", en: "He'll definitely come." },
    { zh: "你肯定吗？", pinyin: "Nǐ kěndìng ma?", en: "Are you sure?" } ] },
  { hanzi: "最好", pinyin: "zuìhǎo", meaning: "best; had better", examples: [
    { zh: "你最好早点出发。", pinyin: "Nǐ zuìhǎo zǎo diǎn chūfā.", en: "You'd better leave early." },
    { zh: "他是我最好的朋友。", pinyin: "Tā shì wǒ zuìhǎo de péngyou.", en: "He's my best friend." } ] },
  { hanzi: "不行", pinyin: "bù xíng", meaning: "no way; not okay; not good", examples: [
    { zh: "不行，太危险了。", pinyin: "Bù xíng, tài wēixiǎn le.", en: "No way, it's too dangerous." },
    { zh: "我的数学不行。", pinyin: "Wǒ de shùxué bù xíng.", en: "I'm bad at math." } ] },
  { hanzi: "等等", pinyin: "děngdeng", meaning: "wait a moment; etc.", examples: [
    { zh: "等等我！", pinyin: "Děngdeng wǒ!", en: "Wait for me!" },
    { zh: "我买了苹果、香蕉等等。", pinyin: "Wǒ mǎi le píngguǒ, xiāngjiāo děngděng.", en: "I bought apples, bananas, and so on." } ] },
  { hanzi: "出去", pinyin: "chūqu", meaning: "to go out", examples: [
    { zh: "我们出去走走吧。", pinyin: "Wǒmen chūqu zǒuzou ba.", en: "Let's go out for a walk." },
    { zh: "他刚出去了。", pinyin: "Tā gāng chūqu le.", en: "He just went out." } ] },
  { hanzi: "亲爱", pinyin: "qīn'ài", meaning: "dear (usually 亲爱的)", examples: [
    { zh: "亲爱的，你回来了！", pinyin: "Qīn'ài de, nǐ huílai le!", en: "Darling, you're back!" },
    { zh: "亲爱的朋友们，大家好！", pinyin: "Qīn'ài de péngyoumen, dàjiā hǎo!", en: "Dear friends, hello everyone!" } ] },
  { hanzi: "担心", pinyin: "dānxīn", meaning: "to worry", examples: [
    { zh: "别担心，我没事。", pinyin: "Bié dānxīn, wǒ méishì.", en: "Don't worry, I'm fine." },
    { zh: "妈妈很担心你。", pinyin: "Māma hěn dānxīn nǐ.", en: "Mom is very worried about you." } ] },
  { hanzi: "如何", pinyin: "rúhé", meaning: "how (more formal)", examples: [
    { zh: "你觉得如何？", pinyin: "Nǐ juéde rúhé?", en: "What do you think?" },
    { zh: "我不知道如何开始。", pinyin: "Wǒ bù zhīdào rúhé kāishǐ.", en: "I don't know how to begin." } ] },
  { hanzi: "到底", pinyin: "dàodǐ", meaning: "after all; (in questions) on earth", examples: [
    { zh: "你到底想要什么？", pinyin: "Nǐ dàodǐ xiǎng yào shénme?", en: "What on earth do you want?" },
    { zh: "到底发生了什么？", pinyin: "Dàodǐ fāshēng le shénme?", en: "What exactly happened?" } ] },
  { hanzi: "有点", pinyin: "yǒudiǎn", meaning: "a little; somewhat", examples: [
    { zh: "我有点累。", pinyin: "Wǒ yǒudiǎn lèi.", en: "I'm a bit tired." },
    { zh: "这个菜有点辣。", pinyin: "Zhège cài yǒudiǎn là.", en: "This dish is a bit spicy." } ] },
  { hanzi: "最后", pinyin: "zuìhòu", meaning: "finally; last", examples: [
    { zh: "最后我们赢了。", pinyin: "Zuìhòu wǒmen yíng le.", en: "In the end we won." },
    { zh: "这是最后一个问题。", pinyin: "Zhè shì zuìhòu yí ge wèntí.", en: "This is the last question." } ] },
  { hanzi: "小姐", pinyin: "xiǎojiě", meaning: "Miss; young lady", examples: [
    { zh: "李小姐，你好。", pinyin: "Lǐ xiǎojiě, nǐ hǎo.", en: "Hello, Miss Li." },
    { zh: "小姐，请问这个多少钱？", pinyin: "Xiǎojiě, qǐngwèn zhège duōshao qián?", en: "Excuse me, miss, how much is this?" } ] },
  { hanzi: "上帝", pinyin: "Shàngdì", meaning: "God", examples: [
    { zh: "我的上帝！", pinyin: "Wǒ de Shàngdì!", en: "Oh my God!" },
    { zh: "你相信上帝吗？", pinyin: "Nǐ xiāngxìn Shàngdì ma?", en: "Do you believe in God?" } ] },
  { hanzi: "认识", pinyin: "rènshi", meaning: "to know (a person); to recognize", examples: [
    { zh: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", en: "Nice to meet you." },
    { zh: "你认识这个字吗？", pinyin: "Nǐ rènshi zhège zì ma?", en: "Do you recognize this character?" } ] },
  { hanzi: "正在", pinyin: "zhèngzài", meaning: "in the middle of (doing)", examples: [
    { zh: "我正在吃饭。", pinyin: "Wǒ zhèngzài chī fàn.", en: "I'm eating right now." },
    { zh: "他正在开会。", pinyin: "Tā zhèngzài kāihuì.", en: "He's in a meeting." } ] },
  { hanzi: "那样", pinyin: "nàyàng", meaning: "like that; that way", examples: [
    { zh: "别那样做。", pinyin: "Bié nàyàng zuò.", en: "Don't do it like that." },
    { zh: "我不是那样的人。", pinyin: "Wǒ bú shì nàyàng de rén.", en: "I'm not that kind of person." } ] },
  { hanzi: "父亲", pinyin: "fùqīn", meaning: "father", examples: [
    { zh: "他的父亲是老师。", pinyin: "Tā de fùqīn shì lǎoshī.", en: "His father is a teacher." },
    { zh: "我很想念我的父亲。", pinyin: "Wǒ hěn xiǎngniàn wǒ de fùqīn.", en: "I miss my father very much." } ] },
  { hanzi: "明天", pinyin: "míngtiān", meaning: "tomorrow", examples: [
    { zh: "明天见！", pinyin: "Míngtiān jiàn!", en: "See you tomorrow!" },
    { zh: "明天你有空吗？", pinyin: "Míngtiān nǐ yǒu kòng ma?", en: "Are you free tomorrow?" } ] },
  { hanzi: "警察", pinyin: "jǐngchá", meaning: "police; police officer", examples: [
    { zh: "快叫警察！", pinyin: "Kuài jiào jǐngchá!", en: "Call the police, quick!" },
    { zh: "他哥哥是警察。", pinyin: "Tā gēge shì jǐngchá.", en: "His older brother is a police officer." } ] },
  { hanzi: "只要", pinyin: "zhǐyào", meaning: "as long as", examples: [
    { zh: "只要你努力，就能成功。", pinyin: "Zhǐyào nǐ nǔlì, jiù néng chénggōng.", en: "As long as you work hard, you can succeed." },
    { zh: "只要你开心就好。", pinyin: "Zhǐyào nǐ kāixīn jiù hǎo.", en: "As long as you're happy, that's what matters." } ] },
  { hanzi: "好像", pinyin: "hǎoxiàng", meaning: "seem; seems like", examples: [
    { zh: "好像要下雨了。", pinyin: "Hǎoxiàng yào xià yǔ le.", en: "It looks like it's going to rain." },
    { zh: "他好像不太高兴。", pinyin: "Tā hǎoxiàng bú tài gāoxìng.", en: "He doesn't seem very happy." } ] },
  { hanzi: "继续", pinyin: "jìxù", meaning: "to continue", examples: [
    { zh: "请继续。", pinyin: "Qǐng jìxù.", en: "Please continue." },
    { zh: "休息一下，我们再继续。", pinyin: "Xiūxi yíxià, wǒmen zài jìxù.", en: "Let's take a break, then keep going." } ] },
  { hanzi: "今晚", pinyin: "jīnwǎn", meaning: "tonight", examples: [
    { zh: "今晚你有什么计划？", pinyin: "Jīnwǎn nǐ yǒu shénme jìhuà?", en: "What are your plans tonight?" },
    { zh: "今晚我请客。", pinyin: "Jīnwǎn wǒ qǐngkè.", en: "Tonight's on me." } ] },
  { hanzi: "电话", pinyin: "diànhuà", meaning: "telephone; phone call", examples: [
    { zh: "我给你打电话。", pinyin: "Wǒ gěi nǐ dǎ diànhuà.", en: "I'll give you a call." },
    { zh: "你的电话号码是多少？", pinyin: "Nǐ de diànhuà hàomǎ shì duōshao?", en: "What's your phone number?" } ] },
  { hanzi: "听到", pinyin: "tīngdào", meaning: "to hear", examples: [
    { zh: "你听到了吗？", pinyin: "Nǐ tīngdào le ma?", en: "Did you hear that?" },
    { zh: "我听到有人叫我。", pinyin: "Wǒ tīngdào yǒu rén jiào wǒ.", en: "I heard someone call me." } ] },
  { hanzi: "干嘛", pinyin: "gànmá", meaning: "what are you doing; why (casual)", examples: [
    { zh: "你在干嘛？", pinyin: "Nǐ zài gànmá?", en: "What are you up to?" },
    { zh: "你干嘛不早说？", pinyin: "Nǐ gànmá bù zǎo shuō?", en: "Why didn't you say so earlier?" } ] },
  { hanzi: "医生", pinyin: "yīshēng", meaning: "doctor", examples: [
    { zh: "你应该去看医生。", pinyin: "Nǐ yīnggāi qù kàn yīshēng.", en: "You should go see a doctor." },
    { zh: "她想当医生。", pinyin: "Tā xiǎng dāng yīshēng.", en: "She wants to be a doctor." } ] },
  { hanzi: "要是", pinyin: "yàoshi", meaning: "if (spoken)", examples: [
    { zh: "要是你不想去，就别去了。", pinyin: "Yàoshi nǐ bù xiǎng qù, jiù bié qù le.", en: "If you don't want to go, then don't." },
    { zh: "要是我有钱就好了。", pinyin: "Yàoshi wǒ yǒu qián jiù hǎo le.", en: "If only I had money." } ] },
  { hanzi: "女孩", pinyin: "nǚhái", meaning: "girl", examples: [
    { zh: "那个女孩是我妹妹。", pinyin: "Nàge nǚhái shì wǒ mèimei.", en: "That girl is my younger sister." },
    { zh: "她是一个很可爱的女孩。", pinyin: "Tā shì yí ge hěn kě'ài de nǚhái.", en: "She's a very cute girl." } ] },
  { hanzi: "马上", pinyin: "mǎshàng", meaning: "right away; immediately", examples: [
    { zh: "我马上就来。", pinyin: "Wǒ mǎshàng jiù lái.", en: "I'll be right there." },
    { zh: "电影马上开始了。", pinyin: "Diànyǐng mǎshàng kāishǐ le.", en: "The movie is about to start." } ] },
  { hanzi: "以前", pinyin: "yǐqián", meaning: "before; in the past", examples: [
    { zh: "我以前住在北京。", pinyin: "Wǒ yǐqián zhù zài Běijīng.", en: "I used to live in Beijing." },
    { zh: "吃饭以前要洗手。", pinyin: "Chī fàn yǐqián yào xǐ shǒu.", en: "Wash your hands before eating." } ] },
  { hanzi: "哪儿", pinyin: "nǎr", meaning: "where (spoken, northern)", examples: [
    { zh: "你去哪儿？", pinyin: "Nǐ qù nǎr?", en: "Where are you going?" },
    { zh: "我的手机在哪儿？", pinyin: "Wǒ de shǒujī zài nǎr?", en: "Where's my phone?" } ] },
  { hanzi: "完全", pinyin: "wánquán", meaning: "completely; totally", examples: [
    { zh: "我完全同意。", pinyin: "Wǒ wánquán tóngyì.", en: "I completely agree." },
    { zh: "我完全忘了。", pinyin: "Wǒ wánquán wàng le.", en: "I totally forgot." } ] },
  { hanzi: "怎样", pinyin: "zěnyàng", meaning: "how; what kind", examples: [
    { zh: "你想怎样？", pinyin: "Nǐ xiǎng zěnyàng?", en: "What do you want (me to do)?" },
    { zh: "这个字怎样写？", pinyin: "Zhège zì zěnyàng xiě?", en: "How do you write this character?" } ] },
  { hanzi: "回去", pinyin: "huíqu", meaning: "to go back", examples: [
    { zh: "我们该回去了。", pinyin: "Wǒmen gāi huíqu le.", en: "We should go back." },
    { zh: "你什么时候回去？", pinyin: "Nǐ shénme shíhou huíqu?", en: "When are you going back?" } ] },
  { hanzi: "其他", pinyin: "qítā", meaning: "other; others", examples: [
    { zh: "还有其他问题吗？", pinyin: "Hái yǒu qítā wèntí ma?", en: "Are there any other questions?" },
    { zh: "其他人都走了。", pinyin: "Qítā rén dōu zǒu le.", en: "Everyone else has left." } ] },
  { hanzi: "永远", pinyin: "yǒngyuǎn", meaning: "forever; always", examples: [
    { zh: "我永远不会忘记你。", pinyin: "Wǒ yǒngyuǎn bú huì wàngjì nǐ.", en: "I'll never forget you." },
    { zh: "我们永远是朋友。", pinyin: "Wǒmen yǒngyuǎn shì péngyou.", en: "We'll always be friends." } ] },
  { hanzi: "家伙", pinyin: "jiāhuo", meaning: "guy; fellow (casual)", examples: [
    { zh: "这家伙真有意思。", pinyin: "Zhè jiāhuo zhēn yǒu yìsi.", en: "This guy is really funny." },
    { zh: "你这个小家伙！", pinyin: "Nǐ zhège xiǎo jiāhuo!", en: "You little rascal!" } ] },
  { hanzi: "之后", pinyin: "zhīhòu", meaning: "after; afterwards", examples: [
    { zh: "下班之后我们去吃饭吧。", pinyin: "Xiàbān zhīhòu wǒmen qù chī fàn ba.", en: "Let's go eat after work." },
    { zh: "之后发生了什么？", pinyin: "Zhīhòu fāshēng le shénme?", en: "What happened afterwards?" } ] },
  { hanzi: "别人", pinyin: "biérén", meaning: "other people; someone else", examples: [
    { zh: "不要管别人怎么说。", pinyin: "Búyào guǎn biérén zěnme shuō.", en: "Don't worry about what others say." },
    { zh: "这是别人的东西。", pinyin: "Zhè shì biérén de dōngxi.", en: "This belongs to someone else." } ] },
  { hanzi: "成为", pinyin: "chéngwéi", meaning: "to become", examples: [
    { zh: "我想成为一名老师。", pinyin: "Wǒ xiǎng chéngwéi yì míng lǎoshī.", en: "I want to become a teacher." },
    { zh: "他们成为了好朋友。", pinyin: "Tāmen chéngwéi le hǎo péngyou.", en: "They became good friends." } ] },
  { hanzi: "情况", pinyin: "qíngkuàng", meaning: "situation; circumstances", examples: [
    { zh: "现在情况怎么样？", pinyin: "Xiànzài qíngkuàng zěnmeyàng?", en: "How's the situation now?" },
    { zh: "这种情况很少见。", pinyin: "Zhè zhǒng qíngkuàng hěn shǎo jiàn.", en: "This kind of situation is rare." } ] },
  { hanzi: "伙计", pinyin: "huǒji", meaning: "buddy; pal (casual)", examples: [
    { zh: "嘿，伙计，你好吗？", pinyin: "Hēi, huǒji, nǐ hǎo ma?", en: "Hey buddy, how are you?" },
    { zh: "谢了，伙计！", pinyin: "Xiè le, huǒji!", en: "Thanks, pal!" } ] },
  { hanzi: "一天", pinyin: "yì tiān", meaning: "one day; a day", examples: [
    { zh: "今天是忙碌的一天。", pinyin: "Jīntiān shì mánglù de yì tiān.", en: "Today was a busy day." },
    { zh: "我一天喝三杯咖啡。", pinyin: "Wǒ yì tiān hē sān bēi kāfēi.", en: "I drink three cups of coffee a day." } ] },
  { hanzi: "见到", pinyin: "jiàndào", meaning: "to see; to meet", examples: [
    { zh: "见到你很高兴。", pinyin: "Jiàndào nǐ hěn gāoxìng.", en: "Nice to see you." },
    { zh: "我昨天见到了老师。", pinyin: "Wǒ zuótiān jiàndào le lǎoshī.", en: "I saw the teacher yesterday." } ] },
  { hanzi: "晚上", pinyin: "wǎnshang", meaning: "evening; night", examples: [
    { zh: "晚上好！", pinyin: "Wǎnshang hǎo!", en: "Good evening!" },
    { zh: "你晚上有空吗？", pinyin: "Nǐ wǎnshang yǒu kòng ma?", en: "Are you free this evening?" } ] },
  { hanzi: "总是", pinyin: "zǒngshì", meaning: "always", examples: [
    { zh: "他总是迟到。", pinyin: "Tā zǒngshì chídào.", en: "He's always late." },
    { zh: "你总是这么忙。", pinyin: "Nǐ zǒngshì zhème máng.", en: "You're always so busy." } ] },
  { hanzi: "好好", pinyin: "hǎohǎo", meaning: "properly; well; to one's heart's content", examples: [
    { zh: "你要好好休息。", pinyin: "Nǐ yào hǎohǎo xiūxi.", en: "You need to get a proper rest." },
    { zh: "好好学习，天天向上。", pinyin: "Hǎohǎo xuéxí, tiāntiān xiàngshàng.", en: "Study hard and improve every day." } ] },
  { hanzi: "如此", pinyin: "rúcǐ", meaning: "so; like this (more formal)", examples: [
    { zh: "原来如此！", pinyin: "Yuánlái rúcǐ!", en: "Oh, I see!" },
    { zh: "今天的天气如此美好。", pinyin: "Jīntiān de tiānqì rúcǐ měihǎo.", en: "The weather is so lovely today." } ] },
  { hanzi: "兄弟", pinyin: "xiōngdì", meaning: "brothers; bro", examples: [
    { zh: "我有两个兄弟。", pinyin: "Wǒ yǒu liǎng ge xiōngdì.", en: "I have two brothers." },
    { zh: "兄弟，谢谢你！", pinyin: "Xiōngdì, xièxie nǐ!", en: "Thanks, bro!" } ] },
  { hanzi: "结束", pinyin: "jiéshù", meaning: "to end; to finish", examples: [
    { zh: "会议结束了。", pinyin: "Huìyì jiéshù le.", en: "The meeting is over." },
    { zh: "比赛几点结束？", pinyin: "Bǐsài jǐ diǎn jiéshù?", en: "What time does the game end?" } ] },
  { hanzi: "机会", pinyin: "jīhuì", meaning: "chance; opportunity", examples: [
    { zh: "请再给我一次机会。", pinyin: "Qǐng zài gěi wǒ yí cì jīhuì.", en: "Please give me one more chance." },
    { zh: "这是一个好机会。", pinyin: "Zhè shì yí ge hǎo jīhuì.", en: "This is a good opportunity." } ] },
  { hanzi: "拜托", pinyin: "bàituō", meaning: "please; come on (pleading)", examples: [
    { zh: "拜托你帮我一下。", pinyin: "Bàituō nǐ bāng wǒ yíxià.", en: "Please give me a hand." },
    { zh: "拜托，别再说了！", pinyin: "Bàituō, bié zài shuō le!", en: "Come on, stop talking about it!" } ] },
  { hanzi: "决定", pinyin: "juédìng", meaning: "to decide; decision", examples: [
    { zh: "你决定了吗？", pinyin: "Nǐ juédìng le ma?", en: "Have you decided?" },
    { zh: "这是一个很难的决定。", pinyin: "Zhè shì yí ge hěn nán de juédìng.", en: "This is a hard decision." } ] },
  { hanzi: "确定", pinyin: "quèdìng", meaning: "sure; to confirm", examples: [
    { zh: "你确定吗？", pinyin: "Nǐ quèdìng ma?", en: "Are you sure?" },
    { zh: "我还没确定时间。", pinyin: "Wǒ hái méi quèdìng shíjiān.", en: "I haven't confirmed the time yet." } ] },
  { hanzi: "还好", pinyin: "hái hǎo", meaning: "not bad; luckily", examples: [
    { zh: "最近怎么样？还好。", pinyin: "Zuìjìn zěnmeyàng? Hái hǎo.", en: "How have you been? Not bad." },
    { zh: "还好你来了！", pinyin: "Hái hǎo nǐ lái le!", en: "Luckily you came!" } ] },
  { hanzi: "无法", pinyin: "wúfǎ", meaning: "unable to; cannot", examples: [
    { zh: "我无法相信。", pinyin: "Wǒ wúfǎ xiāngxìn.", en: "I can't believe it." },
    { zh: "现在无法联系他。", pinyin: "Xiànzài wúfǎ liánxì tā.", en: "He can't be reached right now." } ] },
  { hanzi: "小时", pinyin: "xiǎoshí", meaning: "hour", examples: [
    { zh: "我等了一个小时。", pinyin: "Wǒ děng le yí ge xiǎoshí.", en: "I waited for an hour." },
    { zh: "从这里到北京要两个小时。", pinyin: "Cóng zhèlǐ dào Běijīng yào liǎng ge xiǎoshí.", en: "It takes two hours from here to Beijing." } ] },
  { hanzi: "清楚", pinyin: "qīngchu", meaning: "clear; to understand clearly", examples: [
    { zh: "我听不清楚。", pinyin: "Wǒ tīng bù qīngchu.", en: "I can't hear clearly." },
    { zh: "你说清楚一点。", pinyin: "Nǐ shuō qīngchu yìdiǎn.", en: "Say it a bit more clearly." } ] },
  { hanzi: "有些", pinyin: "yǒuxiē", meaning: "some; somewhat", examples: [
    { zh: "有些人喜欢早起。", pinyin: "Yǒuxiē rén xǐhuan zǎo qǐ.", en: "Some people like getting up early." },
    { zh: "我有些紧张。", pinyin: "Wǒ yǒuxiē jǐnzhāng.", en: "I'm a bit nervous." } ] },
  { hanzi: "帮助", pinyin: "bāngzhù", meaning: "to help; help", examples: [
    { zh: "谢谢你的帮助。", pinyin: "Xièxie nǐ de bāngzhù.", en: "Thank you for your help." },
    { zh: "我们应该帮助别人。", pinyin: "Wǒmen yīnggāi bāngzhù biérén.", en: "We should help others." } ] },
  { hanzi: "长官", pinyin: "zhǎngguān", meaning: "officer; sir (to a superior)", examples: [
    { zh: "是，长官！", pinyin: "Shì, zhǎngguān!", en: "Yes, sir!" },
    { zh: "长官，我们准备好了。", pinyin: "Zhǎngguān, wǒmen zhǔnbèi hǎo le.", en: "Sir, we're ready." } ] },
  { hanzi: "房子", pinyin: "fángzi", meaning: "house", examples: [
    { zh: "他们买了一套新房子。", pinyin: "Tāmen mǎi le yí tào xīn fángzi.", en: "They bought a new house." },
    { zh: "这个房子很大。", pinyin: "Zhège fángzi hěn dà.", en: "This house is very big." } ] },
  { hanzi: "根本", pinyin: "gēnběn", meaning: "at all; simply (often with 不/没)", examples: [
    { zh: "我根本不认识他。", pinyin: "Wǒ gēnběn bú rènshi tā.", en: "I don't know him at all." },
    { zh: "他根本没听我说话。", pinyin: "Tā gēnběn méi tīng wǒ shuōhuà.", en: "He wasn't listening to me at all." } ] },
  { hanzi: "办法", pinyin: "bànfǎ", meaning: "way; method; solution", examples: [
    { zh: "我们得想个办法。", pinyin: "Wǒmen děi xiǎng ge bànfǎ.", en: "We need to think of a way." },
    { zh: "没办法，只能这样了。", pinyin: "Méi bànfǎ, zhǐ néng zhèyàng le.", en: "Nothing we can do; it'll have to be this way." } ] },
  { hanzi: "不管", pinyin: "bùguǎn", meaning: "no matter; regardless", examples: [
    { zh: "不管多忙，他每天都运动。", pinyin: "Bùguǎn duō máng, tā měitiān dōu yùndòng.", en: "No matter how busy he is, he exercises every day." },
    { zh: "不管怎么样，我都支持你。", pinyin: "Bùguǎn zěnmeyàng, wǒ dōu zhīchí nǐ.", en: "Whatever happens, I support you." } ] },
  { hanzi: "计划", pinyin: "jìhuà", meaning: "plan; to plan", examples: [
    { zh: "你周末有什么计划？", pinyin: "Nǐ zhōumò yǒu shénme jìhuà?", en: "What are your plans for the weekend?" },
    { zh: "我计划明年去中国。", pinyin: "Wǒ jìhuà míngnián qù Zhōngguó.", en: "I'm planning to go to China next year." } ] },
  { hanzi: "唯一", pinyin: "wéiyī", meaning: "only; sole", examples: [
    { zh: "你是我唯一的朋友。", pinyin: "Nǐ shì wǒ wéiyī de péngyou.", en: "You're my only friend." },
    { zh: "这是唯一的办法。", pinyin: "Zhè shì wéiyī de bànfǎ.", en: "This is the only way." } ] },
  { hanzi: "来说", pinyin: "láishuō", meaning: "(对…来说) for; as far as … is concerned", examples: [
    { zh: "对我来说，家人最重要。", pinyin: "Duì wǒ láishuō, jiārén zuì zhòngyào.", en: "For me, family is most important." },
    { zh: "对他来说，这太难了。", pinyin: "Duì tā láishuō, zhè tài nán le.", en: "For him, this is too hard." } ] },
  { hanzi: "女儿", pinyin: "nǚ'ér", meaning: "daughter", examples: [
    { zh: "我女儿今年十岁。", pinyin: "Wǒ nǚ'ér jīnnián shí suì.", en: "My daughter is ten this year." },
    { zh: "他们有两个女儿。", pinyin: "Tāmen yǒu liǎng ge nǚ'ér.", en: "They have two daughters." } ] },
  { hanzi: "看着", pinyin: "kànzhe", meaning: "to look at; to watch", examples: [
    { zh: "看着我的眼睛。", pinyin: "Kànzhe wǒ de yǎnjing.", en: "Look me in the eyes." },
    { zh: "他看着窗外。", pinyin: "Tā kànzhe chuāng wài.", en: "He's looking out the window." } ] },
  { hanzi: "宝贝", pinyin: "bǎobèi", meaning: "baby; darling; treasure", examples: [
    { zh: "宝贝，该睡觉了。", pinyin: "Bǎobèi, gāi shuìjiào le.", en: "Sweetie, it's time for bed." },
    { zh: "这些书是我的宝贝。", pinyin: "Zhèxiē shū shì wǒ de bǎobèi.", en: "These books are my treasures." } ] },
  { hanzi: "每个", pinyin: "měi ge", meaning: "every; each", examples: [
    { zh: "每个人都不一样。", pinyin: "Měi ge rén dōu bù yíyàng.", en: "Everyone is different." },
    { zh: "我每个周末都去游泳。", pinyin: "Wǒ měi ge zhōumò dōu qù yóuyǒng.", en: "I go swimming every weekend." } ] },
  { hanzi: "漂亮", pinyin: "piàoliang", meaning: "pretty; beautiful", examples: [
    { zh: "你今天很漂亮。", pinyin: "Nǐ jīntiān hěn piàoliang.", en: "You look beautiful today." },
    { zh: "这件衣服真漂亮。", pinyin: "Zhè jiàn yīfu zhēn piàoliang.", en: "This outfit is really pretty." } ] },
  { hanzi: "人们", pinyin: "rénmen", meaning: "people", examples: [
    { zh: "人们都在看他。", pinyin: "Rénmen dōu zài kàn tā.", en: "People are all looking at him." },
    { zh: "过年的时候，人们都回家。", pinyin: "Guònián de shíhou, rénmen dōu huíjiā.", en: "At New Year, people all go home." } ] },
  { hanzi: "真正", pinyin: "zhēnzhèng", meaning: "real; truly", examples: [
    { zh: "他是我真正的朋友。", pinyin: "Tā shì wǒ zhēnzhèng de péngyou.", en: "He's a true friend." },
    { zh: "我现在才真正明白。", pinyin: "Wǒ xiànzài cái zhēnzhèng míngbai.", en: "Only now do I truly understand." } ] },
  { hanzi: "甚至", pinyin: "shènzhì", meaning: "even", examples: [
    { zh: "他甚至没说再见。", pinyin: "Tā shènzhì méi shuō zàijiàn.", en: "He didn't even say goodbye." },
    { zh: "我太累了，甚至不想吃饭。", pinyin: "Wǒ tài lèi le, shènzhì bù xiǎng chī fàn.", en: "I'm so tired I don't even want to eat." } ] },
  { hanzi: "那边", pinyin: "nàbiān", meaning: "over there", examples: [
    { zh: "那边有一家咖啡店。", pinyin: "Nàbiān yǒu yì jiā kāfēidiàn.", en: "There's a café over there." },
    { zh: "你去那边等我。", pinyin: "Nǐ qù nàbiān děng wǒ.", en: "Go wait for me over there." } ] },
  { hanzi: "不好", pinyin: "bù hǎo", meaning: "not good; bad", examples: [
    { zh: "今天天气不好。", pinyin: "Jīntiān tiānqì bù hǎo.", en: "The weather's bad today." },
    { zh: "不好意思，我来晚了。", pinyin: "Bù hǎo yìsi, wǒ lái wǎn le.", en: "Sorry, I'm late." } ] },
  { hanzi: "进来", pinyin: "jìnlai", meaning: "to come in", examples: [
    { zh: "请进来。", pinyin: "Qǐng jìnlai.", en: "Please come in." },
    { zh: "他没敲门就进来了。", pinyin: "Tā méi qiāo mén jiù jìnlai le.", en: "He came in without knocking." } ] },
  { hanzi: "夫人", pinyin: "fūrén", meaning: "Madam; Mrs.; wife (formal)", examples: [
    { zh: "王夫人，欢迎光临。", pinyin: "Wáng fūrén, huānyíng guānglín.", en: "Welcome, Mrs. Wang." },
    { zh: "这位是我的夫人。", pinyin: "Zhè wèi shì wǒ de fūrén.", en: "This is my wife." } ] },
  { hanzi: "愿意", pinyin: "yuànyì", meaning: "to be willing", examples: [
    { zh: "你愿意帮我吗？", pinyin: "Nǐ yuànyì bāng wǒ ma?", en: "Would you be willing to help me?" },
    { zh: "我愿意。", pinyin: "Wǒ yuànyì.", en: "I do. / I'm willing." } ] },
  { hanzi: "麻烦", pinyin: "máfan", meaning: "trouble; troublesome; to bother", examples: [
    { zh: "麻烦你了！", pinyin: "Máfan nǐ le!", en: "Sorry to trouble you! / Thanks for your trouble!" },
    { zh: "这件事很麻烦。", pinyin: "Zhè jiàn shì hěn máfan.", en: "This is a real hassle." } ] },
  { hanzi: "打算", pinyin: "dǎsuàn", meaning: "to plan; to intend", examples: [
    { zh: "你打算什么时候回家？", pinyin: "Nǐ dǎsuàn shénme shíhou huíjiā?", en: "When are you planning to go home?" },
    { zh: "我打算学开车。", pinyin: "Wǒ dǎsuàn xué kāichē.", en: "I'm planning to learn to drive." } ] },
  { hanzi: "故事", pinyin: "gùshi", meaning: "story", examples: [
    { zh: "给我讲个故事吧。", pinyin: "Gěi wǒ jiǎng ge gùshi ba.", en: "Tell me a story." },
    { zh: "这是一个真实的故事。", pinyin: "Zhè shì yí ge zhēnshí de gùshi.", en: "This is a true story." } ] },
  { hanzi: "一种", pinyin: "yì zhǒng", meaning: "a kind of; one type", examples: [
    { zh: "这是一种中国水果。", pinyin: "Zhè shì yì zhǒng Zhōngguó shuǐguǒ.", en: "This is a kind of Chinese fruit." },
    { zh: "我有一种奇怪的感觉。", pinyin: "Wǒ yǒu yì zhǒng qíguài de gǎnjué.", en: "I have a strange feeling." } ] },
  { hanzi: "害怕", pinyin: "hàipà", meaning: "to be afraid", examples: [
    { zh: "别害怕。", pinyin: "Bié hàipà.", en: "Don't be afraid." },
    { zh: "我害怕狗。", pinyin: "Wǒ hàipà gǒu.", en: "I'm afraid of dogs." } ] },
  { hanzi: "房间", pinyin: "fángjiān", meaning: "room", examples: [
    { zh: "我的房间很小。", pinyin: "Wǒ de fángjiān hěn xiǎo.", en: "My room is small." },
    { zh: "你有空房间吗？", pinyin: "Nǐ yǒu kòng fángjiān ma?", en: "Do you have a vacant room?" } ] },
  { hanzi: "那儿", pinyin: "nàr", meaning: "there (spoken, northern)", examples: [
    { zh: "你在那儿干什么？", pinyin: "Nǐ zài nàr gàn shénme?", en: "What are you doing there?" },
    { zh: "书在那儿。", pinyin: "Shū zài nàr.", en: "The book is over there." } ] },
  { hanzi: "衣服", pinyin: "yīfu", meaning: "clothes", examples: [
    { zh: "我去买衣服。", pinyin: "Wǒ qù mǎi yīfu.", en: "I'm going to buy clothes." },
    { zh: "多穿点衣服，外面很冷。", pinyin: "Duō chuān diǎn yīfu, wàimiàn hěn lěng.", en: "Wear more layers; it's cold outside." } ] },
  { hanzi: "母亲", pinyin: "mǔqīn", meaning: "mother", examples: [
    { zh: "我的母亲是护士。", pinyin: "Wǒ de mǔqīn shì hùshi.", en: "My mother is a nurse." },
    { zh: "今天是母亲节。", pinyin: "Jīntiān shì Mǔqīn Jié.", en: "Today is Mother's Day." } ] },
  { hanzi: "下来", pinyin: "xiàlai", meaning: "to come down", examples: [
    { zh: "快下来吃饭！", pinyin: "Kuài xiàlai chī fàn!", en: "Come down and eat!" },
    { zh: "请把它写下来。", pinyin: "Qǐng bǎ tā xiě xiàlai.", en: "Please write it down." } ] },
  { hanzi: "听说", pinyin: "tīngshuō", meaning: "to hear (that); I heard", examples: [
    { zh: "听说你要结婚了？", pinyin: "Tīngshuō nǐ yào jiéhūn le?", en: "I heard you're getting married?" },
    { zh: "我听说那家饭馆很好吃。", pinyin: "Wǒ tīngshuō nà jiā fànguǎn hěn hǎochī.", en: "I heard that restaurant is good." } ] },
  { hanzi: "注意", pinyin: "zhùyì", meaning: "to pay attention; to watch out", examples: [
    { zh: "注意安全！", pinyin: "Zhùyì ānquán!", en: "Be safe!" },
    { zh: "我没注意到他。", pinyin: "Wǒ méi zhùyì dào tā.", en: "I didn't notice him." } ] },
  { hanzi: "改变", pinyin: "gǎibiàn", meaning: "to change", examples: [
    { zh: "他改变了很多。", pinyin: "Tā gǎibiàn le hěn duō.", en: "He has changed a lot." },
    { zh: "我改变主意了。", pinyin: "Wǒ gǎibiàn zhǔyi le.", en: "I've changed my mind." } ] },
  { hanzi: "这次", pinyin: "zhè cì", meaning: "this time", examples: [
    { zh: "这次我请客。", pinyin: "Zhè cì wǒ qǐngkè.", en: "This time it's on me." },
    { zh: "这次考试很简单。", pinyin: "Zhè cì kǎoshì hěn jiǎndān.", en: "This exam was easy." } ] },
  { hanzi: "接受", pinyin: "jiēshòu", meaning: "to accept", examples: [
    { zh: "我接受你的道歉。", pinyin: "Wǒ jiēshòu nǐ de dàoqiàn.", en: "I accept your apology." },
    { zh: "这里接受信用卡吗？", pinyin: "Zhèlǐ jiēshòu xìnyòngkǎ ma?", en: "Do you accept credit cards here?" } ] },
  { hanzi: "妻子", pinyin: "qīzi", meaning: "wife", examples: [
    { zh: "这是我的妻子。", pinyin: "Zhè shì wǒ de qīzi.", en: "This is my wife." },
    { zh: "他的妻子是医生。", pinyin: "Tā de qīzi shì yīshēng.", en: "His wife is a doctor." } ] },
  { hanzi: "失去", pinyin: "shīqù", meaning: "to lose", examples: [
    { zh: "我不想失去你。", pinyin: "Wǒ bù xiǎng shīqù nǐ.", en: "I don't want to lose you." },
    { zh: "他失去了工作。", pinyin: "Tā shīqù le gōngzuò.", en: "He lost his job." } ] },
  { hanzi: "回到", pinyin: "huídào", meaning: "to return to", examples: [
    { zh: "我昨天回到了家。", pinyin: "Wǒ zuótiān huídào le jiā.", en: "I got home yesterday." },
    { zh: "我们回到正题吧。", pinyin: "Wǒmen huídào zhèngtí ba.", en: "Let's get back to the topic." } ] },
  { hanzi: "以后", pinyin: "yǐhòu", meaning: "after; in the future", examples: [
    { zh: "下课以后我去找你。", pinyin: "Xiàkè yǐhòu wǒ qù zhǎo nǐ.", en: "I'll come find you after class." },
    { zh: "以后别这样了。", pinyin: "Yǐhòu bié zhèyàng le.", en: "Don't do that again in the future." } ] },
  { hanzi: "是否", pinyin: "shìfǒu", meaning: "whether (formal)", examples: [
    { zh: "我不知道他是否会来。", pinyin: "Wǒ bù zhīdào tā shìfǒu huì lái.", en: "I don't know whether he'll come." },
    { zh: "请问您是否需要帮助？", pinyin: "Qǐngwèn nín shìfǒu xūyào bāngzhù?", en: "Excuse me, do you need any help?" } ] },
  { hanzi: "生命", pinyin: "shēngmìng", meaning: "life (being alive)", examples: [
    { zh: "生命很宝贵。", pinyin: "Shēngmìng hěn bǎoguì.", en: "Life is precious." },
    { zh: "医生救了他的生命。", pinyin: "Yīshēng jiù le tā de shēngmìng.", en: "The doctor saved his life." } ] },
  { hanzi: "进去", pinyin: "jìnqu", meaning: "to go in", examples: [
    { zh: "我们进去吧。", pinyin: "Wǒmen jìnqu ba.", en: "Let's go in." },
    { zh: "你不能进去。", pinyin: "Nǐ bù néng jìnqu.", en: "You can't go in." } ] },
  { hanzi: "女士", pinyin: "nǚshì", meaning: "lady; Ms.", examples: [
    { zh: "女士们，先生们，晚上好！", pinyin: "Nǚshìmen, xiānshengmen, wǎnshang hǎo!", en: "Ladies and gentlemen, good evening!" },
    { zh: "这位女士在找你。", pinyin: "Zhè wèi nǚshì zài zhǎo nǐ.", en: "This lady is looking for you." } ] },
  { hanzi: "原因", pinyin: "yuányīn", meaning: "reason; cause", examples: [
    { zh: "你知道原因吗？", pinyin: "Nǐ zhīdào yuányīn ma?", en: "Do you know the reason?" },
    { zh: "他迟到的原因是堵车。", pinyin: "Tā chídào de yuányīn shì dǔchē.", en: "The reason he was late was traffic." } ] },
  { hanzi: "刚才", pinyin: "gāngcái", meaning: "just now", examples: [
    { zh: "你刚才说什么？", pinyin: "Nǐ gāngcái shuō shénme?", en: "What did you just say?" },
    { zh: "他刚才还在这里。", pinyin: "Tā gāngcái hái zài zhèlǐ.", en: "He was here just a moment ago." } ] },
  { hanzi: "保护", pinyin: "bǎohù", meaning: "to protect", examples: [
    { zh: "我们要保护环境。", pinyin: "Wǒmen yào bǎohù huánjìng.", en: "We should protect the environment." },
    { zh: "我会保护你的。", pinyin: "Wǒ huì bǎohù nǐ de.", en: "I'll protect you." } ] },
  { hanzi: "选择", pinyin: "xuǎnzé", meaning: "to choose; choice", examples: [
    { zh: "你选择哪一个？", pinyin: "Nǐ xuǎnzé nǎ yí ge?", en: "Which one do you choose?" },
    { zh: "我们没有选择。", pinyin: "Wǒmen méiyǒu xuǎnzé.", en: "We have no choice." } ] },
  { hanzi: "几个", pinyin: "jǐ ge", meaning: "a few; how many", examples: [
    { zh: "你有几个兄弟姐妹？", pinyin: "Nǐ yǒu jǐ ge xiōngdì jiěmèi?", en: "How many brothers and sisters do you have?" },
    { zh: "我有几个问题。", pinyin: "Wǒ yǒu jǐ ge wèntí.", en: "I have a few questions." } ] },
  { hanzi: "关系", pinyin: "guānxi", meaning: "relationship; connection", examples: [
    { zh: "没关系。", pinyin: "Méi guānxi.", en: "It doesn't matter. / No problem." },
    { zh: "你们是什么关系？", pinyin: "Nǐmen shì shénme guānxi?", en: "How do you two know each other?" } ] },
  { hanzi: "当时", pinyin: "dāngshí", meaning: "at that time", examples: [
    { zh: "当时我才十岁。", pinyin: "Dāngshí wǒ cái shí suì.", en: "At that time I was only ten." },
    { zh: "你当时在哪儿？", pinyin: "Nǐ dāngshí zài nǎr?", en: "Where were you at the time?" } ] },
  { hanzi: "出现", pinyin: "chūxiàn", meaning: "to appear", examples: [
    { zh: "他突然出现了。", pinyin: "Tā tūrán chūxiàn le.", en: "He suddenly appeared." },
    { zh: "出现了一个问题。", pinyin: "Chūxiàn le yí ge wèntí.", en: "A problem came up." } ] },
  { hanzi: "结婚", pinyin: "jiéhūn", meaning: "to get married", examples: [
    { zh: "你结婚了吗？", pinyin: "Nǐ jiéhūn le ma?", en: "Are you married?" },
    { zh: "他们下个月结婚。", pinyin: "Tāmen xià ge yuè jiéhūn.", en: "They're getting married next month." } ] },
  { hanzi: "至少", pinyin: "zhìshǎo", meaning: "at least", examples: [
    { zh: "你至少应该打个电话。", pinyin: "Nǐ zhìshǎo yīnggāi dǎ ge diànhuà.", en: "You should at least have called." },
    { zh: "这要至少一个小时。", pinyin: "Zhè yào zhìshǎo yí ge xiǎoshí.", en: "This will take at least an hour." } ] },
  { hanzi: "奇怪", pinyin: "qíguài", meaning: "strange; weird", examples: [
    { zh: "真奇怪！", pinyin: "Zhēn qíguài!", en: "How strange!" },
    { zh: "他今天有点奇怪。", pinyin: "Tā jīntiān yǒudiǎn qíguài.", en: "He's a bit odd today." } ] },
  { hanzi: "虽然", pinyin: "suīrán", meaning: "although", examples: [
    { zh: "虽然很累，但是我很开心。", pinyin: "Suīrán hěn lèi, dànshì wǒ hěn kāixīn.", en: "Although I'm tired, I'm happy." },
    { zh: "虽然下雨了，我们还是去了。", pinyin: "Suīrán xià yǔ le, wǒmen háishi qù le.", en: "Although it rained, we still went." } ] },
  { hanzi: "身上", pinyin: "shēnshang", meaning: "on (one's) body; on one", examples: [
    { zh: "我身上没带钱。", pinyin: "Wǒ shēnshang méi dài qián.", en: "I don't have any money on me." },
    { zh: "你身上有什么味道？", pinyin: "Nǐ shēnshang yǒu shénme wèidào?", en: "What's that smell on you?" } ] },
  { hanzi: "或许", pinyin: "huòxǔ", meaning: "perhaps; maybe", examples: [
    { zh: "或许他忘了。", pinyin: "Huòxǔ tā wàng le.", en: "Maybe he forgot." },
    { zh: "或许你是对的。", pinyin: "Huòxǔ nǐ shì duì de.", en: "Perhaps you're right." } ] },
  { hanzi: "保证", pinyin: "bǎozhèng", meaning: "to promise; to guarantee", examples: [
    { zh: "我保证不会迟到。", pinyin: "Wǒ bǎozhèng bú huì chídào.", en: "I promise I won't be late." },
    { zh: "你能保证吗？", pinyin: "Nǐ néng bǎozhèng ma?", en: "Can you guarantee it?" } ] },
  { hanzi: "外面", pinyin: "wàimiàn", meaning: "outside", examples: [
    { zh: "外面在下雨。", pinyin: "Wàimiàn zài xià yǔ.", en: "It's raining outside." },
    { zh: "我在外面等你。", pinyin: "Wǒ zài wàimiàn děng nǐ.", en: "I'll wait for you outside." } ] },
  { hanzi: "丈夫", pinyin: "zhàngfu", meaning: "husband", examples: [
    { zh: "她丈夫是工程师。", pinyin: "Tā zhàngfu shì gōngchéngshī.", en: "Her husband is an engineer." },
    { zh: "我丈夫今天不在家。", pinyin: "Wǒ zhàngfu jīntiān bú zài jiā.", en: "My husband isn't home today." } ] },
  { hanzi: "国家", pinyin: "guójiā", meaning: "country; nation", examples: [
    { zh: "你是哪个国家的人？", pinyin: "Nǐ shì nǎge guójiā de rén?", en: "Which country are you from?" },
    { zh: "我去过很多国家。", pinyin: "Wǒ qùguo hěn duō guójiā.", en: "I've been to many countries." } ] },
  { hanzi: "整个", pinyin: "zhěnggè", meaning: "whole; entire", examples: [
    { zh: "我整个周末都在家。", pinyin: "Wǒ zhěnggè zhōumò dōu zài jiā.", en: "I was home the whole weekend." },
    { zh: "整个城市都很安静。", pinyin: "Zhěnggè chéngshì dōu hěn ānjìng.", en: "The whole city is quiet." } ] },
  { hanzi: "那种", pinyin: "nà zhǒng", meaning: "that kind of", examples: [
    { zh: "我不喜欢那种电影。", pinyin: "Wǒ bù xǐhuan nà zhǒng diànyǐng.", en: "I don't like that kind of movie." },
    { zh: "他不是那种人。", pinyin: "Tā bú shì nà zhǒng rén.", en: "He's not that kind of person." } ] },
  { hanzi: "很快", pinyin: "hěn kuài", meaning: "very fast; soon", examples: [
    { zh: "我很快就回来。", pinyin: "Wǒ hěn kuài jiù huílai.", en: "I'll be back soon." },
    { zh: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", en: "He runs very fast." } ] },
  { hanzi: "变成", pinyin: "biànchéng", meaning: "to become; to turn into", examples: [
    { zh: "冰变成了水。", pinyin: "Bīng biànchéng le shuǐ.", en: "The ice turned into water." },
    { zh: "他变成了一个大人。", pinyin: "Tā biànchéng le yí ge dàrén.", en: "He's become a grown-up." } ] },
  { hanzi: "难道", pinyin: "nándào", meaning: "could it be that…? (rhetorical)", examples: [
    { zh: "难道你不知道吗？", pinyin: "Nándào nǐ bù zhīdào ma?", en: "Don't tell me you didn't know?" },
    { zh: "难道是我错了？", pinyin: "Nándào shì wǒ cuò le?", en: "Could it be that I was wrong?" } ] },
  { hanzi: "学校", pinyin: "xuéxiào", meaning: "school", examples: [
    { zh: "我每天走路去学校。", pinyin: "Wǒ měitiān zǒulù qù xuéxiào.", en: "I walk to school every day." },
    { zh: "你们学校大吗？", pinyin: "Nǐmen xuéxiào dà ma?", en: "Is your school big?" } ] },
  { hanzi: "样子", pinyin: "yàngzi", meaning: "appearance; look; manner", examples: [
    { zh: "你看起来很累的样子。", pinyin: "Nǐ kàn qǐlai hěn lèi de yàngzi.", en: "You look really tired." },
    { zh: "他的样子没变。", pinyin: "Tā de yàngzi méi biàn.", en: "He looks the same as before." } ] },
  { hanzi: "电影", pinyin: "diànyǐng", meaning: "movie", examples: [
    { zh: "我们去看电影吧。", pinyin: "Wǒmen qù kàn diànyǐng ba.", en: "Let's go see a movie." },
    { zh: "你喜欢什么电影？", pinyin: "Nǐ xǐhuan shénme diànyǐng?", en: "What kind of movies do you like?" } ] },
  { hanzi: "谈谈", pinyin: "tántan", meaning: "to have a talk", examples: [
    { zh: "我们需要谈谈。", pinyin: "Wǒmen xūyào tántan.", en: "We need to talk." },
    { zh: "跟我谈谈你的计划。", pinyin: "Gēn wǒ tántan nǐ de jìhuà.", en: "Tell me about your plans." } ] },
  { hanzi: "危险", pinyin: "wēixiǎn", meaning: "dangerous; danger", examples: [
    { zh: "这里很危险。", pinyin: "Zhèlǐ hěn wēixiǎn.", en: "It's dangerous here." },
    { zh: "他现在没有危险了。", pinyin: "Tā xiànzài méiyǒu wēixiǎn le.", en: "He's out of danger now." } ] },
  { hanzi: "开心", pinyin: "kāixīn", meaning: "happy", examples: [
    { zh: "今天我很开心。", pinyin: "Jīntiān wǒ hěn kāixīn.", en: "I'm really happy today." },
    { zh: "祝你玩得开心！", pinyin: "Zhù nǐ wán de kāixīn!", en: "Have fun!" } ] },
  { hanzi: "别的", pinyin: "bié de", meaning: "other; something else", examples: [
    { zh: "你还要别的吗？", pinyin: "Nǐ hái yào bié de ma?", en: "Would you like anything else?" },
    { zh: "我们说点别的吧。", pinyin: "Wǒmen shuō diǎn bié de ba.", en: "Let's talk about something else." } ] },
  { hanzi: "才能", pinyin: "cái néng", meaning: "only then can; (cáinéng) talent", examples: [
    { zh: "你要多练习才能说好。", pinyin: "Nǐ yào duō liànxí cái néng shuō hǎo.", en: "You have to practice a lot to speak well." },
    { zh: "她很有音乐才能。", pinyin: "Tā hěn yǒu yīnyuè cáinéng.", en: "She's very musically talented." } ] },
  { hanzi: "闭嘴", pinyin: "bìzuǐ", meaning: "shut up (rude)", examples: [
    { zh: "闭嘴！", pinyin: "Bìzuǐ!", en: "Shut up!" },
    { zh: "你能不能闭嘴？", pinyin: "Nǐ néng bù néng bìzuǐ?", en: "Can you be quiet?" } ] },
  { hanzi: "进行", pinyin: "jìnxíng", meaning: "to carry out; to be in progress", examples: [
    { zh: "会议正在进行。", pinyin: "Huìyì zhèngzài jìnxíng.", en: "The meeting is in progress." },
    { zh: "我们明天进行考试。", pinyin: "Wǒmen míngtiān jìnxíng kǎoshì.", en: "We're holding the exam tomorrow." } ] },
  { hanzi: "照片", pinyin: "zhàopiàn", meaning: "photo", examples: [
    { zh: "可以帮我们拍张照片吗？", pinyin: "Kěyǐ bāng wǒmen pāi zhāng zhàopiàn ma?", en: "Could you take a photo of us?" },
    { zh: "这张照片很好看。", pinyin: "Zhè zhāng zhàopiàn hěn hǎokàn.", en: "This photo looks great." } ] },
  { hanzi: "刚刚", pinyin: "gānggāng", meaning: "just now; just", examples: [
    { zh: "我刚刚到。", pinyin: "Wǒ gānggāng dào.", en: "I just arrived." },
    { zh: "他刚刚走了。", pinyin: "Tā gānggāng zǒu le.", en: "He just left." } ] },
  { hanzi: "而已", pinyin: "éryǐ", meaning: "that's all; only", examples: [
    { zh: "我只是开玩笑而已。", pinyin: "Wǒ zhǐshì kāi wánxiào éryǐ.", en: "I was only joking." },
    { zh: "只是一点小问题而已。", pinyin: "Zhǐshì yìdiǎn xiǎo wèntí éryǐ.", en: "It's just a small problem, that's all." } ] },
  { hanzi: "完成", pinyin: "wánchéng", meaning: "to finish; to complete", examples: [
    { zh: "你完成作业了吗？", pinyin: "Nǐ wánchéng zuòyè le ma?", en: "Have you finished your homework?" },
    { zh: "我们按时完成了工作。", pinyin: "Wǒmen ànshí wánchéng le gōngzuò.", en: "We finished the work on time." } ] },
  { hanzi: "方式", pinyin: "fāngshì", meaning: "way; manner", examples: [
    { zh: "这是最好的方式。", pinyin: "Zhè shì zuì hǎo de fāngshì.", en: "This is the best way." },
    { zh: "每个人的生活方式不同。", pinyin: "Měi ge rén de shēnghuó fāngshì bùtóng.", en: "Everyone's lifestyle is different." } ] },
  { hanzi: "做到", pinyin: "zuòdào", meaning: "to achieve; to manage to do", examples: [
    { zh: "你一定能做到！", pinyin: "Nǐ yídìng néng zuòdào!", en: "You can definitely do it!" },
    { zh: "说到做到。", pinyin: "Shuōdào zuòdào.", en: "I'll do what I say." } ] },
  { hanzi: "看来", pinyin: "kànlai", meaning: "it seems; apparently", examples: [
    { zh: "看来要下雨了。", pinyin: "Kànlai yào xià yǔ le.", en: "Looks like it's going to rain." },
    { zh: "看来他不会来了。", pinyin: "Kànlai tā bú huì lái le.", en: "It seems he isn't coming." } ] },
  { hanzi: "只能", pinyin: "zhǐ néng", meaning: "can only; have no choice but", examples: [
    { zh: "我们只能等了。", pinyin: "Wǒmen zhǐ néng děng le.", en: "All we can do is wait." },
    { zh: "我只能说一点中文。", pinyin: "Wǒ zhǐ néng shuō yìdiǎn Zhōngwén.", en: "I can only speak a little Chinese." } ] },
  { hanzi: "太太", pinyin: "tàitai", meaning: "wife; Mrs.", examples: [
    { zh: "这是我太太。", pinyin: "Zhè shì wǒ tàitai.", en: "This is my wife." },
    { zh: "王太太，好久不见！", pinyin: "Wáng tàitai, hǎojiǔ bú jiàn!", en: "Mrs. Wang, long time no see!" } ] },
  { hanzi: "下去", pinyin: "xiàqu", meaning: "to go down; to continue", examples: [
    { zh: "我们下去吧。", pinyin: "Wǒmen xiàqu ba.", en: "Let's go downstairs." },
    { zh: "请说下去。", pinyin: "Qǐng shuō xiàqu.", en: "Please go on." } ] },
  { hanzi: "绝对", pinyin: "juéduì", meaning: "absolutely", examples: [
    { zh: "我绝对不会告诉别人。", pinyin: "Wǒ juéduì bú huì gàosu biérén.", en: "I absolutely won't tell anyone." },
    { zh: "你绝对是对的。", pinyin: "Nǐ juéduì shì duì de.", en: "You're absolutely right." } ] },
  { hanzi: "处理", pinyin: "chǔlǐ", meaning: "to handle; to deal with", examples: [
    { zh: "这件事我来处理。", pinyin: "Zhè jiàn shì wǒ lái chǔlǐ.", en: "I'll handle this." },
    { zh: "问题已经处理好了。", pinyin: "Wèntí yǐjīng chǔlǐ hǎo le.", en: "The problem has been dealt with." } ] },
  { hanzi: "欢迎", pinyin: "huānyíng", meaning: "welcome", examples: [
    { zh: "欢迎来中国！", pinyin: "Huānyíng lái Zhōngguó!", en: "Welcome to China!" },
    { zh: "欢迎你常来玩。", pinyin: "Huānyíng nǐ cháng lái wán.", en: "You're welcome to come by often." } ] },
  { hanzi: "眼睛", pinyin: "yǎnjing", meaning: "eye; eyes", examples: [
    { zh: "她的眼睛很大。", pinyin: "Tā de yǎnjing hěn dà.", en: "She has big eyes." },
    { zh: "闭上眼睛。", pinyin: "Bì shang yǎnjing.", en: "Close your eyes." } ] },
  { hanzi: "通过", pinyin: "tōngguò", meaning: "to pass; through; by means of", examples: [
    { zh: "我通过了考试！", pinyin: "Wǒ tōngguò le kǎoshì!", en: "I passed the exam!" },
    { zh: "我们是通过朋友认识的。", pinyin: "Wǒmen shì tōngguò péngyou rènshi de.", en: "We met through a friend." } ] },
  { hanzi: "感到", pinyin: "gǎndào", meaning: "to feel", examples: [
    { zh: "我感到很高兴。", pinyin: "Wǒ gǎndào hěn gāoxìng.", en: "I feel very happy." },
    { zh: "他感到有点累。", pinyin: "Tā gǎndào yǒudiǎn lèi.", en: "He feels a bit tired." } ] },
  { hanzi: "各位", pinyin: "gèwèi", meaning: "everyone (polite address)", examples: [
    { zh: "各位好！", pinyin: "Gèwèi hǎo!", en: "Hello, everyone!" },
    { zh: "谢谢各位的帮助。", pinyin: "Xièxie gèwèi de bāngzhù.", en: "Thank you all for your help." } ] },
  { hanzi: "这边", pinyin: "zhèbiān", meaning: "this side; over here", examples: [
    { zh: "请这边走。", pinyin: "Qǐng zhèbiān zǒu.", en: "This way, please." },
    { zh: "我们坐这边吧。", pinyin: "Wǒmen zuò zhèbiān ba.", en: "Let's sit over here." } ] },
  { hanzi: "作为", pinyin: "zuòwéi", meaning: "as (in the role of)", examples: [
    { zh: "作为老师，我很为你骄傲。", pinyin: "Zuòwéi lǎoshī, wǒ hěn wèi nǐ jiāo'ào.", en: "As your teacher, I'm very proud of you." },
    { zh: "作为朋友，我应该帮你。", pinyin: "Zuòwéi péngyou, wǒ yīnggāi bāng nǐ.", en: "As a friend, I should help you." } ] },
  { hanzi: "容易", pinyin: "róngyì", meaning: "easy", examples: [
    { zh: "这个问题很容易。", pinyin: "Zhège wèntí hěn róngyì.", en: "This question is easy." },
    { zh: "学中文不容易。", pinyin: "Xué Zhōngwén bù róngyì.", en: "Learning Chinese isn't easy." } ] },
  { hanzi: "直到", pinyin: "zhídào", meaning: "until", examples: [
    { zh: "我等了你直到十点。", pinyin: "Wǒ děng le nǐ zhídào shí diǎn.", en: "I waited for you until ten." },
    { zh: "直到今天我才知道。", pinyin: "Zhídào jīntiān wǒ cái zhīdào.", en: "I didn't find out until today." } ] },
  { hanzi: "比赛", pinyin: "bǐsài", meaning: "match; competition", examples: [
    { zh: "今天的比赛谁赢了？", pinyin: "Jīntiān de bǐsài shéi yíng le?", en: "Who won today's game?" },
    { zh: "我们去看足球比赛吧。", pinyin: "Wǒmen qù kàn zúqiú bǐsài ba.", en: "Let's go watch the soccer match." } ] },
  { hanzi: "像是", pinyin: "xiàng shì", meaning: "to seem like; to be like", examples: [
    { zh: "这像是他的字。", pinyin: "Zhè xiàng shì tā de zì.", en: "This looks like his handwriting." },
    { zh: "听起来像是个好主意。", pinyin: "Tīng qǐlai xiàng shì ge hǎo zhǔyi.", en: "Sounds like a good idea." } ] },
  { hanzi: "更好", pinyin: "gèng hǎo", meaning: "better", examples: [
    { zh: "明天会更好。", pinyin: "Míngtiān huì gèng hǎo.", en: "Tomorrow will be better." },
    { zh: "这个比那个更好。", pinyin: "Zhège bǐ nàge gèng hǎo.", en: "This one is better than that one." } ] },
  { hanzi: "有趣", pinyin: "yǒuqù", meaning: "interesting; fun", examples: [
    { zh: "这个游戏很有趣。", pinyin: "Zhège yóuxì hěn yǒuqù.", en: "This game is fun." },
    { zh: "他是一个有趣的人。", pinyin: "Tā shì yí ge yǒuqù de rén.", en: "He's an interesting person." } ] },
  { hanzi: "就算", pinyin: "jiùsuàn", meaning: "even if", examples: [
    { zh: "就算下雨，我也要去。", pinyin: "Jiùsuàn xià yǔ, wǒ yě yào qù.", en: "Even if it rains, I'm still going." },
    { zh: "就算你不说，我也知道。", pinyin: "Jiùsuàn nǐ bù shuō, wǒ yě zhīdào.", en: "Even if you don't say it, I know." } ] },
  { hanzi: "活着", pinyin: "huózhe", meaning: "to be alive", examples: [
    { zh: "他还活着。", pinyin: "Tā hái huózhe.", en: "He's still alive." },
    { zh: "活着真好。", pinyin: "Huózhe zhēn hǎo.", en: "It's good to be alive." } ] },
  { hanzi: "努力", pinyin: "nǔlì", meaning: "to work hard; effort", examples: [
    { zh: "他学习很努力。", pinyin: "Tā xuéxí hěn nǔlì.", en: "He studies very hard." },
    { zh: "继续努力！", pinyin: "Jìxù nǔlì!", en: "Keep up the good work!" } ] },
  { hanzi: "帮忙", pinyin: "bāngmáng", meaning: "to help; to do a favor", examples: [
    { zh: "需要帮忙吗？", pinyin: "Xūyào bāngmáng ma?", en: "Need a hand?" },
    { zh: "谢谢你来帮忙。", pinyin: "Xièxie nǐ lái bāngmáng.", en: "Thanks for coming to help." } ] },
  { hanzi: "留下", pinyin: "liúxià", meaning: "to stay; to leave behind", examples: [
    { zh: "你可以留下来吃饭。", pinyin: "Nǐ kěyǐ liúxià lái chī fàn.", en: "You can stay for dinner." },
    { zh: "他留下了一封信。", pinyin: "Tā liúxià le yì fēng xìn.", en: "He left behind a letter." } ] },
  { hanzi: "同意", pinyin: "tóngyì", meaning: "to agree", examples: [
    { zh: "我同意你的看法。", pinyin: "Wǒ tóngyì nǐ de kànfǎ.", en: "I agree with your view." },
    { zh: "爸爸妈妈不同意。", pinyin: "Bàba māma bù tóngyì.", en: "Mom and Dad don't agree." } ] },
  { hanzi: "参加", pinyin: "cānjiā", meaning: "to take part in; to attend", examples: [
    { zh: "你会参加聚会吗？", pinyin: "Nǐ huì cānjiā jùhuì ma?", en: "Will you come to the party?" },
    { zh: "我参加了一个中文班。", pinyin: "Wǒ cānjiā le yí ge Zhōngwén bān.", en: "I joined a Chinese class." } ] },
  { hanzi: "死亡", pinyin: "sǐwáng", meaning: "death", examples: [
    { zh: "他不害怕死亡。", pinyin: "Tā bú hàipà sǐwáng.", en: "He isn't afraid of death." },
    { zh: "这次事故没有人死亡。", pinyin: "Zhè cì shìgù méiyǒu rén sǐwáng.", en: "No one died in this accident." } ] },
  { hanzi: "上面", pinyin: "shàngmiàn", meaning: "on top; above", examples: [
    { zh: "书在桌子上面。", pinyin: "Shū zài zhuōzi shàngmiàn.", en: "The book is on the table." },
    { zh: "上面写着什么？", pinyin: "Shàngmiàn xiězhe shénme?", en: "What's written on it?" } ] },
  { hanzi: "结果", pinyin: "jiéguǒ", meaning: "result; as a result", examples: [
    { zh: "考试结果出来了。", pinyin: "Kǎoshì jiéguǒ chūlai le.", en: "The exam results are out." },
    { zh: "他没复习，结果没考好。", pinyin: "Tā méi fùxí, jiéguǒ méi kǎo hǎo.", en: "He didn't review, so he did badly on the exam." } ] },
  { hanzi: "消息", pinyin: "xiāoxi", meaning: "news; message", examples: [
    { zh: "我有一个好消息！", pinyin: "Wǒ yǒu yí ge hǎo xiāoxi!", en: "I have some good news!" },
    { zh: "有他的消息吗？", pinyin: "Yǒu tā de xiāoxi ma?", en: "Any news from him?" } ] },
  { hanzi: "要求", pinyin: "yāoqiú", meaning: "to request; requirement", examples: [
    { zh: "老师对我们要求很高。", pinyin: "Lǎoshī duì wǒmen yāoqiú hěn gāo.", en: "Our teacher expects a lot from us." },
    { zh: "他要求我道歉。", pinyin: "Tā yāoqiú wǒ dàoqiàn.", en: "He demanded that I apologize." } ] },
  { hanzi: "理解", pinyin: "lǐjiě", meaning: "to understand", examples: [
    { zh: "我理解你的感受。", pinyin: "Wǒ lǐjiě nǐ de gǎnshòu.", en: "I understand how you feel." },
    { zh: "谢谢你的理解。", pinyin: "Xièxie nǐ de lǐjiě.", en: "Thank you for understanding." } ] },
  { hanzi: "曾经", pinyin: "céngjīng", meaning: "once; at one time", examples: [
    { zh: "我曾经在中国住过两年。", pinyin: "Wǒ céngjīng zài Zhōngguó zhù guo liǎng nián.", en: "I once lived in China for two years." },
    { zh: "他曾经是我的老师。", pinyin: "Tā céngjīng shì wǒ de lǎoshī.", en: "He used to be my teacher." } ] },
  { hanzi: "打开", pinyin: "dǎkāi", meaning: "to open; to turn on", examples: [
    { zh: "请打开窗户。", pinyin: "Qǐng dǎkāi chuānghu.", en: "Please open the window." },
    { zh: "我打开了电视。", pinyin: "Wǒ dǎkāi le diànshì.", en: "I turned on the TV." } ] },
  { hanzi: "收到", pinyin: "shōudào", meaning: "to receive", examples: [
    { zh: "你收到我的信息了吗？", pinyin: "Nǐ shōudào wǒ de xìnxī le ma?", en: "Did you get my message?" },
    { zh: "收到，谢谢！", pinyin: "Shōudào, xièxie!", en: "Got it, thanks!" } ] },
  { hanzi: "照顾", pinyin: "zhàogù", meaning: "to take care of", examples: [
    { zh: "请好好照顾自己。", pinyin: "Qǐng hǎohǎo zhàogù zìjǐ.", en: "Please take good care of yourself." },
    { zh: "她在家照顾孩子。", pinyin: "Tā zài jiā zhàogù háizi.", en: "She stays home taking care of the kids." } ] },
  { hanzi: "人类", pinyin: "rénlèi", meaning: "humanity; humans", examples: [
    { zh: "人类需要水和空气。", pinyin: "Rénlèi xūyào shuǐ hé kōngqì.", en: "Humans need water and air." },
    { zh: "这是人类的历史。", pinyin: "Zhè shì rénlèi de lìshǐ.", en: "This is human history." } ] },
  { hanzi: "主意", pinyin: "zhǔyi", meaning: "idea; plan", examples: [
    { zh: "好主意！", pinyin: "Hǎo zhǔyi!", en: "Good idea!" },
    { zh: "你有什么主意？", pinyin: "Nǐ yǒu shénme zhǔyi?", en: "Got any ideas?" } ] },
  { hanzi: "保持", pinyin: "bǎochí", meaning: "to keep; to maintain", examples: [
    { zh: "我们保持联系吧。", pinyin: "Wǒmen bǎochí liánxì ba.", en: "Let's keep in touch." },
    { zh: "请保持安静。", pinyin: "Qǐng bǎochí ānjìng.", en: "Please keep quiet." } ] },
  { hanzi: "存在", pinyin: "cúnzài", meaning: "to exist", examples: [
    { zh: "你相信鬼存在吗？", pinyin: "Nǐ xiāngxìn guǐ cúnzài ma?", en: "Do you believe ghosts exist?" },
    { zh: "这个问题一直存在。", pinyin: "Zhège wèntí yìzhí cúnzài.", en: "This problem has always been there." } ] },
  { hanzi: "晚安", pinyin: "wǎn'ān", meaning: "good night", examples: [
    { zh: "晚安，做个好梦！", pinyin: "Wǎn'ān, zuò ge hǎo mèng!", en: "Good night, sweet dreams!" },
    { zh: "妈妈，晚安。", pinyin: "Māma, wǎn'ān.", en: "Good night, Mom." } ] },
  { hanzi: "确实", pinyin: "quèshí", meaning: "indeed; really", examples: [
    { zh: "你说得确实有道理。", pinyin: "Nǐ shuō de quèshí yǒu dàolǐ.", en: "What you say really does make sense." },
    { zh: "这确实是个问题。", pinyin: "Zhè quèshí shì ge wèntí.", en: "This is indeed a problem." } ] },
  { hanzi: "全部", pinyin: "quánbù", meaning: "all; entire", examples: [
    { zh: "我把饭全部吃完了。", pinyin: "Wǒ bǎ fàn quánbù chī wán le.", en: "I ate all the food." },
    { zh: "这就是全部的钱。", pinyin: "Zhè jiùshì quánbù de qián.", en: "That's all the money." } ] },
  { hanzi: "讨厌", pinyin: "tǎoyàn", meaning: "to hate; annoying", examples: [
    { zh: "我讨厌下雨天。", pinyin: "Wǒ tǎoyàn xià yǔ tiān.", en: "I hate rainy days." },
    { zh: "你真讨厌！", pinyin: "Nǐ zhēn tǎoyàn!", en: "You're so annoying!" } ] },
  { hanzi: "突然", pinyin: "tūrán", meaning: "suddenly", examples: [
    { zh: "突然下起了大雨。", pinyin: "Tūrán xià qǐ le dà yǔ.", en: "It suddenly started pouring." },
    { zh: "他突然站了起来。", pinyin: "Tā tūrán zhàn le qǐlai.", en: "He suddenly stood up." } ] },
  { hanzi: "多久", pinyin: "duōjiǔ", meaning: "how long", examples: [
    { zh: "你学中文多久了？", pinyin: "Nǐ xué Zhōngwén duōjiǔ le?", en: "How long have you been learning Chinese?" },
    { zh: "要等多久？", pinyin: "Yào děng duōjiǔ?", en: "How long do we have to wait?" } ] },
  { hanzi: "老婆", pinyin: "lǎopo", meaning: "wife (casual)", examples: [
    { zh: "老婆，我回来了！", pinyin: "Lǎopo, wǒ huílai le!", en: "Honey, I'm home!" },
    { zh: "我老婆做饭很好吃。", pinyin: "Wǒ lǎopo zuò fàn hěn hǎochī.", en: "My wife is a great cook." } ] },
  { hanzi: "不再", pinyin: "bú zài", meaning: "no longer", examples: [
    { zh: "我不再相信他了。", pinyin: "Wǒ bú zài xiāngxìn tā le.", en: "I no longer trust him." },
    { zh: "他不再抽烟了。", pinyin: "Tā bú zài chōuyān le.", en: "He doesn't smoke anymore." } ] },
  { hanzi: "放在", pinyin: "fàng zài", meaning: "to put (somewhere)", examples: [
    { zh: "把书放在桌子上。", pinyin: "Bǎ shū fàng zài zhuōzi shang.", en: "Put the book on the table." },
    { zh: "钥匙放在哪儿了？", pinyin: "Yàoshi fàng zài nǎr le?", en: "Where did the keys get put?" } ] },
  { hanzi: "进入", pinyin: "jìnrù", meaning: "to enter", examples: [
    { zh: "请勿进入。", pinyin: "Qǐng wù jìnrù.", en: "Do not enter." },
    { zh: "他进入了一家大公司。", pinyin: "Tā jìnrù le yì jiā dà gōngsī.", en: "He joined a big company." } ] },
  { hanzi: "父母", pinyin: "fùmǔ", meaning: "parents", examples: [
    { zh: "我的父母住在农村。", pinyin: "Wǒ de fùmǔ zhù zài nóngcūn.", en: "My parents live in the countryside." },
    { zh: "你应该给父母打个电话。", pinyin: "Nǐ yīnggāi gěi fùmǔ dǎ ge diànhuà.", en: "You should call your parents." } ] },
  { hanzi: "总统", pinyin: "zǒngtǒng", meaning: "president (of a country)", examples: [
    { zh: "总统明天要讲话。", pinyin: "Zǒngtǒng míngtiān yào jiǎnghuà.", en: "The president is giving a speech tomorrow." },
    { zh: "他想当总统。", pinyin: "Tā xiǎng dāng zǒngtǒng.", en: "He wants to be president." } ] },
  { hanzi: "伤害", pinyin: "shānghài", meaning: "to hurt; harm", examples: [
    { zh: "我不想伤害你。", pinyin: "Wǒ bù xiǎng shānghài nǐ.", en: "I don't want to hurt you." },
    { zh: "抽烟会伤害身体。", pinyin: "Chōuyān huì shānghài shēntǐ.", en: "Smoking harms your body." } ] },
  { hanzi: "回答", pinyin: "huídá", meaning: "to answer; answer", examples: [
    { zh: "请回答我的问题。", pinyin: "Qǐng huídá wǒ de wèntí.", en: "Please answer my question." },
    { zh: "他没有回答。", pinyin: "Tā méiyǒu huídá.", en: "He didn't answer." } ] },
  { hanzi: "除了", pinyin: "chúle", meaning: "except; besides", examples: [
    { zh: "除了他，大家都来了。", pinyin: "Chúle tā, dàjiā dōu lái le.", en: "Everyone came except him." },
    { zh: "除了中文，我还会说日语。", pinyin: "Chúle Zhōngwén, wǒ hái huì shuō Rìyǔ.", en: "Besides Chinese, I also speak Japanese." } ] },
  { hanzi: "咱们", pinyin: "zánmen", meaning: "we; us (including the listener)", examples: [
    { zh: "咱们走吧。", pinyin: "Zánmen zǒu ba.", en: "Let's go." },
    { zh: "咱们一起吃饭吧。", pinyin: "Zánmen yìqǐ chī fàn ba.", en: "Let's eat together." } ] },
  { hanzi: "自由", pinyin: "zìyóu", meaning: "freedom; free", examples: [
    { zh: "我喜欢自由的生活。", pinyin: "Wǒ xǐhuan zìyóu de shēnghuó.", en: "I like a free life." },
    { zh: "你可以自由选择。", pinyin: "Nǐ kěyǐ zìyóu xuǎnzé.", en: "You're free to choose." } ] },
  { hanzi: "可爱", pinyin: "kě'ài", meaning: "cute; lovely", examples: [
    { zh: "这只小狗真可爱！", pinyin: "Zhè zhī xiǎo gǒu zhēn kě'ài!", en: "This puppy is so cute!" },
    { zh: "你的女儿很可爱。", pinyin: "Nǐ de nǚ'ér hěn kě'ài.", en: "Your daughter is adorable." } ] },
  { hanzi: "抓住", pinyin: "zhuāzhù", meaning: "to grab; to catch", examples: [
    { zh: "抓住我的手！", pinyin: "Zhuāzhù wǒ de shǒu!", en: "Grab my hand!" },
    { zh: "警察抓住了小偷。", pinyin: "Jǐngchá zhuāzhù le xiǎotōu.", en: "The police caught the thief." } ] },
  { hanzi: "简单", pinyin: "jiǎndān", meaning: "simple; easy", examples: [
    { zh: "这个很简单。", pinyin: "Zhège hěn jiǎndān.", en: "This is simple." },
    { zh: "我们简单吃点吧。", pinyin: "Wǒmen jiǎndān chī diǎn ba.", en: "Let's just have something simple to eat." } ] },
  { hanzi: "早上", pinyin: "zǎoshang", meaning: "morning", examples: [
    { zh: "早上好！", pinyin: "Zǎoshang hǎo!", en: "Good morning!" },
    { zh: "我每天早上七点起床。", pinyin: "Wǒ měitiān zǎoshang qī diǎn qǐchuáng.", en: "I get up at seven every morning." } ] },
  { hanzi: "能够", pinyin: "nénggòu", meaning: "to be able to", examples: [
    { zh: "我希望能够帮到你。", pinyin: "Wǒ xīwàng nénggòu bāng dào nǐ.", en: "I hope I can help you." },
    { zh: "他能够说三种语言。", pinyin: "Tā nénggòu shuō sān zhǒng yǔyán.", en: "He can speak three languages." } ] },
  { hanzi: "昨晚", pinyin: "zuówǎn", meaning: "last night", examples: [
    { zh: "昨晚你睡得好吗？", pinyin: "Zuówǎn nǐ shuì de hǎo ma?", en: "Did you sleep well last night?" },
    { zh: "昨晚我看了一部电影。", pinyin: "Zuówǎn wǒ kàn le yí bù diànyǐng.", en: "I watched a movie last night." } ] },
  { hanzi: "哥哥", pinyin: "gēge", meaning: "older brother", examples: [
    { zh: "我哥哥比我大三岁。", pinyin: "Wǒ gēge bǐ wǒ dà sān suì.", en: "My older brother is three years older than me." },
    { zh: "你有哥哥吗？", pinyin: "Nǐ yǒu gēge ma?", en: "Do you have an older brother?" } ] },
  { hanzi: "秘密", pinyin: "mìmì", meaning: "secret", examples: [
    { zh: "这是我们的秘密。", pinyin: "Zhè shì wǒmen de mìmì.", en: "This is our secret." },
    { zh: "你能保守秘密吗？", pinyin: "Nǐ néng bǎoshǒu mìmì ma?", en: "Can you keep a secret?" } ] },
  { hanzi: "休息", pinyin: "xiūxi", meaning: "to rest; break", examples: [
    { zh: "我们休息一下吧。", pinyin: "Wǒmen xiūxi yíxià ba.", en: "Let's take a break." },
    { zh: "你今天好好休息。", pinyin: "Nǐ jīntiān hǎohǎo xiūxi.", en: "Get some good rest today." } ] },
  { hanzi: "其中", pinyin: "qízhōng", meaning: "among them; of which", examples: [
    { zh: "我有三个孩子，其中一个在上大学。", pinyin: "Wǒ yǒu sān ge háizi, qízhōng yí ge zài shàng dàxué.", en: "I have three kids; one of them is in college." },
    { zh: "其中有一个问题很难。", pinyin: "Qízhōng yǒu yí ge wèntí hěn nán.", en: "One of the questions is very hard." } ] },
  { hanzi: "医院", pinyin: "yīyuàn", meaning: "hospital", examples: [
    { zh: "他在医院工作。", pinyin: "Tā zài yīyuàn gōngzuò.", en: "He works at a hospital." },
    { zh: "我们得去医院。", pinyin: "Wǒmen děi qù yīyuàn.", en: "We need to go to the hospital." } ] },
  { hanzi: "每天", pinyin: "měitiān", meaning: "every day", examples: [
    { zh: "我每天学中文。", pinyin: "Wǒ měitiān xué Zhōngwén.", en: "I study Chinese every day." },
    { zh: "他每天都很忙。", pinyin: "Tā měitiān dōu hěn máng.", en: "He's busy every day." } ] },
  { hanzi: "之间", pinyin: "zhījiān", meaning: "between; among", examples: [
    { zh: "这是我们之间的秘密。", pinyin: "Zhè shì wǒmen zhījiān de mìmì.", en: "This is a secret between us." },
    { zh: "银行在超市和学校之间。", pinyin: "Yínháng zài chāoshì hé xuéxiào zhījiān.", en: "The bank is between the supermarket and the school." } ] },
  { hanzi: "大概", pinyin: "dàgài", meaning: "probably; approximately", examples: [
    { zh: "他大概不会来了。", pinyin: "Tā dàgài bú huì lái le.", en: "He probably isn't coming." },
    { zh: "大概要半个小时。", pinyin: "Dàgài yào bàn ge xiǎoshí.", en: "It'll take about half an hour." } ] },
  { hanzi: "控制", pinyin: "kòngzhì", meaning: "to control", examples: [
    { zh: "我控制不了自己。", pinyin: "Wǒ kòngzhì bù liǎo zìjǐ.", en: "I can't control myself." },
    { zh: "情况已经控制住了。", pinyin: "Qíngkuàng yǐjīng kòngzhì zhù le.", en: "The situation is under control." } ] },
  { hanzi: "小孩", pinyin: "xiǎohái", meaning: "child; kid", examples: [
    { zh: "那个小孩在哭。", pinyin: "Nàge xiǎohái zài kū.", en: "That kid is crying." },
    { zh: "你家有几个小孩？", pinyin: "Nǐ jiā yǒu jǐ ge xiǎohái?", en: "How many kids are in your family?" } ] },
  { hanzi: "带来", pinyin: "dàilai", meaning: "to bring", examples: [
    { zh: "你带来了什么？", pinyin: "Nǐ dàilai le shénme?", en: "What did you bring?" },
    { zh: "谢谢你给我带来快乐。", pinyin: "Xièxie nǐ gěi wǒ dàilai kuàilè.", en: "Thank you for bringing me happiness." } ] },
  { hanzi: "停止", pinyin: "tíngzhǐ", meaning: "to stop", examples: [
    { zh: "请停止说话。", pinyin: "Qǐng tíngzhǐ shuōhuà.", en: "Please stop talking." },
    { zh: "雨终于停止了。", pinyin: "Yǔ zhōngyú tíngzhǐ le.", en: "The rain finally stopped." } ] },
  { hanzi: "证明", pinyin: "zhèngmíng", meaning: "to prove; proof", examples: [
    { zh: "你能证明吗？", pinyin: "Nǐ néng zhèngmíng ma?", en: "Can you prove it?" },
    { zh: "我会证明给你看。", pinyin: "Wǒ huì zhèngmíng gěi nǐ kàn.", en: "I'll prove it to you." } ] },
  { hanzi: "飞机", pinyin: "fēijī", meaning: "airplane", examples: [
    { zh: "我坐飞机去北京。", pinyin: "Wǒ zuò fēijī qù Běijīng.", en: "I'm flying to Beijing." },
    { zh: "飞机几点起飞？", pinyin: "Fēijī jǐ diǎn qǐfēi?", en: "What time does the plane take off?" } ] },
  { hanzi: "解释", pinyin: "jiěshì", meaning: "to explain", examples: [
    { zh: "请你解释一下。", pinyin: "Qǐng nǐ jiěshì yíxià.", en: "Please explain." },
    { zh: "我可以解释！", pinyin: "Wǒ kěyǐ jiěshì!", en: "I can explain!" } ] },
  { hanzi: "律师", pinyin: "lǜshī", meaning: "lawyer", examples: [
    { zh: "我要见我的律师。", pinyin: "Wǒ yào jiàn wǒ de lǜshī.", en: "I want to see my lawyer." },
    { zh: "她姐姐是律师。", pinyin: "Tā jiějie shì lǜshī.", en: "Her older sister is a lawyer." } ] },
  { hanzi: "终于", pinyin: "zhōngyú", meaning: "finally; at last", examples: [
    { zh: "你终于来了！", pinyin: "Nǐ zhōngyú lái le!", en: "You finally made it!" },
    { zh: "我终于明白了。", pinyin: "Wǒ zhōngyú míngbai le.", en: "I finally get it." } ] },
  { hanzi: "翻译", pinyin: "fānyì", meaning: "to translate; translator", examples: [
    { zh: "你能帮我翻译一下吗？", pinyin: "Nǐ néng bāng wǒ fānyì yíxià ma?", en: "Could you translate this for me?" },
    { zh: "她是一名翻译。", pinyin: "Tā shì yì míng fānyì.", en: "She's a translator." } ] },
  { hanzi: "调查", pinyin: "diàochá", meaning: "to investigate; survey", examples: [
    { zh: "警察正在调查这件事。", pinyin: "Jǐngchá zhèngzài diàochá zhè jiàn shì.", en: "The police are investigating this." },
    { zh: "我们做了一个调查。", pinyin: "Wǒmen zuò le yí ge diàochá.", en: "We did a survey." } ] },
  { hanzi: "为何", pinyin: "wèihé", meaning: "why (formal)", examples: [
    { zh: "你为何这么说？", pinyin: "Nǐ wèihé zhème shuō?", en: "Why do you say that?" },
    { zh: "我不知道他为何离开。", pinyin: "Wǒ bù zhīdào tā wèihé líkāi.", en: "I don't know why he left." } ] },
  { hanzi: "留在", pinyin: "liú zài", meaning: "to stay at; to remain in", examples: [
    { zh: "我今天留在家里。", pinyin: "Wǒ jīntiān liú zài jiā lǐ.", en: "I'm staying home today." },
    { zh: "他毕业后留在了北京。", pinyin: "Tā bìyè hòu liú zài le Běijīng.", en: "After graduating he stayed in Beijing." } ] },
  { hanzi: "糟糕", pinyin: "zāogāo", meaning: "terrible; oh no!", examples: [
    { zh: "糟糕，我忘带钥匙了！", pinyin: "Zāogāo, wǒ wàng dài yàoshi le!", en: "Oh no, I forgot my keys!" },
    { zh: "今天的天气真糟糕。", pinyin: "Jīntiān de tiānqì zhēn zāogāo.", en: "The weather today is awful." } ] },
  { hanzi: "任务", pinyin: "rènwu", meaning: "task; mission", examples: [
    { zh: "这是你的任务。", pinyin: "Zhè shì nǐ de rènwu.", en: "This is your task." },
    { zh: "我们完成了任务。", pinyin: "Wǒmen wánchéng le rènwu.", en: "We completed the mission." } ] },
  { hanzi: "武器", pinyin: "wǔqì", meaning: "weapon", examples: [
    { zh: "放下武器！", pinyin: "Fàngxià wǔqì!", en: "Put down your weapons!" },
    { zh: "知识是最好的武器。", pinyin: "Zhīshi shì zuì hǎo de wǔqì.", en: "Knowledge is the best weapon." } ] },
  { hanzi: "家里", pinyin: "jiā lǐ", meaning: "at home; home", examples: [
    { zh: "我今天在家里工作。", pinyin: "Wǒ jīntiān zài jiā lǐ gōngzuò.", en: "I'm working from home today." },
    { zh: "你家里有几口人？", pinyin: "Nǐ jiā lǐ yǒu jǐ kǒu rén?", en: "How many people are in your family?" } ] },
  { hanzi: "来自", pinyin: "láizì", meaning: "to come from", examples: [
    { zh: "我来自美国。", pinyin: "Wǒ láizì Měiguó.", en: "I'm from the US." },
    { zh: "你来自哪里？", pinyin: "Nǐ láizì nǎlǐ?", en: "Where are you from?" } ] },
  { hanzi: "后面", pinyin: "hòumiàn", meaning: "behind; at the back", examples: [
    { zh: "学校后面有一个公园。", pinyin: "Xuéxiào hòumiàn yǒu yí ge gōngyuán.", en: "There's a park behind the school." },
    { zh: "他坐在我后面。", pinyin: "Tā zuò zài wǒ hòumiàn.", en: "He's sitting behind me." } ] },
  { hanzi: "小子", pinyin: "xiǎozi", meaning: "kid; boy (casual)", examples: [
    { zh: "你这小子！", pinyin: "Nǐ zhè xiǎozi!", en: "You rascal!" },
    { zh: "这小子很聪明。", pinyin: "Zhè xiǎozi hěn cōngming.", en: "This kid is really smart." } ] },
  { hanzi: "来到", pinyin: "láidào", meaning: "to arrive at; to come to", examples: [
    { zh: "欢迎来到我家！", pinyin: "Huānyíng láidào wǒ jiā!", en: "Welcome to my home!" },
    { zh: "我三年前来到北京。", pinyin: "Wǒ sān nián qián láidào Běijīng.", en: "I came to Beijing three years ago." } ] },
  { hanzi: "解决", pinyin: "jiějué", meaning: "to solve; to resolve", examples: [
    { zh: "问题解决了。", pinyin: "Wèntí jiějué le.", en: "The problem is solved." },
    { zh: "我们一起想办法解决。", pinyin: "Wǒmen yìqǐ xiǎng bànfǎ jiějué.", en: "Let's figure out a solution together." } ] },
  { hanzi: "家人", pinyin: "jiārén", meaning: "family members", examples: [
    { zh: "我很想念我的家人。", pinyin: "Wǒ hěn xiǎngniàn wǒ de jiārén.", en: "I miss my family a lot." },
    { zh: "春节我和家人一起过。", pinyin: "Chūnjié wǒ hé jiārén yìqǐ guò.", en: "I spend Spring Festival with my family." } ] },
  { hanzi: "坐下", pinyin: "zuòxia", meaning: "to sit down", examples: [
    { zh: "请坐下。", pinyin: "Qǐng zuòxia.", en: "Please sit down." },
    { zh: "他坐下来喝了杯茶。", pinyin: "Tā zuòxia lái hē le bēi chá.", en: "He sat down and had a cup of tea." } ] },
  { hanzi: "直接", pinyin: "zhíjiē", meaning: "directly; direct", examples: [
    { zh: "你直接告诉我吧。", pinyin: "Nǐ zhíjiē gàosu wǒ ba.", en: "Just tell me directly." },
    { zh: "下班后我直接回家。", pinyin: "Xiàbān hòu wǒ zhíjiē huíjiā.", en: "After work I go straight home." } ] },
  { hanzi: "放弃", pinyin: "fàngqì", meaning: "to give up", examples: [
    { zh: "不要放弃！", pinyin: "Búyào fàngqì!", en: "Don't give up!" },
    { zh: "他放弃了这个机会。", pinyin: "Tā fàngqì le zhège jīhuì.", en: "He gave up this opportunity." } ] },
  { hanzi: "方法", pinyin: "fāngfǎ", meaning: "method; way", examples: [
    { zh: "你有什么好方法？", pinyin: "Nǐ yǒu shénme hǎo fāngfǎ?", en: "Do you have a good method?" },
    { zh: "学习方法很重要。", pinyin: "Xuéxí fāngfǎ hěn zhòngyào.", en: "How you study matters a lot." } ] },
  { hanzi: "游戏", pinyin: "yóuxì", meaning: "game", examples: [
    { zh: "我们来玩游戏吧。", pinyin: "Wǒmen lái wán yóuxì ba.", en: "Let's play a game." },
    { zh: "他每天玩电子游戏。", pinyin: "Tā měitiān wán diànzǐ yóuxì.", en: "He plays video games every day." } ] },
  { hanzi: "即使", pinyin: "jíshǐ", meaning: "even if", examples: [
    { zh: "即使很忙，他也会给妈妈打电话。", pinyin: "Jíshǐ hěn máng, tā yě huì gěi māma dǎ diànhuà.", en: "Even when he's busy, he calls his mom." },
    { zh: "即使失败了，也没关系。", pinyin: "Jíshǐ shībài le, yě méi guānxi.", en: "Even if you fail, it's okay." } ] },
  { hanzi: "年轻", pinyin: "niánqīng", meaning: "young", examples: [
    { zh: "你看起来很年轻。", pinyin: "Nǐ kàn qǐlai hěn niánqīng.", en: "You look very young." },
    { zh: "年轻人喜欢用手机。", pinyin: "Niánqīng rén xǐhuan yòng shǒujī.", en: "Young people love using their phones." } ] },
  { hanzi: "大人", pinyin: "dàren", meaning: "adult; grown-up", examples: [
    { zh: "大人说话，小孩别插嘴。", pinyin: "Dàren shuōhuà, xiǎohái bié chāzuǐ.", en: "Kids shouldn't interrupt when adults are talking." },
    { zh: "你已经是大人了。", pinyin: "Nǐ yǐjīng shì dàren le.", en: "You're already a grown-up." } ] }
);
