import React from "react";

import "./MainLayout.css";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
