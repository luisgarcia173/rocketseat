// Node Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Project Dependencies
const routes = require('./routes');

const app = express();

// Access Database
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nedj3.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
