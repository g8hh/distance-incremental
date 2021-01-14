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
    'Elementary Confirmation: ON': '基本确认: 开启',
    'Elementary Confirmation: OFF': '基本确认: 关闭',
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
    ' by Hevipelle, and it uses ': ' (作者Hevipelle)，并使用了',
    ', none of which I take credit for. If you would like to create a mod of this game, that\'s fine, just give credit, let me know in the discord (preferrably with a game link), and name it something slightly different (like Distance Incremental NG+ or something of the sort)...': '，以上都是来自他人的成果。如果您想要制作本游戏的MOD，这是完全没问题的，您只需要保留原始作者的信息，在Discord内联系我(有游戏链接更佳)，并起个不同的名字(例如距离增量NG+或者其他什么的)即可……',
    'Changelog': '更新日志',
    'Distances': '距离单位',
    'Hotkeys': '快捷键',
    'Discord': 'Discord频道',
    'Donate': '捐赠赞助',
    'Scalings': '折算',
    'Rank/Tier Rewards': '级别/阶层的奖励',
    'Scaling Levels': '折算等级',
    'Scaled': '折算',
    'Superscaled': '超级',
    'Hyper': '究级',
    'Atomic': '原子',
    'Scaled ': '折算',
    'Superscaled ': '超级折算',
    'Hyper ': '究级折算',
    'Atomic ': '原子折算',
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
    'Energy decreases slower based on your Motive': '根据动力数值，使能量减缓得更慢',
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
    'Your Motive cannot be lower than X, which is based on your Best-Ever Motive': '根据最高的动力数值，使动力无法低于某个数值',
    'The Energy cap is increased based on your Best-Ever Motive': '根据最高的动力数值，增加能量上限',
    'Energy Evolution': '能量进化',
    'Godlike': '如神',
    'Meta Omnipotence': '多元全能',
    'Super-Confidence': '超级信心',
    'Omnipotence V': '全能 V',
    'The Super Energy amount & first effect are raised to an exponent based on your Energy': '根据能量数值，使超级能量的数值及第一个效果增加为原来的某个指数',
    'Your Best Hadronic Score powers Optimization I and multiplies hadron gain': '您最高的强子分数使优化 I的效果变为原来的某个指数，并使强子获取量乘以相应的数值',
    'Super-Energy\'s second effect is stronger based on your Best-Ever Motive': '根据最高的动力数值，使超级能量的第二个效果变得更强',
    'Your Motive is multiplied by your Hadrons': '使动力乘以强子的数值',
    'Omnipotence I-IV': '全能 I-IV',
    ' are stronger based on your Best Entropy': ' 的效果根据熵数值变得更强',
    'th root': '次方根',
    '% stronger': '%强化',
    'Generator': '发生器',
    'Respec The Generators': '洗点发生器',
    'Upgrade Generators': '升级发生器',
    'Buy a new Generator': '购买1个新的发生器',
    'Enhanced Furnace': '强化熔炉',
    'Magma Search': '岩浆搜索',
    'Plasma': '等离子体',
    ' Coal': ' 煤',
    'Level': '等级',
    'Reset all Furnace progress to gain a Blue Flame': '重置熔炉的所有进度，获得1朵蓝色火焰',
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
    'Reward: Superscaled & Hyper Furnace Upgrade scalings are 90% weaker.': '奖励：超级折算及究级折算的熔炉升级花费提升速度减缓90%。',
    'Reward: Furnace Upgrade 1\'s effect is increased by 25x.': '奖励：熔炉升级 1的效果变为25倍。',
    'Reward: Scaled Rank Cheapener scaling is 90% weaker, and Knowledge gain is 3.2x faster.': '奖励：折算的级别降价器花费提升速度减缓90%，知识获取量变为3.2倍。',
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
    'Max All': '最大化所有',
    'Interval': '间隔',
    'Magnitude': '数量',
    'Sacrifice all your cadavers into life essence.': '将所有残骸转化为生命精华。',
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
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //主菜单等结束

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
    /^打开微信扫一扫$/, //不抓取的内容
    /^点击加群$/, //不抓取的内容
    /^更多同类游戏$/, //不抓取的内容
    /^关注公众号$/, //不抓取的内容
    /^旧版$/, //不抓取的内容
    /^论坛$/, //不抓取的内容
    /^Git游戏$/, //不抓取的内容
    /^QQ群号$/, //不抓取的内容
    /^帮助(.*)$/, //不抓取的内容
    /^(.*)倍(.*)$/, //不抓取的内容
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
    [/^(.d+)Just make up for the space(\d+)$/, '纯举例用意'],
]);