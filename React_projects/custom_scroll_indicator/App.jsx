import { useState, useCallback, useEffect, useRef } from "react";



// learn to implement custom scroll

function App() {
 const [list, setlist] = useState([])
 const [loading, setloading] = useState(false)
 const [error, seterror] = useState("")
 const [scrollpercentage, setscrollpercentage] = useState(0)

 const url = "https://dummyjson.com/products?limit=100"

 async function fetchdata() {

  try {
    setloading(true)
     const response = await fetch(url)
  const data = await response.json()

  if(data){
    setlist(data.products)
    setloading(false)
  }
  } catch (error) {
    seterror(error)
    
  }
 }

 useEffect(() => {
  fetchdata()
 }, [url])

 

 function handlescroll() {
  const howmuchscrolled = document.body.scrollTop || document.documentElement.scrollTop

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

  setscrollpercentage((howmuchscrolled/height)*100)
 }
 
 useEffect(() => {
   window.addEventListener("scroll",handlescroll)
 
   return () => {
    window.removeEventListener("scroll",()=>{})
   }
 }, [])

 console.log(scrollpercentage)
 
 if(loading){
  return(<p>loading please wait</p>)
 }

 if(error != ""){
  return (<p>{error}</p>)
 }

  return (
   <>
   <div className="relative">
   <div className="w-screen fixed top-0">
       <div className="flex justify-center items-center h-28 text-2xl bg-gray-400">custom scroll indicator</div>
      <div className="h-5 bg-black"
  style={{ width: `${scrollpercentage}%` }}></div>
    </div>
    <div className="flex flex-col items-center pt-40">
      {list && list.length>0 ? list.map((prop,index)=>{
        return (<p key={index}>{prop.title}</p>)
      }) :null}
    </div>
   </div>

    </>
  )
}

export default App