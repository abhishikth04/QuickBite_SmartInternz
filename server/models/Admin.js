const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  categories: Array,
  promotedRestaurants: []
});

module.exports = mongoose.model('admin', adminSchema);
