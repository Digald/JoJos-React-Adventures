import React from "react";
// import css here

const Card = props => (
    <div className="column is-3 is-desktop" onClick={() => props.validateClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
);

export default Card;
