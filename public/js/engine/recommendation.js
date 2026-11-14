import { WEATHER_TYPES } from "../data/weatherData.js";

export function formatTemp(celsius, unit = "C", withUnit = true) {
  const val = unit === "F" ? Math.round((celsius * 9) / 5 + 32) : Math.round(celsius);
  return withUnit ? `${val}°${unit}` : `${val}°`;
}

export function buildEffectiveWeather(baseDay, overrideWeatherType = null) {
  if (!overrideWeatherType) {
    const currentTemp = Math.round(baseDay.high * 0.78 + baseDay.low * 0.22);
    return {
      ...baseDay,
      isSimulated: false,
      currentTemp,
      feelsLike: Math.round(currentTemp - (baseDay.wind > 5 ? 2 : 0.5))
    };
  }

  const wt = WEATHER_TYPES[overrideWeatherType] || WEATHER_TYPES.sunny;
  const tempAdjust =
    wt.key === "snowy"
      ? { high: Math.min(baseDay.high, 3), low: Math.min(baseDay.low, -2) }
      : wt.key === "rainy"
      ? { high: baseDay.high - 2, low: baseDay.low }
      : wt.key === "sunny"
      ? { high: Math.max(baseDay.high, 14), low: baseDay.low }
      : { high: baseDay.high, low: baseDay.low };

  const currentTemp = Math.round(tempAdjust.high * 0.78 + tempAdjust.low * 0.22);
  return {
    type: wt.key,
    high: tempAdjust.high,
    low: tempAdjust.low,
    rain: wt.defaultRain,
    humidity: wt.defaultHumidity,
    wind: wt.defaultWind,
    uv: wt.defaultUv,
    isSimulated: true,
    currentTemp,
    feelsLike: Math.round(currentTemp - (wt.defaultWind > 5 ? 2 : 0))
  };
}

export function generateHourlyPoints(weather) {
  const hours = ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"];
  const curveWeights = [0.05, 0.28, 0.62, 0.88, 1.0, 0.86, 0.60, 0.42, 0.26, 0.14];
  const span = Math.max(2, weather.high - weather.low);

  return hours.map((hour, i) => {
    const temp = Math.round((weather.low + span * curveWeights[i]) * 10) / 10;
    let rainProb = weather.rain;
    if (weather.type === "rainy") {
      rainProb = Math.min(95, Math.max(45, weather.rain + (i >= 3 && i <= 7 ? 10 : -15)));
    } else if (weather.type === "sunny") {
      rainProb = Math.max(0, Math.min(20, weather.rain + (i === 5 ? 5 : -5)));
    } else {
      rainProb = Math.max(5, Math.min(85, weather.rain + (i % 2 === 0 ? -5 : 5)));
    }
    return { hour, temp, rain: Math.round(rainProb) };
  });
}

export function computeOutingAdvisory(weather) {
  let score = 88;
  if (weather.type === "sunny") score = 95;
  else if (weather.type === "cloudy") score = 84;
  else if (weather.type === "windy") score = 68;
  else if (weather.type === "rainy") score = 54;
  else if (weather.type === "snowy") score = 48;

  if (weather.currentTemp >= 14 && weather.currentTemp <= 24 && weather.type !== "rainy") {
    score = Math.min(99, score + 3);
  }
  if (weather.currentTemp < 4) {
    score = Math.max(35, score - 8);
  }

  let headline = "屋外・屋内どちらもバランスよく楽しめる日";
  if (score >= 90) headline = "絶好のお出かけ日和！屋外散策やテラスが最高";
  else if (score >= 75) headline = "歩いて心地よい気候。街歩きやカフェ巡りに最適";
  else if (score >= 60) headline = "風や天気に注意。半屋外・屋内中心が安心";
  else headline = "屋内スポットが主役の日。美術館や地下街が快適";

  const t = weather.currentTemp;
  let outfit = "";
  if (t >= 25) {
    outfit = "通気性の良い半袖やリネンシャツが快適。屋内冷房対策に薄手のカーディガンがあると安心です。";
  } else if (t >= 19) {
    outfit = "長袖シャツや薄手のニット1枚で心地よい気温。朝晩は羽織物があると温度調整しやすいです。";
  } else if (t >= 13) {
    outfit = "ジャケットやトレンチコート、ニットが活躍する季節。風を通しにくいアウターがおすすめです。";
  } else if (t >= 6) {
    outfit = "ウールコートやライトダウンにマフラーなどしっかり防寒を。暖かい屋内との寒暖差に備え脱ぎ着しやすい服装が◎。";
  } else {
    outfit = "厚手のダウンコート・手袋・耳まで覆う防寒が必須。滑りにくいブーツや防水スニーカーを選びましょう。";
  }

  if (weather.rain >= 60) {
    outfit += " 撥水アウターと傘を忘れずに。";
  } else if (weather.rain >= 30) {
    outfit += " 折り畳み傘をバッグに入れておくと安心です。";
  }

  let activity = "";
  let tags = [];
  if (weather.type === "sunny") {
    activity = "光がきれいな時間帯に公園や水辺・展望台を訪れるのがおすすめ。テラス席のカフェも人気です。";
    tags = ["屋外散策◎", "展望・景色◎", "テラス席◎", "UV対策を少し"];
  } else if (weather.type === "cloudy") {
    activity = "強い日差しがないため長時間の街歩きや庭園散策でも疲れにくい日。写真も柔らかな色合いに撮れます。";
    tags = ["街歩き◎", "カフェハシゴ◎", "写真映え◎"];
  } else if (weather.type === "rainy") {
    activity = "駅直結の美術館・水族館・アーケード街を選べばストレスゼロ。雨音を聞きながら喫茶店で過ごすのも贅沢です。";
    tags = ["屋内メイン◎", "美術館・水族館◎", "駅直結・アーケード推奨"];
  } else if (weather.type === "snowy") {
    activity = "無理に長距離を歩かず、地下街や温かなグルメスポット、暖房の効いた展望室や美術館を軸に計画しましょう。";
    tags = ["屋内・地下街◎", "温活グルメ◎", "防寒・足元注意"];
  } else {
    activity = "海沿いや高層屋外デッキは体感が下がりやすい日。風を避けられるアーケードや屋内施設中心が快適です。";
    tags = ["屋内中心◎", "風よけスポット推奨", "上着必須"];
  }

  return { score, headline, outfit, activity, tags };
}

export function computeSpotMatchScore(spot, weather) {
  let score = 70;
  const wType = weather.type;

  if (wType === "rainy") {
    if (spot.env === "indoor") score += 26;
    else if (spot.env === "semi" && spot.rainProof) score += 18;
    else if (spot.env === "semi") score -= 5;
    else score -= 35;
  } else if (wType === "snowy") {
    if (spot.env === "indoor") score += 25;
    else if (spot.env === "semi" && spot.rainProof) score += 14;
    else score -= 30;
  } else if (wType === "windy") {
    if (spot.env === "indoor") score += 20;
    else if (spot.env === "semi") score += 10;
    else score -= 18;
  } else if (wType === "sunny") {
    if (spot.env === "outdoor") score += 24;
    else if (spot.env === "semi") score += 18;
    else score += 8;
  } else if (wType === "cloudy") {
    if (spot.env === "outdoor" || spot.env === "semi") score += 18;
    else score += 14;
  }

  if (spot.idealConditions.includes(wType)) {
    score += 8;
  }

  const [minT, maxT] = spot.idealTempRange;
  if (weather.currentTemp >= minT && weather.currentTemp <= maxT) {
    score += 4;
  } else {
    const dist = Math.min(Math.abs(weather.currentTemp - minT), Math.abs(weather.currentTemp - maxT));
    score -= Math.min(18, Math.round(dist * 1.5));
  }

  return Math.max(28, Math.min(99, Math.round(score)));
}

export function getSpotWeatherTip(spot, weather) {
  if (spot.tips && spot.tips[weather.type]) return spot.tips[weather.type];
  if (spot.tips && spot.tips.default) return spot.tips.default;
  return spot.description;
}

export function mapWmoCodeToType(code, windMaxKmh) {
  if (code >= 71 && code <= 77) return "snowy";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 99)) return "rainy";
  if (windMaxKmh >= 25) return "windy";
  if (code === 0 || code === 1) return "sunny";
  return "cloudy";
}
