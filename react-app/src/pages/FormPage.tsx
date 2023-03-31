import React, { useState, useRef } from 'react';

import { Card } from 'components/Card';
import CardForm, { CardFormFields } from 'components/CardForm';

interface ICardData {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: string;
  image?: File;
}

function FormPage() {
  const [cardData, setCardData] = useState<ICardData[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: CardFormFields) => {
    const {
      title = '',
      description = '',
      releaseDate = '',
      genre = '',
      notRobot = false,
      viewed = 'yes',
      image,
    } = data;
    const newCardData: ICardData = {
      title,
      description,
      releaseDate,
      genre,
      notRobot,
      viewed,
      image,
    };
    setCardData((prevCardData) => [...prevCardData, newCardData]);
  };

  return (
    <div className="wrapper">
      <h3 className="form-header">Create your own movie collection:</h3>
      <CardForm onSubmit={onSubmit} />
      <div className="content" ref={contentRef}>
        {cardData.map((card, index) => (
          <Card
            id={Date.now().toString()}
            key={index}
            title={card.title}
            description={card.description}
            releaseDate={card.releaseDate}
            genre={card.genre}
            viewed={card.viewed}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export { FormPage };
