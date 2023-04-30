import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface MySelectProps {
  error?: string;
  name: string;
  genreRef: UseFormRegisterReturn;
}

const MySelect: FC<MySelectProps> = ({ name, genreRef, error }) => {
  return (
    <label>
      <span className="genre">Genre:</span>
      <select className="genre-select" {...genreRef} name={name}>
        <option>--Select a genre--</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="action">Action</option>
      </select>
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

export { MySelect };
