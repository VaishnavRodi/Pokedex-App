import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => (
    <Routes>
    <Route exact path="/" element={<Pokedex />} />
    <Route
      exact
      path="/:pokemonId" element={<Pokemon />} />
    </Routes>
);

export default App;