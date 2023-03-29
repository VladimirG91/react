import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface HeaderProps {
  currentPage?: string;
}

// interface HeaderState {
//   currentPageTitle: string;
// }

function Header(props: HeaderProps) {
  const location = useLocation();
  const [currentPageTitle, setCurrentPageTitle] = useState<string>('');

  const updatePageTitle = useCallback(() => {
    const { pathname } = location;
    let newCurrentPageTitle = '';

    switch (pathname) {
      case '/':
        newCurrentPageTitle = 'Home Page';
        break;
      case '/about':
        newCurrentPageTitle = 'About Us';
        break;
      case '/form':
        newCurrentPageTitle = 'Form Page';
        break;
      default:
        newCurrentPageTitle = '';
    }

    if (props.currentPage) {
      newCurrentPageTitle = props.currentPage;
    }

    setCurrentPageTitle(newCurrentPageTitle);
  }, [props.currentPage, location]);

  useEffect(() => {
    updatePageTitle();
  }, [updatePageTitle]);
  return (
    <header className="header" data-testid="header">
      <div className="current-page-header">
        <h1>{currentPageTitle}</h1>
      </div>
      <div className="header-links">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
          }
          onClick={updatePageTitle}
        >
          Home Page
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
          }
          onClick={updatePageTitle}
        >
          About Us
        </NavLink>
        <NavLink
          to="/form"
          style={({ isActive }) =>
            isActive ? { color: '#1d9bf0', outline: 'none' } : { color: 'white' }
          }
          onClick={updatePageTitle}
        >
          Form Page
        </NavLink>
      </div>
    </header>
  );
}

export { Header };
