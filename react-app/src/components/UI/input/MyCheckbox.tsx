import React from 'react';

interface MyInputProps {
  spanName?: string;
  type: string;
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

class MyCheckbox extends React.Component<MyInputProps> {
  constructor(props: MyInputProps) {
    super(props);
  }

  render() {
    const { spanName, type, name, inputRef, error } = this.props;
    return (
      <label>
        <span>{spanName}</span>
        <input type={type} name={name} ref={inputRef} />
        {!inputRef.current?.checked && error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MyCheckbox };
