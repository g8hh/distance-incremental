/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //标点符号
    '.': '。',
    //标点符号结束

    //滚动新闻
    'Sorry, we are out of news for the day... try again later?': '抱歉，目前没有什么新闻……之后再来看看吧？',
    //滚动新闻结束

    //主菜单等
    'Loading...': '读取中……',
    'Help': '帮助(Discord频道)',
    'Main': '主界面',
    'Options': '选项',
    'Stats': '统计',
    'Achievements': '成就',
    'Energy': '能量',
    'Rockets': '火箭',
    'The Furnace': '熔炉',
    'Automation': '自动化',
    'Time Reversal': '时间反演',
    'Universal Collapse': '全体坍缩',
    'Pathogens': '病原体',
    'Dark Circle': '黑暗圆环',
    'Infinity': '无限',
    'Elementary': '基本',
    'Req': '需要',
    'Req: Rank': '需要：级别',
    //主菜单等结束

    //选项
    'Saving': '保存选项',
    'Modes': '模式',
    'In-game': '游戏内',
    'Other': '其它',
    'Save': '保存',
    'Load': '读取',
    'Import': '导入',
    'Export': '导出',
    'HARD RESET': '硬重置',
    'Import All': '导入全部',
    'Export All': '导出全部',
    'AAU': '全成就',
    'Easy': '容易',
    'Absurd': '荒诞',
    'NA': '无成就',
    'Extreme': '极限',
    'Hard': '困难',
    'Hiker\'s Dream': '旅人之梦',
    'Activate Modes': '激活模式',
    'Dark Circle Pulsing: ON': '黑暗圆环脉动: 开启',
    'Dark Circle Pulsing: OFF': '黑暗圆环脉动: 关闭',
    'Elementary Confirmation: ON': '基本重置确认: 开启',
    'Elementary Confirmation: OFF': '基本重置确认: 关闭',
    'Theory Tree Display: GROUPS': '学说树显示方式: 群组',
    'Theory Tree Display: TREE': '学说树显示方式: 树状',
    'Exit Hadronic Chall Confirmation: ON': '退出强子挑战确认: 开启',
    'Exit Hadronic Chall Confirmation: OFF': '退出强子挑战确认: 关闭',
    'Significant Figures': '有效数字位数',
    'Notation: Scientific': '记数法: 科学',
    'Notation: Engineering': '记数法: 工程',
    'Notation: Standard': '记数法: 标准',
    'Notation: Mixed': '记数法: 混合',
    'Notation: Hexadecimal': '记数法: 十六进制',
    'Notation: Binary': '记数法: 二进制',
    'Notation: Symbols': '记数法: 符号',
    'Notation: Tetrational': '记数法: 迭代幂次',
    'Scientific': '科学',
    'Engineering': '工程',
    'Standard': '标准',
    'Mixed': '混合',
    'Hexadecimal': '十六进制',
    'Binary': '二进制',
    'Symbols': '符号',
    'Tetrational': '迭代幂次',
    'Font: Verdana': '字体: Verdana',
    'Font: Courier': '字体: Courier',
    'Font: Arial': '字体: Arial',
    'Font: Times': '字体: Times',
    'Font: Comic Sans MS': '字体: Comic Sans MS',
    'Theme: Normal': '主题: 普通',
    'Theme: Dark': '主题: 黑暗',
    'Normal': '普通',
    'Dark': '黑暗',
    'Rename Save': '重命名存档',
    'Hotkeys: ON': '快捷键: 开启',
    'Hotkeys: OFF': '快捷键: 关闭',
    'News Ticker: ON': '滚动新闻: 开启',
    'News Ticker: OFF': '滚动新闻: 关闭',
    'Feature Percentage: Logarithm': '百分比显示: 对数',
    'Feature Percentage: Linear': '百分比显示: 线性',
    'Logarithm': '对数',
    'Linear': '线性',
    'Imports: New Save': '导入选项: 新存档',
    'Imports: Overwrite': '导入选项: 覆盖存档',
    'New Save': '新存档',
    'Overwrite': '覆盖存档',
    'Auto-Save: ON': '自动保存: 开启',
    'Auto-Save: OFF': '自动保存: 关闭',
    'Hide Completed Ach Rows: ON': '隐藏已完成的成就行: 开启',
    'Hide Completed Ach Rows: OFF': '隐藏已完成的成就行: 关闭',
    'Visual Updates: Every Tick': '显示内容更新时间: 每个时刻',
    'Visual Updates: Every 2 Ticks': '显示内容更新时间: 每2个时刻',
    'Visual Updates: Every 5 Ticks': '显示内容更新时间: 每5个时刻',
    'Visual Updates: Every 20 Ticks': '显示内容更新时间: 每20个时刻',
    'Every Tick': '每个时刻',
    'Every 2 Ticks': '每2个时刻',
    'Every 5 Ticks': '每5个时刻',
    'Every 20 Ticks': '每20个时刻',
    'Notice: You are currently playing in v': '注意: 您目前的游戏版本为v',
    '. This game was inspired by ': '。此游戏的灵感来自于',
    'Antimatter Dimensions': '反物质维度',
    ' by Hevipelle, and it uses ': '(作者Hevipelle)，并使用了',
    ', none of which I take credit for. If you would like to create a mod of this game, that\'s fine, just give credit, let me know in the discord (preferrably with a game link), and name it something slightly different (like Distance Incremental NG+ or something of the sort)...': '，以上都是来自他人的成果。如果您想要制作本游戏的MOD，这是完全没问题的，您只需要保留原始作者的信息，在Discord内联系我(有游戏链接更佳)，并起个不同的名字(例如距离增量NG+或者其他什么的)即可……',
    'Changelog': '更新日志',
    'Distances': '距离单位',
    'Hotkeys': '快捷键',
    'Discord': 'Discord频道',
    'Donate': '捐赠赞助',
    //选项结束

    //统计
    'Scalings': '折算',
    'Rank/Tier Rewards': '级别/阶层的奖励',
    'Scaling Levels': '折算等级',
    'Scaled': '折算',
    'Superscaled': '超级折算',
    'Hyper': '究级折算',
    'Atomic': '原子折算',
    'Scaled ': '折算',
    'Superscaled ': '超级折算',
    'Hyper ': '究级折算',
    'Atomic ': '原子折算',
    //统计结束

    //成就
    'Not currently implemented.': '目前还未引入。',
    //成就结束

    //能量
    'The Generators': '发生器',
    'Cost': '花费',
    ' Motive': ' 动力',
    'Currently': '目前',
    'Currently: /': '目前：/',
    'Currently: +': '目前：+',
    'Currently: ^': '目前：^',
    'Optimization': '优化',
    'Endurance': '持久性',
    'Confidence': '信心',
    'Thrusters': '推进器',
    'Hill-Bending': '山脉倾斜',
    'The energy effect is boosted by your Motive': '根据动力数值，加强能量的效果',
    'Energy decreases slower based on your Motive': '根据动力数值，使能量减少得更慢',
    'Your Motive is higher based on the Incline': '根据斜度数值，使动力变得更高',
    'The Incline nerf to max velocity & acceleration is reduced based on your Rockets': '根据火箭数值，减少斜度对最大速度和加速度的惩罚',
    'All Energy Upgrades that are based on The Incline have a better incline in their effect': '“根据斜度数值”的所有能量升级中，斜度视为增加一定数值',
    'Optimization II': '优化 II',
    'Endurance II': '持久性 II',
    'Confidence II': '信心 II',
    'Thrusters II': '推进器 II',
    'Hill-Bending II': '山脉倾斜 II',
    'The above upgrade is stronger based on your Energy': '根据能量数值，使上方的升级变得更强',
    'The above upgrade is stronger based on your Total Motive': '根据动力总量，使上方的升级变得更强',
    'The above upgrade is stronger based on the Incline': '根据斜度数值，使上方的升级变得更强',
    'The above upgrade is stronger based on your Pathogens': '根据病原体数值，使上方的升级变得更强',
    'Optimization III': '优化 III',
    'Endurance III': '持久性 III',
    'Confidence III': '信心 III',
    'Thrusters III': '推进器 III',
    'Hill-Bending III': '山脉倾斜 III',
    'The above upgrade is stronger based on your Time Cubes': '根据时间方盒数值，使上方的升级变得更强',
    'Optimization IV': '优化 IV',
    'Endurance IV': '持久性 IV',
    'Confidence IV': '信心 IV',
    'Thrusters IV': '推进器 IV',
    'Omnipotence': '全能',
    'The above upgrade is stronger based on your Cadavers': '根据残骸数值，使上方的升级变得更强',
    'The above upgrade is stronger based on your Life Essence': '根据生命精华数值，使上方的升级变得更强',
    'All other upgrades in this row are stronger based on your Motive and Energy': '根据动力和能量数值，使此行的其他所有升级变得更强',
    'Omnipotence II': '全能 II',
    'Omnipotence III': '全能 III',
    'Omnipotence IV': '全能 IV',
    'Consistency': '坚实度',
    'Storage': '存储',
    ' is stronger based on your Super-Energy': ' 的效果根据超级能量数值变得更强',
    ' and ': ' 及 ',
    ' are stronger based on your Super-Energy': ' 的效果根据超级能量数值变得更强',
    'Your Motive cannot be lower than X, which is based on your Best-Ever Motive': '根据最高动力数值，使动力无法低于某个数值',
    'The Energy cap is increased based on your Best-Ever Motive': '根据最高动力数值，增加能量上限',
    'Energy Evolution': '能量进化',
    'Godlike': '如神',
    'Meta Omnipotence': '多元全能',
    'Super-Confidence': '超级信心',
    'Omnipotence V': '全能 V',
    'The Super Energy amount & first effect are raised to an exponent based on your Energy': '根据能量数值，使超级能量的数值及第一个效果增加为原来的某个指数',
    'Your Best Hadronic Score powers Optimization I and multiplies hadron gain': '您最高的强子分数使优化 I的效果变为原来的某个指数，并使强子获取量乘以相应的数值',
    'Super-Energy\'s second effect is stronger based on your Best-Ever Motive': '根据最高动力数值，使超级能量的第二个效果变得更强',
    'Your Motive is multiplied by your Hadrons': '使动力乘以强子的数值',
    'Omnipotence I-IV': '全能 I-IV',
    ' are stronger based on your Best Entropy': ' 的效果根据熵数值变得更强',
    'th root': '次方根',
    '% stronger': '%强化',
    'Generator': '发生器',
    'Respec The Generators': '洗点发生器',
    'Upgrade Generators': '升级发生器',
    'Buy a new Generator': '购买1个新的发生器',
    //能量结束

    //熔炉
    'Enhanced Furnace': '强化熔炉',
    'Magma Search': '岩浆搜索',
    'Plasma': '等离子体',
    ' Coal': ' 煤',
    'Level': '等级',
    'Reset all Furnace progress to gain a Blue Flame': '重置熔炉所有进度，获得1朵蓝色火焰',
    'Notice: Furnace Challenges will perform a Collapse reset. When in a Furnace Challenge, Furnace Upgrade': '注意：进行熔炉挑战将同时进行一次坍缩重置。在熔炉挑战中，熔炉升级',
    'does nothing': '没有效果',
    'is weaker': '效果减弱',
    'Blue Flame does nothing.': '蓝色火焰没有效果。',
    'Coal gain is raised to the power of 0.075 (before reduction': '煤的获取量变为原来的^0.075(在减成之前生效',
    'Time Reversal Upgrade 16 does not affect Coal gain, and Hyper Furnace Upgrade scaling is stuck at 9,999% strength': '时间反演升级 16不影响煤获取量，并且究级折算的熔炉升级一直为9999%的折算倍率',
    'Furnace Upgrade 1 does nothing, and the Blue Flame cost formula is faster': '熔炉升级 1没有效果，蓝色火焰的花费公式变得更糟糕',
    'All Coal generation boosts from outside The Furnace is disabled (which includes Time Speed), and Blue Flame is weaker': '所有除了熔炉以外能够加成煤产量的因子都没有效果(包括时间速度)，蓝色火焰效果变得更弱',
    'Furnace Upgrades are 99.99% weaker, Enhanced Furnace Upgrades are 50% weaker, and Blue Flame & Enhanced Furnace Upgrades cost scale much faster. This challenge forces an Elementary reset instead of a Collapse reset.': '熔炉升级效果减弱99.99%，强化熔炉升级效果减弱50%，蓝色火焰和强化熔炉升级的花费提升速度变得更快。进行此挑战将同时进行一次基本重置，而不是坍缩重置。',
    'Goal': '目标',
    ' Blue Flame': ' 蓝色火焰',
    'Complete': '完成',
    'Exit': '退出',
    'Finished': '已完成',
    'Start': '开始',
    'Reward: Superscaled & Hyper Furnace Upgrade scalings are 90% weaker.': '奖励：超级折算及究级折算的熔炉升级花费提升速度减少90%。',
    'Reward: Furnace Upgrade 1\'s effect is increased by 25x.': '奖励：熔炉升级 1的效果变为25倍。',
    'Reward: Scaled Rank Cheapener scaling is 90% weaker, and Knowledge gain is 3.2x faster.': '奖励：折算的级别降价器花费提升速度减少90%，知识获取量变为3.2倍。',
    'Reward: The Extreme Mode reduction to pre-Infinity generation is less lethal (^0.75 -> ^': '奖励：极限模式无限之前内容的产量减成变得更缓和(从^0.75变为^',
    'Reward: Furnace Upgrade 4\'s effect is increased by 0.0001x for each Furnace Upgrade 1 bought, and unlock Furnace Upgrade': '奖励：每购买1次熔炉升级 1，熔炉升级 4的效果就增加0.0001倍，并解锁熔炉升级 ',
    'Reward: Blue Flame affects Enhanced Furnace Upgrades at a reduced rate': '奖励：蓝色火焰能够以较低的倍率使强化熔炉升级变得更强',
    ' Enhanced Coal': ' 强化煤',
    'Add an extra level to the above upgrade': '使上方的升级额外增加1级',
    'Add two extra levels to the above upgrade': '使上方的升级额外增加2级',
    'Search for Magma': '搜索岩浆',
    'Reform your Magma': '重构岩浆',
    ' Magma & ': ' 岩浆及 ',
    ' Knowledge': ' 知识',
    'Note: This does not reset on Elementary.': '注意：这在基本重置时仍然保留。',
    //熔炉结束

    //自动化
    'Close up this robot.': '关闭此机器人。',
    'Open up Rankbot for improvements.': '开启级别机器人菜单。',
    'Open up Rank Cheapener-bot for improvements.': '开启级别降价器机器人菜单。',
    'Open up Tierbot for improvements.': '开启阶层机器人菜单。',
    'Open up Fuelbot for improvements.': '开启燃料机器人菜单。',
    'Max All': '最大化所有',
    'Interval': '间隔',
    'Magnitude': '数量',
    'Auto-Furnace': '自动熔炉',
    'Auto-Pathogens': '自动病原体',
    'Auto-Cores': '自动黑暗核心',
    'Auto-Robots': '自动机器人',
    'Auto-Infinity Upgrades': '自动无限升级',
    'Auto-Endorsements': '自动认可',
    'Auto-Perks': '自动特权',
    'Auto-Enlightenments': '自动启迪',
    'Auto-Spectral Gems': '自动幽冥宝石',
    'Auto-Derivative Boosts': '自动导数提升',
    'Auto-Elementaries': '自动基本重置',
    'Auto-Photon Upgrades': '自动光子升级',
    'Auto-Gluon Upgrades': '自动胶子升级',
    'Auto-Tree Upgrades': '自动学说树升级',
    'Auto-Theoretical Boosters': '自动学说增强器',
    'Auto-Foam Unlocks': '自动泡沫解锁',
    'Auto-Entropy': '自动熵',
    'Auto-Entropy Upgrades': '自动熵升级',
    'Mode': '模式',
    'AMOUNT': '数量',
    'TIME': '时间',
    //自动化结束

    //时间反演
    //时间反演结束

    //全体坍缩
    'Sacrifice all your cadavers into life essence.': '将所有残骸转化为生命精华。',
    'Time goes by 100x faster, but this gets weaker the further you go (minimum 2x, at 50Mpc).': '时间加快100倍，但随着游戏进度效果减少(最少为2倍，在50兆秒差距时达到此数值)。',
    'Time goes by faster.': '时间加快。',
    'Start with 10 Rockets on reset.': '重置时直接获得10个火箭。',
    'Start with 1 Rocket Fuel on reset.': '重置时直接获得1点火箭燃料',
    'Unlock Fuelbot, and Cadaver gain is boosted by Time Cubes.': '解锁燃料机器人，根据时间方盒数值，增加残骸获取量。',
    'Gain 10x more Rockets.': '火箭获取量变为10倍。',
    'Keep Time Reversal upgrades on reset.': '重置时保留时间反演升级。',
    'Time Speed multiplies Rocket gain at a reduced rate.': '时间速度以较低的倍率增加火箭获取量。',
    'Gain 1% of Rocket gain every second (unaffected by Time Speed).': '每秒获得当前产量1%的火箭(不受时间速度影响)。',
    'Life Essence boosts Cadaver gain.': '根据生命精华数值，增加残骸获取量。',
    'Tiers do not reset Ranks.': '阶层不再重置级别。',
    'Ranks do not reset anything.': '级别不再重置任何东西。',
    //全体坍缩结束

    //病原体
    //病原体结束

    //黑暗圆环
    //黑暗圆环结束

    //无限
    'Ascension': '飞升',
    'The Stadium': '竞技场',
    'The Pantheon': '万神殿',
    'Derivatives': '导数',
    'Endorsements': '认可',
    'Reset Infinity Upgrades': '重置无限升级',
    'Reset Stadium completions': '重置竞技场完成情况',
    'Reset Second-Row Stadium completions': '重置第二行竞技场完成情况',
    'Exit Stadium Challenge': '退出竞技场挑战',
    'Note: Perks do nothing in Stadium Challenges': '注意：竞技场中特权没有效果',
    'Note 2: Each Challenge completion makes the others': '注意2：每完成一个挑战，都会使',
    ' in the same row': '同一行的',
    ' harder, with the exception being Reality, which actually gets easier.': '其他挑战变得更难，只有 现实 例外，它会变得更容易。',
    'Spaceon': '天奥',
    'Solaris': '索拉里斯',
    'Eternity': '永恒',
    'Reality': '现实',
    'Drigganiz': '德里格尼兹',
    'Flamis': '弗拉米斯',
    'Cranius': '克劳尼乌斯',
    'Spectra': '光谱',
    'Aqualon': '阿奎纶',
    'Nullum': '无效化',
    'Quantron': '康诚',
    'Respec Angels & Demons back into Spectral Gems': '洗点天使和恶魔变回幽冥宝石',
    'Transform one Spectral Gem into an Angel': '将1块幽冥宝石变为1个天使',
    'Transform one Spectral Gem into a Demon': '将1块幽冥宝石变为1个恶魔',
    //无限结束

    //基本
    'Fermions': '费米子',
    'Bosons': '玻色子',
    'Theories': '学说',
    'Hadronic Challenge': '强子挑战',
    'Quantum Foam': '量子泡沫',
    'Skyrmions': '斯格明子',
    'Transform one of your Elementary Particles into a Fermion': '将1个基本粒子变为费米子',
    'Transform 10% of your Elementary Particles into Fermions': '将10%的基本粒子变为费米子',
    'Transform 50% of your Elementary Particles into Fermions': '将50%的基本粒子变为费米子',
    'Transform 100% of your Elementary Particles into Fermions': '将100%的基本粒子变为费米子',
    'Hover to see current Quark effect': '鼠标停留此处以查看当前夸克效果',
    'Click to change Quark Type': '点击以改变夸克类型',
    'Hover to see current Lepton effect': '鼠标停留此处以查看当前轻子效果',
    'Click to change Lepton Type': '点击以改变轻子类型',
    'Transform one of your Elementary Particles into a Boson': '将1个基本粒子变为玻色子',
    'Transform 10% of your Elementary Particles into Bosons': '将10%的基本粒子变为玻色子',
    'Transform 50% of your Elementary Particles into Bosons': '将50%的基本粒子变为玻色子',
    'Transform 100% of your Elementary Particles into Bosons': '将100%的基本粒子变为玻色子',
    'Gauge Bosons': '规范玻色子',
    'Scalar Bosons': '标量玻色子',
    'Triple Pathogen gain': '将病原体获取量变为3倍',
    'Boost Knowledge gain by': '知识获取量增加',
    'Double Photon & Gluon gain': '光子和胶子获取量翻倍',
    'Double Elementary Particle gain': '基本粒子获取量翻倍',
    ' Photons': ' 光子',
    'Red': '红',
    'Green': '绿',
    'Blue': '蓝',
    'Anti-Red': '反红',
    'Anti-Green': '反绿',
    'Anti-Blue': '反蓝',
    'Double gain of the anti version of this colour.': '将此颜色反色的获取量翻倍',
    'Get ten free Theory Points.': '额外获得10点学说点数。',
    'Total: +': '合计：+',
    ' of these Gluons.': '该胶子。',
    'Always keep TR Upgrades, the Pathogen Upgrade automator, the Dark Core automator, & Furnace Challenge completions. You also start with Automation unlocked.': '永远保留时间反演升级，自动病原体，自动黑暗核心和熔炉挑战完成情况。自动化直接解锁。',
    'Always keep TR Upgrades, the Pathogen Upgrade automator, the Dark Core automator, and all energy upgrades. You also start with Automation unlocked.': '永远保留时间反演升级，自动病原体，自动黑暗核心和所有能量升级。自动化直接解锁。',
    'Unlock Auto-Robots, and your best motivation is not reset upon elementary.': '解锁自动机器人，基本重置不再重置最高动力。',
    'You start with 10 Endorsements on reset and raise Consistency to the 1.8th power.': '重置时直接获得10认可，并将坚实度变为原来的1.8次方。',
    'Unlock Auto-Endorsements and boost Meta Omnipotence based on the square root of Higgs Upgrades.': '解锁自动认可，且根据希格斯升级数量的平方根，加强多元全能的效果。',
    'Unlock Auto-Spectral Gem Distribution, you keep Purge Power on reset, and super energy multiplies photons gain.': '解锁自动幽冥宝石，重置时保留净化能量，且根据超级能量的数值，使光子获取量乘以相应的数值。',
    'Angels & Demons boost the Gauge Force effect and the second super energy effect.': '根据天使和恶魔数值，加强规范作用力的效果和超级能量的第二个效果',
    'Purge Power boosts Quark & Lepton gain and passive energy gain is squared.': '根据净化能量数值，增加夸克和轻子的获取量，且被动能量获取量变为原来的平方。',
    '': '',
    '': '',
    '': '',
    '': '',
    'The Theoriverse': '学说宇宙',
    'Supersymmetry': '超对称理论',
    'The Theory Tree': '学说树',
    'Strings': '弦',
    'Preons': '前子',
    'Accelerons': '加速子',
    'Inflatons': '暴胀子',
    'Unlock Supersymmetry': '解锁超对称理论',
    'Cost: 1 Theory Point': '花费：1 学说点数',
    'Unlock The Theory Tree': '解锁学说树',
    'Cadavers': '残骸',
    'Pathogen Upgrades': '病原体升级',
    'Knowledge & Higgs': '知识及希格斯',
    'Theoriverse & Endorsements': '学说宇宙及认可',
    'Pantheon': '万神殿',
    'EP Gain & Elementaries': '基本粒子获取及基本重置',
    'Entangled Strings': '纠缠弦',
    'Hadrons': '强子',
    'Magma': '岩浆',
    'Misc.': '杂项',
    'Unlock Strings': '解锁弦',
    'Cost: 7 Theory Points': '花费：7 学说点数',
    'Unlock Preons': '解锁前子',
    'Cost: 10 Theory Points': '花费：10 学说点数',
    'Unlock Accelerons': '解锁加速子',
    'Cost: 84 Theory Points': '花费：84 学说点数',
    'Unlock Inflatons': '解锁暴胀子',
    'Cost: 1,600 Theory Points': '花费：1600 学说点数',
    'Clear Selector Data': '清除选择器数据',
    'Main Selectors': '主要选择器',
    'Pre-Collapse Selectors': '坍缩前选择器',
    'Collapse Selectors': '坍缩选择器',
    'Infinity Selectors': '无限选择器',
    'Elementary Selectors': '基本选择器',
    'hover for info': '鼠标停留此处以查看详情',
    'Boosts': '加成',
    'Entropy': '熵',
    'Enlarge Quantum Foam by 1m in height': '将量子泡沫加高1米',
    'Enlarge Quantum Foam by 1m in width': '将量子泡沫加宽1米',
    'Enlarge Quantum Foam by 1m in depth': '将量子泡沫加深1米',
    'Unlock a new type of Foam': '解锁一种新的泡沫',
    'Enlarge Subplanck Foam by 1m in height': '将亚普朗克泡沫加高1米',
    'Enlarge Subplanck Foam by 1m in width': '将亚普朗克泡沫加宽1米',
    'Enlarge Subplanck Foam by 1m in depth': '将亚普朗克泡沫加深1米',
    'Enlarge Subspatial Foam by 1m in height': '将子空间泡沫加高1米',
    'Enlarge Subspatial Foam by 1m in width': '将子空间泡沫加宽1米',
    'Enlarge Subspatial Foam by 1m in depth': '将子空间泡沫加深1米',
    'Enlarge Infinitesimal Foam by 1m in height': '将无穷小泡沫加高1米',
    'Enlarge Infinitesimal Foam by 1m in width': '将无穷小泡沫加宽1米',
    'Enlarge Infinitesimal Foam by 1m in depth': '将无穷小泡沫加深1米',
    'Enlarge Protoversal Foam by 1m in height': '将太初泡沫加高1米',
    'Enlarge Protoversal Foam by 1m in width': '将太初泡沫加宽1米',
    'Enlarge Protoversal Foam by 1m in depth': '将太初泡沫加深1米',
    'Re-form your Protoversal Foam': '重构太初泡沫',
    ' Quantum Foam': ' 量子泡沫',
    ' Subplanck Foam': ' 亚普朗克泡沫',
    ' Subspatial Foam': ' 子空间泡沫',
    ' Infinitesimal Foam': ' 无穷小泡沫',
    ' Protoversal Foam': ' 太初泡沫',
    'Height': '高度',
    'Width': '宽度',
    'Depth': '深度',
    'Force Entropy Reset': '强制熵重置',
    'Unlock Auto-Foam Unlocks (in automation tab': '解锁自动泡沫解锁(在自动化页面',
    'Gain more of all types of Foam based on your Theoriverse completions': '根据学说宇宙的完成次数，增加所有类型的泡沫获取量',
    'Rocket Fuel boosts Entropy Gain': '根据火箭燃料数值，增加熵获取量',
    'Hyper Pathogen Upgrade scaling starts later based on your Ω Particles': '根据Ω 粒子数值，使病原体升级究级折算延迟出现',
    'Magma makes the Entropy effect stronger': '根据岩浆数值，加强熵的效果',
    'Theoretical Boosters make Ω Particles require less Entropy': '根据学说增强器数值，使Ω 粒子需要更少的熵来获取',
    'The "Actually Useless Theories" achievement reward uses a better formula': '“完全无用的学说”成就奖励的公式变得更好',
    'Ω Particles are stronger based on your Hadrons': '根据强子数值，加强Ω 粒子的效果',
    'Accelerons & Inflatons boost Entropy gain': '根据加速子和暴胀子数值，增加熵获取量',
    'The Fermion Boost & the Inflaton Boost are 8.5% stronger': '费米子加成和暴胀子加成的效果增加8.5%',
    'Skyrmions make Ω Particles require less Entropy': '根据斯格明子数值，使Ω 粒子需要更少的熵来获取',
    'Unlock Auto-Entropy, and gain 50% more Entropy (kept on Skyrmion reset': '解锁自动熵，并且熵获取量增加50%(斯格明子重置时保留',
    'Unlock Auto-Entropy Upgrades, and all Foam types are gained 10x faster (kept on Skyrmion reset': '解锁自动熵升级，所有类型的泡沫获取量变为10倍(斯格明子重置时保留',
    'Gain 1% of Elementary Particle, Fermion, & Boson gain every second (kept on Skyrmion reset': '每秒获得当前产量1%的基本例子，费米子和玻色子(斯格明子重置时保留',
    'The Extreme mode nerf to pre-Infinity production is less lethal (^0.825 ->': '极限模式无限之前内容的产量减成变得更缓和(从^0.825变为^',
    'Buying Theory Tree Upgrades does not spend Theory Points, and the last Inflaton effect does not become extremely softcapped (kept on Skyrmion reset': '购买学说树升级不再花费学说点数，暴胀子的最后一个效果不再变为极端软上限(斯格明子重置时保留',
    'Entropy boosts Skyrmion gain': '根据熵数值，增加斯格明子获取量',
    'Gauge Force\'s effect uses a much better formula': '规范作用力的效果公式变得更好',
    'Pions & Spinors make each other increase in cost 75% less (kept on Skyrmion reset': 'π介子和旋量使彼此的花费增加速度减少75%(斯格明子重置时保留',
    'The Plasma Exponent is boosted by your Best Entropy': '根据最高熵数值，增加等离子体的指数',
    'Unlock Auto-Theoretical Boosters, and Theoretical Boosters give many more Theory Points, but Theoretical Boosters are reset on Skyrmion reset (kept on Skyrmion reset': '解锁自动学说增强器，可以从学说增强器中获得更多学说点数，但学说增强器还是会在斯格明子重置时被重置的(斯格明子重置时保留',
    'The Perk Accelerator never goes Weakened or Broken, and the Hadron effect interval is smaller based on your Hadrons': '特权加速器不再有加速效果和中止效果，并且根据强子数值，减少强子获取学说点数的间隔',
    'The first Inflaton effect uses a better formula, Pions & Spinors do not make each other increase in cost, and you can buy max Pion/Spinor Fields (kept on Skyrmion reset': '暴胀子的第一个效果公式变得更好，π介子和旋量不再使彼此的花费增加，您可以最大化购买π介子场和旋量场(斯格明子重置时保留',
    'FU4 & EFU3 also multiply the upgrade\'s effect (but only at 20% upgrade power).': '熔炉升级 4和强化熔炉升级 3变为自身效果一定倍率(倍率为升级效果幂的20%)。',
    ' Entropy': ' 熵',
    'Pions': 'π介子',
    'Spinors': '旋量',
    'Reset Pion & Spinor Fields': '重置π介子场和旋量场',
    'Reset Pion Field': '重置π介子场',
    'Max Pion Field': '最大化π介子场',
    'Import Pion Field': '导入π介子场',
    'Export Pion Field': '导出π介子场',
    'Reset Spinor Field': '重置旋量场',
    'Max Spinor Field': '最大化旋量场',
    'Import Spinor Field': '导入旋量场',
    'Export Spinor Field': '导出旋量场',
    'Dear Player,': '亲爱的玩家，',
    'Welp you\'ve done it, you\'ve reached the end of the multiverse!': '很好，您终于到达了多宇宙的终点！',
    'Sadly, more content won\'t be available for the time being...': '很遗憾的是，目前没有更多新内容了……',
    'For now, just try another mode or something, I dunno.': '现在，您可以考虑换个模式接着玩，或者是干脆换游戏，怎么样都行。',
    'Thanks for playing my game!': '总之，感谢您游玩我的游戏！',
    'From Jacorb': 'Jacord敬上',
    'P.S: If you\'re wondering why I put this message here, it\'s because it\'s prep for future content and because v2.0 may not be out for a while...': '如果您想知道这里为什么会有这么一条消息，原因是为了之后内容做准备，而且v2.0可能没那么快推出……',
    //基本结束

    //原样
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
    ": ": "：",
    "\n": "",
    "\t\t\t\t\t\t\t\t\t\t": "",
    "\t\t\t\t\t\t\t\t\t": "",
    "\t\t\t\t\t\t\t\t": "",
    "\t\t\t\t\t\t\t": "",
    "\t\t\t\t\t\t": "",
    "\t\t\t\t\t": "",
    "\t\t\t\t": "",
    "\t\t\t": "",
    "\t\t": "",
    "\t": "",
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
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "：",
    "： ": "：",
    ")": ")",
    "%": "%",
    "\n\t\t\t\t\t\t\t\t\t\t": "",
    "\n\t\t\t\t\t\t\t\t\t": "",
    "\n\t\t\t\t\t\t\t\t": "",
    "\n\t\t\t\t\t\t\t": "",
    "\n\t\t\t\t\t\t": "",
    "\n\t\t\t\t\t": "",
    "\n\t\t\t\t": "",
    "\n\t\t\t": "",
    "\n\t\t": "",
    "\n\t": "",
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
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?\s\+$/, //处理数字
    /^打开微信扫一扫$/, //不抓取的内容
    /^点击加群$/, //不抓取的内容
    /^更多同类游戏$/, //不抓取的内容
    /^关注公众号$/, //不抓取的内容
    /^旧版$/, //不抓取的内容
    /^论坛$/, //不抓取的内容
    /^Git游戏$/, //不抓取的内容
    /^QQ群号$/, //不抓取的内容
    /^帮助(.*)$/, //不抓取的内容
    /^(.*)您(.*)$/, //不抓取的内容
    /^(.*)特权(.*)$/, //不抓取的内容
    /^(.*)启迪(.*)$/, //不抓取的内容
    /^(.*)使(.*)$/, //不抓取的内容
    /^(.*)将(.*)$/, //不抓取的内容
    /^(.*)点(.*)$/, //不抓取的内容
    /^(.*)子(.*)$/, //不抓取的内容
    /^(.*)为(.*)$/, //不抓取的内容
    /^(.*)加(.*)$/, //不抓取的内容
    /^ ，因此(.*)$/, //不抓取的内容
    /^到达(.*)$/, //不抓取的内容
    /^无限(.*)$/, //不抓取的内容
    /^重置(.*)$/, //不抓取的内容
    /^(.*)的(.*)$/, //不抓取的内容
    /^(.*)地(.*)$/, //不抓取的内容
    /^(.*)得(.*)$/, //不抓取的内容
    /^(.*)倍(.*)$/, //不抓取的内容
    /^(.*)级(.*)$/, //不抓取的内容
    /^(.*)层(.*)$/, //不抓取的内容
    /^(.*)次(.*)$/, //不抓取的内容
    /^(.*)个(.*)$/, //不抓取的内容
    /^(.*)米(.*)$/, //不抓取的内容
    /^(.*)宇宙(.*)$/, //不抓取的内容
    /^(.*)秒(.*)$/, //不抓取的内容
    /^(.*)分(.*)$/, //不抓取的内容
    /^(.*)时(.*)$/, //不抓取的内容
    /^(.*)日(.*)$/, //不抓取的内容
    /^(.*)周(.*)$/, //不抓取的内容
    /^(.*)年(.*)$/, //不抓取的内容
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Purchase the Rankbot for (.*) scraps.$/, '花费$1碎屑购买级别机器人'], //自动化
    [/^Purchase the Rank Cheapener-bot for (.*) scraps.$/, '花费$1碎屑购买级别降价器机器人'], //自动化
    [/^Purchase the Tierbot for (.*) scraps.$/, '花费$1碎屑购买阶层机器人'], //自动化
    [/^Purchase the Fuelbot for (.*) scraps.$/, '花费$1碎屑购买燃料机器人'], //自动化
]);