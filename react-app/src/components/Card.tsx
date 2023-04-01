import React, { useState, useEffect } from 'react';

interface ICardProps {
  isLiked?: boolean;
  id?: string;
  title?: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  viewed?: boolean;
  imageUrl?: string;
}

const Card: React.FC<ICardProps> = ({
  isLiked: propIsLiked,
  id,
  title,
  description,
  releaseDate,
  genre,
  viewed,
  imageUrl,
}) => {
  const [isLiked, setIsLiked] = useState(propIsLiked || false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const localValue = localStorage.getItem(`isLiked-${id}`);
    if (localValue) {
      setIsLiked(localValue === 'true');
    }
  }, [id]);

  useEffect(() => {
    if (imageUrl) {
      setImageSrc(imageUrl);
    } else {
      const newImageSrc = `/cards-img/${id}.webp`;
      setImageSrc(newImageSrc);
    }
  }, [imageUrl, id]);

  const handleClick = () => {
    localStorage.setItem(`isLiked-${id}`, `${!isLiked}`);
    setIsLiked(!isLiked);
  };

  return (
    <div className="card" data-testid="card">
      <img className="card-img" width={228} height={340} src={imageSrc} alt="card-img" />
      <p className="title">
        {title} ({releaseDate?.slice(0, 4)})
      </p>
      <p className="description">{description}</p>
      <p className="genre">Genre:{genre}</p>
      <p className="viewed">Viewed:{viewed}</p>

      <button className="like-btn" onClick={handleClick}>
        <img
          className="like-btn-img"
          width={26}
          height={26}
          src={isLiked ? '/liked.svg' : '/unliked.svg'}
          alt="like-unlike"
        />
      </button>
    </div>
  );
};

export { Card };
