import React from 'react';
import { NavLink } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink to="*"></NavLink>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
          }
        >
          Home Page
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
          }
        >
          About Us
        </NavLink>
      </header>
    );
  }
}

export default Header;
