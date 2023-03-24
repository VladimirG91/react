import React from 'react';
import { render } from '@testing-library/react';
import CardForm from './CardForm';

describe('CardForm', () => {
  it('should render all form fields', () => {
    const { getByLabelText } = render(
      <CardForm
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(getByLabelText('Title:')).toBeInTheDocument();
    expect(getByLabelText('Short description:')).toBeInTheDocument();
    expect(getByLabelText('Release date:')).toBeInTheDocument();
    expect(getByLabelText('Genre:')).toBeInTheDocument();
    expect(getByLabelText('I am not a robot')).toBeInTheDocument();
    expect(getByLabelText('Upload image')).toBeInTheDocument();
  });
});
