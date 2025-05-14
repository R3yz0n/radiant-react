// to import usestate '{}' braces is used bcs it is a named exports
import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Product from "./components/Product";

function App() {
  // useState is a hook
  // Hooks are always used in the top level of the component
  // here state is a state variable and setState is the function to update it
  // you can use any name for state and setState
  // It's asynchronous in nature
  const [state, setState] = useState(1);

  function handleClick() {
    // old way of doing things
    // count = 2;
    // console.log(count);
    setState(state + 1);
    console.log(state);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{state}</p>

      <div>Make a component card</div>

      {/* Here we are passing a props to the component */}
      <Card cardColor="blue" body="fill this yourself" title="This is card 1" />
      <Card cardColor="yellow" title="another card" />
      <Product />
    </div>
  );
}

export default App;
