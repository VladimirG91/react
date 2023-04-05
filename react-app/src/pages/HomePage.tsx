import { useEffect, useState } from 'react';

import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { ICardProps } from '../components/Card';

const TIMEOUT = 2000;
function HomePage() {
  const [dataCards, setDataCards] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState(false);
  async function getData() {
    setLoading(true);
    setTimeout(async () => {
      try {
        await fetch('https://642c494a208dfe25472ca61d.mockapi.io/10_movies')
          .then((res) => {
            return res.json();
          })
          .then((arr) => {
            setDataCards(arr);
          });
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, TIMEOUT);
  }
  useEffect(() => {
    getData();
  }, []);

  const cards = dataCards.map((obj) => (
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
      <SearchBar />
      <div className="content">
        {loading ? <h1 className="textLoading">Идет загрузка...</h1> : cards}
      </div>
    </div>
  );
}

export { HomePage };
