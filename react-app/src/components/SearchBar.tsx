import React, { useEffect, useRef, useState } from 'react';

interface ISearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar(props: ISearchBarProps) {
  const [value, setValue] = useState<string>(() => {
    const searchValue = localStorage.getItem('searchValue');
    return searchValue ? searchValue : '';
  });
  const searchRef = useRef<string>('');

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      setValue(savedValue);
    }
    // return () => {
    //   localStorage.setItem('searchValue', searchRef.current);
    // };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchValue', value);
    props.onSearch(value);
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите название фильма, жанр, или год"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input className="form-btn" type="submit" value="Search" />
    </form>
  );
}

export { SearchBar };
