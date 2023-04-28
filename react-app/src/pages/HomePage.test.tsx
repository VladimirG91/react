import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  const store = setupStore();
  it('should render the HomePage component', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const searchBarElement = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    expect(searchBarElement).toBeInTheDocument();
  });
});
