import { render, screen } from '@testing-library/react';
import { NotFoundPage } from 'pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';
describe('NotFoundPage', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const notFoundElement = screen.getByText(/PAGE NOT FOUND/i);
    expect(notFoundElement).toBeInTheDocument();
    const go = screen.getByText(/Go to/i);
    expect(go).toBeInTheDocument();
  });

  it('should render a link to the home page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: 'Home Page' });
    expect(link).toHaveAttribute('href', '/');
  });
});
