import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface MyInputProps {
  type: string;
  name: string;
  inputRef: UseFormRegisterReturn;
  error?: string;
  value?: string;
  isChecked?: boolean;
}

const MyRadio: FC<MyInputProps & { value: string; isChecked: boolean }> = ({
  type,
  name,
  value,
  inputRef,
  error,
  isChecked,
}) => {
  return (
    <label>
      <input type={type} {...inputRef} name={name} value={value} defaultChecked={isChecked} />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};
export { MyRadio };
