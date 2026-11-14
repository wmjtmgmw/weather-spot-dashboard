import test from "node:test";
import assert from "node:assert/strict";
import {
  formatTemp,
  buildEffectiveWeather,
  generateHourlyPoints,
  computeOutingAdvisory,
  computeSpotMatchScore,
  mapWmoCodeToType
} from "../public/js/engine/recommendation.js";
import { SPOTS_BY_CITY } from "../public/js/data/spotsData.js";

test("formatTemp converts Celsius to Fahrenheit accurately", () => {
  assert.equal(formatTemp(20, "C"), "20°C");
  assert.equal(formatTemp(20, "F"), "68°F");
  assert.equal(formatTemp(0, "F", false), "32°");
});

test("computeSpotMatchScore ranks indoor spots higher on rainy days", () => {
  const rainyWeather = buildEffectiveWeather(
    { type: "rainy", high: 15, low: 10, rain: 85, humidity: 85, wind: 4.5, uv: 1 },
    "rainy"
  );
  const outdoorSpot = SPOTS_BY_CITY.tokyo.find((s) => s.id === "tokyo-yoyogi");
  const indoorSpot = SPOTS_BY_CITY.tokyo.find((s) => s.id === "tokyo-mori");

  const outdoorScore = computeSpotMatchScore(outdoorSpot, rainyWeather);
  const indoorScore = computeSpotMatchScore(indoorSpot, rainyWeather);

  assert.ok(indoorScore > outdoorScore, `Expected indoor (${indoorScore}) > outdoor (${outdoorScore})`);
  assert.ok(indoorScore >= 85);
});

test("computeSpotMatchScore ranks outdoor sunny spots high on clear mild days", () => {
  const sunnyWeather = buildEffectiveWeather(
    { type: "sunny", high: 20, low: 11, rain: 10, humidity: 45, wind: 2.0, uv: 4 },
    "sunny"
  );
  const outdoorSpot = SPOTS_BY_CITY.tokyo.find((s) => s.id === "tokyo-yoyogi");
  const score = computeSpotMatchScore(outdoorSpot, sunnyWeather);

  assert.ok(score >= 90, `Expected high sunny score, got ${score}`);
});

test("generateHourlyPoints produces 10 chronological points within expected bounds", () => {
  const weather = buildEffectiveWeather(
    { type: "sunny", high: 21, low: 9, rain: 10, humidity: 45, wind: 2.0, uv: 4 }
  );
  const pts = generateHourlyPoints(weather);
  assert.equal(pts.length, 10);
  assert.equal(pts[0].hour, "06:00");
  assert.equal(pts[4].hour, "14:00");
  assert.ok(pts[4].temp >= pts[0].temp);
});

test("computeOutingAdvisory includes umbrella advice on high rain probability", () => {
  const rainyWeather = buildEffectiveWeather(
    { type: "rainy", high: 14, low: 9, rain: 85, humidity: 86, wind: 4.4, uv: 1 },
    "rainy"
  );
  const advice = computeOutingAdvisory(rainyWeather);
  assert.ok(advice.outfit.includes("傘"));
  assert.ok(advice.score < 70);
});

test("mapWmoCodeToType maps standard WMO weather codes correctly", () => {
  assert.equal(mapWmoCodeToType(0, 10), "sunny");
  assert.equal(mapWmoCodeToType(63, 12), "rainy");
  assert.equal(mapWmoCodeToType(73, 10), "snowy");
  assert.equal(mapWmoCodeToType(2, 30), "windy");
  assert.equal(mapWmoCodeToType(3, 12), "cloudy");
});
