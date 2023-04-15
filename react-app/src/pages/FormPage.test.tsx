import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { FormPage } from './FormPage';
import { Card } from 'components/Card';

describe('FormPage', () => {
  it('should render the form header', () => {
    render(
      <Provider store={store}>
        <FormPage title={''} description={''} releaseDate={''} genre={''} />
      </Provider>
    );

    const formHeaderElement = screen.getByText(/Create your own movie collection/i);
    expect(formHeaderElement).toBeInTheDocument();
  });

  it('renders correctly', () => {
    render(<Card id={''} />);
  });
});
