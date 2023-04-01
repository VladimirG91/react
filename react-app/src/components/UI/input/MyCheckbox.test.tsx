import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { MyCheckbox } from './MyCheckbox';

const TestComponent = () => {
  const { register } = useForm(); // initialize useForm hook

  return (
    <MyCheckbox
      spanName="I am not a robot"
      type={'checkbox'}
      name={'notRobot'}
      inputRef={register('notRobot', { required: 'Note that you are not a robot' })}
      error="Error message"
    />
  );
};
describe('MyCheckbox', () => {
  it('should render correctly', () => {
    render(<TestComponent />);
    const checkbox = screen.getByText('I am not a robot');
    expect(checkbox).toBeInTheDocument();
  });
});
