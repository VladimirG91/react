import React from 'react';
import { Card } from 'components/Card';
import CardForm, { CardFormFields } from 'components/CardForm';

interface ICardData {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: boolean;
  image?: File | undefined;
}

interface Props {
  title?: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  notRobot?: boolean;
  viewed?: boolean;
  image?: File;
}

interface IFormPageState {
  cardData: ICardData[];
}

class FormPage extends React.Component<Props, IFormPageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cardData: [],
    };
  }

  private contentRef = React.createRef<HTMLDivElement>();

  onSubmit = (data: CardFormFields) => {
    const {
      title = '',
      description = '',
      releaseDate = '',
      genre = '',
      notRobot = false,
      viewed = true,
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
    this.setState((prevState) => ({
      cardData: [...prevState.cardData, newCardData],
    }));
  };

  render() {
    const { cardData } = this.state;
    return (
      <div className="wrapper">
        <h3 className="form-header">Create your own movie collection:</h3>
        <CardForm onSubmit={this.onSubmit} />
        <div className="content" ref={this.contentRef}>
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
}

export { FormPage };
