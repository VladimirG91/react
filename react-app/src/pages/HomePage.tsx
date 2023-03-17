import SearchBar from '../components/SearchBar';
import React from 'react';
import Card from '../components/Card';

class HomePage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1 className="home">Home Page</h1>
        <SearchBar />
        <div className="content">
          <Card id="1" />
          <Card id="2" />
          <Card id="3" />
          <Card id="4" />
          <Card id="5" />
        </div>
      </div>
    );
  }
}

export default HomePage;
