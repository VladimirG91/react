import { AboutPage } from './AboutPage';
import { render, screen } from '@testing-library/react';

describe('AboutPage', () => {
  it('renders correctly', () => {
    render(<AboutPage />);
    const AboutElement = screen.getByText(/React project/i);
    expect(AboutElement).toBeInTheDocument();
  });
});
