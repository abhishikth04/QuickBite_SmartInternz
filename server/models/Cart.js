const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String,
  restaurantId: String,
  restaurantName: String,
  foodItemId: String,
  foodItemName: String,
  foodItemImg: String,
  quantity: Number,
  price: Number,
  discount: Number
});

module.exports = mongoose.model('cart', cartSchema);
