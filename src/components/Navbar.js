import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Ensure your CSS file is correctly imported

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="LeoExchange logo" className="logo-image" />
        <span className="logo-text">LeosExchange</span>
      </div>
      <div className="nav-links">
        <Link to="/coinpage" className="nav-link">Coin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
