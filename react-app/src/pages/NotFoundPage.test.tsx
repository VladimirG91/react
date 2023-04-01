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
  });
});
