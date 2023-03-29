import React from 'react';
import { render, screen } from '@testing-library/react';
import { MySelect } from './MySelect';

describe('MySelect', () => {
  it('renders correctly with all props', () => {
    const genreRef = { current: document.createElement('select') };
    render(<MySelect genreRef={genreRef} error="Error message" />);
    const label = screen.getByText('Genre:');
    const option1 = screen.getByText('Select a genre');
    const option2 = screen.getByText('Action');
    const option3 = screen.getByText('Comedy');
    const option4 = screen.getByText('Drama');
    const option5 = screen.getByText('Horror');
    const option6 = screen.getByText('Romance');
    const option7 = screen.getByText('Fantasy');
    const errorMessage = screen.getByText('Error message');

    expect(label).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
    expect(option4).toBeInTheDocument();
    expect(option5).toBeInTheDocument();
    expect(option6).toBeInTheDocument();
    expect(option7).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
