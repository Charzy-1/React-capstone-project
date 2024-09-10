import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetrics } from '../redux/actions';
import './styles/CoinPage.css'; 

const CoinPage = () => {
  const { coin } = useParams();
  const dispatch = useDispatch();
  const { metrics, loading, error } = useSelector(state => state.metrics);

  useEffect(() => {
    dispatch(fetchMetrics(coin));
  }, [dispatch, coin]);

  const coinMetric = metrics.find((metric) => metric.symbol === coin);

  return (
    <div className="coin-page-wrapper">
      {loading ? <p>Loading...</p> : (
        <div className="coin-details">
          <h1 className="coin-title">{coinMetric?.name}</h1>
          <p className="coin-price">Price: {coinMetric?.price}</p>
          <p className="coin-stat">Market Cap: {coinMetric?.marketCap}</p>
          <p className="coin-stat">Volume: {coinMetric?.volume}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CoinPage;
