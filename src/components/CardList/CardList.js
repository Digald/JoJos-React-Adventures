import React from "react";
import './CardList.css';

const CardList = props => (
   <section className="columns is-multiline is-centered card-list">{props.children}</section>
);

export default CardList;
