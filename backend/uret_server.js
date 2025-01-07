import "dotenv/config";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { serveLimit } from "./rateLimiters/serveLimiter.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json({ limit: "10mb" }));

app.get("/api/health", (req, res) => {
  res.send("Hello, Express!");
});

app.use(express.static(join(__dirname, "dist")));

app.use("*", serveLimit, (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
