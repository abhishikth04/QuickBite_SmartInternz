const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  itemImg: String,
  category: String, // veg / non-veg / beverage
  menuCategory: String,
  restaurantId: String,
  price: Number,
  discount: Number,
  rating: Number
});

module.exports = mongoose.model('foodItem', foodItemSchema);
