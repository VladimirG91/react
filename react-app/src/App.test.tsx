import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { App } from './App';

test('renders header', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});
