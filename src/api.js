import axios from 'axios';

const BASE_URL = 'https://api.coinlore.net/api/tickers/?start=100&limit=100';

// Function to get cryptocurrency metrics (list of cryptocurrencies)
export const getCryptoMetrics = () => axios.get(BASE_URL)
  .then((response) => response.data)
  .catch((error) => {
    throw error; // Re-throwing the error is necessary
  });

// Function to search for cryptocurrencies by name
// Note: Coinlore API doesn't support searching by name directly
// We can filter the response manually for matching names
export const searchCryptocurrencies = async (query) => {
  const response = await getCryptoMetrics();
  return response.data.filter((crypto) => crypto.name.toLowerCase().includes(query.toLowerCase()));
};

// Function to get a cryptocurrency quote by symbol (Coinlore doesn't have direct symbol lookup)
export const getCryptoQuote = async (symbol) => {
  const response = await getCryptoMetrics();
  return response.data.find((crypto) => crypto.symbol === symbol.toUpperCase());
};
