// to import usestate '{}' braces is used bcs it is a named exports
import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

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
      <Card cardName="card1" />
      <Card cardName="card2" />
      <Card cardName="card3" />
    </div>
  );
}

export default App;
