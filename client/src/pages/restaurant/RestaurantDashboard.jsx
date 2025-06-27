// src/pages/restaurant/RestaurantDashboard.jsx
import React from 'react';
import { useUser } from '../../context/UserContext';

const RestaurantDashboard = () => {
  const { user } = useUser();

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#2a9d8f' }}>🍽️ Hello, {user?.name}</h2>
      <p>Start adding or editing food items. View your restaurant’s orders.</p>
    </div>
  );
};

export default RestaurantDashboard;
