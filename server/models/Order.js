const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  mobile: String,
  address: String,
  pincode: String,
  restaurantId: String,
  restaurantName: String,
  foodItemId: String,
  foodItemName: String,
  foodItemImg: String,
  quantity: Number,
  price: Number,
  discount: Number,
  paymentMethod: String,
  orderDate: String,
  orderStatus: { type: String, default: 'order placed' }
});

module.exports = mongoose.model('orders', orderSchema);
