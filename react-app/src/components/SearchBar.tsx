import React from 'react';

interface Props {
  placeholder?: string;
}
interface State {
  value: string;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: localStorage.getItem('searchValue') || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({ value: searchValue });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    localStorage.setItem('searchValue', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-search" onSubmit={this.handleSubmit}>
        <label>
          <input
            className="form-input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="form-btn" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
