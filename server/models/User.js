const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  usertype: { type: String, enum: ['user', 'restaurant', 'admin'], default: 'user' },
  approval: { type: String, default: 'approved' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
