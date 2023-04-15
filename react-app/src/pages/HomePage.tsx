import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import { fetchMovies } from 'store/moviesSlice';
import { SearchBar } from 'components/SearchBar';
import { Card, ICardProps } from 'components/Card';
import { Popup } from 'components/Popup';
import { fetchPopupMovie } from 'store/popupSlice';

const TIMEOUT = 2000;

function HomePage() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.value);
  const movies = useAppSelector((state) => state.movies.movies);

  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<ICardProps | null>(null);

  const handleSearch = async (searchValue: string) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(fetchMovies(searchValue)).finally(() => {
        setLoading(false);
      });
    }, TIMEOUT);
  };

  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch(fetchMovies('')).finally(() => {
          setLoading(false);
        });
      }, TIMEOUT);
    }
  }, []);

  const handleCardClick = (id: string) => {
    dispatch(fetchPopupMovie(id))
      .unwrap()
      .then((data) => {
        setSelectedMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        ) : movies.length === 0 ? (
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
