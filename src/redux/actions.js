import { getCryptoMetrics } from '../api';

// Action to fetch cryptocurrency metrics
export const fetchMetrics = () => async (dispatch) => {
  dispatch({ type: 'FETCH_METRICS_REQUEST' });  // Dispatch request action to set loading state
  try {
    const metrics = await getCryptoMetrics();  // Fetch the metrics
    console.log('Fetched metrics:', metrics);  // Log the fetched metrics to console
    dispatch({ type: 'FETCH_METRICS_SUCCESS', payload: metrics });  // Dispatch success action with metrics
  } catch (error) {
    console.error('Error fetching metrics:', error);  // Log error to console
    dispatch({ type: 'FETCH_METRICS_FAILURE', payload: error.message });  // Dispatch failure action with error message
  }
};
