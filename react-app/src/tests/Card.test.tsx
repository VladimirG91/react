import { Card } from 'components/Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  it('have img with alt, title, subtitle', () => {
    const img = 'card-img';
    const title = 'title';
    const subtitle = 'subtitle';
    const { getByText } = render(<Card title={title} subtitle={subtitle} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(img)).toBeInTheDocument();
  });
});
