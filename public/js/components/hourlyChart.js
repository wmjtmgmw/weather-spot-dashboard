import { formatTemp } from "../engine/recommendation.js";

export function renderHourlyChart({
  svgEl,
  readoutEl,
  points,
  selectedHourIndex,
  unit,
  onSelectHour
}) {
  const width = 640;
  const height = 210;
  const padL = 36;
  const padR = 24;
  const padT = 28;
  const padB = 34;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const temps = points.map((p) => p.temp);
  const minT = Math.floor(Math.min(...temps) - 2);
  const maxT = Math.ceil(Math.max(...temps) + 2);
  const tRange = Math.max(4, maxT - minT);

  const xAt = (i) => padL + (plotW * i) / (points.length - 1);
  const yTemp = (t) => padT + plotH - ((t - minT) / tRange) * plotH;
  const yRain = (r) => padT + plotH - (r / 100) * (plotH * 0.55);

  svgEl.setAttribute("viewBox", `0 0 ${width} ${height}`);

  let gridHtml = "";
  for (let g = 0; g <= 2; g++) {
    const y = padT + (plotH * g) / 2;
    gridHtml += `<line x1="${padL}" y1="${y}" x2="${width - padR}" y2="${y}" stroke="var(--border)" stroke-dasharray="3 3" stroke-width="1" />`;
  }

  const barW = 18;
  let barsHtml = "";
  points.forEach((p, i) => {
    const cx = xAt(i);
    const barTop = yRain(p.rain);
    const barH = Math.max(2, padT + plotH - barTop);
    barsHtml += `<rect x="${cx - barW / 2}" y="${barTop}" width="${barW}" height="${barH}" rx="4" fill="var(--chart-rain)" opacity="0.28" />`;
  });

  const coords = points.map((p, i) => ({ x: xAt(i), y: yTemp(p.temp) }));
  let lineD = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const xc = (coords[i].x + coords[i + 1].x) / 2;
    lineD += ` Q ${coords[i].x} ${coords[i].y}, ${xc} ${(coords[i].y + coords[i + 1].y) / 2}`;
  }
  lineD += ` T ${coords[coords.length - 1].x} ${coords[coords.length - 1].y}`;

  const areaD = `${lineD} L ${coords[coords.length - 1].x} ${padT + plotH} L ${coords[0].x} ${padT + plotH} Z`;

  let pointsHtml = "";
  points.forEach((p, i) => {
    const cx = coords[i].x;
    const cy = coords[i].y;
    const isSelected = i === selectedHourIndex;
    pointsHtml += `
      <g class="hourly-pt" data-index="${i}" style="cursor: pointer;">
        <rect x="${cx - 24}" y="${padT - 10}" width="48" height="${plotH + 34}" fill="transparent" />
        ${isSelected ? `<line x1="${cx}" y1="${padT}" x2="${cx}" y2="${padT + plotH}" stroke="var(--primary)" stroke-width="1.5" stroke-dasharray="3 2" />` : ""}
        <circle cx="${cx}" cy="${cy}" r="${isSelected ? 6 : 4}" fill="var(--surface-card)" stroke="var(--chart-temp)" stroke-width="${isSelected ? 3 : 2.2}" />
        <text x="${cx}" y="${cy - 10}" text-anchor="middle" font-size="12" font-weight="${isSelected ? "700" : "600"}" fill="var(--text-main)" class="tabular-nums">${formatTemp(p.temp, unit, false)}</text>
        <text x="${cx}" y="${height - 10}" text-anchor="middle" font-size="12" font-weight="${isSelected ? "700" : "500"}" fill="${isSelected ? "var(--primary)" : "var(--text-muted)"}" class="tabular-nums">${p.hour}</text>
      </g>
    `;
  });

  svgEl.innerHTML = `
    <defs>
      <linearGradient id="tempAreaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--chart-temp)" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="var(--chart-temp)" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    ${gridHtml}
    ${barsHtml}
    <path d="${areaD}" fill="url(#tempAreaGrad)" />
    <path d="${lineD}" fill="none" stroke="var(--chart-temp)" stroke-width="2.6" stroke-linecap="round" />
    ${pointsHtml}
  `;

  svgEl.querySelectorAll(".hourly-pt").forEach((el) => {
    const idx = Number(el.getAttribute("data-index"));
    const handler = () => onSelectHour(idx);
    el.addEventListener("mouseenter", handler);
    el.addEventListener("click", handler);
  });

  const activePt = points[selectedHourIndex] || points[0];
  const rainText = activePt.rain >= 60 ? "傘が必要になりやすい時間帯" : activePt.rain >= 30 ? "にわか雨に注意" : "雨の心配ほぼなし";
  readoutEl.innerHTML = `
    <span class="muted"><strong>${activePt.hour}</strong> の予測 • ${rainText}</span>
    <strong class="tabular-nums">気温 ${formatTemp(activePt.temp, unit)} ／ 降水確率 ${activePt.rain}%</strong>
  `;
}
