const {User} = require('../db');

async function postUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err.message)
}
}

module.exports = {postUser};