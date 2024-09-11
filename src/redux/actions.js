import { getCryptoMetrics } from '../api';

export const fetchMetrics = () => async (dispatch) => {
  dispatch({ type: 'FETCH_METRICS_REQUEST' });  // Add request action
  try {
    const metrics = await getCryptoMetrics();
    console.log('Fetched metrics:', metrics);  // Log the fetched metrics
    dispatch({ type: 'FETCH_METRICS_SUCCESS', payload: metrics });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    dispatch({ type: 'FETCH_METRICS_FAILURE', payload: error.message });
  }
};
