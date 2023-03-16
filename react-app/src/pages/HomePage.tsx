import React from 'react';
import SearchBar from 'components/SearchBar';
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
