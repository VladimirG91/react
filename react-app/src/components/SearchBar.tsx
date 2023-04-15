import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setValue } from '../store/searchBarSlice';
interface ISearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar(props: ISearchBarProps) {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.search.value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(value);
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите название фильма, жанр, или год"
        value={value}
        onChange={(event) => dispatch(setValue(event.target.value))}
      />
      <input className="form-btn" type="submit" value="Search" />
    </form>
  );
}

export { SearchBar };
