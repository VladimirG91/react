import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders an input field', () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const { getByRole } = render(<SearchBar />);
    const submitButton = getByRole('button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('value', 'Search');
  });
});
