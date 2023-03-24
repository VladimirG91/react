import { render, screen } from '@testing-library/react';
import { App } from 'App';
import { MemoryRouter } from 'react-router-dom';

test('renders header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});
