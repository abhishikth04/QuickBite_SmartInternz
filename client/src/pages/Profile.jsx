// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
        //console.log("User ID:", user?._id);

      if (!user) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/${user._id}`);
        setOrders(res.data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🍽️ {user?.name}'s Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div style={styles.orderList}>
          {orders.map((order, index) => (
            <div key={index} style={styles.card}>
              <h4>{order.foodItemName}</h4>
              <p>Qty: {order.quantity}</p>
              <p>Price: ₹{order.price}</p>
              <p>Restaurant: {order.restaurantName}</p>
              <p>Date: {order.orderDate}</p>
              <p>Status: {order.orderStatus}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#e63946',
    marginBottom: '1.5rem',
  },
  orderList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
  },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};

export default Profile;
