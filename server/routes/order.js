const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place Order
router.post('/', async (req, res) => {
  try {
  await axios.post('http://localhost:5000/api/orders', orderData);
  alert('Order placed!');
  return; // ✅ stop here, don't go to catch
} catch (err) {
  console.error(err);
  alert('Order failed');
}
});

// (Optional: Get all orders for a user)
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
