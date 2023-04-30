import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

describe('SearchBar', () => {
  const store = setupStore();
  it('should render SearchBar', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBarElement = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    expect(searchBarElement).toBeInTheDocument();
    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
  });

  it('should update the search value when typing in the input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBarElement = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    fireEvent.change(searchBarElement, { target: { value: 'Harry Potter' } });
    expect(searchBarElement).toHaveValue('Harry Potter');
  });

  it('should dispatch the correct action when submitting the form', () => {
    const { container } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = container.querySelector('.form-input');
    const button = container.querySelector('.form-btn');
    if (input && button) {
      fireEvent.change(input, { target: { value: 'Harry Potter' } });
      fireEvent.click(button);
    }

    expect(store.getState().search.value).toBe('Harry Potter');
    expect(store.getState().movies.status).toBe('loading');
  });
});
