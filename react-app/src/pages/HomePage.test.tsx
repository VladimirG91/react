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

  it('should display loading message when movies are loading', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    store.dispatch({ type: 'movies/fetchMovies/pending' });

    const loadingText = screen.getByText('Идет загрузка...');
    expect(loadingText).toBeInTheDocument();
  });
});
