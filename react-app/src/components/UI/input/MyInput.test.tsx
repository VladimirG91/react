import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { MyInput } from './MyInput';

const TestComponent = () => {
  const { register } = useForm(); // initialize useForm hook

  return (
    <MyInput
      inputRef={register('title', { required: 'Please enter a title' })}
      error="Error message"
      name={'title'}
      type={'text'}
      spanName={'Title:'}
    />
  );
};

describe('MyInput component', () => {
  it('renders label with span and input elements', () => {
    render(<TestComponent />);
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
