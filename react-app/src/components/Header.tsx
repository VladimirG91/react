import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Us</Link>
        <Link to="*"></Link>
      </header>
    );
  }
}

export default Header;
