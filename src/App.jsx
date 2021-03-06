import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
