import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setValue } from '../store/searchBarSlice';
interface ISearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar(props: ISearchBarProps) {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.search.value);
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
