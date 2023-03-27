import React from 'react';

interface Props {
  isLiked?: boolean;
  id?: string;
  title: string;
  subtitle: string;
}
interface State {
  isLiked: boolean;
}
class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLiked: localStorage.getItem(`isLiked-${props.id}`) === 'true' };
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    const { id } = this.props;
    const { isLiked } = this.state;
    localStorage.setItem(`isLiked-${id}`, `${!isLiked}`);
    this.setState((prevState) => ({ isLiked: !prevState.isLiked }));
  }
  render() {
    const { title, subtitle, id } = this.props;

    const { isLiked } = this.state;
    const imageSrc = `/cards-img/${id}.webp`;
    const likeImgSrc = isLiked ? '/liked.svg' : '/unliked.svg';

    return (
      <div className="card" data-testid="card">
        <img className="card-img" width={228} height={340} src={imageSrc} alt="card-img" />
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <button className="like-btn" onClick={this.handleClick}>
          <img className="like-btn-img" width={26} height={26} src={likeImgSrc} alt="like-unlike" />
        </button>
      </div>
    );
  }
}

export { Card };
