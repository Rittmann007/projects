import { useState, useCallback, useEffect, useRef } from "react";
import {Route,Routes } from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./components/Home";
import Details from "./components/Details";



// learn to use redux and router 
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
        path="/details"
        element = {<Details/>}
        />
      </Routes>

    </div>
     
    </>
  );
}

export default App;
