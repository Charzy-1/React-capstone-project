import axios from 'axios';

const BASE_URL = 'https://api.coinlore.net/api/tickers/?start=100&limit=100';

// Function to get cryptocurrency metrics (list of cryptocurrencies)
export const getCryptoMetrics = () => axios.get(BASE_URL)
  .then((response) => {
    console.log('Crypto Metrics Response:', response.data); // Log the response for debugging
    return response.data;
  })
  .catch((error) => {
    console.error('Error fetching crypto metrics:', error);
    throw error;
  });

// Function to search for cryptocurrencies by name
// Note: Coinlore API doesn't support searching by name directly
// We can filter the response manually for matching names
/* eslint-disable max-len */
export const searchCryptocurrencies = async (query) => {
  try {
    const response = await getCryptoMetrics();
    const filtered = response.data.filter((crypto) => crypto.name.toLowerCase().includes(query.toLowerCase()));
    console.log('Filtered Search Results:', filtered); // Log the filtered search results
    return filtered;
  } catch (error) {
    console.error('Error searching cryptocurrency:', error);
    throw error;
  }
};
/* eslint-enable max-len */

// Function to get a cryptocurrency quote by symbol (Coinlore doesn't have direct symbol lookup)
export const getCryptoQuote = async (symbol) => {
  try {
    const response = await getCryptoMetrics();
    const foundCrypto = response.data.find((crypto) => crypto.symbol === symbol.toUpperCase());
    console.log('Crypto Quote:', foundCrypto); // Log the found crypto quote
    return foundCrypto;
  } catch (error) {
    console.error('Error fetching crypto quote:', error);
    throw error;
  }
};
