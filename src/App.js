import React from "react";
import Main from "./Main";
import CuisineLinks from "./CuisineLinks";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>What's Cooking?</h1>
      <h3>Explore some of our popular recipes</h3>
      <BrowserRouter>
        <CuisineLinks />
        <Main />
      </BrowserRouter>
    </div>
  );
}
