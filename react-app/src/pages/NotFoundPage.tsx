import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="not-found">
          <p>
            PAGE NOT FOUND. Go <Link to="/">Home Page</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
