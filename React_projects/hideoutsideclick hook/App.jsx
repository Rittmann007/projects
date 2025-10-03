import { useState, useCallback, useEffect, useRef } from "react";
import Hideoutsideclickhook from "./Hideoutsideclickhook";

// learn to implement hideoutsideclick hook
function App() {
const [show, setshow] = useState(false)
const clickref = useRef()

Hideoutsideclickhook(clickref,()=>setshow(false))

function handleclick() {
  setshow(true)
}

  return (
    <>
     <div>
      {show ? <p ref={clickref}>click outside to close</p> : <button onClick={handleclick}>show content</button>}
     </div>
    </>
  );
}

export default App;
