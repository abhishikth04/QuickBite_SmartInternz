import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCart();

  const [form, setForm] = useState({
    name: 'Abhi',
    email: 'abhi@example.com',
    mobile: '',
    address: '',
    pincode: '',
    paymentMethod: 'Cash on Delivery',
  });

  const orderDate = new Date().toISOString().slice(0, 10);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!form.address || !form.mobile || !form.pincode) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      for (let item of cart) {
        await axios.post('http://localhost:5000/api/orders', {
          userId: '123456', // Replace with real userId
          ...form,
          restaurantId: item.restaurantId,
          restaurantName: item.restaurantName,
          foodItemId: item.foodItemId,
          foodItemName: item.foodItemName,
          foodItemImg: item.foodItemImg,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
          orderDate,
        });
      }

      alert('Order placed successfully!');
      clearCart();
    } catch (err) {
      console.error(err);
      alert('Failed to place order');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.empty}>No items in cart.</p>
      ) : (
        <>
          <div style={styles.cartList}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={item.foodItemImg || item.itemImg || '/assets/food/biryani.jpg'}
                  alt={item.foodItemName || item.title}
                  style={styles.image}
                />
                <div style={styles.details}>
                  <h4>{item.foodItemName || item.title}</h4>
                  <p style={styles.price}>₹{item.price} × {item.quantity}</p>
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(item._id || item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 style={styles.total}>Total: ₹{totalPrice}</h3>

          <div style={styles.formSection}>
            <h3>📦 Delivery Details</h3>
            <input
              type="text"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) => setForm({ ...form, pincode: e.target.value })}
              style={inputStyle}
            />
            <select
              value={form.paymentMethod}
              onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
              style={inputStyle}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Credit/Debit Card</option>
            </select>

            <button style={styles.orderBtn} onClick={handlePlaceOrder}>
              ✅ Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#e63946',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
  },
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    overflow: 'hidden',
  },
  image: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
  },
  details: {
    padding: '1rem',
    flex: 1,
  },
  price: {
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginTop: '0.5rem',
  },
  removeBtn: {
    marginTop: '0.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#e63946',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  total: {
    textAlign: 'right',
    marginTop: '1rem',
    fontSize: '1.3rem',
    color: '#333',
  },
  formSection: {
    marginTop: '2rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px',
  },
  orderBtn: {
    marginTop: '1rem',
    padding: '10px 20px',
    backgroundColor: '#2a9d8f',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

export default Cart;
