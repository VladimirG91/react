import React from 'react';

interface MyInputProps {
  spanName?: string;
  type: string;
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

const REGULAR_DATE = '(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/d{4}';
const REGULAR_TEXT = '[A-Z, a-z, А-Я, а-я]+';
class MyInput extends React.Component<MyInputProps> {
  constructor(props: MyInputProps) {
    super(props);
  }

  render() {
    const { spanName, type, name, inputRef, error } = this.props;
    return (
      <label>
        <span>{spanName}</span>
        <input
          type={type}
          name={name}
          ref={inputRef}
          pattern={type === 'date' ? REGULAR_DATE : REGULAR_TEXT}
        />
        {error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MyInput };
