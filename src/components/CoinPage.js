import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/CoinPage.css';

const CoinPage = () => {
  const location = useLocation();
  const { image, coinData } = location.state || {}; // Destructure the state passed from HomePage

  if (!coinData) {
    return <p>Error: Coin data not available</p>;
  }

  return (
    <div className="coin-page-container">
      {/* Magnified Image */}
      <div className="coin-image-container">
        <img
          src={`/images/coins/${image}`}
          alt={`${coinData.name} logo`}
          className="coin-image-magnified"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default-crypto-icon.png'; // Fallback image
          }}
        />
      </div>

      {/* Coin Name and Price */}
      <div className="coin-main-info">
        <h1 className="coin-name">{coinData.name}</h1>
        <h2 className="coin-price">
          $
          {parseFloat(coinData.price_usd).toFixed(2)}
          {' '}
          USD
        </h2>
        <span className="coin-symbol">
          (
          {coinData.symbol}
          )
        </span>
      </div>

      {/* Coin Stats Section */}
      <div className="coin-stats">
        <h3>Current Stats</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span>% Change (24h):</span>
            <span>
              {coinData.percent_change_24h}
              %
            </span>
          </div>
          <div className="stat-item">
            <span>% Change (1h):</span>
            <span>
              {coinData.percent_change_1h}
              %
            </span>
          </div>
          <div className="stat-item">
            <span>% Change (7d):</span>
            <span>
              {coinData.percent_change_7d}
              %
            </span>
          </div>
          <div className="stat-item">
            <span>Market Cap $:</span>
            <span>{coinData.market_cap_usd}</span>
          </div>
          <div className="stat-item">
            <span>Volume (24h):</span>
            <span>{coinData.volume_24h_usd}</span>
          </div>
          <div className="stat-item">
            <span>Coin Supply:</span>
            <span>{coinData.circulating_supply}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
