import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoinPage from './components/CoinPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:coin" element={<CoinPage />} />
      </Routes>
    </Router>
  );
};

export default App;
