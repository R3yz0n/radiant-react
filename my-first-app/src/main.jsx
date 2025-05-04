import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// The path to the project should match in the terminal section to use
// package managers like npm
//  In my case my-first-app
// If you can't find the project ,
// 1) Go to the topbar of the Vs code and click on the file and open folder
// 2) Open terminal using topbar or using the shortcut Ctrl + `

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
