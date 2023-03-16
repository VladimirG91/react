import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <p>
          PAGE NOT FOUND. Go <Link to="/">Home Page</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
