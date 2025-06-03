import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

test('renders App without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
