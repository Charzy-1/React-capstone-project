import { getMetrics } from '../services/api';

export const fetchMetrics = (type) => async (dispatch) => {
  dispatch({ type: 'FETCH_METRICS_REQUEST' });
  try {
    const data = await getMetrics(type);
    dispatch({ type: 'FETCH_METRICS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_METRICS_FAILURE', payload: error.message });
  }
};
