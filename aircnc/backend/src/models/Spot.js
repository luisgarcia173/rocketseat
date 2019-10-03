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
}, {
  toJSON: {
    virtuals: true,
  }
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://192.168.0.12:3333/files/${this.thumbnail}`
  //return `http://localhost:3333/files/${this.thumbnail}`
});

// Expose Schema
module.exports = mongoose.model('Spot', SpotSchema);