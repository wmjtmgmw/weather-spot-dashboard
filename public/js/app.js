import { WEATHER_TYPES, CATEGORIES, ENV_FILTERS, CITY_META } from "./data/weatherData.js";
import { SPOTS_BY_CITY } from "./data/spotsData.js";
import {
  formatTemp,
  buildEffectiveWeather,
  generateHourlyPoints,
  computeOutingAdvisory,
  computeSpotMatchScore,
  getSpotWeatherTip,
  mapWmoCodeToType
} from "./engine/recommendation.js";
import { renderWeatherSvg } from "./components/weatherIcons.js";
import { renderHourlyChart } from "./components/hourlyChart.js";

const state = {
  cityKey: "tokyo",
  selectedDayIndex: 0,
  overrideWeatherType: null,
  unit: "C",
  categoryFilter: "all",
  envFilter: "all",
  searchQuery: "",
  favOnly: false,
  favorites: loadFavorites(),
  liveDataByCity: {},
  activeModalSpotId: null,
  selectedHourIndex: 4,
  theme: loadTheme()
};

function loadFavorites() {
  try {
    const raw = window.localStorage.getItem("weather_concierge_favs_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return new Set(parsed);
    }
  } catch {
    // Ignore storage error
  }
  return new Set();
}

function saveFavorites() {
  try {
    window.localStorage.setItem("weather_concierge_favs_v1", JSON.stringify(Array.from(state.favorites)));
  } catch {
    // Ignore storage error
  }
}

function loadTheme() {
  try {
    const saved = window.localStorage.getItem("weather_concierge_theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Ignore
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("theme-toggle-icon");
  const label = document.getElementById("theme-toggle-label");
  if (theme === "dark") {
    icon.textContent = "☀️";
    label.textContent = "ライト";
  } else {
    icon.textContent = "🌙";
    label.textContent = "ダーク";
  }
  try {
    window.localStorage.setItem("weather_concierge_theme", theme);
  } catch {
    // Ignore
  }
}

function getDateMeta(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const wd = weekdays[d.getDay()];
  if (offsetDays === 0) return { tag: "今日", full: `今日 (${month}/${date} ${wd})` };
  if (offsetDays === 1) return { tag: "明日", full: `明日 (${month}/${date} ${wd})` };
  return { tag: `${month}/${date}(${wd})`, full: `${month}/${date} (${wd})` };
}

function getCurrentCityForecast() {
  return state.liveDataByCity[state.cityKey] || CITY_META[state.cityKey].forecastPattern;
}

function getEffectiveWeather() {
  const forecast = getCurrentCityForecast();
  const baseDay = forecast[state.selectedDayIndex] || forecast[0];
  return buildEffectiveWeather(baseDay, state.overrideWeatherType);
}

function renderUnitButtons() {
  document.getElementById("unit-c").classList.toggle("active", state.unit === "C");
  document.getElementById("unit-f").classList.toggle("active", state.unit === "F");
}

function renderScenarioPills() {
  const container = document.getElementById("scenario-pills");
  const items = [
    { key: null, label: "予報どおり" },
    { key: "sunny", label: "☀️ 快晴" },
    { key: "cloudy", label: "⛅ くもり" },
    { key: "rainy", label: "☔ 雨" },
    { key: "snowy", label: "❄️ 雪・寒波" },
    { key: "windy", label: "🌬️ 強風" }
  ];

  container.innerHTML = items
    .map((item) => {
      const active = state.overrideWeatherType === item.key ? "active" : "";
      const attr = item.key === null ? "auto" : item.key;
      return `<button type="button" data-scenario="${attr}" class="scenario-btn ${active}">${item.label}</button>`;
    })
    .join("");

  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-scenario");
      state.overrideWeatherType = val === "auto" ? null : val;
      renderAll();
    });
  });
}

function renderHeroAndAdvice() {
  const city = CITY_META[state.cityKey];
  const weather = getEffectiveWeather();
  const wt = WEATHER_TYPES[weather.type];
  const dateMeta = getDateMeta(state.selectedDayIndex);

  document.getElementById("selected-date-label").textContent = weather.isSimulated
    ? `${dateMeta.full} • シミュレーション中`
    : dateMeta.full;

  document.getElementById("selected-city-sub").textContent = city.sub;
  document.getElementById("hero-weather-icon").innerHTML = renderWeatherSvg(weather.type);
  document.getElementById("hero-temp").textContent = formatTemp(weather.currentTemp, state.unit);
  document.getElementById("hero-feels").textContent = `体感 ${formatTemp(weather.feelsLike, state.unit)}`;
  document.getElementById("hero-condition-text").textContent = `${wt.label}・${wt.summary}`;
  document.getElementById("hero-high-low").textContent = `${formatTemp(weather.high, state.unit, false)} / ${formatTemp(weather.low, state.unit, false)}`;
  document.getElementById("hero-pressure-sunrise").textContent = `日の出 ${city.sunrise} • 日の入 ${city.sunset}`;

  document.getElementById("metric-rain").textContent = `${weather.rain}%`;
  document.getElementById("metric-rain-note").textContent =
    weather.rain >= 60 ? "傘が必須" : weather.rain >= 30 ? "折り畳み傘推奨" : "傘はほぼ不要";

  document.getElementById("metric-humidity").textContent = `${weather.humidity}%`;
  document.getElementById("metric-humidity-note").textContent =
    weather.humidity >= 75 ? "ややしっとり" : weather.humidity <= 45 ? "乾燥気味" : "快適な湿度";

  document.getElementById("metric-wind").textContent = `${weather.wind.toFixed(1)} m/s`;
  document.getElementById("metric-wind-note").textContent =
    weather.wind >= 6.5 ? "風が強め" : weather.wind >= 4 ? "やや風あり" : "穏やかな風";

  const uvLabel = weather.uv >= 6 ? "高" : weather.uv >= 3 ? "中" : "低";
  document.getElementById("metric-uv").textContent = `${weather.uv} (${uvLabel})`;
  document.getElementById("metric-uv-note").textContent =
    weather.uv >= 5 ? "日焼け止め推奨" : weather.uv >= 3 ? "適度に日差し対策" : "UV負担は少なめ";

  const advice = computeOutingAdvisory(weather);
  document.getElementById("outing-headline").textContent = advice.headline;
  document.getElementById("outing-score").textContent = String(advice.score);

  const bar = document.getElementById("outing-score-bar");
  bar.style.width = `${advice.score}%`;
  bar.style.backgroundColor =
    advice.score >= 80 ? "var(--success)" : advice.score >= 60 ? "var(--primary)" : "var(--warning)";

  document.getElementById("advice-outfit").textContent = advice.outfit;
  document.getElementById("advice-activity").textContent = advice.activity;
  document.getElementById("advice-tags").innerHTML = advice.tags
    .map((t) => `<span class="tag-chip">${t}</span>`)
    .join("");

  const hourlyPts = generateHourlyPoints(weather);
  renderHourlyChart({
    svgEl: document.getElementById("hourly-chart-svg"),
    readoutEl: document.getElementById("hourly-readout"),
    points: hourlyPts,
    selectedHourIndex: state.selectedHourIndex,
    unit: state.unit,
    onSelectHour: (idx) => {
      if (state.selectedHourIndex !== idx) {
        state.selectedHourIndex = idx;
        renderHeroAndAdvice();
      }
    }
  });
}

function renderWeeklyForecast() {
  const forecast = getCurrentCityForecast();
  const list = document.getElementById("weekly-forecast-list");

  list.innerHTML = forecast
    .map((day, idx) => {
      const wt = WEATHER_TYPES[day.type];
      const dateMeta = getDateMeta(idx);
      const selected = idx === state.selectedDayIndex ? "selected" : "";
      return `
        <button type="button" data-day="${idx}" class="week-row ${selected}">
          <div class="week-left">
            <span class="week-date">${dateMeta.tag}</span>
            <span class="week-icon">${renderWeatherSvg(day.type)}</span>
            <span class="muted-xs">${wt.short}</span>
          </div>
          <div class="week-right tabular-nums">
            <span class="week-rain">${day.rain}%</span>
            <span class="week-temps">${formatTemp(day.high, state.unit, false)} / ${formatTemp(day.low, state.unit, false)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  list.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedDayIndex = Number(btn.getAttribute("data-day"));
      state.overrideWeatherType = null;
      renderAll();
    });
  });
}

function renderCategoryAndEnvTabs() {
  const catEl = document.getElementById("category-tabs");
  catEl.innerHTML = CATEGORIES.map((c) => {
    const active = state.categoryFilter === c.id ? "active" : "";
    return `<button type="button" data-cat="${c.id}" class="tab-btn ${active}">${c.label}</button>`;
  }).join("");

  catEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.categoryFilter = btn.getAttribute("data-cat");
      renderCategoryAndEnvTabs();
      renderSpotsSection();
    });
  });

  const envEl = document.getElementById("env-tabs");
  envEl.innerHTML = ENV_FILTERS.map((e) => {
    const active = state.envFilter === e.id ? "env-active" : "";
    return `<button type="button" data-env="${e.id}" class="tab-btn ${active}">${e.label}</button>`;
  }).join("");

  envEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.envFilter = btn.getAttribute("data-env");
      renderCategoryAndEnvTabs();
      renderSpotsSection();
    });
  });
}

function renderSpotsSection() {
  const city = CITY_META[state.cityKey];
  const citySpots = SPOTS_BY_CITY[state.cityKey] || [];
  const weather = getEffectiveWeather();
  const wt = WEATHER_TYPES[weather.type];

  const enriched = citySpots
    .map((spot) => ({
      ...spot,
      matchScore: computeSpotMatchScore(spot, weather),
      dynamicTip: getSpotWeatherTip(spot, weather)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);

  const cityFavCount = citySpots.filter((s) => state.favorites.has(s.id)).length;
  document.getElementById("fav-count").textContent = `(${cityFavCount})`;

  const favBtn = document.getElementById("fav-filter-btn");
  favBtn.classList.toggle("active-outline", state.favOnly);
  document.getElementById("fav-filter-heart").textContent = state.favOnly ? "♥" : "♡";

  const q = state.searchQuery.trim().toLowerCase();
  const filtered = enriched.filter((s) => {
    if (state.categoryFilter !== "all" && s.category !== state.categoryFilter) return false;
    if (state.envFilter === "indoor" && s.env !== "indoor" && !s.rainProof) return false;
    if (state.envFilter === "outdoor" && s.env === "indoor") return false;
    if (state.favOnly && !state.favorites.has(s.id)) return false;
    if (q) {
      const hay = `${s.name} ${s.area} ${s.description} ${s.dynamicTip}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  document.getElementById("spot-count-badge").textContent = `${filtered.length}件`;
  document.getElementById("spot-section-subtitle").textContent =
    `${city.name}の「${wt.short}・${formatTemp(weather.currentTemp, state.unit)}」に合わせた天気適合度順で表示中`;

  const grid = document.getElementById("spots-grid");
  const empty = document.getElementById("spots-empty");

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  grid.innerHTML = filtered
    .map((spot) => {
      const isFav = state.favorites.has(spot.id);
      const envLabel = spot.env === "indoor" ? "屋内" : spot.env === "semi" ? "屋内外" : "屋外";
      const scoreCls =
        spot.matchScore >= 85 ? "score-high" : spot.matchScore >= 65 ? "score-mid" : "score-low";
      const catLabel = (CATEGORIES.find((c) => c.id === spot.category) || {}).label || "";

      return `
        <article class="spot-card">
          <div>
            <div class="spot-top">
              <div class="badge-row">
                <span class="score-pill tabular-nums ${scoreCls}">適合度 ${spot.matchScore}%</span>
                <span class="env-badge">${envLabel}</span>
                ${spot.rainProof ? `<span class="rain-ok-badge">☔ 雨天OK</span>` : ""}
              </div>
              <button type="button" data-fav-id="${spot.id}" class="fav-icon-btn ${isFav ? "is-fav" : ""}" aria-label="お気に入り切替">
                ${isFav ? "♥" : "♡"}
              </button>
            </div>

            <div class="muted-xs" style="margin-top: 10px;">${spot.area} • ${catLabel}</div>
            <h3 class="spot-name">${spot.name}</h3>
            <div class="muted-xs">${spot.access}</div>

            <div class="spot-reason">
              <div class="spot-reason-title">${wt.emoji} この天気のおすすめ理由</div>
              <p class="spot-reason-text">${spot.dynamicTip}</p>
            </div>
          </div>

          <div class="spot-footer">
            <span class="muted-xs tabular-nums">${spot.bestTime} • ${spot.budget}</span>
            <button type="button" data-detail-id="${spot.id}" class="detail-btn">詳細を見る</button>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll("[data-fav-id]").forEach((btn) => {
    btn.addEventListener("click", () => toggleFavorite(btn.getAttribute("data-fav-id")));
  });

  grid.querySelectorAll("[data-detail-id]").forEach((btn) => {
    btn.addEventListener("click", () => openSpotModal(btn.getAttribute("data-detail-id")));
  });
}

function toggleFavorite(spotId) {
  if (state.favorites.has(spotId)) state.favorites.delete(spotId);
  else state.favorites.add(spotId);
  saveFavorites();
  renderSpotsSection();
  if (state.activeModalSpotId === spotId) {
    updateModalFavButton(spotId);
  }
}

function updateModalFavButton(spotId) {
  const isFav = state.favorites.has(spotId);
  document.getElementById("modal-fav-label").textContent = isFav
    ? "♥ お気に入り保存済み"
    : "♡ お気に入りに追加";
}

function openSpotModal(spotId) {
  const citySpots = SPOTS_BY_CITY[state.cityKey] || [];
  const spot = citySpots.find((s) => s.id === spotId);
  if (!spot) return;

  state.activeModalSpotId = spotId;
  const weather = getEffectiveWeather();
  const matchScore = computeSpotMatchScore(spot, weather);
  const envLabel = spot.env === "indoor" ? "屋内施設" : spot.env === "semi" ? "屋内外" : "屋外スポット";

  document.getElementById("modal-badges").innerHTML = `
    <span class="env-badge">${spot.area}</span>
    <span class="env-badge">${envLabel}</span>
    ${spot.rainProof ? `<span class="rain-ok-badge">☔ 雨天OK</span>` : ""}
  `;

  document.getElementById("modal-title").textContent = spot.name;
  document.getElementById("modal-access").textContent = `📍 ${spot.access}`;

  const scorePill = document.getElementById("modal-score-pill");
  scorePill.textContent = `天気適合度 ${matchScore}%`;
  scorePill.className = `score-pill tabular-nums ${
    matchScore >= 85 ? "score-high" : matchScore >= 65 ? "score-mid" : "score-low"
  }`;

  document.getElementById("modal-weather-tip").textContent = getSpotWeatherTip(spot, weather);
  document.getElementById("modal-description").textContent = spot.description;
  document.getElementById("modal-best-time").textContent = spot.bestTime;
  document.getElementById("modal-duration").textContent = spot.duration;
  document.getElementById("modal-budget").textContent = spot.budget;

  const backupBox = document.getElementById("modal-backup-box");
  if (spot.backupSpotId) {
    const backup = citySpots.find((s) => s.id === spot.backupSpotId);
    if (backup) {
      backupBox.classList.remove("hidden");
      document.getElementById("modal-backup-text").textContent =
        `天気が崩れた場合は、近くの屋内スポット「${backup.name}（${backup.access}）」への切り替えがおすすめです。`;
      document.getElementById("modal-jump-backup-btn").onclick = () => openSpotModal(backup.id);
    } else {
      backupBox.classList.add("hidden");
    }
  } else {
    backupBox.classList.add("hidden");
  }

  updateModalFavButton(spotId);
  document.getElementById("spot-modal").classList.remove("hidden");
}

function closeSpotModal() {
  state.activeModalSpotId = null;
  document.getElementById("spot-modal").classList.add("hidden");
}

async function syncLiveWeather() {
  const btn = document.getElementById("sync-live-btn");
  const label = document.getElementById("sync-live-label");
  const badge = document.getElementById("data-source-badge");
  const city = CITY_META[state.cityKey];

  btn.disabled = true;
  label.textContent = "取得中…";

  try {
    const res = await fetch(`/api/weather?lat=${city.lat}&lon=${city.lon}`);
    const payload = await res.json();

    if (!res.ok || payload.fallback || !payload.data || !payload.data.daily) {
      throw new Error(payload.reason || "Fallback active");
    }

    const d = payload.data.daily;
    const mapped = d.time.map((_, i) => {
      const windMs = Math.round(((d.wind_speed_10m_max[i] || 10) / 3.6) * 10) / 10;
      const wType = mapWmoCodeToType(d.weather_code[i] || 0, d.wind_speed_10m_max[i] || 10);
      const rainProb = d.precipitation_probability_max[i] ?? WEATHER_TYPES[wType].defaultRain;
      return {
        type: wType,
        high: Math.round(d.temperature_2m_max[i] ?? 18),
        low: Math.round(d.temperature_2m_min[i] ?? 10),
        rain: Math.round(rainProb),
        humidity: wType === "rainy" ? 82 : wType === "sunny" ? 48 : 60,
        wind: windMs,
        uv: Math.round(d.uv_index_max[i] ?? 3)
      };
    });

    state.liveDataByCity[state.cityKey] = mapped;
    state.overrideWeatherType = null;
    badge.textContent = "Open-Meteo ライブ予報同期済み";
    badge.className = "status-badge live";
    label.textContent = "ライブ予報を更新";
    renderAll();
  } catch {
    badge.textContent = "オフライン予報モデル表示中";
    badge.className = "status-badge";
    label.textContent = "オフラインモード";
  } finally {
    btn.disabled = false;
  }
}

function renderAll() {
  renderUnitButtons();
  renderScenarioPills();
  renderHeroAndAdvice();
  renderWeeklyForecast();
  renderCategoryAndEnvTabs();
  renderSpotsSection();
}

// Event bindings
document.getElementById("city-select").addEventListener("change", (e) => {
  state.cityKey = e.target.value;
  state.selectedDayIndex = 0;
  state.overrideWeatherType = null;
  state.categoryFilter = "all";
  state.envFilter = "all";
  state.searchQuery = "";
  document.getElementById("spot-search").value = "";

  const badge = document.getElementById("data-source-badge");
  if (state.liveDataByCity[state.cityKey]) {
    badge.textContent = "Open-Meteo ライブ予報同期済み";
    badge.className = "status-badge live";
  } else {
    badge.textContent = "予報モデル表示中";
    badge.className = "status-badge";
  }
  renderAll();
});

document.getElementById("unit-c").addEventListener("click", () => {
  if (state.unit !== "C") {
    state.unit = "C";
    renderAll();
  }
});

document.getElementById("unit-f").addEventListener("click", () => {
  if (state.unit !== "F") {
    state.unit = "F";
    renderAll();
  }
});

document.getElementById("theme-toggle-btn").addEventListener("click", () => {
  applyTheme(state.theme === "dark" ? "light" : "dark");
});

document.getElementById("sync-live-btn").addEventListener("click", syncLiveWeather);

document.getElementById("spot-search").addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderSpotsSection();
});

document.getElementById("fav-filter-btn").addEventListener("click", () => {
  state.favOnly = !state.favOnly;
  renderSpotsSection();
});

document.getElementById("reset-filters-btn").addEventListener("click", () => {
  state.categoryFilter = "all";
  state.envFilter = "all";
  state.searchQuery = "";
  state.favOnly = false;
  document.getElementById("spot-search").value = "";
  renderCategoryAndEnvTabs();
  renderSpotsSection();
});

document.getElementById("modal-close-btn").addEventListener("click", closeSpotModal);
document.getElementById("modal-done-btn").addEventListener("click", closeSpotModal);
document.getElementById("modal-backdrop").addEventListener("click", closeSpotModal);
document.getElementById("modal-fav-btn").addEventListener("click", () => {
  if (state.activeModalSpotId) toggleFavorite(state.activeModalSpotId);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.activeModalSpotId) closeSpotModal();
});

applyTheme(state.theme);
renderAll();
