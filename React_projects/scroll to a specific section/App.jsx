import { useState, useCallback, useEffect, useRef } from "react";


// learn to implement scroll to a specific part
function App() {
  const clickref = useRef()

  const data = [
    {
      label : "first card",
      style :{
        width : "100%",
        height : "600px",
        background : "red"
      }
    },
    {
      label : "second card",
      style :{
        width : "100%",
        height : "600px",
        background :"green"
      }
    },
    {
      label : "third card",
      style :{
        width : "100%",
        height : "600px",
        background : "blue"
      }
    },
    {
      label : "fourth card",
      style :{
        width : "100%",
        height : "600px",
        background : "cyan"
      }
    },
    {
      label : "fifth card",
      style :{
        width : "100%",
        height : "600px",
        background :"yellow"
      }
    }
  ]

 
  

  function handletobottom() {
    clickref.current.scrollIntoView({behavior:"smooth"})
  }
  
  


  return (
    <>
     <div>
      <button onClick={handletobottom}>scroll to</button>
      {
        data ? data.map((prop,index)=>{
          return (<div ref={index==3?clickref:null} key={index} style={prop.style}>{prop.label}</div>)
        }) : null
      }
     </div>
    </>
  );
}

export default App;
