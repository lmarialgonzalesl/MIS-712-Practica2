const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");

// nosemgrep: express-check-csurf-middleware-usage
// Justification: API REST stateless using JWT in Authorization header (no cookie-based sessions)
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) =>
  res.json({ status: "users-service OK" })
);

app.use("/", authRoutes);

module.exports = app;