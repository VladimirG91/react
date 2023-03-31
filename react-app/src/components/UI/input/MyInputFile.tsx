import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface MyInputFileProps {
  spanName?: string;
  type: string;
  name: string;
  imageRef: UseFormRegisterReturn;
  error?: string;
}

const MyInputFile: FC<MyInputFileProps> = ({ spanName, type, name, imageRef, error }) => {
  return (
    <label>
      <span>{spanName}</span>
      <input type={type} {...imageRef} name={name} accept=".jpg,.jpeg,.png*" />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

export { MyInputFile };
