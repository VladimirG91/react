import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyRadio } from './MyRadio';

describe('MyRadio', () => {
  it('renders correctly with all props', () => {
    const inputRef = { current: document.createElement('input') };
    render(
      <MyRadio
        type="radio"
        name="Viewed"
        inputRef={inputRef}
        error="Error message"
        value="radio-value"
        isChecked={true}
      />
    );
    const errorMessage = screen.getByText('Error message');

    expect(errorMessage).toBeInTheDocument();
  });
});
