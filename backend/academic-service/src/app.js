/* nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage */

const express = require("express");
const cors = require("cors");
const coursesRoutes = require("./routes/courses.routes");

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "academic-service OK" });
});

app.use("/", coursesRoutes);

module.exports = app;