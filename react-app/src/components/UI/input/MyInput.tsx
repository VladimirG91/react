import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface MyInputProps {
  spanName?: string;
  type: 'text' | 'date'; // restrict the types to only 'text' and 'date'
  name: string;
  inputRef: UseFormRegisterReturn;
  error?: string;
}

const REGULAR_DATE = '(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/d{4}';
const REGULAR_TEXT = '[A-Z, a-z, А-Я, а-я]+';

const MyInput: FC<MyInputProps> = ({ spanName, type, name, inputRef, error }) => {
  return (
    <label>
      <span>{spanName}</span>
      <input
        type={type}
        {...inputRef}
        name={name}
        pattern={type === 'date' ? REGULAR_DATE : REGULAR_TEXT}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

export { MyInput };
