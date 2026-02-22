const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

app.use(cookieParser());
app.use(express.json());

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

// Endpoint ejemplo
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});