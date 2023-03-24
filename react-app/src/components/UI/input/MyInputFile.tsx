import React from 'react';

interface MyInputFileProps {
  spanName?: string;
  type: string;
  name: string;
  imageRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

class MyInputFile extends React.Component<MyInputFileProps> {
  constructor(props: MyInputFileProps) {
    super(props);
  }

  render() {
    const { spanName, type, name, imageRef, error } = this.props;
    return (
      <label>
        <span>{spanName}</span>
        <input type={type} name={name} accept=".jpg,.jpeg,.png" ref={imageRef} />
        {error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MyInputFile };
