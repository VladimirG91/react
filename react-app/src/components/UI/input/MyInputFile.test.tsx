import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { MyInputFile } from './MyInputFile';

const TestComponent = () => {
  const { register } = useForm(); // initialize useForm hook
  return (
    <MyInputFile
      spanName="Upload image"
      type="file"
      name="image"
      imageRef={register('image', { required: 'Please upload an image' })}
      error="Error message"
    />
  );
};
describe('MyInputFile component', () => {
  it('it render Input file component', () => {
    render(<TestComponent />);
  });
});
