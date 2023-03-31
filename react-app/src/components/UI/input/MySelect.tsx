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
      <span>Select a genre:</span>
      <select {...genreRef} name={name}>
        <option value="">--Select a genre--</option>
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
