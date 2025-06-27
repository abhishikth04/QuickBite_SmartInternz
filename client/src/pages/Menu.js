// src/pages/Menu.js
import React from 'react';
import { useCart } from '../context/CartContext';

const sampleMenu = [
  {
    _id: '1',
    title: 'Refreshing Beverage',
    price: 40,
    description: 'Cool and energizing summer drink.',
    itemImg: '/assets/food/beverage.jpg',
  },
  {
    _id: '2',
    title: 'Hyderabadi Biryani',
    price: 180,
    description: 'Spicy, flavorful, and royal.',
    itemImg: '/assets/food/biryani.jpg',
  },
  {
    _id: '3',
    title: 'Cheesy Burger',
    price: 120,
    description: 'Juicy patty with melting cheese.',
    itemImg: '/assets/food/burger.jpeg',
  },
  {
    _id: '4',
    title: 'Chinese Delight',
    price: 150,
    description: 'Noodles, Manchurian, and more.',
    itemImg: '/assets/food/chinese.jpeg',
  },
  {
    _id: '5',
    title: 'Desserts',
    price: 90,
    description: 'Sweet, soft, and satisfying.',
    itemImg: '/assets/food/desserts.jpg',
  },
  {
    _id: '6',
    title: 'Margherita Pizza',
    price: 160,
    description: 'Classic cheese burst pizza.',
    itemImg: '/assets/food/pizza.jpg',
  },
];

const Menu = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} added to cart`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🍴 Explore Our Menu</h2>
      <div style={styles.grid}>
        {sampleMenu.map(item => (
          <div key={item._id} style={styles.card}>
            <img src={item.itemImg} alt={item.title} style={styles.image} />
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.description}</p>
            <p style={styles.price}>₹{item.price}</p>
            <button style={styles.button} onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem 1rem',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    color: '#e63946',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  title: {
    padding: '0.8rem 1rem 0 1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  desc: {
    padding: '0.2rem 1rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  price: {
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#2a9d8f',
  },
  button: {
    margin: '1rem',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#e63946',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Menu;
