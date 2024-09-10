/* import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetrics } from '../redux/actions';
import { Link } from 'react-router-dom';
import './styles/HomePage.css'; 

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

export default HomePage; */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetrics } from '../redux/actions';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { metrics, loading, error } = useSelector(state => state.metrics || {});
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchMetrics('cryptos'));
    // Log the dispatch call to ensure action is being triggered
    console.log('Fetching data...');
  }, [dispatch]);

  useEffect(() => {
    // Log the fetched data
    if (metrics && metrics.length > 0) {
      console.log('Fetched metrics:', metrics);
    }
  }, [metrics]);

  // Safeguard: Ensure `metrics` is defined and is an array before filtering
  const filteredCoins = Array.isArray(metrics)
    ? metrics.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className='herosection-text'>
          <h1 className="hero-title">Your best Crypto's market tracker option</h1>
          <p>Check and discover more than +8000 coins with their respective statistics</p>
        </div>
        <img src="/images/BTC-removebg-preview.png" alt="Bitcoin" />
      </div>
      <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by coin name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="coins-grid">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => (
            <Link to={`/coin/${coin.symbol}`} key={coin.symbol}>
              <div className="coin-card">
                <h2 className="coin-name">{coin.name}</h2>
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-price">{coin.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No coins found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

