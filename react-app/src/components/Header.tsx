import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  currentPage?: string;
}

interface HeaderState {
  currentPageTitle: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      currentPageTitle: '',
    };
  }

  updatePageTitle = () => {
    const { pathname } = window.location;
    let currentPageTitle = '';

    switch (pathname) {
      case '/':
        currentPageTitle = 'Home Page';
        break;
      case '/about':
        currentPageTitle = 'About Us';
        break;
      case '/form':
        currentPageTitle = 'Form Page';
        break;
      default:
        currentPageTitle = '';
    }

    if (this.props.currentPage) {
      currentPageTitle = this.props.currentPage;
    }

    this.setState({
      currentPageTitle,
    });
  };

  componentDidMount() {
    this.updatePageTitle();
  }

  componentDidUpdate(prevProps: HeaderProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.updatePageTitle();
    }
  }

  render() {
    return (
      <header className="header" data-testid="header">
        <div className="current-page-header">
          <h1>{this.state.currentPageTitle}</h1>
        </div>
        <div className="header-links">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
            }
            onClick={() => {
              setTimeout(this.updatePageTitle, 0);
            }}
          >
            Home Page
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
            }
            onClick={() => {
              setTimeout(this.updatePageTitle, 0);
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="/form"
            style={({ isActive }) =>
              isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
            }
            onClick={() => {
              setTimeout(this.updatePageTitle, 0);
            }}
          >
            Form Page
          </NavLink>
        </div>
      </header>
    );
  }
}

export { Header };
