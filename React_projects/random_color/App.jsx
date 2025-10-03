import { useState, useCallback, useEffect, useRef } from "react";




function App() {
  const [typeofcolor, settypeofcolor] = useState("hex")
  const [color, setcolor] = useState("#000000");
  
  // learn generating a random color
  
  function Randomcolorutility(length) {
 return Math.floor(Math.random()*length)
}

  function createrandomhexcolor() {
    const H = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F" ]
    let hexcolor = "#"

    for (let i = 0; i < 6; i++) {
       hexcolor += H[Randomcolorutility(H.length)];
      
    }

    setcolor(hexcolor)
  }

  function createrandomrgbcolor() {
    let r = Randomcolorutility(255)
    let g = Randomcolorutility(255)
    let b = Randomcolorutility(255)

    setcolor(`rgb(${r},${g},${b})`)
  }

  return (
    <>
    <div className="h-screen flex flex-col" style={{ backgroundColor: color }}>
    <div className="flex justify-center"  >
      <button className="bg-gray-600 p-1 m-1 rounded-xs" onClick={()=>settypeofcolor("hex")}>hex color</button>
      <button className="bg-gray-600 p-1 m-1 rounded-xs" onClick={()=>settypeofcolor("rgb")}>rgb color</button>
      <button className="bg-gray-600 p-1 m-1 rounded-xs" onClick={typeofcolor=="hex"? createrandomhexcolor: createrandomrgbcolor}>Generate random color</button>
    </div>

    <div className="flex flex-col flex-1 justify-center items-center font-extrabold text-7xl text-white">
      <h1>{typeofcolor}</h1>
      <h1>{color}</h1>
    </div>
   </div>
    </>
  )
}

export default App