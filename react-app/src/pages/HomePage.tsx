import SearchBar from '../components/SearchBar';
import React from 'react';
import Card from '../components/Card';

class HomePage extends React.Component {
  render() {
    const cardsQuantity = 10;
    const cards = [...Array(cardsQuantity)].map((_, index) => (
      <Card key={index} id={index + 1 + ''} />
    ));
    return (
      <div className="wrapper">
        <h1 className="home">Home Page</h1>
        <SearchBar />
        <div className="content">{cards}</div>
      </div>
    );
  }
}

export default HomePage;
