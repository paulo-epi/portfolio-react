const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mail');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mail
app.post('/send-email', mailRoutes.post);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
