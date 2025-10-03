import { useState, useCallback, useEffect, useRef } from "react";


// learn star rating

function App() {

  const [hover, sethover] = useState(0)

  const [rating, setrating] = useState(0)

  function mouseclick(currentindex) {
    setrating(currentindex)
  }

  function mouseleave(currentindex) {
    sethover(rating)
  }  

  function mousemove(currentindex) {
    sethover(currentindex)
  }

  return (
    <>
    <div className="flex h-32 justify-center items-center bg-gray-300">
    {[...Array(5)].map((_,index)=>{

      index++;

      return (
        <div className={`rounded-full h-10 w-10 m-3 ${index <= (hover || rating) ? "bg-amber-300" : "bg-black"}`}
        key={index}
          onMouseMove={()=>mousemove(index)}
          onMouseLeave={()=>mouseleave(index)}
          onClick={()=>mouseclick(index)}
        
        ></div>
       )

    })}
     </div>
    </>
  )
}

export default App