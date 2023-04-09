import { FormPage } from './FormPage';
import { render, screen } from '@testing-library/react';
import { Card } from 'components/Card';

describe('FormPage', () => {
  it('renders correctly', () => {
    render(<FormPage title={''} description={''} releaseDate={''} genre={''} />);
    const FormPageElement = screen.getByText(/Create your own movie collection:/i);
    expect(FormPageElement).toBeInTheDocument();
  });
  it('renders without crashing', () => {
    render(<FormPage title={''} description={''} releaseDate={''} genre={''} />);
  });
  it('renders correctly', () => {
    render(<Card id={''} />);
  });
});
