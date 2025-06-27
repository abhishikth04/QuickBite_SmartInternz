const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const foodRoutes = require('./routes/food');
app.use('/api/food', foodRoutes);

const restaurantRoutes = require('./routes/restaurants');
app.use('/api/restaurants', restaurantRoutes);

const orderRoutes = require('./routes/order');
app.use('/api/orders', orderRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('SB Foods API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});
