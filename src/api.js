import axios from 'axios';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';
const API_KEY = process.env.REACT_APP_API_KEY;

// Function to get cryptocurrency quotes (e.g., Bitcoin, Ethereum)
export const getCryptoQuote = (symbol) => {
  return axios.get(`${BASE_URL}/cryptocurrency/${symbol}?apikey=${API_KEY}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching crypto quote:', error);
      throw error;
    });
};

// Function to get cryptocurrency metrics
export const getCryptoMetrics = () => {
  return axios.get(`${BASE_URL}/cryptocurrencies?apikey=${API_KEY}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching crypto metrics:', error);
      throw error;
    });
};

// Function to search for cryptocurrencies by name
export const searchCryptocurrencies = (query) => {
  return axios.get(`${BASE_URL}/search-cryptocurrency?query=${query}&apikey=${API_KEY}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error searching cryptocurrency:', error);
      throw error;
    });
};
