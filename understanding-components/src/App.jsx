import React from "react";

import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default App;
