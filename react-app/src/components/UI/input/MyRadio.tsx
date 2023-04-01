import React from 'react';

interface MyInputProps {
  type: string;
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
  value?: string;
  isChecked?: boolean;
}

class MyRadio extends React.Component<MyInputProps> {
  constructor(props: MyInputProps) {
    super(props);
  }

  render() {
    const { type, name, inputRef, error, isChecked } = this.props;

    return (
      <label>
        <input type={type} name={name} ref={inputRef} defaultChecked={isChecked} />
        {error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MyRadio };
