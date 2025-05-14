import React, { useState } from "react";
// useEffect is another hooks in react
import { useEffect } from "react";

const Product = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("product component");

  function handleClick() {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    // u want to call the api
    console.log("useffect callled");
  }, []);

  useEffect(() => {
    // u want to call the api
    console.log("useffect callled on state update");
  }, [isClicked]);

  return (
    <div>
      Product
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Product;
