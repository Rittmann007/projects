import { useState, useCallback, useEffect, useRef } from "react";
import Uselocalstorage from "./Uselocalstorage";


// learn to use Uselocalstorage custom hook

function App() {
 
 const[value,setvalue] = Uselocalstorage("theme","normal")

 function handletoggle() {
  setvalue(value=="dark"?"normal":"dark")
 }

  return (
   <>
 <div className={`w-screen h-screen flex justify-center items-center ${value=="dark"&&"bg-black"}`}>
  <div className="flex flex-col items-center">
    <p className={`my-2 text-4xl p-1 ${value=="dark"&&"text-white"}`}>Hello!</p>
    <button className={`border font-bold rounded-sm p-1 ${value=="dark"?"bg-white text-black":"bg-black text-white"}`} onClick={handletoggle}>change mode</button>
  </div>
 </div>
    </>
  )
}

export default App