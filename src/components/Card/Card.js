import React from "react";
import './Card.css';

const Card = props => (
    <div className="column is-2-fullhd is-3-desktop is-4-tablet is-6-mobile" onClick={() => props.validateClick(props.id)}>
      <img className="jojo" alt={props.name} src={props.image} />
    </div>
);

export default Card;
