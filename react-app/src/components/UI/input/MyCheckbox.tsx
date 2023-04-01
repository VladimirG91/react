import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface MyInputProps {
  spanName?: string;
  type: string;
  name: string;
  inputRef: UseFormRegisterReturn;
  error?: string;
}

const MyCheckbox: FC<MyInputProps> = ({ spanName, type, name, inputRef, error }) => {
  return (
    <label>
      <span>{spanName}</span>
      <input type={type} {...inputRef} name={name} />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

export { MyCheckbox };
