// to import usestate '{}' braces is used bcs it is a named exports
import React, { useState } from "react";

import "./App.css";

function App() {
  let count = 1;
  const [state, setState] = useState();
  // useState is a hooks

  function handleClick() {
    count = 2;
    console.log(count);
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
