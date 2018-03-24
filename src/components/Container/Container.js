import React from "react";

const Container = props => (
    <div className={`container is-fluid ${props.bounce}`}>{props.children}</div>
);

export default Container;
