import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
