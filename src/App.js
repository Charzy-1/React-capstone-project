import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage';
import CoinDetailPage from './components/CoinPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:symbol" element={<CoinDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
