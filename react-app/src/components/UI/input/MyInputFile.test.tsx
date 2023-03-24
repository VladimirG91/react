import React from 'react';
import { render } from '@testing-library/react';
import { MyInputFile } from './MyInputFile';

describe('MyInputFile component', () => {
  const imageRef = React.createRef<HTMLInputElement>();

  it('it render Input file component', () => {
    render(<MyInputFile type="file" name="test" imageRef={imageRef} />);
  });
});
