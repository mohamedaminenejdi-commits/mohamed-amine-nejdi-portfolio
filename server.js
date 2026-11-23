// A tiny static web server built with Node.js core modules only.
// It serves this portfolio locally; it does not store messages or participant data.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "content-type": "text/plain; charset=utf-8", allow: "GET, HEAD" });
    return res.end("Method not allowed");
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  } catch {
    res.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    return res.end("Bad request");
  }

  if (pathname === "/") pathname = "/index.html";
  const filePath = path.resolve(ROOT, `.${pathname}`);
  if (!filePath.startsWith(`${ROOT}${path.sep}`) && filePath !== path.join(ROOT, "index.html")) {
    res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(error.code === "ENOENT" ? 404 : 500, { "content-type": "text/plain; charset=utf-8" });
      return res.end(error.code === "ENOENT" ? "Not found" : "Server error");
    }

    const headers = {
      "content-type": MIME_TYPES[path.extname(filePath)] || "application/octet-stream",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
      "cache-control": "no-cache"
    };
    res.writeHead(200, headers);
    if (req.method === "HEAD") return res.end();
    res.end(content);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio is running at http://localhost:${PORT}`);
});
