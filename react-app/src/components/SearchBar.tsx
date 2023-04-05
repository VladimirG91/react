import React, { useState, useEffect, useRef } from 'react';

function SearchBar() {
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
    return () => {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem('searchValue', value);
    event.preventDefault();
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <label>
        <input
          className="form-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <input className="form-btn" type="submit" value="Search" />
    </form>
  );
}

export { SearchBar };
