import React from 'react';

interface MySelectProps {
  genreRef: React.RefObject<HTMLSelectElement>;
  error?: string;
}

class MySelect extends React.Component<MySelectProps> {
  constructor(props: MySelectProps) {
    super(props);
  }

  render() {
    const { genreRef, error } = this.props;
    return (
      <label>
        <span className="genre">Genre:</span>
        <select className="genre-select" name="genre" ref={genreRef}>
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        {error && <span className="error-message">{error}</span>}
      </label>
    );
  }
}

export { MySelect };
