import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { MySelect } from './MySelect';

const TestComponent = () => {
  const { register } = useForm(); // initialize useForm hook

  return (
    <MySelect
      genreRef={register('genre', { required: 'Please select a genre' })}
      error="Error message"
      name="genre"
    />
  );
};

describe('MySelect', () => {
  it('renders correctly with all props', () => {
    render(<TestComponent />);
    const label = screen.getByText('Genre:');
    const option1 = screen.getByText('--Select a genre--');
    const option2 = screen.getByText('Action');
    const option3 = screen.getByText('Comedy');
    const option4 = screen.getByText('Drama');
    const option5 = screen.getByText('Horror');

    expect(label).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
    expect(option4).toBeInTheDocument();
    expect(option5).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveAttribute('name', 'genre');
    expect(selectElement).toHaveClass('genre-select');

    const errorMessage = screen.getByText('Error message');
    expect(errorMessage).toBeInTheDocument();
  });
});
