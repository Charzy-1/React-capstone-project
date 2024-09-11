import axios from 'axios';

const BASE_URL = 'https://financialmodelingprep.com/api/v3';
const API_KEY = '01Z7c5B3F7AL2nar8u2qIMpy8vPtCmS2';  
// Function to get cryptocurrency quotes (e.g., Bitcoin, Ethereum)
export const getCryptoQuote = (symbol) => {
  return axios.get(`${BASE_URL}/cryptocurrencies/${symbol}?apikey=${API_KEY}`)
    .then(response => {
      console.log('Crypto Quote Response:', response.data);  // Log the response for debugging
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching crypto quote:', error);
      throw error;
    });
};

// Function to get cryptocurrency metrics (list of cryptocurrencies)
export const getCryptoMetrics = () => {
  return axios.get(`${BASE_URL}/cryptocurrencies?apikey=${API_KEY}`)
    .then(response => {
      console.log('Crypto Metrics Response:', response.data);  // Log the response for debugging
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching crypto metrics:', error);
      throw error;
    });
};

// Function to search for cryptocurrencies by name
export const searchCryptocurrencies = (query) => {
  return axios.get(`${BASE_URL}/search?query=${query}&apikey=${API_KEY}`)
    .then(response => {
      console.log('Search Response:', response.data);  // Log the response for debugging
      return response.data;
    })
    .catch(error => {
      console.error('Error searching cryptocurrency:', error);
      throw error;
    });
};
