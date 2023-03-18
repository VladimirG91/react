import SearchBar from '../components/SearchBar';
import React from 'react';
import Card from '../components/Card';
import data from '../components/data/data.json';

class HomePage extends React.Component {
  render() {
    const dataCards = data.movies;
    const cards = [...Array(dataCards.length)].map((_, index) => (
      <Card
        key={index}
        id={index + 1 + ''}
        title={dataCards[index].title}
        subtitle={dataCards[index].subtitle}
      />
    ));
    return (
      <div className="wrapper">
        <SearchBar />
        <div className="content">{cards}</div>
      </div>
    );
  }
}

export default HomePage;
