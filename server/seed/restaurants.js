// seed/restaurants.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('../models/Restaurant');

dotenv.config();

const seedRestaurants = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dummyData = [
    {
      ownerId: 'demo-owner-1',
      title: 'The Spice Kitchen',
      address: '123 Masala Lane, Hyderabad',
      mainImg: 'https://source.unsplash.com/featured/?restaurant,indian',
      menu: []
    },
    {
      ownerId: 'demo-owner-2',
      title: 'Burger Buzz',
      address: '456 Bun Street, Bangalore',
      mainImg: 'https://source.unsplash.com/featured/?burger,restaurant',
      menu: []
    },
    {
      ownerId: 'demo-owner-3',
      title: 'Sushi Express',
      address: '789 Wasabi Road, Delhi',
      mainImg: 'https://source.unsplash.com/featured/?sushi,food',
      menu: []
    }
  ];

  try {
    await Restaurant.deleteMany(); // clear previous restaurants
    await Restaurant.insertMany(dummyData);
    console.log('✅ Restaurants seeded successfully!');
  } catch (err) {
    console.error('❌ Failed to seed restaurants:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedRestaurants();
