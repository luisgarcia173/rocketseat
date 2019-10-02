const mongoose = require('mongoose');

// Model Structure
const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

// Expose Schema
module.exports = mongoose.model('Booking', BookingSchema);