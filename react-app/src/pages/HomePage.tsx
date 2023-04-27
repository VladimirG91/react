import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import { SearchBar } from 'components/SearchBar';
import { Card, ICardProps } from 'components/Card';
import { Popup } from 'components/Popup';
import { fetchPopupMovie } from 'store/popupSlice';

function HomePage() {
  const dispatch = useAppDispatch();
  const { movies, isLoading } = useAppSelector((state) => state.movies);

  const [selectedMovie, setSelectedMovie] = useState<ICardProps | null>(null);

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
      <SearchBar />
      <div className="content">
        {isLoading ? (
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
