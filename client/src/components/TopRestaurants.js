// src/components/TopRestaurants.jsx
import React from 'react';
import './TopRestaurants.css';

const restaurants = [
  {
    name: 'KFC',
    image: '/assets/restaurants/kfc.jpg',
    tagline: 'Crispy & Juicy Chicken',
  },
  {
    name: 'Domino\'s Pizza',
    image: '/assets/restaurants/dominos.jpeg',
    tagline: 'Freshly Baked Every Time',
  },
  {
    name: 'Burger King',
    image: '/assets/restaurants/burgerking.jpeg',
    tagline: 'Flame-Grilled Goodness',
  },
  {
    name: 'Subway',
    image: '/assets/restaurants/subway.jpg',
    tagline: 'Eat Fresh, Stay Fit',
  },
  {
    name: 'Pizza Hut',
    image: '/assets/restaurants/pizzahut.jpeg',
    tagline: 'Mouth-Watering Pizzas',
  },
  {
    name: 'McDonald\'s',
    image: '/assets/restaurants/mcdonalds.jpeg',
    tagline: 'I’m Lovin’ It',
  },
  {
    name: 'IceBerg',
    image: '/assets/restaurants/iceberg.jpg',
    tagline: 'Creamy Gelato IceCreams',
  },
  {
    name: 'Bawarchi Biryani',
    image: '/assets/restaurants/bawarchi.jpeg',
    tagline: 'Biryanis, Tandooris and More',
  },
  {
    name: 'Belgian Waffle Co.',
    image: '/assets/restaurants/begian.jpeg',
    tagline: 'Authentic Belgian Waffles',
  },
  {
    name: 'Kwality Walls',
    image: '/assets/restaurants/kwality.png',
    tagline: 'Guilt free IceCreams',
  },
];

const TopRestaurants = () => {
  return (
    <section className="restaurant-section">
      <h2>Top Restaurant Chains</h2>
      <div className="restaurant-grid">
        {restaurants.map((rest, index) => (
          <div className="restaurant-card" key={index}>
            <img src={rest.image} alt={rest.name} />
            <h3>{rest.name}</h3>
            <p>{rest.tagline}</p>
            <button onClick={() => window.location.href = '/menu'}>View Menu</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRestaurants;
