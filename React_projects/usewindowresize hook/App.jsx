import { useState, useCallback, useEffect, useRef } from "react";
import Usewindowresize from "./Usewindowresize";

// learn to implement Usewindowresize hook
function App() {

const windowsize = Usewindowresize()
const {width,height} = windowsize


  return (
    <>
     <div>
      <h1>width is : {width}</h1>
      <h1>height is : {height}</h1>
     </div>
    </>
  );
}

export default App;
