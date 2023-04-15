import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('SearchBar', () => {
  it('should render SearchBar', () => {
    render(
      <Provider store={store}>
        <SearchBar onSearch={() => {}} />
      </Provider>
    );
    const searchBarElement = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    expect(searchBarElement).toBeInTheDocument();
  });

  it('should update the search value when typing in the input', () => {
    render(
      <Provider store={store}>
        <SearchBar onSearch={() => {}} />
      </Provider>
    );
    const searchBarElement = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    fireEvent.change(searchBarElement, { target: { value: 'Harry Potter' } });
    expect(searchBarElement).toHaveValue('Harry Potter');
  });
});
