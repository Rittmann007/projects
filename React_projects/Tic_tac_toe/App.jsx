import { useState, useCallback, useEffect, useRef } from "react";

// learn to use api and render using reusable components
function App() {

const [squares, setsquares] = useState(Array(9).fill(""))
const [isxtrue, setisxtrue] = useState(true)
const [statement, setstatement] = useState("")

function handleclick(currentindex) {
  let tempsquares = [...squares]
  if(winner(squares) ||squares[currentindex])return
  tempsquares[currentindex] = isxtrue?"X":"O"
  setisxtrue(!isxtrue)
  setsquares(tempsquares)

}

function winner(squares) {
  const winseq =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ];
for (let i = 0; i < winseq.length; i++) {
  const [x,y,z] =winseq[i]

  if (squares[x]==squares[y]&&squares[x]==squares[z]) {
    return squares[x]
  }
  
}
return null

}

function restart() {
  setsquares(Array(9).fill(""))
  setisxtrue(true)
}

useEffect(() => {
  if(winner(squares)){
setstatement(`the winner is : ${winner(squares)}`)
  }
  else if (winner(squares)==null && squares.every((item)=>item!="")) {
    setstatement("Draw")
  } else {
    setstatement(`next play of : ${isxtrue?"X":"O"}`)
  }
 
}, [squares,isxtrue])



  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="flex">
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(0)} >{squares[0]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(1)} >{squares[1]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(2)} >{squares[2]}</button>
        </div>
        <div className="flex">
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(3)} >{squares[3]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(4)} >{squares[4]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(5)} >{squares[5]}</button>
        </div>
        <div className="flex">
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(6)} >{squares[6]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(7)} >{squares[7]}</button>
          <button className="h-28 w-28 bg-gray-400 border text-5xl rounded-xl" onClick={()=>handleclick(8)} >{squares[8]}</button>
        </div>
        <p>{statement}</p>
        <button onClick={restart} className="border m-2 p-1 rounded-md bg-blue-600">restart</button>
      </div>
    </>
  );
}

export default App;
