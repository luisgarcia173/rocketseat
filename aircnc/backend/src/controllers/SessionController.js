// index, show, store, update, destroy (avaiable methods)

const User = require('../models/User');

module.exports = {

  async store(req, res) { // async: used for async call
    //const email = req.body.email;
    const { email } = req.body;

    // Check existing user before create
    let user = await User.findOne({ email }); // await: ThreadSafe point

    if (!user) {
      user = await User.create({ email }); 
    }

    return res.json(user);
  }

};
