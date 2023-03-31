import React from 'react';
import { render } from '@testing-library/react';

import { MyCheckbox } from './MyCheckbox';

describe('MyCheckbox', () => {
  const inputRef = React.createRef<HTMLInputElement>();

  it('should render correctly', () => {
    const { getByLabelText } = render(
      <MyCheckbox spanName="Checkbox" type="checkbox" name="checkbox" inputRef={inputRef} />
    );
    const checkbox = getByLabelText('Checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
