const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  locations: [],
  points: {type: Number, default: 0},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
