import { Card } from 'components/Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  it('have img with alt, title, description', () => {
    const img = 'card-img';
    const title = 'title';
    const description = 'description';
    const { getByText } = render(<Card title={title} description={description} />);
    expect(getByText(description)).toBeInTheDocument();
    expect(screen.getByAltText(img)).toBeInTheDocument();
  });
});
