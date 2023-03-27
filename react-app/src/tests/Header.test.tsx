import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
