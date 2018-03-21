import React from "react";
// import css here

const Card = props => (
    <div className="is-flex" onClick={() => props.validateClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
);

export default Card;
