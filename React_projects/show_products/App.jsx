import { useState, useCallback, useEffect, useRef } from "react";


// learn to display products

function App() {
 
  const [products, setproducts] = useState([])
  const [count, setcount] = useState(0)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")
  const [isdisabled, setisdisabled] = useState(false)

 async function fetchproducts() {

  try {
    setloading(true)
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count==0?0:count*20}`)
  const data = await response.json()

  if(data){
    setproducts((prev)=>[...prev,...data.products])
    setloading(false)
  }
  } catch (error) {
    seterror(error)
    
  }
    
  }

  useEffect(() => {
   fetchproducts()
  }, [count])
  
  useEffect(() => {
    if(products.length==100){
      setisdisabled(true)
    }
   }, [products])
   
  
  if(loading){
    return(<div>loading please wait</div>)
  }
   if(error!=""){
    return(<div>{error}</div>)
   }

  

  return (
   <>
   <div className="flex flex-col items-center">
    <div className="grid grid-cols-5">
      {products.length!=0 ? products.map((prop,index)=>{
         
        return (
        <div key={index} className="border-2 m-5 flex flex-col items-center">
        <img src={prop.thumbnail} alt={prop.title}></img>
        <p>{prop.title}</p>
        <p>price-{prop.price}</p>
        </div>
        )

      }) : null}
    </div>
    <div className="border my-2">
      
      {isdisabled ? <p>you have reached to 100 products</p> : <button onClick={()=>setcount(count+1)} disabled={isdisabled}>load more</button>}
    </div>
   </div>
    </>
  )
}

export default App