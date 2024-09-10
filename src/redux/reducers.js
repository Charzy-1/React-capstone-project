const initialState = {
    metrics: [],
    loading: false,
    error: null,
  };
  
  const metricsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_METRICS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_METRICS_SUCCESS':
        return { ...state, loading: false, metrics: action.payload };
      case 'FETCH_METRICS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default metricsReducer;
  