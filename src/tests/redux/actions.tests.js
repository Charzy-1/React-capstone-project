/* eslint-disable import/named */
import { fetchMetricsRequest, fetchMetricsSuccess, fetchMetricsFailure } from '../../redux/actions';
/* eslint-enable import/named */

/* eslint-disable import/extensions */
import { FETCH_METRICS_REQUEST, FETCH_METRICS_SUCCESS, FETCH_METRICS_FAILURE } from '../../redux/actionTypes.js';
/* eslint-enable import/extensions */

test('should create an action to request metrics', () => {
  const expectedAction = { type: FETCH_METRICS_REQUEST };
  expect(fetchMetricsRequest()).toEqual(expectedAction);
});

test('should create an action for successful metrics fetch', () => {
  const metrics = [{ name: 'Bitcoin', price: 20000 }];
  const expectedAction = { type: FETCH_METRICS_SUCCESS, payload: metrics };
  expect(fetchMetricsSuccess(metrics)).toEqual(expectedAction);
});

test('should create an action for failed metrics fetch', () => {
  const error = 'Failed to fetch';
  const expectedAction = { type: FETCH_METRICS_FAILURE, payload: error };
  expect(fetchMetricsFailure(error)).toEqual(expectedAction);
});
