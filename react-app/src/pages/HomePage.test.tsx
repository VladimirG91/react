import { render } from '@testing-library/react';
import { HomePage } from 'pages/HomePage';

describe('HomePage have 10 cards', () => {
  it('renders all the Card components', () => {
    const { getAllByTestId } = render(<HomePage />);
    const cards = getAllByTestId('card');
    expect(cards.length).toBe(10);
  });
});
