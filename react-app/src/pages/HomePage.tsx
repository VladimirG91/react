import { useState } from 'react';
import { SearchBar } from 'components/SearchBar';
import { Card, ICardProps } from 'components/Card';

const TIMEOUT = 2000;
function HomePage() {
  const [movies, setMovies] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    setNoResults(false);
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://642c494a208dfe25472ca61d.mockapi.io/movies?search=${searchTerm}`
        );
        const data = await response.json();
        if (data.length === 0) {
          setNoResults(true);
        }
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, TIMEOUT);
  };

  const cards = movies.map((obj) => (
    <Card
      key={obj.id}
      id={obj.id}
      title={obj.title}
      description={obj.description}
      releaseDate={obj.releaseDate}
      genre={obj.genre}
      imageSrc={obj.imageSrc}
    />
  ));

  return (
    <div className="wrapper">
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        {loading ? (
          <h1 className="textLoading">Идет загрузка...</h1>
        ) : noResults ? (
          <h1 className="textLoading">
            По данному запросу ничего не найдено... Попробуйте изменить запрос и повторить попытку!
          </h1>
        ) : (
          cards
        )}
      </div>
    </div>
  );
}

export { HomePage };
