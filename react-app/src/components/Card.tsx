import React from 'react';

interface ICardProps {
  isLiked?: boolean;
  id?: string;
  title?: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  viewed?: boolean;
  image?: File;
}
interface ICardState {
  isLiked: boolean;
  imageSrc?: string;
}
class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);
    const localValue = localStorage.getItem(`isLiked-${props.id}`);
    this.state = { isLiked: localValue ? localValue === 'true' : Boolean(props.isLiked) };
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    const { id } = this.props;
    const { isLiked } = this.state;
    localStorage.setItem(`isLiked-${id}`, `${!isLiked}`);
    this.setState((prevState) => ({ isLiked: !prevState.isLiked }));
  }

  componentDidMount() {
    const { image, id } = this.props;
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        this.setState({ imageSrc: reader.result as string });
      };
    } else {
      const imageSrc = `/cards-img/${id}.webp`;
      this.setState({ imageSrc });
    }
  }

  render() {
    const { title, description, releaseDate, genre, viewed } = this.props;
    const { isLiked, imageSrc } = this.state;
    const likeImgSrc = isLiked ? '/liked.svg' : '/unliked.svg';

    return (
      <div className="card" data-testid="card">
        <img className="card-img" width={228} height={340} src={imageSrc} alt="card-img" />
        <p className="title">
          {title} ({releaseDate?.slice(0, 4)})
        </p>
        <p className="description">{description}</p>
        <p className="genre">Genre:{genre}</p>
        <p className="viewed">Viewed:{viewed ? 'No' : 'Yes'}</p>

        <button className="like-btn" onClick={this.handleClick}>
          <img className="like-btn-img" width={26} height={26} src={likeImgSrc} alt="like-unlike" />
        </button>
      </div>
    );
  }
}

export { Card };
