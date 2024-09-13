const initialState = {
  metrics: [],
  loading: false,
  error: null,
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_METRICS_REQUEST':
      // Set loading to true and clear any existing error
      return { ...state, loading: true, error: null };
    case 'FETCH_METRICS_SUCCESS':
      // Update metrics with the data from API and set loading to false
      return { ...state, loading: false, metrics: action.payload };
    case 'FETCH_METRICS_FAILURE':
      // Set error with the error message and set loading to false
      return { ...state, loading: false, error: action.payload };
    default:
      return state; // Return current state if action type does not match
  }
};

export default metricsReducer;
