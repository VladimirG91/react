import { useEffect, useState } from 'react';

import { SearchBar } from 'components/SearchBar';
import { Card, ICardProps } from 'components/Card';
import { Popup } from 'components/Popup';

const TIMEOUT = 2000;

function HomePage() {
  const [movies, setMovies] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<ICardProps | null>(null);

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
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, TIMEOUT);
  };

  useEffect(() => {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      handleSearch(searchValue);
    }
  }, []);

  const handleCardClick = async (id: string) => {
    try {
      const response = await fetch(`https://642c494a208dfe25472ca61d.mockapi.io/movies/${id}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  const overlay = selectedMovie && <div className="overlay" onClick={closePopup} />;
  const popup = selectedMovie && <Popup isOpen={true} onClose={closePopup} movie={selectedMovie} />;

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
          <div data-testid="movie-list" className="movie-list">
            {movies.map((movie) => (
              <Card key={movie.id} {...movie} onCardClick={() => handleCardClick(movie.id)} />
            ))}
          </div>
        )}
        {overlay}
        {popup}
      </div>
    </div>
  );
}

export { HomePage };
