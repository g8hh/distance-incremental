// Ranks

const RANK_DESCS = {
	1: "最大速度增加1米/秒。",
	2: "每次提升级别都使加速度和最大速度增加10%。",
	3: "使加速度翻倍。",
	4: "每次提升阶层都使加速度和最大速度变为原来的3倍。",
	5: "每次提升级别都使加速度和最大速度增加97.5%。",
	8: "每次提升级别都使最大速度增加10%。",
	10: "使加速度翻倍。",
	14: "加速度和最大速度变为某个数值的倍率，此数值为(n+1)^1.6，其中n为火箭燃料数值。",
	15: "使加速度变为原来的4倍。",
	20: "智慧的获取量翻倍。",
	25: "使加速度变为原来的10倍。",
	30: "智慧的获取量变为原来的3倍。",
	35: "时间加快50%。",
	40: "使智慧的获取量变为某个数值的倍率，此数值为不大于碎屑数值的质数数量(最小为1，在1000000000个质数后到达软上限)。",
	45: "时间加快80%。",
	50: "使加速度变为原来的15倍。",
	55: "每次提升级别都使最大速度翻倍。",
	60: "碎屑的获取量翻倍。",
	70: "时间加快40%。",
	75: "使加速度变为原来的25倍。",
	80: "时间加快50%。",
	90: "时间加快75%。",
	100: "火箭的获取量翻倍。",
	111: "每次提升级别都使智慧的获取量翻倍。",
	125: "时间加快50%。",
	150: "时间加快55%。",
	175: "时间加快60%。",
	200: "时间加快70%。",
	250: "时间加快80%。",
	300: "时间加快90%。",
	500: "时间加快95%。",
	1000: "时间加快98%。",
	10000: "时间加快100%。"
};

const DEFAULT_RANK_DESC = "提升级别。";

// Tiers

const TIER_DESCS = {
	0: "make the rank requirement formula 25% slower.",
	1: "double your acceleration and quintuple your maximum velocity if you are at least Rank 3.",
	2: "make the rank requirement formula 10% slower for each tier up.",
	3: "triple your acceleration.",
	4: "double intelligence gain.",
	5: "quintuple your acceleration.",
	6: "time goes by 50% faster.",
	7: "time goes by 10% faster for each rocket fuel.",
	8: "multiply your acceleration by 10.",
	9: "intelligence boosts maximum velocity.",
	10: "multiply your acceleration by 15.",
	12: "triple intelligence gain.",
	13: "quadruple intelligence gain.",
	15: "multiply your acceleration by 25.",
	16: "time goes by 60% faster.",
	18: "time goes by 80% faster.",
	20: "time goes by 100% faster."
};

const DEFAULT_TIER_DESC = "提升阶层。";
