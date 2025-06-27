const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// @route   GET /api/food
// @desc    Get all food items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await FoodItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching food items' });
  }
});

module.exports = router;
