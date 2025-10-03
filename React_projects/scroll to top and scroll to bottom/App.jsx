import { useState, useCallback, useEffect, useRef } from "react";


// learn to implement scroll to top and scroll to bottom
function App() {

  const [userdata, setuserdata] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")

  const indicator = useRef(null)

 async function fetchdata() {
  setloading(true)
    try {
      const response  = await fetch("https://dummyjson.com/products?limit=100")
      const data = await response.json()

      if (data) {
        setuserdata(data.products)
        setloading(false)
      }
    } catch (error) {
      seterror(error)
    }
  }


  useEffect(() => {
  fetchdata()
  }, [])

  function handletotop() {
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  }

  function handletobottom() {
    indicator.current.scrollIntoView({behavior:"smooth"})
  }
  
  if (loading) {
    return <p>loading please wait ...</p>
  }
  if (error != "") {
    return <p>error occured : {error}</p>
  }


  return (
    <>
     <div className="flex flex-col items-center">
      <h1>scroll tester</h1>
      <button className="border" onClick={handletobottom}>scroll to bottom</button>
      <div>
        {
          userdata && userdata.length>0 ?userdata.map((prop,index)=>{
            return (<p key={index}>{prop.title}</p>)
          }) : null
        }
      </div>
      <button ref={indicator} className="border" onClick={handletotop}>scroll to top</button>
     </div>
    </>
  );
}

export default App;
