import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="home-link">
          {/* Link to the homepage */}
          <img src="/images/logo.png" alt="Leoexchange logo" className="logo-image" />
          <span className="logo-text">Leo&apos;sExchange</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Coins</Link>
      </div>
    </nav>
  );
}

export default Navbar;
