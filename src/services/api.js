import axios from 'axios';

const API_KEY = '01Z7c5B3F7AL2nar8u2qIMpy8vPtCmS2';  
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const getMetrics = async (type) => {
  try {
    const response = await axios.get(`${BASE_URL}/cryptocurrency/list?apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
