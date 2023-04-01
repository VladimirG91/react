import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';

import data from '../components/data/data.json';

function HomePage() {
  const dataCards = data.movies;
  const cards = [...Array(dataCards.length)].map((_, index) => (
    <Card
      key={dataCards[index].id}
      id={dataCards[index].id.toString()}
      title={dataCards[index].title}
      description={dataCards[index].description}
      releaseDate={dataCards[index].releaseDate}
      genre={dataCards[index].genre}
    />
  ));
  return (
    <div className="wrapper">
      <SearchBar />
      <div className="content">{cards}</div>
    </div>
  );
}

export { HomePage };
