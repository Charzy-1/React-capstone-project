import axios from 'axios';

const API_KEY = 'your_api_key';  // Replace this with your actual Financial Modelling Prep API key
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const getMetrics = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/cryptocurrency/list?apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
