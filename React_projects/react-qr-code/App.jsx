import { useState, useCallback, useEffect, useRef } from "react";
import Qrcode from "react-qr-code"


// learn to use react-qr-code

function App() {
 
  const [input, setinput] = useState("")
  const [qrinput, setqrinput] = useState("")

  function generate() {
    setqrinput(input)
    setinput("")
  }

  return (
   <>
 <div className="flex flex-col justify-center items-center">
  <div className="my-2">
    <input className="border mx-2" type="text" name="qr-code" onChange={(e)=>setinput(e.target.value)} value={input} placeholder="enter your data" />
    <button className="border rounded-sm p-1 bg-gray-400" onClick={()=>generate()} disabled = {input==""?true:false}>generate</button>
  </div>
  <Qrcode value = {qrinput} bg-color = "white"/>
 </div>
    </>
  )
}

export default App