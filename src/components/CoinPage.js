import React, { useState, useEffect } from 'react';
import { getCryptoQuote } from '../api';

const CoinPage = ({ match }) => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const symbol = match.params.symbol; // Assuming you're passing the coin symbol via React Router

  useEffect(() => {
  const fetchQuote = async () => {
    try {
      const data = await getCryptoQuote(symbol);  // Fetching cryptocurrency quote
      console.log('API Data:', data);  // Check API response in the console
      setQuote(data);
    } catch (error) {
      setError('Error fetching quote');
    }
  };

  if (symbol) {
    fetchQuote();
  }
}, [symbol]);

  return (
    <div>
      {error && <p>{error}</p>}
      {quote ? (
        <div>
          <h1>{quote[0]?.symbol}</h1>  {/* Display coin symbol */}
          <p>Price: {quote[0]?.price}</p>  {/* Display coin price */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinPage;
