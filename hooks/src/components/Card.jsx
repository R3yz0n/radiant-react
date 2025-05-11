import React from "react";
// This component demonstrate the props
const Card = (props) => {
  console.log(props.cardName);
  return <div>{props.cardName}</div>;
};

export default Card;
