import { useState, useCallback, useEffect, useRef } from "react";
import Custompage from "./Custompage";



// learn to implement dynamic pages
function App() {
const [show, setshow] = useState(false)

function handletoggle() {
  setshow(!show)
}
 
function onchange() {
  setshow(false)
}

  return (
   <>
 <div className="flex flex-col justify-center items-center h-screen w-screen">
  <button onClick={handletoggle} className={`border ${show==true && "hidden"}`}>Show</button>
  {show && <Custompage onchange={onchange} header={<p>custom header</p>}/>}
 </div>

    </>
  )
}

export default App