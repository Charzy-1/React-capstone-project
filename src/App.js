import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoinDetailPage from './components/CoinPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coin/:symbol" element={<CoinDetailPage />} />
    </Routes>
  );
};

export default App;
