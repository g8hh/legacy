/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    '\t\tIf problems persist, your browser might simply be too old; this could also be a problem on our side - in which case, wait a few minutes, then hit ctrl+f5!': '\t\t如果问题仍然存在，您的浏览器可能只是太旧了； 这也可能是我们这边的问题 - 在这种情况下，请等待几分钟，然后按 ctrl+f5！',
    'Got it!': '知道了!',
    'Help? Bugs? Ideas? Check out our': '需要帮助? Bugs? 好想法? 请访问我们的',
    'Legacy': '遗产',
    'loading': '加载',
    'Loading data': '加载数据',
    'NeverEnding Legacy': '无尽的遗产',
    'Pleasant': '愉快',
    'Random': '随机',
    'Start a new game': '开始新游戏',
    'Slow connection? If not, please make sure your javascript is enabled, then refresh.': '连接缓慢？ 如果没有，请确保您的 javascript 已启用，然后刷新。',
    'Research': '研究',
    'Resources': '资源',
    'Resources are scarce, and everyone starts foraging.': '资源稀缺，大家开始觅食。',
    'Territory': '领土',
    'Traits': '特点',
    'Update log': '更新日志',
    'Use mods': '使用模组',
    'World Map': '世界地图',
    'You choose to start somewhere...': '你选择从某个地方开始......',
    'You emerge as the tribe\'s leader. They call you': '你成为部落的领袖。 他们叫你',
    'Your tribe': '你的部落',
    'Your tribe finds a place to settle in the wilderness.': '你的部落在荒野中找到了一个定居点。',
    'This is taking longer than expected.': '这需要比预期更长的时间。',
    'This website uses cookies to ensure you get the best experience on our website.': '本网站使用 cookie 来确保您在我们的网站上获得最佳体验。',
    'About this alpha': '关于此版本',
    'Cookie Clicker': '无尽的饼干',
    'Cookie Consent plugin for the EU cookie law': '欧盟 cookie 法的 cookie 同意插件',
    'Policies': '政策',
    'Production': '生产',
    'Enter your name here.': '在此处输入您的名字。',
    'Log': '日志',
    'Make it something memorable!': '让它成为令人难忘的事情！',
    'Awful': '可怕',
    'Select mods for this playthrough.': '为这个游戏选择模组。',
    'Change the game\'s settings.': '修改游戏设置',
    'Features to be added later include agriculture, religion, commerce, military, and interactions with other civilizations, among other things planned.': '稍后添加的功能包括农业、宗教、商业、军事以及与其他文明的互动，以及其他计划中的内容。',
    'Feedback about bugs, oversights and technological inaccuracies are appreciated! (Send me a message to my tumblr at the top': '感谢有关错误、疏忽和技术错误的反馈！ （给我发消息到顶部的 tumblr',
    'Start your civilization in a harsh terrain with scarce natural resources.': '在自然资源稀缺的恶劣地形中开始您的文明。',
    'Start your civilization in a random place on the map.': '在地图上的随机位置开始您的文明。',
    'Start your civilization in a welcoming terrain full of natural resources.': '在充满自然资源的宜人地带开始您的文明。',
    'Thank you for playing this alpha!': '感谢您玩这个版本！',
    'The game in its current state features stone age technology and up to some parts of iron age.': '当前状态的游戏具有石器时代技术和铁器时代的某些部分。',
    'View the game\'s version history.': '查看游戏的版本历史。',
    'Who knows how your people will fare in these strange lands!': '谁知道你的人民在这些陌生的土地上会过得怎么样！',
    'One day elapses every second, and 300 days make up a year.': '每一秒都有一天过去，一年有 300 天。',
    'Known technologies': '已知技术',
    'Load': '加载',
    'Miscellaneous': '杂项',
    'New game': '新游戏',
    'It may develop some over time.': '它可能会随着时间的推移而发展。',
    'If this is your first time playing, you may want to consult some quick': '如果这是您第一次玩，您可能需要咨询一些快速',
    'Health': '健康',
    'Happiness': '幸福',
    'Getting started': '入门',
    'Gear': '齿轮',
    'Gathering': '收集',
    'Game saved -': '游戏已保存 -',
    'Food & Water': '食物 & 水',
    'Exploration': '探索',
    'Essentials': '必需品',
    'Discovery': '发现',
    'Demographics': '人口统计',
    'Date': '日期',
    'Cultural': '文化',
    'Crafting & Construction': '制作 & 建造',
    'Click the + and - buttons to increase or decrease the amount. You can ctrl-click either button to instantly make the amount negative or positive.': '单击 + 和 - 按钮以增加或减少数量。 您可以按住 ctrl 并单击任一按钮以立即使金额为负数或正数。',
    'Clear': '清理',
    'Buy amount': '购买数量',
    'average': '平均',
    'ALMIGHTY': '万能的',
    'An eerie glow from above illuminates the night.': '来自上方的诡异光芒照亮了夜晚。',
    'Population': '人口',
    'Rename civilization': '重命名文明',
    'Research (': '研究 (',
    'Reveal map': '显示地图',
    'Scavenging': '清除',
    'Show resources': '显示资源',
    'Show tiers': '显示层',
    'The first year of your legacy has begun. May it stand the test of time.': '您遗产的第一年已经开始。 愿它经得起时间的考验。',
    'The land of Orkötta': 'Orkötta大陆',
    'The night is unforgiving.': '夜晚是无情的。',
    'This is how many units you\'ll queue or unqueue at once in a single click.': '这是您一次将要排队或取消排队的单位数量。',
    'This is the current date in your civilization.': '这是你们文明的当前日期。',
    'tips.': '提示.',
    'Total natural resources in your territory': '您领土内的自然资源总量',
    'Worms, insects, spiders -': '蠕虫、昆虫、蜘蛛—',
    'Work': '工作',
    'Welcome back -': '欢迎回来 -',
    'Uses': '使用',
    'such as fish, clams, or shrimps, is both bland-tasting and several kinds of nasty.': '例如鱼、蛤蜊或虾，味道平淡，但有几种令人讨厌。',
    'spends their time observing, thinking, and wondering why things are the way they are.': '花时间观察、思考和想知道为什么事情会变成这样。',
    'are easily caught, but are usually not considered': '很容易被抓住，但通常不被考虑',
    'are various plants, roots and mushrooms that can be collected by simply foraging around. While relatively healthy to eat, they tend to taste fairly unpleasant.': '是各种植物、根和蘑菇，可以通过简单地四处觅食来收集。 虽然吃起来相对健康，但它们的味道往往令人不快。',
    'Bugs': '虫子',
    'Dreamer': '梦想家',
    'Dry bones crack and burst underfoot.': '干燥的骨头在脚下裂开并爆裂。',
    'every now and then, which you can use to research early technologies': '不时地，您可以用它来研究早期技术',
    'Food': '食物',
    'generates': '产生',
    'Herb': '草药',
    'Herbs': '草药',
    'Insight': '洞察力',
    'Large monsters roam, unseen.': '巨大的怪物漫游，看不见。',
    'Default dataset': '默认数据集',
    'part of': '部分',
    'unlocks': '解锁',
    'unlocks policies that manage which food types can be eaten': '解锁管理可以食用哪些食物类型的政策',
    'Use your influence to enact policies that change the way your civilization functions.': '利用您的影响力制定改变您文明运作方式的政策。',
    'Various interesting things': '各种有趣的东西',
    'venture in the wilderness to gather food, wood, and other things of note.': '在荒野中冒险收集食物、木材和其他值得注意的东西。',
    'View the world map, inspect explored territory and see your natural resources.': '查看世界地图，检查已探索的领土并查看您的自然资源。',
    'View traits and edit your civilization\'s properties.': '查看特征并编辑您的文明属性。',
    'walk about in search of new places to settle, reporting what they saw when they come back.': '四处走动寻找新的定居点，报告他们回来时的所见。',
    'Wanderer': '流浪者',
    'Wanderers': '流浪者',
    'Water': '水',
    'Water rations': '水口粮',
    'Water turns into': '水变成',
    'when clean': '清洁时',
    'when other': '当其它',
    'when they get hungry, at the rate of 1 unit per person every 3 ticks (although babies and children eat less).': '当他们饿了时，每人每 3 个时刻 1 个单位（尽管婴儿和儿童吃得更少）。',
    'when your': '当你的',
    'Wisdom': '智慧',
    'Without water, people will resort to drinking': '没有水，人们会求助于饮水',
    'work': '工作',
    'Worker': '工人',
    'Workers': '工人',
    'workforce': '劳动力',
    'Workforce': '劳动力',
    'You also get 1 influence point at the start of every year.': '您还会在每年年初获得 1 个影响点。',
    'your people are given each day.': '你的人每天都被给予。',
    'Your': '你的',
    'Your people will drink': '你的人会喝',
    'A fairly soft mineral. Can be foraged from some places, but is more commonly extracted while mining or quarrying.': '一种相当软的矿物。 可以从某些地方觅食，但更常见的是在采矿或采石时提取。',
    'A short but sturdy branch. Obtained when foraging or when felling a tree.': '一个短而结实的树枝。 觅食或砍树时获得。',
    'A stream burbles quietly nearby.': '一条小溪在附近静静地流淌。',
    '(100 per fully-explored non-ocean tile, by default) upon which you can construct buildings. If for some reason you find yourself with less land than your buildings are using, some of them will start to slowly crumble away.': '（默认情况下，每个完全探索的非海洋瓷砖 100 个）您可以在其上建造建筑物。 如果出于某种原因，您发现自己的土地比建筑物使用的土地少，其中一些将开始慢慢崩溃。',
    '; working elders are more prone to accidents and early death.': '; 在职老人更容易发生事故和早逝。',
    '; working children are more prone to accidents and receive lower education.': '; 工作的儿童更容易发生事故并且受教育程度较低。',
    '; the closer to the limit, the slower it is to produce more.': '; 越接近极限，生产越慢。',
    ', which is unhealthy; if that runs out too, your people will simply die off.': '，这是不健康的； 如果它也用完了，你的人就会死掉。',
    ', whether gathered from berry bushes or fruit trees, are both sweet-tasting and good for you.': '，无论是从浆果灌木还是果树上采集的，都味道甜美，对您有好处。',
    ', used to build rudimentary structures.': '，用于构建基本结构。',
    ', unless special measures are in place.': '，除非有特别措施。',
    ', poor living conditions, and ongoing plagues.': '，恶劣的生活条件和持续的瘟疫。',
    ', in its most primitive form, is a series of groans and grunts that makes it possible to communicate things, events, and concepts.': '以其最原始的形式，是一系列的呻吟和咕噜声，使交流事物、事件和概念成为可能。',
    ', entertainment, or luxury items; things that bring down happiness are spoiled food, starvation, disease, death and harsh policies.': '、娱乐或奢侈品； 破坏幸福的事物是变质的食物、饥饿、疾病、死亡和严厉的政策。',
    ', drinking': '， 喝',
    ', but may be healed over time.': '，但随着时间的推移可能会痊愈。',
    ', although most people find them unpalatable.': '，尽管大多数人觉得它们不好吃。',
    'Current mode': '当前模式',
    'Creatures are lurking.': '生物潜伏着。',
    'Normal': '正常',
    'A blood-curdling wail is heard.': '听到令人毛骨悚然的哀号声。',
    'A vital part of an early tribe,': '早期部落的重要组成部分，',
    'active': '活跃',
    'Adult': '成人',
    'Adults': '成人',
    'affects how many babies your people make.': '影响你的人生育多少婴儿。',
    'After a while, they will grow up into': '再过一段时间，它们就会长成',
    'All Homonüüttos have died out.': '所有的同居人都灭绝了。',
    'also turns into muddy water over time, if not stored properly. Additionally, muddy water itself will slowly dry out.': '如果储存不当，随着时间的推移也会变成泥水。 此外，浑水本身会慢慢变干。',
    'An unexplained sound echoes on the horizon.': '一种无法解释的声音在地平线上回响。',
    'and': '和',
    'and unhappy, while higher health will make people happier.': '和不快乐，而更高的健康会让人更快乐。',
    'Any 2 adults can have babies, even if they are working.': '任何两个成年人都可以生孩子，即使他们在工作。',
    'Archaic building materials': '古建筑材料',
    'are what happens when you have 2 or more': '当你有 2 个或更多时会发生什么',
    'Authority': '权力',
    'Baby': '婴儿',
    'Babies': '婴儿',
    'Babies drink and eat half as much as children.': '婴儿的饮水量和进食量是儿童的一半。',
    'Bricks': '砖块',
    'by Gathering.': '通过收集。',
    'can also have babies, though much slower.': '也可以生孩子，虽然慢得多。',
    'cannot discover new tiles': '无法发现新瓷砖',
    'Changing mode costs': '改变模式成本',
    'Child': '儿童',
    'Child workforce': '童工',
    'Children': '儿童',
    'Children do not count as': '儿童不算',
    'Children drink and eat half as much as adults.': '儿童的饮水和进食量是成人的一半。',
    'Clay': '粘土',
    'Click and drag to change': '单击并拖动以更改',
    'Click to toggle': '点击切换',
    'Cost': '成本',
    'describes the global level of well-being of your': '描述您的全局幸福水平',
    'Disabled': '已禁用',
    'dying': '垂死',
    'Elder': '老人',
    'Elder workforce': '老年劳动力',
    'Elders': '老人',
    'Elders do not count as': '老人不算',
    'Enabled': '已启用',
    'Elders may end up': '老人可能会结束',
    'Everything stands still in the morning air.': '一切都静止在清晨的空气中。',
    'explores occupied tiles for': '探索占用的瓷砖',
    'food': '食物',
    'Food will slowly decay into': '食物会慢慢腐烂成',
    'forages for basic': '基本饲料',
    'Found by digging in damp soil; can be baked into': '通过在潮湿的土壤中挖掘发现； 可以烤成',
    'Fruit': '水果',
    'Fruits': '水果',
    'Gatherer': '采集者',
    'Gatherers': '采集者',
    'Generally, adults make up most of your': '一般来说，成年人占你的大部分',
    'Happiness and unhappiness both tend to level off over time.': '快乐和不快乐都会随着时间的推移而趋于平稳。',
    'grow from': '成长从',
    'Happy people work even harder, while unhappy people tend to slack off; at +100% happiness, most of your workers will work twice as fast, while at -100% happiness, they will work twice as slow. This goes on up to +200% and -200%.': '快乐的人工作更努力，不快乐的人往往懈怠； 在 +100% 的幸福感下，您的大多数员工的工作速度会提高一倍，而在 -100% 的幸福感下，他们的工作速度会减慢两倍。 这种情况一直持续到 +200% 和 -200%。',
    'Health can be affected by a number of things : eating raw or spoiled': '健康会受到许多因素的影响：生吃或变质',
    'Homonüüttos': '同居人',
    'hydrated, at the rate of half a unit per person every 3 ticks (although babies and children drink less).': '水合，每人每 3 个时刻半个单位（尽管婴儿和儿童喝得更少）。',
    'if you lack proper food storage.': '如果您缺乏适当的食物储存。',
    'In the distance, a prey falls to a pack of beasts.': '在远处，一个猎物落在了一群野兽身上。',
    'Influence': '影响力',
    'Influence is required to enact most policies or remove traits.': '制定大多数政策或移除特征都需要影响力。',
    'is available, in a last-ditch effort to fend off starvation.': '是可用的，这是抵御饥饿的最后努力。',
    'is consumed by your': '被你消耗了',
    'is eaten when no other': '当没有其他人时被吃掉',
    'is generated by power structures.': '由权力结构产生。',
    'is required to keep your': '需要保持您的',
    'is the part of your': '是你的一部分',
    'It is limited by your': '它受你的限制',
    'Just a simple rock. Found regularly when foraging, and even more commonly when digging, mining or quarrying.': '只是一块简单的石头。 在觅食时经常发现，在挖掘、采矿或采石时更常见。',
    'Land': '土地',
    'left to their own devices.': '留给他们自己的设备。',
    'Limestone': '石灰石',
    'Lower health tends to make people': '较低的健康状况往往会使人',
    'Many technologies require insight to be researched.': '许多技术需要深入研究。',
    'Materials such as': '材料如',
    'may sometimes get lost': '有时可能会迷路',
    'Most terrains have some fresh water up for gathering - from ponds, streams and rain; drier locations will have to rely on well digging.': '大多数地形都有一些淡水可供收集——来自池塘、溪流和雨水； 较干燥的地方将不得不依靠挖井。',
    'Muddy water': '浑水',
    'Muddy water can be collected while gathering, from stagnant pools or old rainwater;': '可以在收集时收集泥水，从死水池或旧雨水中收集；',
    'now count as': '现在算作',
    ', but may slowly get better over time.': '，但随着时间的推移可能会慢慢好转。',
    'A droning sound fills the sky.': '嗡嗡的声音充满了天空。',
    'are the remains of': '是剩下的',
    'Bone': '骨头',
    'can fall': '可以跌倒',
    'Burial spot': '墓地',
    'Corpse': '尸体',
    'Corpses': '尸体',
    'Corpses left in the open air tend to spread diseases and make people unhappy, which gets even worse as superstitions develop. To mitigate this, you need a': '留在露天的尸体往往会传播疾病，让人不快乐，随着迷信的发展，这种情况变得更糟。 为了缓解这种情况，您需要一个',
    'Dark birds caw ominously in the distance.': '远处的黑鸟不祥地叫着。',
    'due to work injuries, or from war. They do not': '由于工伤或战争。 他们不',
    'for each corpse.': '对于每一具尸体。',
    'levels are too low. They do not': '等级太低。 他们不',
    'Note that some food types may or may not be eaten depending on policies in place.': '请注意，根据现行政策，某些食物类型可能会或可能不会被食用。',
    'may get': '可能得到',
    'Obtained from the corpse of an animal, or discarded from eating flesh.': '从动物尸体中获得，或因吃肉而丢弃。',
    'of old age.': '年老。',
    'Over time, babies will grow into': '久而久之，宝宝就会长成',
    'over time, if your water storage is insufficient.': '随着时间的推移，如果您的储水量不足。',
    'over time.': '随着时间的推移。',
    'Raw seafood': '生海鲜',
    'Seafood': '海鲜',
    'Several things improve happiness, such as good': '有几件事可以提高幸福感，例如好',
    'queued': '排队',
    'People': '人',
    'people': '人',
    'Sick': '生病',
    'sick': '生病',
    'Stone': '石头',
    'Stones': '石头',
    'tastes awful and is unhealthy, but is better than dying of thirst. Your people will default to drinking it in the absence of fresh': '味道不好，不健康，但总比渴死要好。 你的人会默认在没有新鲜的情况下喝它',
    'that died, whether from old age, accident, disease, starvation or war.': '无论是因为年老、事故、疾病、饥饿还是战争而死亡。',
    'that grow old are': '变老是',
    'that is ready to work.': '准备工作。',
    'The land of Homodo': '霍莫多的土地',
    'Wounded': '受伤',
    'wounded': '受伤',
    'Wild scents flow in from elsewhere.': '野味从别处涌来。',
    'The number on the left is how many are currently being employed, while the number on the right is your total amount of workers.': '左边的数字是目前就业人数，右边的数字是你的工人总数。',
    'There is a storm on the horizon.': '地平线上有一场风暴。',
    'Each tile of territory you own grants you some': '你拥有的每一块领土都会给你一些',
    'Remove NaN': '移除 NaN',
    'represents everyone living under your rule. These are the people that look to you for protection, survival, and glory.': '代表生活在你统治之下的每一个人。 这些人向你寻求保护、生存和荣耀。',
    'represents the average physical condition of your': '代表您的平均身体状况',
    'represents your people\'s ideas and random sparks of intuition.': '代表你的人的想法和直觉的随机火花。',
    'Some types of food are tastier or healthier than others.': '某些类型的食物比其他食物更美味或更健康。',
    'Spoiled food': '变质的食物',
    'Spoiled food is terribly unhealthy and tastes just as bad. Over time, it will decay even further into inedibility.': '变质的食物非常不健康，味道也一样糟糕。 随着时间的推移，它会进一步腐烂到不可食用。',
    'Sticks': '棍子',
    'Stick': '棍子',
    'The number on the left is how much land is occupied, while the number on the right is how much land you have in total.': '左边的数字是占用了多少土地，右边的数字是你总共拥有多少土地。',
    'They eventually age into': '他们最终老成',
    'Animations': '动画',
    'Autosave': '自动保存',
    'Buy any amount': '购买任意数量',
    'Close': '关闭',
    'CSS filters': 'CSS滤镜',
    'Gameplay': '游戏玩法',
    'Graphics': '图形',
    'if this is off, it will only bulk-buy': '如果这是关闭的，它只会批量购买',
    'if you can buy all 50 at once.': '如果您可以一次购买所有50个。',
    'Includes effects such as icon shadows, blurring and brightness adjustments.': '包括图标阴影、模糊和亮度调整等效果。',
    'Misc.': '杂项',
    'Particles': '粒子',
    'Pause in menus': '在菜单中暂停',
    'Show atmospheric messages': '显示大气信息',
    'Show fps': '显示帧率',
    'Turn fancy CSS filters on/off.': '打开/关闭花哨的 CSS滤镜。',
    'Turning these off may improve performance.': '关闭这些可能会提高性能。',
    'When this is on, bulk-buying a unit (by shift-clicking it': '启用此选项后，批量购买一个单位（通过按住 Shift 键单击它',
    'will buy as many as you can, up to 50;': '将尽可能多地购买，最多 50 个；',
    'Display the frames per second graph.': '显示每秒帧数图表。',
    'Time will stop while in a menu or prompt.': '时间将在菜单或提示中停止。',
    'Turn ambience flavor text in messages on/off.': '打开/关闭消息中的氛围风味文本。',
    'Turn autosaving every 60 seconds on/off.': '打开/关闭每 60 秒自动保存一次。',
    'Turn interface animations on/off.': '打开/关闭界面动画。',
    'Turn resource particles on/off.': '打开/关闭资源粒子。',
    'A few tips on how to not die horribly': '关于如何不可怕地死去的一些提示',
    'Arkotta': '阿尔科塔',
    'assign a few spare workers as dreamers, in order to get some Insight which you can use to research technologies': '分配一些空闲工人作为梦想家，以获得一些可以用来研究技术的洞察力',
    'check the territory tab and click your starting location; if you\'ve got very few sources of food or water, you might want to restart the game': '检查领土选项卡并单击您的起始位置； 如果您的食物或水源很少，您可能需要重新开始游戏',
    'don\'t bother researching fishing or hunting if none of your tiles have animals or fish!': '如果您的瓷砖都没有动物或鱼，请不要费心研究钓鱼或狩猎！',
    'early on, focus most of your workers on food gathering': '早期，将大部分员工集中在食物收集上',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    'DashNet': 'DashNet',
    'discord': 'discord',
    'Orteil': 'Orteil',
    'twitter': 'twitter',
    'tumblr': 'tumblr',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Legacy v": "遗产 v",
    "Multiply by ": "乘以 ",
    "Divide by ": "除以 ",
    "• Births : ": "• 出手 : ",
    "• Deaths : ": "• 死亡 : ",
    "Click to queue ": "点击到队列 ",
    "mod:": "模组:",
    "ruler : ": "统治者 : ",
    "limit : ": "上限 : ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+) fps$/,
    /^x([\d\.]+)$/,
    /^x([\d\.]+)k$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^id:(.+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You accumulated (.+) fast ticks while you were away.$/, '您在离开时累积了 $1 个快速时刻。'],
    [/^Welcome back, (.+), ruler of (.+).$/, '欢迎回来，$2 的统治者 $1。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^Year ([\d\.]+), day ([\d\.]+) in (.+)$/, '$1 年, $2 天 在$3'],
	[/^([\d\.]+) year, ([\d\.]+) days$/, '$1 年, $2 天'],
	[/^Remove ([\d\.]+)$/, '减少 $1'],
	[/^Add ([\d\.]+)$/, '增加 $1'],
	[/^([\d\.]+) days$/, '$1 天'],
	[/^All (.+) have died out.$/, '所有的 $1 都灭绝了。'],
	[/^It is now the year (.+).$/, '现在是第 $1 年。'],
	[/^([\d\.]+) person got wounded.$/, '$1 人受伤了。'],
	[/^([\d\.]+) people fell sick.$/, '$1 人生病了。'],
	[/^([\d\.]+) sick people got better.$/, '$1 生病的人好起来了。'],
	[/^([\d\.]+) from decay$/, '$1 从衰败'],
	[/^([\d\.]+) from Gatherer$/, '$1 从收集者'],
	[/^([\d\.]+) baby has been born.$/, '$1 婴儿出生了。'],
	[/^([\d\.]+) person died from disease.$/, '$1 人死于疾病。'],
	[/^([\d\.]+) person fell sick.$/, '$1 人感觉生病了。'],
	[/^([\d\.]+) sick person got better.$/, '$1 病人感觉好了。'],
	[/^([\d\.]+) from decay, Gatherer$/, '$1 从腐烂，收集者'],
	[/^([\d\.]+) from Fruit, Seafood$/, '$1 来自水果, 海鲜'],
	[/^([\d\.]+) from Water, Herb, Fruit$/, '$1 来自水、草药、水果'],
	[/^([\d\.]+) from no clothing, cold & darkness, corpses, health$/, '$1 来自没有衣服，寒冷和黑暗，尸体，健康'],
	[/^([\d\.]+) from no clothing, cold & darkness, corpses, disease$/, '$1 来自没有衣服，寒冷和黑暗，尸体，疾病'],
	[/^([\d\.]+) from Herb, no clothing, cold & darkness, corpses$/, '$1 来自 草药，没有衣服，寒冷和黑暗，尸体'],
	[/^([\d\.]+) from Herb, no clothing, cold & darkness, health$/, '$1 来自 草药，没有衣服，寒冷和黑暗，健康'],
	[/^([\d\.]+) from Seafood, no clothing, cold & darkness, disease$/, '$1 来自 海鲜、无衣、寒冷和黑暗、疾病'],
	[/^([\d\.]+) from no clothing, cold & darkness$/, '$1 来自没有衣服，寒冷和黑暗'],
	[/^([\d\.]+) from Herb, Fruit, Bugs, Gatherer$/, '$1 从草药，水果，虫子，收集者'],
	[/^([\d\.]+) from Herb, Seafood, Bugs$/, '$1 来自草药、海鲜、虫子'],
	[/^([\d\.]+) from Herb, Bugs$/, '$1 从草药，虫子'],
	[/^([\d\.]+) from drinking, decay$/, '$1 从饮酒，腐烂'],
	[/^([\d\.]+) from eating, decay$/, '$1 从吃，腐烂'],
	[/^([\d\.]+) people died of old age.$/, '$1 人死于年老。'],
	[/^([\d\.]+) available every day$/, '$1 每天提供'],
	[/^([\d\.]+) Insight$/, '$1 洞察力'],
	[/^([\d\.]+) Worker$/, '$1 工人'],
	[/^([\d\.]+) Food$/, '$1 食物'],
	[/^([\d\.]+) Influence$/, '$1 影响力'],
	[/^([\d\.]+) Elder$/, '$1 长老'],
	[/^([\d\.]+) Herbs$/, '$1 草药'],
	[/^([\d\.]+) Adults$/, '$1 成年人'],
	[/^([\d\.]+) Children$/, '$1 孩童'],
	[/^([\d\.]+) Water$/, '$1 水'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);