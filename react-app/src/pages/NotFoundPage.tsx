import React from 'react';

import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="not-found">
          <p>
            PAGE NOT FOUND. Go to{' '}
            <Link to="/">
              <span className="not-found-span">Home Page</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export { NotFoundPage };
