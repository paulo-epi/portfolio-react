const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mail');

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mail
app.post('/send-email', mailRoutes.post);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(process.env.PORT || 3001);
