import React from "react";
import "./Card.css";
import { CardProps } from "./CardProps";

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