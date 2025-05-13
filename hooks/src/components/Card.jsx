import React from "react";
import "./Card.css";

// the passed props are in the form of object
// props is an object that contains all the props passed to the component
// props are the properties passed to the component
const Card = (props) => {
  console.log(props);
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.cardColor,
      }}
    >
      <h2>Cart title {props.title}</h2>
      <h5>Card body {props.body}</h5>
    </div>
  );
};

export default Card;
