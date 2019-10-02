// Node Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Project Dependencies
const routes = require('./routes');

const app = express();

// Access Database
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nedj3.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//app.use(cors({ origin: 'http://localhost:3333' }));
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../uploads')));
app.use(routes);

app.listen(3333);
