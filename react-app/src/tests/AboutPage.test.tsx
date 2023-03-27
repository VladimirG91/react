import { AboutPage } from '../pages/AboutPage';
import { render, screen } from '@testing-library/react';

describe('AboutPage', () => {
  it('renders correctly', () => {
    render(<AboutPage />);
    const AboutElement = screen.getByText(/React project/i);
    expect(AboutElement).toBeInTheDocument();
  });
});
