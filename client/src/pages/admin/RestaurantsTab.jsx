import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantsTab = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/admin/restaurants');
      setRestaurants(res.data);
    } catch (err) {
      console.error('Error fetching restaurants:', err);
    }
  };

  const handleApproval = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/auth/admin/restaurant/${id}`, { approval: status });
      fetchRestaurants(); // Refresh the list
    } catch (err) {
      console.error('Error updating approval:', err);
    }
  };

  return (
    <div>
      <h3>Pending Restaurant Approvals</h3>
      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
       <table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>Name</th>
      <th style={styles.th}>Email</th>
      <th style={styles.th}>Approval</th>
      <th style={styles.th}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {restaurants.map((rest) => (
      <tr key={rest._id}>
        <td style={styles.td}>{rest.name}</td>
        <td style={styles.td}>{rest.email}</td>
        <td style={styles.td}>{rest.approval}</td>
        <td style={styles.td}>
          {rest.approval !== 'approved' && (
            <button onClick={() => handleApproval(rest._id, 'approved')} style={styles.btnApprove}>
              Approve
            </button>
          )}
          {rest.approval === 'approved' && (
            <button onClick={() => handleApproval(rest._id, 'rejected')} style={styles.btnReject}>
              Reject
            </button>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '2rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    textAlign: 'left',
    padding: '12px 16px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    fontWeight: 'bold',
  },
  td: {
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
  },
  btnApprove: {
    backgroundColor: '#2a9d8f',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '8px',
  },
  btnReject: {
    backgroundColor: '#e63946',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default RestaurantsTab;
