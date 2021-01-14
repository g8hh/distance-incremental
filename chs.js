/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

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
    'Significant Figures: 1': '有效数字位数: 1',
    'Significant Figures: 2': '有效数字位数: 2',
    'Significant Figures: 3': '有效数字位数: 3',
    'Significant Figures: 4': '有效数字位数: 4',
    'Significant Figures: 5': '有效数字位数: 5',
    'Significant Figures: 6': '有效数字位数: 6',
    'Significant Figures: 7': '有效数字位数: 7',
    'Significant Figures: 8': '有效数字位数: 8',
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
    ' by     Hevipelle, and it uses ': ' (作者Hevipelle)，并使用了',
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
    ": ": "： ",
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
    ": ": "： ",
    "： ": "： ",
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
    /^帮助*$/, //不抓取的内容
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