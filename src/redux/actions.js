/*import { getMetrics } from '../services/api';

export const fetchMetrics = (type) => async (dispatch) => {
  dispatch({ type: 'FETCH_METRICS_REQUEST' });
  try {
    const data = await getMetrics(type);
    dispatch({ type: 'FETCH_METRICS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_METRICS_FAILURE', payload: error.message });
  }
};*/

export const FETCH_METRICS_REQUEST = 'FETCH_METRICS_REQUEST';
export const FETCH_METRICS_SUCCESS = 'FETCH_METRICS_SUCCESS';
export const FETCH_METRICS_FAILURE = 'FETCH_METRICS_FAILURE';

export const fetchMetricsRequest = () => ({ type: FETCH_METRICS_REQUEST });
export const fetchMetricsSuccess = (metrics) => ({ type: FETCH_METRICS_SUCCESS, payload: metrics });
export const fetchMetricsFailure = (error) => ({ type: FETCH_METRICS_FAILURE, payload: error });

export const fetchMetrics = (coin) => async (dispatch) => {
  dispatch(fetchMetricsRequest());
  try {
    const data = await fetchCryptoMetrics(coin);
    dispatch(fetchMetricsSuccess(data));
  } catch (error) {
    dispatch(fetchMetricsFailure(error.message));
  }
};
