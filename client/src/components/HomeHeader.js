// src/components/HomeHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: '#fff3f3',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ fontSize: '1.5rem', color: '#e63946' }}>🍽️ QuickBite</h1>

      <Link to="/cart">
        <button style={{
          backgroundColor: '#e63946',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          View Cart 🛒
        </button>
      </Link>
    </div>
  );
};

export default HomeHeader;
