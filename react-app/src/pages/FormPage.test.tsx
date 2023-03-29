import { FormPage } from './FormPage';
import { render, screen } from '@testing-library/react';

describe('FormPage', () => {
  it('renders correctly', () => {
    render(<FormPage />);
    const FormPageElement = screen.getByText(/Create your own movie collection:/i);
    expect(FormPageElement).toBeInTheDocument();
  });
  it('renders without crashing', () => {
    render(<FormPage />);
  });
});
