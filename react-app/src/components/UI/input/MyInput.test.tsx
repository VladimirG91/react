import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyInput } from './MyInput';

describe('MyInput component', () => {
  const inputRef = React.createRef<HTMLInputElement>();

  it('renders label with span and input elements', () => {
    render(<MyInput spanName="Name" type="text" name="name" inputRef={inputRef} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
