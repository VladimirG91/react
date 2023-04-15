import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import { Card } from 'components/Card';
import CardForm, { CardFormFields } from 'components/CardForm';
import { setFormData } from 'store/cardFormSlice';

interface ICardData {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: boolean;
  imageUrl?: string;
  image?: FileList;
}

const FormPage: React.FC<ICardData> = () => {
  const dispatch = useAppDispatch();
  const cardData = useAppSelector((state) => state.form.cardData);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: CardFormFields) => {
    const newCardData: ICardData = {
      ...data,
    };
    dispatch(setFormData(newCardData));
  };

  return (
    <div className="wrapper">
      <h3 className="form-header">Create your own movie collection:</h3>
      <CardForm onSubmit={onSubmit} />
      <div className="movie-list" ref={contentRef}>
        {cardData.map((card, index) => (
          <Card id={Date.now().toString()} key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export { FormPage };
