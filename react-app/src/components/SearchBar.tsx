import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [value, setValue] = useState<string>(() => {
    const searchValue = localStorage.getItem('searchValue');
    return searchValue ? searchValue : '';
  });

  useEffect(() => {
    localStorage.setItem('searchValue', value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem('searchValue', value);
    event.preventDefault();
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <label>
        <input className="form-input" type="text" value={value} onChange={handleChange} />
      </label>
      <input className="form-btn" type="submit" value="Search" />
    </form>
  );
}

export { SearchBar };
