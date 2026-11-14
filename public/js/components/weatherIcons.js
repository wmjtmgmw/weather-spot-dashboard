export function renderWeatherSvg(type, className = "weather-svg") {
  if (type === "sunny") {
    return `<svg class="${className}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="13" fill="#F59E0B"/>
      <g stroke="#F59E0B" stroke-width="3.2" stroke-linecap="round">
        <line x1="32" y1="6" x2="32" y2="12"/>
        <line x1="32" y1="52" x2="32" y2="58"/>
        <line x1="6" y1="32" x2="12" y2="32"/>
        <line x1="52" y1="32" x2="58" y2="32"/>
        <line x1="13.6" y1="13.6" x2="17.8" y2="17.8"/>
        <line x1="46.2" y1="46.2" x2="50.4" y2="50.4"/>
        <line x1="50.4" y1="13.6" x2="46.2" y2="17.8"/>
        <line x1="17.8" y1="46.2" x2="13.6" y2="50.4"/>
      </g>
    </svg>`;
  }
  if (type === "cloudy") {
    return `<svg class="${className}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="24" cy="23" r="9" fill="#F59E0B"/>
      <path d="M22 46h23a9 9 0 0 0 1.4-17.9A13 13 0 0 0 21.3 25 10.5 10.5 0 0 0 22 46Z" fill="#94A3B8" stroke="#64748B" stroke-width="2"/>
    </svg>`;
  }
  if (type === "rainy") {
    return `<svg class="${className}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M18 39h27a8.5 8.5 0 0 0 1.3-16.9A12.5 12.5 0 0 0 22.1 19a10 10 0 0 0-4.1 20Z" fill="#64748B"/>
      <g stroke="#3B82F6" stroke-width="3" stroke-linecap="round">
        <line x1="22" y1="45" x2="19" y2="54"/>
        <line x1="32" y1="45" x2="29" y2="54"/>
        <line x1="42" y1="45" x2="39" y2="54"/>
      </g>
    </svg>`;
  }
  if (type === "snowy") {
    return `<svg class="${className}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M18 37h27a8.5 8.5 0 0 0 1.3-16.9A12.5 12.5 0 0 0 22.1 17a10 10 0 0 0-4.1 20Z" fill="#94A3B8"/>
      <g fill="#38BDF8">
        <circle cx="21" cy="46" r="2.8"/>
        <circle cx="32" cy="51" r="2.8"/>
        <circle cx="43" cy="46" r="2.8"/>
        <circle cx="26" cy="55" r="2.2"/>
        <circle cx="38" cy="55" r="2.2"/>
      </g>
    </svg>`;
  }
  return `<svg class="${className}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <g stroke="#0EA5E9" stroke-width="3.2" stroke-linecap="round">
      <path d="M10 24h30a6 6 0 1 0-6-6"/>
      <path d="M8 34h40a6 6 0 1 1-6 6"/>
      <path d="M14 44h22a5 5 0 1 1-5 5"/>
    </g>
  </svg>`;
}
