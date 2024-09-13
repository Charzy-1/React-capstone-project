import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

/* eslint-disable import/extensions */
import HomePage from '../../components/HomePage.js';
/* eslint-enable import/extensions */

const mockStore = configureStore([]);
const store = mockStore({
  metrics: { loading: false, metrics: [{ name: 'Bitcoin', symbol: 'BTC' }], error: '' },
});

test('renders crypto data on HomePage', () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );

  const linkElement = screen.getByText(/Bitcoin/i);
  expect(linkElement).toBeInTheDocument();
});
