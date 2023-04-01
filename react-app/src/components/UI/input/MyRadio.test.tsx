import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { MyRadio } from './MyRadio';

const TestComponent = () => {
  const { register } = useForm(); // initialize useForm hook
  return (
    <MyRadio
      type={'radio'}
      name={'viewed'}
      inputRef={register('viewed', { required: 'Please select "Yes" or "No"' })}
      error="Error message"
      value={''}
      isChecked={false}
    />
  );
};
describe('MyRadio', () => {
  it('renders correctly with all props', () => {
    render(<TestComponent />);
    const errorMessage = screen.getByText('Error message');

    expect(errorMessage).toBeInTheDocument();
  });
});
