import React from "react";
import Button from "./components/Button";
// Import Capital react from small react
// the smaller one's is package and the Capitals are the exports of the packages

// React component always returns an html element

//There are two types of imports in React.
// 1. Default imports
// 2. Named imports

// A file can only have one default export

const App = () => {
  return <div>Hello world</div>;
};

export default App;

// this is the named export
const App1 = () => {
  return (
    <div>
      hello app 1
      <Button />
    </div>
  );
};

export { App1 };
