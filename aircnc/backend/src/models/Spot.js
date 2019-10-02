const mongoose = require('mongoose');

// Model Structure
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Expose Schema
module.exports = mongoose.model('Spot', SpotSchema);