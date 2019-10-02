const mongoose = require('mongoose');

// Model Structure
const UserSchema = new mongoose.Schema({
  email: String
});

// Expose Schema
module.exports = mongoose.model('User', UserSchema);