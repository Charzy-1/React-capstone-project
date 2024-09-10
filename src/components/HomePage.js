import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetrics } from '../redux/actions';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { metrics, loading, error } = useSelector(state => state.metrics);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchMetrics('cryptos'));
  }, [dispatch]);

  const filteredCoins = metrics.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1 className="hero-title">Your best Crypto's market tracker option</h1>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by coin name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="coins-grid">
        {filteredCoins.map((coin) => (
          <Link to={`/coin/${coin.symbol}`} key={coin.symbol}>
            <div className="coin-card">
              <h2 className="coin-name">{coin.name}</h2>
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-price">{coin.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
