import { useState, useCallback, useEffect, useRef } from "react";
import {Route,Routes } from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./components/Home";
import Details from "./components/Details";
import Favorites from "./components/Favorites";


// learn to use global context and router 
function App() {

  

  return (
    <>
    <div>
      <Nav/>
      <Routes>
        <Route
        path="/"
        element = {<Home/>}
        />
        <Route
        path="/favorites"
        element = {<Favorites/>}
        />
        <Route
        path="/details/:id"
        element = {<Details/>}
        />
      </Routes>

    </div>
     
    </>
  );
}

export default App;
