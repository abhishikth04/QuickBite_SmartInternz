// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>QuickBite 🍔</Link>
      </div>

      {isMobile ? (
        <>
          <div onClick={() => setMenuOpen(!menuOpen)} style={styles.burger}>
            ☰
          </div>
          {menuOpen && (
            <div style={styles.mobileMenu}>
              <input
                type="text"
                placeholder="Search food or restaurants..."
                style={styles.searchInput}
              />

              <Link to="/menu" style={styles.link}>Menu</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" style={{ ...styles.link, color: '#2a9d8f' }}>
                    👤 {user.name}
                  </Link>
                  <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" style={styles.link}>Login</Link>
                  <Link to="/signup" style={styles.link}>Signup</Link>
                </>
              )}
              <Link to="/cart" style={styles.link}>🛒</Link>
            </div>
          )}
        </>
      ) : (
        <div style={styles.right}>
          <input
            type="text"
            placeholder="Search food or restaurants..."
            style={styles.searchInput}
          />

          <Link to="/menu" style={styles.link}>Menu</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{ ...styles.link, color: '#2a9d8f' }}>
                👤 {user.name}
              </Link>
              <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.link}>Signup</Link>
            </>
          )}
          <Link to="/cart" style={styles.cart}>🛒</Link>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'white',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: '#e63946',
    textDecoration: 'none',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '2px solid #ddd',
    fontSize: '1rem',
    maxWidth: '220px',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '650',
    fontSize: '18px',
  },
  logoutBtn: {
    background: 'transparent',
    border: 'none',
    color: '#e63946',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
  },
  cart: {
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
  burger: {
    fontSize: '2rem',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '10px',
    marginTop: '10px',
  },
};

export default Navbar;
