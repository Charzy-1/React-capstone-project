const initialState = {
  metrics: [],
  loading: false,
  error: null,
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_METRICS_REQUEST':
      return { ...state, loading: true, error: null };  // Set loading to true and clear any existing error
    case 'FETCH_METRICS_SUCCESS':
      return { ...state, loading: false, metrics: action.payload };  // Update metrics with the data from API and set loading to false
    case 'FETCH_METRICS_FAILURE':
      return { ...state, loading: false, error: action.payload };  // Set error with the error message and set loading to false
    default:
      return state;  // Return current state if action type does not match
  }
};

export default metricsReducer;
