const mongoose = require('mongoose');
const dotenv = require('dotenv');
const FoodItem = require('../models/FoodItem');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log('🗃️ Connected to MongoDB');

    // Optional: clear existing food items
    await FoodItem.deleteMany();

    const sampleFood = [
      {
        title: 'Veg Supreme Burger',
        description: 'Double patty with cheese and lettuce.',
        itemImg: 'https://raw.githubusercontent.com/harsha-vardhan-reddy-07/Food-Ordering-App-MERN/main/client/public/images/burger.png',
        category: 'veg',
        menuCategory: 'burger',
        restaurantId: 'r1',
        price: 120,
        discount: 10,
        rating: 4.3
      },
      {
        title: 'Spicy Chicken Pizza',
        description: 'Loaded with grilled chicken and jalapeños.',
        itemImg: 'https://raw.githubusercontent.com/harsha-vardhan-reddy-07/Food-Ordering-App-MERN/main/client/public/images/pizza.png',
        category: 'non-veg',
        menuCategory: 'pizza',
        restaurantId: 'r1',
        price: 299,
        discount: 15,
        rating: 4.7
      },
      {
        title: 'Cold Coffee',
        description: 'Chilled creamy blend with chocolate syrup.',
        itemImg: 'https://raw.githubusercontent.com/harsha-vardhan-reddy-07/Food-Ordering-App-MERN/main/client/public/images/coffee.png',
        category: 'beverage',
        menuCategory: 'drinks',
        restaurantId: 'r2',
        price: 90,
        discount: 5,
        rating: 4.1
      }
    ];

    await FoodItem.insertMany(sampleFood);
    console.log('✅ Sample food items inserted!');
    process.exit();
  })
  .catch(err => {
    console.error('❌ DB Connection failed:', err);
    process.exit(1);
  });
