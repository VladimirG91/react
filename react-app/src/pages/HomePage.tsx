import SearchBar from '../components/SearchBar';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1 className="home">Home Page</h1>
        <SearchBar />
      </>
    );
  }
}

export default HomePage;
