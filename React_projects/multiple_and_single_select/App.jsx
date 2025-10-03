import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { data } from "./data1";

// learn multiple select and single select

function App() {
  const [ans, setans] = useState([])
  const [multiple, setmultiple] = useState(false)

  function openSpecific(id) {
    if(multiple){
       setans((prev)=> prev.includes(id)?prev.filter((item)=> item !== id):[...prev,id])
    }
    else{
       setans((prevAns) => (prevAns.includes(id) ? [] : [id]));
    }
   
    
  }

  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center"> 
      <button onClick={()=>{setmultiple((prev)=>!prev)}} className="border-2">multiple select</button>
    {data.map((prop)=>{
      return <div key={prop.id}>
       
        <div onClick={()=>{openSpecific(prop.id)}} className="p-5 m-2 border-2">{prop.question}</div>
       {ans.includes(prop.id) && <div>{prop.ans}</div>} 
      </div> 
    })}
    </div>
    </>
  )
}

export default App