import { useState, useCallback, useEffect, useRef } from "react";


// learn to implement a image slider

function App() {
 const url = " https://picsum.photos/v2/list"

   const [images, setimages] = useState([])
   const [loading, setloading] = useState(true)
   const [error, seterror] = useState(null)
   const [currentpic, setcurrentpic] = useState(0)
  

   async function getimages(url) {
    try {
      setloading(true)
       const response = await fetch(url)
    const data = await response.json()
     setimages(data)
      
    } catch (error) {
      seterror(error)
    } finally {
    setloading(false)
  }

    
   }

   useEffect(() => {
    if(url !== ""){
      getimages(url)
    }
   }, [url])

   if(loading){return (<div>loading please wait</div>)}
   if(error!==null){return (<div>{error}</div>)}


   function setnext() {
    setcurrentpic(currentpic==images.length-1 ? 0 : currentpic+1)
   }

   function setprevious() {
    setcurrentpic(currentpic==0 ? images.length-1: currentpic-1)
   }
   

  return (
    <>
    <div className="h-screen w-screen flex justify-center items-center">
   <div className="relative h-80 w-80 flex justify-center items-center">
    <h1 className="absolute left-2 text-white font-extrabold text-2xl border" onClick={setprevious}>&lt;</h1>
      
      {images.length != 0 ? images.map((prop,index)=>{

return (<img key={prop.id} src = {prop.download_url} alt={prop.download_url} className={`h-full w-full ${currentpic!=index ? "hidden" : ""}`}/>)

    }):null}
    
   <h1 className="absolute right-2 text-white font-extrabold text-2xl border" onClick={setnext}>&gt;</h1>
    <div className="flex absolute bottom-5">
    {images.length != 0 ? images.map((prop,index)=>{

return (<div key={index} className={`rounded-full h-2 w-2 ${currentpic!=index ? "bg-white" : "bg-gray-400"}`} onClick={()=>setcurrentpic(index)} ></div>)

    }):null}</div>
   </div>

   </div>
   
    </>
  )
}

export default App