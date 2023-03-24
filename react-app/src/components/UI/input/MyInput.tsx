import React from 'react';

interface MyInputProps {
  spanName?: string;
  type: string;
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

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
          pattern={
            type == 'date'
              ? '(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/d{4}'
              : '[A-Z, a-z, А-Я, а-я]+'
          }
        />
        {error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MyInput };
