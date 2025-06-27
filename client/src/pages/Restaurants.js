// src/pages/Restaurants.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(err => console.error("Error fetching restaurants:", err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🍴 Famous Restaurants</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {restaurants.map((rest) => (
          <div key={rest._id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}>
            <img src={rest.mainImg} alt={rest.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{rest.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{rest.address}</p>
              <Link to={`/menu/${rest._id}`}>
                <button style={{
                  marginTop: '1rem',
                  padding: '10px 16px',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
