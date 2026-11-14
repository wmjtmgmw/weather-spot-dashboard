export const WEATHER_TYPES = {
  sunny: {
    key: "sunny",
    label: "快晴・晴れ",
    short: "晴れ",
    emoji: "☀️",
    defaultRain: 10,
    defaultHumidity: 46,
    defaultWind: 2.3,
    defaultUv: 4,
    summary: "澄んだ青空が広がる絶好のお出かけ日和"
  },
  cloudy: {
    key: "cloudy",
    label: "くもり",
    short: "くもり",
    emoji: "⛅",
    defaultRain: 25,
    defaultHumidity: 60,
    defaultWind: 3.1,
    defaultUv: 2,
    summary: "日差しが柔らかく歩きやすい落ち着いた天気"
  },
  rainy: {
    key: "rainy",
    label: "雨",
    short: "雨",
    emoji: "☔",
    defaultRain: 85,
    defaultHumidity: 84,
    defaultWind: 4.5,
    defaultUv: 1,
    summary: "しとしとと雨模様。屋内スポットやカフェ巡りが最適"
  },
  snowy: {
    key: "snowy",
    label: "雪・冷え込み",
    short: "雪",
    emoji: "❄️",
    defaultRain: 70,
    defaultHumidity: 74,
    defaultWind: 4.2,
    defaultUv: 1,
    summary: "凛とした寒さと雪景色。暖かい屋内や温泉が心地よい日"
  },
  windy: {
    key: "windy",
    label: "強風・変わりやすい空",
    short: "強風",
    emoji: "🌬️",
    defaultRain: 35,
    defaultHumidity: 52,
    defaultWind: 8.6,
    defaultUv: 3,
    summary: "風がやや強め。屋内施設や地下街、風を避けられる場所が安心"
  }
};

export const CATEGORIES = [
  { id: "all", label: "すべて" },
  { id: "outdoor", label: "自然・公園" },
  { id: "cafe", label: "カフェ・グルメ" },
  { id: "culture", label: "アート・文化" },
  { id: "view", label: "展望・夜景" },
  { id: "shopping", label: "複合施設・散策" }
];

export const ENV_FILTERS = [
  { id: "all", label: "屋内外すべて" },
  { id: "indoor", label: "屋内" },
  { id: "outdoor", label: "屋外" }
];

export const CITY_META = {
  tokyo: {
    name: "東京（渋谷・丸の内）",
    sub: "東京都渋谷区・千代田区周辺",
    lat: 35.6762,
    lon: 139.6503,
    sunrise: "06:14",
    sunset: "16:36",
    forecastPattern: [
      { type: "sunny", high: 19, low: 10, rain: 10, humidity: 45, wind: 2.2, uv: 4 },
      { type: "cloudy", high: 17, low: 11, rain: 25, humidity: 58, wind: 3.0, uv: 2 },
      { type: "rainy", high: 14, low: 9, rain: 85, humidity: 86, wind: 4.4, uv: 1 },
      { type: "sunny", high: 18, low: 8, rain: 5, humidity: 42, wind: 2.5, uv: 4 },
      { type: "windy", high: 16, low: 9, rain: 30, humidity: 50, wind: 7.8, uv: 3 },
      { type: "sunny", high: 20, low: 10, rain: 10, humidity: 44, wind: 2.0, uv: 4 },
      { type: "cloudy", high: 16, low: 9, rain: 35, humidity: 64, wind: 3.2, uv: 2 }
    ]
  },
  yokohama: {
    name: "横浜（みなとみらい）",
    sub: "神奈川県横浜市西区・中区周辺",
    lat: 35.4437,
    lon: 139.638,
    sunrise: "06:15",
    sunset: "16:37",
    forecastPattern: [
      { type: "sunny", high: 20, low: 12, rain: 10, humidity: 48, wind: 3.1, uv: 4 },
      { type: "sunny", high: 19, low: 11, rain: 15, humidity: 50, wind: 3.6, uv: 4 },
      { type: "rainy", high: 15, low: 10, rain: 80, humidity: 84, wind: 5.5, uv: 1 },
      { type: "windy", high: 17, low: 10, rain: 20, humidity: 52, wind: 8.4, uv: 3 },
      { type: "cloudy", high: 17, low: 11, rain: 30, humidity: 62, wind: 3.8, uv: 2 },
      { type: "sunny", high: 20, low: 12, rain: 10, humidity: 46, wind: 2.8, uv: 4 },
      { type: "sunny", high: 19, low: 11, rain: 15, humidity: 49, wind: 2.9, uv: 3 }
    ]
  },
  kyoto: {
    name: "京都（東山・嵐山）",
    sub: "京都市東山区・中京区・右京区周辺",
    lat: 35.0116,
    lon: 135.7681,
    sunrise: "06:28",
    sunset: "16:51",
    forecastPattern: [
      { type: "sunny", high: 18, low: 8, rain: 10, humidity: 49, wind: 1.9, uv: 4 },
      { type: "cloudy", high: 16, low: 9, rain: 20, humidity: 60, wind: 2.3, uv: 2 },
      { type: "rainy", high: 13, low: 8, rain: 80, humidity: 85, wind: 3.1, uv: 1 },
      { type: "sunny", high: 17, low: 7, rain: 10, humidity: 47, wind: 2.1, uv: 4 },
      { type: "sunny", high: 19, low: 8, rain: 10, humidity: 45, wind: 1.8, uv: 4 },
      { type: "cloudy", high: 15, low: 8, rain: 30, humidity: 63, wind: 2.6, uv: 2 },
      { type: "rainy", high: 13, low: 7, rain: 75, humidity: 82, wind: 3.3, uv: 1 }
    ]
  },
  osaka: {
    name: "大阪（梅田・難波）",
    sub: "大阪府大阪市北区・中央区周辺",
    lat: 34.6937,
    lon: 135.5023,
    sunrise: "06:29",
    sunset: "16:53",
    forecastPattern: [
      { type: "sunny", high: 20, low: 11, rain: 10, humidity: 48, wind: 2.4, uv: 4 },
      { type: "sunny", high: 19, low: 11, rain: 15, humidity: 52, wind: 2.7, uv: 4 },
      { type: "cloudy", high: 17, low: 11, rain: 30, humidity: 60, wind: 3.0, uv: 2 },
      { type: "rainy", high: 15, low: 10, rain: 80, humidity: 83, wind: 4.1, uv: 1 },
      { type: "sunny", high: 18, low: 9, rain: 10, humidity: 46, wind: 2.6, uv: 4 },
      { type: "windy", high: 17, low: 10, rain: 25, humidity: 53, wind: 7.5, uv: 3 },
      { type: "sunny", high: 20, low: 11, rain: 10, humidity: 47, wind: 2.2, uv: 4 }
    ]
  },
  sapporo: {
    name: "札幌（大通・藻岩）",
    sub: "北海道札幌市中央区周辺",
    lat: 43.0618,
    lon: 141.3545,
    sunrise: "06:24",
    sunset: "16:12",
    forecastPattern: [
      { type: "snowy", high: 5, low: -1, rain: 70, humidity: 75, wind: 4.1, uv: 1 },
      { type: "sunny", high: 7, low: -2, rain: 15, humidity: 55, wind: 2.5, uv: 2 },
      { type: "cloudy", high: 6, low: 0, rain: 30, humidity: 64, wind: 3.2, uv: 1 },
      { type: "snowy", high: 3, low: -3, rain: 80, humidity: 80, wind: 5.0, uv: 1 },
      { type: "sunny", high: 8, low: -1, rain: 10, humidity: 52, wind: 2.2, uv: 2 },
      { type: "windy", high: 5, low: -2, rain: 40, humidity: 66, wind: 7.4, uv: 1 },
      { type: "cloudy", high: 6, low: -1, rain: 25, humidity: 61, wind: 2.9, uv: 1 }
    ]
  },
  fukuoka: {
    name: "福岡（天神・糸島）",
    sub: "福岡県福岡市中央区・博多区・糸島周辺",
    lat: 33.5902,
    lon: 130.4017,
    sunrise: "06:46",
    sunset: "17:13",
    forecastPattern: [
      { type: "sunny", high: 21, low: 13, rain: 10, humidity: 50, wind: 2.8, uv: 4 },
      { type: "cloudy", high: 19, low: 13, rain: 25, humidity: 60, wind: 3.4, uv: 2 },
      { type: "rainy", high: 16, low: 12, rain: 80, humidity: 83, wind: 4.8, uv: 1 },
      { type: "sunny", high: 20, low: 11, rain: 10, humidity: 48, wind: 2.6, uv: 4 },
      { type: "sunny", high: 21, low: 12, rain: 10, humidity: 49, wind: 2.5, uv: 4 },
      { type: "windy", high: 18, low: 11, rain: 30, humidity: 56, wind: 7.9, uv: 3 },
      { type: "cloudy", high: 18, low: 12, rain: 35, humidity: 65, wind: 3.1, uv: 2 }
    ]
  },
  naha: {
    name: "那覇（首里・瀬長島）",
    sub: "沖縄県那覇市・豊見城市周辺",
    lat: 26.2124,
    lon: 127.6809,
    sunrise: "06:48",
    sunset: "17:41",
    forecastPattern: [
      { type: "sunny", high: 26, low: 20, rain: 15, humidity: 62, wind: 3.5, uv: 6 },
      { type: "cloudy", high: 24, low: 20, rain: 30, humidity: 70, wind: 4.1, uv: 4 },
      { type: "rainy", high: 22, low: 19, rain: 80, humidity: 86, wind: 5.8, uv: 2 },
      { type: "sunny", high: 26, low: 20, rain: 10, humidity: 60, wind: 3.2, uv: 6 },
      { type: "windy", high: 23, low: 19, rain: 35, humidity: 68, wind: 8.8, uv: 4 },
      { type: "sunny", high: 27, low: 21, rain: 15, humidity: 61, wind: 3.0, uv: 6 },
      { type: "cloudy", high: 24, low: 19, rain: 30, humidity: 72, wind: 4.0, uv: 3 }
    ]
  }
};
