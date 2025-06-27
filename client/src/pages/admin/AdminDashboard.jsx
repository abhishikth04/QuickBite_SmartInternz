import React, { useState } from 'react';
import UsersTab from './UsersTab';
import RestaurantsTab from './RestaurantsTab';
import OrdersTab from './OrdersTab';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderTab = () => {
    switch (activeTab) {
      case 'users':
        return <UsersTab />;
      case 'restaurants':
        return <RestaurantsTab />;
      case 'orders':
        return <OrdersTab />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <div style={styles.tabs}>
        <button onClick={() => setActiveTab('users')} style={styles.tabBtn}>Users</button>
        <button onClick={() => setActiveTab('restaurants')} style={styles.tabBtn}>Restaurants</button>
        <button onClick={() => setActiveTab('orders')} style={styles.tabBtn}>Orders</button>
      </div>
      <div style={styles.content}>
        {renderTab()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: 'black'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'white'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  tabBtn: {
    padding: '10px 20px',
    backgroundColor: '#2a9d8f',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  content: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default AdminDashboard;
