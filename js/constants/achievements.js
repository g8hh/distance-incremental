const ACH_DATA = {
	rows: 17,
	cols: 8,
	names: {
		11: "快速冲刺",
		12: "更好的鞋子",
		13: "魔鬼训练",
		14: "飞向太空！",
		15: "火箭冲击",
		16: "与人无关",
		17: "但您还是在前进。",
		18: "蓄意谋杀",

		21: "长途驾驶",
		22: "该换油了",
		23: "3是幸运数字",
		24: "又升空了？",
		25: "补充燃料",
		26: "自动化进化",
		27: "时者生存",
		28: "残骸如山",

		31: "土星公转",
		32: "加入假燃料",
		33: "IV测试",
		34: "既可十飞，何故单飞？",
		35: "三倍燃料",
		36: "自动化能量提升",
		37: "有这么多吗？",
		38: "心会很痛",

		41: "十秒视差",
		42: "狂风怒号",
		43: "就好这口",
		44: "这有意义吗？",
		45: "九千未满……",
		46: "磁铁的作用",
		47: "我全都要！",
		48: "超级聪明",

		51: "超凡脱俗",
		52: "滥箭充数",
		53: "2+2=10",
		54: "痛苦杂音",
		55: "音速缩放",
		56: "自动燃气",
		57: "别再想了",
		58: "多宇宙还在拓展",

		61: "乌鸦吉米的首秀",
		62: "加强版生命",
		63: "时骨无存",
		64: "加速无用",
		65: "杀一人为罪",
		66: "我还以为那很多的",
		67: "组成宇宙的原子宇宙。",
		68: "旧亚病毒",

		71: "无限魔鬼崇拜下的有序层次",
		72: "黑暗滋生",
		73: "真太多了",
		74: "真实冲击",
		75: "惟有空白",
		76: "它们也形成空间了？？！！",
		77: "为屑而生",
		78: "咻咻咻",

		81: "超越世界",
		82: "嘿呀呀呀呀呀！",
		83: "无穷无尽的爱",
		84: "毫无意义的自动化",
		85: "聪明的极限",
		86: "打破无限",
		87: "无念",
		88: "无限爱你哟",

		91: "加强版黑暗",
		92: "亡者宇宙",
		93: "真够您刷的……",
		94: "不，没什么特别的",
		95: "太亮了",
		96: "永远无关紧要",
		97: "一尘不染",
		98: "感受热度",

		101: "比至高神还强",
		102: "相当能刷",
		103: "生于黑暗",
		104: "罗马征服者",
		105: "毁坏的社会",
		106: "反自动化",
		107: "接招吧",
		108: "真正的创新",

		111: "您为什么还要尝试呢？",
		112: "宇之不存",
		113: "瘟疫爆发",
		114: "缩 放",
		115: "一棍糊脸",
		116: "立方无限",
		117: "亡者复生",
		118: "真正的挑战？",

		121: "为什么？！？？！？？？！？！？？",
		122: "脱轨",
		123: "进入下个世纪",
		124: "九点钟蓝调",
		125: "真是浪费时间……",
		126: "迅速修复",
		127: "虚假净化",
		128: "真实削弱",

		131: "多宇宙收缩",
		132: "阻止你的意义是什么？",
		133: "这很基本，亲爱的华生。",
		134: "不用用那些功能吗？",
		135: "再也不见",
		136: "多宇宙最速",
		137: "回到过去",
		138: "舰队见势不对退了",
		
		141: "乌有成真",
		142: "无尽的努力",
		143: "深海",
		144: "下一级别",
		145: "伟大纪元",
		146: "真实无限+",
		147: "最大的挫折",
		148: "不可能的任务",
		
		151: "比手指还小的无限",
		152: "无用的学说",
		153: "这是一颗树",
		154: "到底什么是强子？",
		155: "实质增长",
		156: "绝无可能",
		157: "基础原理",
		158: "仍在重复",
		
		161: "变回孩子",
		162: "完全无用的学说",
		163: "弦点击器",
		164: "只有这么多了",
		165: "这还有什么意义吗？",
		166: "真实暴胀",
		167: "多宇宙是怎么控制住您的力量的？",
		168: "只有一种泡沫",
		
		171: "给我变啊！",
		172: "一定过去多年了",
		173: "加无可加的泡沫",
		174: "多宇宙已注定",
		175: "无柱自撑",
		176: "进入现实",
		177: "软上限什么也不是",
		178: "征服多宇宙",
	},
	descs: {
		11: "至少走了formatDistance(100)。",
		12: "进行级别重置。",
		13: "进行阶层重置。",
		14: "进行火箭重置。",
		15: "至少拥有showNum(1)火箭燃料。",
		16: "解锁自动化。",
		17: "解锁时间反演。",
		18: "进行全体坍缩重置。",

		21: "至少走了boolean(extreme,三十,五百)千米。",
		22: "到达级别boolean(extreme,六,八)。",
		23: "到达阶层showNum(3)。",
		24: "到达showNum(2)火箭。",
		25: "至少拥有showNum(2)火箭燃料。",
		26: "解锁级别机器人。",
		27: "到达showNum(1000)时间方盒。",
		28: "到达showNum(66)残骸。",

		31: "至少走了formatDistance(1e12)",
		32: "到达级别showNum(12)",
		33: "到达阶层showNum(4)",
		34: "到达showNum(10)火箭。",
		35: "至少拥有showNum(3)火箭燃料。",
		36: "解锁阶层机器人。",
		37: "购买showNum(5)个时间反演升级。",
		38: "到达所有showNum(12)个坍缩里程碑。",

		41: "至少走了formatDistance(3.086e17)。",
		42: "到达级别showNum(20)",
		43: "到达阶层showNum(5)。",
		44: "到达showNum(1e+5)火箭。",
		45: "至少拥有showNum(6)普通火箭燃料。",
		46: "到达showNum(5000)碎屑。",
		47: "购买showNum(10)个时间反演升级。",
		48: "到达showNum(1e+10)智慧。",

		51: "至少走了formatDistance(4.4e26)。",
		52: "到达showNum(1e+8)火箭。",
		53: "至少拥有showNum(10)普通火箭燃料。",
		54: "到达showNum(1e+7)时间方盒。",
		55: "时间速度超过showNum(1e+5)倍。",
		56: "解锁燃料机器人。",
		57: "到达showNum(9e15)时间方盒。",
		58: "至少走了formatDistance(9.768e+48)。",

		61: "解锁病原体。",
		62: "到达showNum(1e+6)生命精华。",
		63: "到达showNum(1e28)时间方盒。",
		64: "到达级别showNum(50)。",
		65: "到达showNum(5e+7)残骸。",
		66: "使燃料机器人的间隔小于等于formatTime(120)。",
		67: "到达formatDistance(4.4e106)。",
		68: "所有showNum(10)个病原体升级至少各升1级。",

		71: "解锁黑暗圆环。",
		72: "到达showNum(50)黑暗物质。",
		73: "到达formatDistance(4.4e166)。",
		74: "到达showNum(1e60)火箭。",
		75: "购买showNum(5)个黑暗核心。",
		76: "到达showNum(1e100)火箭。",
		77: "到达showNum(1e80)碎屑。",
		78: "到达showNum(75)普通火箭燃料。",

		81: "受到无限的认可。",
		82: "到达showNum(9000.1)知识。",
		83: "到达showNum(3)认可。",
		84: "燃料机器人的数量超过showNum(100)。",
		85: "到达showNum(1.79e308)智慧。",
		86: "到达formatDistance(4.4e1026)。",
		87: "到达showNum(25e9)知识。",
		88: "到达showNum(10)认可。",

		91: "黑暗流至少为showNum(8e3)倍。",
		92: "到达showNum(1e80)残骸。",
		93: "到达showNum(666)飞升能量。",
		94: "到达showNum(14)认可。",
		95: "购买过每种启迪。",
		96: "级别机器人的数量超过showNum(1e33)。",
		97: "不购买病原体升级的前提下，到达formatDistance(4.4e416)。",
		98: "不购买黑暗核心的前提下，到达formatDistance(4.4e786)。",

		101: "完成一个boolean(extreme,第一行的)竞技场挑战。",
		102: "每种启迪分别购买showNum(2)级。",
		103: "到达showNum(1e18)黑暗物质。",
		104: "完成三个boolean(extreme,第一行的)竞技场挑战。",
		105: "时间速度到达showNum(2.22e2222)倍。",
		106: "到达showNum(20)认可。",
		107: "完成六个boolean(extreme,第一行的)竞技场挑战。",
		108: "解锁速度能量。",

		111: "燃料机器人的间隔小于1秒。",
		112: "到达formatDistance(2.2e10022)/秒^2的加速度。",
		113: "到达showNum(250)%病原体升级效果。",
		114: "到达formatDistance(4.4e26)/秒^2加速能量。",
		115: "获得净化能量。",
		116: "到达showNum(25)认可。",
		117: "到达showNum(1e3000)残骸。",
		118: "在 永恒 竞技场挑战中，到达formatDistance(1e33600)。",

		121: "在难度6的 现实 竞技场挑战中，到达formatDistance(2.5e4)。",
		122: "购买两次导数变换。",
		123: "到达showNum(2.5e5)飞升能量。",
		124: "到达boolean(extreme,九,十三)净化能量。",
		125: "在难度6的 现实 竞技场挑战中，进行净化并到达formatDistance(1e4)。",
		126: "级别机器人的数量到达showNum(1e200)。",
		127: "不购买病原体升级和黑暗核心的前提下，到达showNum(1e100000)时间方盒。",
		128: "进行净化并到达formatDistance(5.55e5555)/秒^2的加速度。",

		131: "进行基本重置。",
		132: "在难度6的 现实 竞技场挑战中，未在当前无限中购买无限8;8的前提下，进行净化并到达到达formatDistance(1e15)。",
		133: "到达showNum(1e3)费米子和玻色子。",
		134: "未在当前无限中购买病原体升级和黑暗核心的前提下，到达formatDistance(4.4e1100026)。",
		135: "到达showNum(2.5e7)天堂碎片。",
		136: "到达showNum(1e3750000)宇宙/秒的速度。",
		137: "不购买导数提升的前提下，进行基本重置(但您可以进行导数变换)。",
		138: "在认可不大于10的前提下，到达formatDistance(4.4e7826)。",
		
		141: "获得学说点数。",
		142: "在难度6的 现实 竞技场挑战中，未在当前无限中购买病原体升级和黑暗核心的前提下，进行净化并到达formatDistance(4.4e136)。",
		143: "学说宇宙完成深度4。",
		144: "到达showNum(1e33)飞升能量。",
		145: "到达formatDistance(4.4e8000026)。",
		146: "到达showNum(1.8e308)知识。",
		147: "在认可不大于10的前提下，到达级别showNum(200)。",
		148: "到达级别showNum(995)。",
		
		151: "解锁强子挑战。",
		152: "至少获得showNum(2.3)强子分数。",
		153: "不购买任何学说树升级的前提下，到达formatDistance(4.4e8250026)。",
		154: "至少获得2.5强子分数并到达formatDistance(e2.8e7)，可以不同时完成。",
		155: "解锁暴胀子",
		156: "学说宇宙完成深度8。",
		157: "第一弦到达formatDistance(4.4e76)。",
		158: "至少获得showNum(3.75)强子分数。",
		
		161: "解锁量子泡沫。",
		162: "第一弦到达formatDistance(4.4e251)。",
		163: "纠缠弦到达formatDistance(4.4e126)。",
		164: "解锁熵。",
		165: "至少获得showNum(8)强子分数。",
		166: "到达boolean(extreme,showNup[1e150],showNup[1e160])暴胀子。",
		167: "到达showNum(1e108000000)宇宙。",
		168: "不购买亚普朗克泡沫的前提下，到达showNum(1e25)量子泡沫。",
		
		171: "获得斯格明子。",
		172: "基本重置showNum(1e12)次。",
		173: "没有任何熵的前提下，到达boolean(extreme,showNup[1e78],showNup[1e140])量子泡沫。",
		174: "到达formatDistance(4.4e500000026)。",
		175: "没有任何熵，且不购买亚普朗克泡沫，光子和胶子升级的前提下，到达formatDistance(4.4e222222248)。", 
		176: "学说宇宙完成深度19。",
		177: "至少获得showNum(1625)%病原体升级效果。",
		178: "到达formatDistance(4.4e1000000026)。",
	},
	rewards: {
		12: "加速度增加showNum(10)%boolean(extreme,，且每获得一个成就，级别降价器就增强0.5倍，效果叠加)。",
		14: "加速度和最大速度增加showNum(50)%boolean(extreme,，且火箭重置时您直接获得1个级别降价器)。",
		15: "火箭获取量增加showNum(5)%boolean(extreme,，并解锁熔炉)。",
		16: "boolean(extreme+hikers_dream,根据动力总量，增加煤的获取量。)",
		17: "时间加快showNum(1)%。",
		18: "时间加快showNum(50)%。",

		21: "最大速度增加showNum(10)%boolean(extreme,，且每1个阶层您额外获得1个级别降价器)。",
		22: "加速度增加showNum(5)%boolean(extreme,，且阶层重置时您直接获得1个级别降价器)",
		23: "加速度增加showNum(20)%。",
		24: "最大速度增加showNum(25)%boolean(extreme,，且此列每解锁一个成就，加速度就变为2倍)。",
		26: "火箭获取量增加showNum(10)%boolean(extreme+hikers_dream,，且 优化 升级以较低的倍率增加煤获取量)。",
		27: "时间加快showNum(10)%。",

		32: "加速度增加showNum(80)%。",
		34: "火箭获取量增加showNum(10)%boolean(extreme,，且您再次额外获得1个级别降价器)。",
		35: "加速度增加showNum(80)%boolean(extreme,，且煤的效果翻倍)。",
		36: "碎屑和智慧的获取量增加showNum(50)%boolean(extreme+hikers_dream,，且每个熔炉升级使 优化 升级软上限的起始值增加10%)。",
		38: "残骸获取量翻倍boolean(extreme+hikers_dream,，且乘以能量升级总量的平方，最小为1)。",

		41: "最大速度增加showNum(50)%。",
		43: "级别需求公式缓和showNum(2.5)%。",
		44: "火箭获取量增加showNum(15)%。",
		46: "智慧获取量翻倍。",
		47: "时间加快showNum(50)%。",
		48: "您可以最大化购买机器人升级。",

		51: "最大速度增加showNum(50)%。",
		52: "时间加快showNum(20)%。",
		55: "时间方盒获取量增加showNum(10)%。",
		57: "时间加快showNum(10)%。",
		58: "火箭燃料重置改为将火箭重置为当前数量的showNum(50)%。",

		61: "最大速度增加showNum(60)%boolean(extreme+hikers_dream,，且将能量损耗除以时间方盒升级总量，最小为1)。",
		63: "时间速度以较低的倍率增加病原体获取量。",
		65: "残骸获取量增加showNum(40)%boolean(extreme+hikers_dream,，每个病原体升级使 信心 升级软上限增加三分之一)boolean(hard,，且病原体升级软上限延迟5次出现)",
		66: "boolean(extreme+hikers_dream,加强 推进器 III 升级的效果，且根据煤数值，加强 优化 升级的效果。)",
		67: "时间加快showNum(11.11)%boolean(extreme+hikers_dream,，且 优化 升级软上限延迟5次出现， 信心 升级软上限延迟1次出现)。",
		68: "病原体获取量变为showNum(2.5)倍boolean(hard+hikers_dream,，根据 信心 升级数值，增加病原体获取量)boolean(extreme,，且残骸获取量变为5倍)。",

		72: "不进行时间反演也可以获得时间方盒，但速度减半boolean(extreme,，且根据煤和黑暗核心数值，增加时间方盒获取量)。",
		74: "'时骨无存'成就的奖励增加showNum(75)%。",
		75: "黑暗流加快showNum(10)%。",
		76: "火箭获取量增加showNum(2)%",
		77: "boolean(extreme+hikers_dream,根据火箭数值，增加动力的基础软上限。)",

		81: "无限时保留自动化相关内容。",
		83: "黑暗流加快showNum(20)%。",
		84: "黑暗流影响病原体获取量，在showNum(50)倍以后效果减少。",
		85: "boolean(hard+hikers_dream,您可以随时复原能量)boolean(extreme+hikers_dream,，且使 持久性 升级变为原来的平方)boolean(hard+hikers_dream,。)",
		86: "boolean(extreme+hikers_dream,根据病原体数值，使时间方盒获取量变为相应倍数，并使 信心 升级软上限的起始值变为原来的平方。)",
		87: "boolean(extreme+hikers_dream,移除动力的基础软上限)boolean(hard+hikers_dream,，且根据时间方盒数值，加强病原体的效果。)",
		88: "购买病原体升级不再花费病原体boolean(extreme,，且解锁熔炉挑战)。",

		92: "购买黑暗核心不再减少残骸数值。",
		93: "boolean(extreme+hikers_dream,使 信心 升级软上限的起始值变为原来的平方。)",
		94: "boolean(hard-extreme,即使特权未激活也可以产生飞升能量。)",
		95: "每秒获得当前产量showNum(100)%的火箭。",
		96: "每秒获得当前产量showNum(100)%的残骸。",
		97: "每秒将showNum(100)%数值的残骸转化为生命精华boolean(extreme+hikers_dream,，且根据 优化 升级数值，增加 信心 升级软上限的起始值)。",

		102: "boolean(extreme+hikers_dream,根据认可数值，将 信心 升级软上限的起始值变为相应倍数。)",
		103: "可以多激活一个特权。",
		105: "加速度增加showNum(300)%boolean(extreme,，且级别机器人和阶层机器人的数量受间隔加成的效果变得更好)。",
		108: "知识获取量增加showNum(50)%boolean(extreme,，且折算的认可延迟2次出现)。",

		111: "可以同时激活所有四个特权boolean(extreme,，且解锁强化熔炉)。",
		112: "根据时间速度数值，以较低的倍率增加知识获取量boolean(extreme,，且级别降价器不再重置任何东西)。",
		116: "天堂碎片和恶魔灵魂获取量翻倍boolean(extreme,，且进行净化时时间速度可以生效，每有1点净化能量，强化煤的获取量就增加40%)。",
		117: "boolean(extreme+hikers_dream,移除 信心 升级的软上限。)",

		123: "宇之不存成就的公式变得略好一些boolean(hard+hikers_dream,，且 信心 升级效果变为原来的10倍)。",
		124: "特权持续时间翻倍。",
		125: "病原体升级的效果增加showNum(5)%。",

		131: "火箭，残骸，病原体的获取量翻倍，黑暗流加快showNum(50)%boolean(extreme,，且煤和强化煤的获取量总是变为100倍)。",
		132: "规范作用力的效果翻倍。",
		133: "解锁自动基本重置。",
		135: "净化能量的效果减半。",
		
		141: "boolean(hikers_dream,您可以保留发生器，并自动购买它们。)",
		142: "自动购买的认可不再重置任何东西。",
		143: "boolean(extreme+hikers_dream,您可以使用Shift键+点击来最大化购买学说树升级，比普通的升级更高效。)boolean(hikers_dream,被动能量获取量变为一千万倍。)",
		144: "所有弦的获取量增加showNum(25)%。",
		145: "boolean(hikers_dream,根据级别数值，加强无限10;10的效果。)",
		147: "进行净化时可以获得残骸，但倍率极低，且病原体升级效果不再永远为0%。",
		
		152: "All Theory Tree Upgrades are cheaper based on your Best Hadronic Score.",
		153: "boolean(extreme+hikers_dream,The Theory Tree Upgrade that makes Scaled Endorsements start later also makes Superscaled Endorsements start later at a reduced rate [x/10])",
		154: "Purge Power gain is doubledboolean(hikers_dream, and unlock a 27th & 28th energy upgrade).",
		157: "All Strings are gained twice as fast.",
		
		162: "Unspent Theory Points boost all Foam typesboolean(extreme+hikers_dream,., and you can buy max Theory Tree Upgrades with shift+click which is slightly more efficient than normally upgrading.)",
		163: "Gain 10% of your Entangled String gain every second.",
		166: "Unlock Auto-Photon Upgrades & Auto-Gluon Upgrades.",
		168: "Unlock Auto-Theory Tree Upgrades.",
		
		171: "Expanding your Foam does not spend it, and Quantum Foam is gained 10x faster, Subplanck Foam is gained 20x faster, Subspatial Foam is gained 30x faster, etc.boolean(hikers_dream, and unlock a 29th & 30th energy upgrade)",
		172: "The Elementary Particle gain softcap is showNum(20)% weaker for every three OoMs of Elementaries done.",
		174: "The Perk Accelerator is showNum(5)% stronger.",
	}
};