// index, show, store, update, destroy (avaiable methods)

const Booking = require('../models/Booking');

module.exports = {

  async store(req, res) {
    const { booking_id } = req.params;

    let booking = await Booking.findById(booking_id).populate('spot');

    booking.approved = true;

    await booking.save();

    // Send notification when a book is required
    req.cachedUsers.get(JSON.stringify(booking.user), (err, bookingOwnerSocket) => { 
      if (bookingOwnerSocket) {
        req.io.to(bookingOwnerSocket).emit('booking_response', booking);
      }
    });

    return res.json(booking);
  }

};
