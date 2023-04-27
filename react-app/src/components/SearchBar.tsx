import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setValue } from '../store/searchBarSlice';
import { fetchMovies } from 'store/moviesSlice';

function SearchBar() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.search.value);
  const changeSearchValue = (str: string) => {
    dispatch(setValue(str));
  };

  const requestToApi = async () => {
    const searchQuery = value ? value : '';
    dispatch(fetchMovies(searchQuery));
  };

  useEffect(() => {
    requestToApi();
    console.log('search');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestToApi();
  };

  return (
    <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-input"
        type="text"
        placeholder="Введите название фильма, жанр, или год"
        value={value}
        onChange={(event) => changeSearchValue(event.target.value)}
      />
      <input className="form-btn" type="submit" value="Search" />
    </form>
  );
}

export { SearchBar };
