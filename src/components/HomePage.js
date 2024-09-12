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
    dispatch(fetchMetrics());
  }, [dispatch]);

  const filteredCoins = Array.isArray(metrics)
    ? metrics.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const imageFilenames = ['coin1.jpg', 'Coin2.jpg', 'coin3.jpg'];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    return imageFilenames[randomIndex];
  };

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
                <div className="coin-image">
                  <img 
                    src={`/images/coins/${getRandomImage()}`}  // Use the function to get a random image
                    alt={`${coin.name} logo`} 
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src='/images/default-crypto-icon.png';  // Use a default image if the random image is missing
                    }} 
                  />
                </div>
                <div className="coin-info">
                  <h2 className="coin-name">{coin.name}</h2>
                  <p className="coin-symbol">{coin.symbol}</p>
                  <p className="coin-rank">#{coin.rank}</p>
                  <p className="coin-price">${parseFloat(coin.price_usd).toFixed(2)}</p>
                </div>
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
