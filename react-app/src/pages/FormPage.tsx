import React, { useRef, useState } from 'react';
import { Card } from 'components/Card';
import CardForm, { CardFormFields } from 'components/CardForm';

interface ICardData {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: boolean;
  imageUrl?: string;
}

const FormPage: React.FC<ICardData> = () => {
  const [cardData, setCardData] = useState<ICardData[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: CardFormFields) => {
    const {
      title = '',
      description = '',
      releaseDate = '',
      genre = '',
      notRobot = false,
      viewed,
      imageUrl,
    } = data;

    const newCardData: ICardData = {
      title,
      description,
      releaseDate,
      genre,
      notRobot,
      viewed,
      imageUrl,
    };
    setCardData((prevState) => [...prevState, newCardData]);
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
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export { FormPage };
