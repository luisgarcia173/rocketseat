// index, show, store, update, destroy (avaiable methods)

const Booking = require('../models/Booking');
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    let user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    // Send notification when a book is required
    req.cachedUsers.get(JSON.stringify(booking.spot.user), (err, ownerSocket) => { 
      if (ownerSocket) {
        req.io.to(ownerSocket).emit('booking_request', booking);
      }
    });

    return res.json(booking);
  }

};
