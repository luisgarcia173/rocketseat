// Node Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Server Dependencies
const socketio = require('socket.io');
const http = require('http');

// Project Dependencies
const routes = require('./routes');

// Access Database
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nedj3.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Cache config
const redis = require('redis');
const cache = redis.createClient({
  url: 'redis://redis-14406.c8.us-east-1-3.ec2.cloud.redislabs.com:14406',
  password: 'ItTIPc183lvwqrXyNELHmVGLvYB3e7z3'
});
cache.on('connect', () => { console.log('.:: Redis Ready ::.'); });
cache.on('error', (r) => { console.log('!!Redis Error!!', e); });

const app = express(); // Application
const server = http.Server(app); // HTTP Server Application
const io = socketio(server); // WebSocket provided on Server

// Intercept when user connected
io.on('connection', socket => {
  // socket.emit('hello', 'world'); // Send message
  // socket.on('omni', data => console.log(data)); // Receive
  //cache.set('teste', 'Luis');
  // cache.get('teste', (err, result) => {
  //   console.log(result);
  // });
  // cache.del('teste')

  const { user_id } = socket.handshake.query; // Retrieve user id from query parameter

  cache.set(JSON.stringify(user_id), socket.id);
});

// Let socket object available to other routes
app.use((req, res, next) => {
  req.io = io;
  req.cachedUsers = cache;

  return next();
});

//app.use(cors({ origin: 'http://localhost:3333' }));
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../uploads')));
app.use(routes);

//app.listen(3333);
server.listen(3333);
