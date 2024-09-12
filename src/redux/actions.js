import { getCryptoMetrics } from '../api';

// Action to fetch cryptocurrency metrics
export const fetchMetrics = () => async (dispatch) => {
  dispatch({ type: 'FETCH_METRICS_REQUEST' });  // Dispatch request action to set loading state
  try {
    const response = await getCryptoMetrics();  // Fetch the metrics
    const { data } = response;  // Extract the 'data' array from the response object
    console.log('Fetched metrics:', data);  // Log the fetched metrics (data array) to console
    dispatch({ type: 'FETCH_METRICS_SUCCESS', payload: data });  // Dispatch success action with metrics data
  } catch (error) {
    console.error('Error fetching metrics:', error);  // Log error to console
    dispatch({ type: 'FETCH_METRICS_FAILURE', payload: error.message });  // Dispatch failure action with error message
  }
};
