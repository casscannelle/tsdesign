import React from "react";
import "./Card.css";

// Uso de type de interseção
type CardProps = {
  title: string;
} & ({
  description: string;
} | {
  imageSrc: string;
  onClick: () => void;
});

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`card ${props.imageSrc ? "card--has-image" : ""}`} onClick={props.onClick}>
      {props.imageSrc && <img src={props.imageSrc} alt="" className="card__image" />}
      <div className="card__content">
        <h3 className="card__title">{props.title}</h3>
        {props.description && <p className="card__description">{props.description}</p>}
      </div>
    </div>
  );
};

export default Card;