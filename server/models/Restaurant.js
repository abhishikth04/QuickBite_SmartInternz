const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  ownerId: String,
  title: String,
  address: String,
  mainImg: String,
  menu: { type: Array, default: [] }
});

module.exports = mongoose.model('restaurant', restaurantSchema);
