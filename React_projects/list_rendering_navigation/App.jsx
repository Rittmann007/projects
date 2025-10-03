import { useState, useCallback, useEffect, useRef } from "react";
import Listitem from "./Listitem";


// learn to toggle with + - and using objects

function App({list}) {
 
  

  return (
   <>
  <ul className="list-disc ml-5">
    {list.length>0 ? list.map((prop,index)=>{
      return (<Listitem item = {prop} key={index}/>)
    }) : null}
  </ul>
    </>
  )
}

export default App