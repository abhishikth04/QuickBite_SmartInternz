const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const { name, email, password, usertype } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      usertype,
      approval: usertype === 'restaurant' ? 'pending' : 'approved'
    });

    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check approval
    if (user.usertype === 'restaurant' && user.approval !== 'approved') {
      return res.status(403).json({ message: 'Restaurant not approved yet' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token
    const token = jwt.sign(
      { id: user._id, usertype: user.usertype },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // ✅ THIS IS THE IMPORTANT FIX: include 'usertype'
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        usertype: user.usertype // ✅ this must be present
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});

router.get('/admin/restaurants', async (req, res) => {
  try {
    const restaurants = await User.find({ usertype: 'restaurant' });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch restaurants' });
  }
});

// ✅ Approve/Reject restaurant
router.patch('/admin/restaurant/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { approval } = req.body;

    const updated = await User.findByIdAndUpdate(id, { approval }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update approval status' });
  }
});

module.exports = router;
