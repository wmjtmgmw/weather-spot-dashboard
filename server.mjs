import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");
const PORT = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(body);
}

async function handleApiWeather(reqUrl, res) {
  const lat = Number(reqUrl.searchParams.get("lat"));
  const lon = Number(reqUrl.searchParams.get("lon"));

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return sendJson(res, 400, { error: "Invalid lat/lon query parameters" });
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    const upstream =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max` +
      `&timezone=Asia%2FTokyo&forecast_days=7`;

    const response = await fetch(upstream, { signal: controller.signal });
    clearTimeout(timer);

    if (!response.ok) {
      return sendJson(res, 502, {
        fallback: true,
        reason: `Upstream returned ${response.status}`
      });
    }

    const data = await response.json();
    return sendJson(res, 200, { fallback: false, data });
  } catch (err) {
    return sendJson(res, 200, {
      fallback: true,
      reason: err instanceof Error ? err.message : "Network unavailable"
    });
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const reqUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

    if (reqUrl.pathname === "/api/health") {
      return sendJson(res, 200, { status: "ok", uptime: process.uptime() });
    }

    if (reqUrl.pathname === "/api/weather") {
      return await handleApiWeather(reqUrl, res);
    }

    // Static file serving under PUBLIC_DIR
    let relPath = decodeURIComponent(reqUrl.pathname);
    if (relPath === "/") relPath = "/index.html";

    const resolvedPath = path.resolve(PUBLIC_DIR, `.${relPath}`);
    if (!resolvedPath.startsWith(PUBLIC_DIR)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Forbidden");
    }

    let filePath = resolvedPath;
    try {
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        filePath = path.join(filePath, "index.html");
      }
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not Found");
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const content = await fs.readFile(filePath);

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache"
    });
    res.end(content);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Weather Spot Dashboard server running at http://localhost:${PORT}`);
});
