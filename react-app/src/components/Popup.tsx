import React from 'react';

import { ICardProps } from './Card';

interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
  movie: ICardProps | null;
}

const Popup: React.FC<IPopupProps> = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) {
    return null;
  }
  const { title, description, releaseDate, genre, imageSrc, country, director, scenario } = movie;

  return (
    <div className="popup popupContainer">
      <button className="close_btn" onClick={onClose}>
        <img width={40} height={40} src="/close.svg" alt="close" />
      </button>
      <div className="popup_content">
        <div>
          <img className="popup_img" width={390} height={594} src={imageSrc} alt="Movie poster" />
        </div>
        <div className="aboutMovie">
          <p className="popup_title">
            {title} ({releaseDate?.slice(0, 4)})
          </p>
          <p className="popup_ul_title">О фильме</p>
          <ul className="popup_ul">
            <li>
              <span>Год производства:</span> {releaseDate} г.
            </li>
            <li>
              <span>Жанр:</span> {genre}
            </li>
            <li>
              <span>Страна:</span> {country}
            </li>
            <li>
              <span>Режиссер:</span> {director}
            </li>
            <li>
              <span>Сценарий:</span> {scenario}
            </li>
          </ul>
          <div className="popup_description">{description}</div>
        </div>
      </div>
    </div>
  );
};
export { Popup };
