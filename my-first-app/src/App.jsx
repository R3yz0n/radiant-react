import React from "react";
import Default from "./components/Default"; // // Using default import
import { Named } from "./components/Named"; // // Using named import
import { Button } from "./components/buttons/Button";

// Import Capital react from small react
// the smaller one's is package and the Capitals are the exports of the packages

// React component always returns an html element

//There are two types of imports in React.
// 1. Default imports
// 2. Named imports

// A file can only have one default export

const App = () => {
  return (
    <div>
      <p>This is p tag</p>
      <Default />
      <Named />
      <Button />
    </div>
  );
};

export default App;

// Make a  component with name Button in the file Button.jsx
// the file Button.jsx should be inside a folder buttons
// and import it in the App.jsx file
