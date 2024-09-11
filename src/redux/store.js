import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './reducers';  // Correct path to the single reducer

const store = configureStore({
  reducer: {
    metrics: metricsReducer,  // Wrap your single reducer in an object
  },
});

export default store;
