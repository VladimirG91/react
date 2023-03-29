import { FormPage } from './FormPage';
import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from 'components/Card';

describe('FormPage', () => {
  it('renders correctly', () => {
    render(<FormPage />);
    const FormPageElement = screen.getByText(/Create your own movie collection:/i);
    expect(FormPageElement).toBeInTheDocument();
  });
  it('renders without crashing', () => {
    render(<FormPage />);
  });
  it('renders correctly', () => {
    render(<Card />);
  });
});
