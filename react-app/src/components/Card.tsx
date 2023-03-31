import React, { useState, useEffect } from 'react';

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

const Card: React.FC<ICardProps> = ({
  isLiked: propIsLiked,
  id,
  title,
  description,
  releaseDate,
  genre,
  viewed,
  image,
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
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
    } else {
      const imageSrc = `/cards-img/${id}.webp`;
      setImageSrc(imageSrc);
    }
  }, [id, image]);

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
      <p className="viewed">Viewed:{viewed ? 'No' : 'Yes'}</p>
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
