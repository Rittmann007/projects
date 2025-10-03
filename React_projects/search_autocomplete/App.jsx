import { useState, useCallback, useEffect, useRef } from "react";
import Layout from "./Layout";

// learn to use api and render using reusable components
function App() {
  const [user, setuser] = useState([])
  const [loading, setloading] = useState(false)
  const [filterdata, setfilterdata] = useState([])
  const [error, seterror] = useState("")
  const [showdropdown, setshowdropdown] = useState(false)
  const [inputval, setinputval] = useState("")

 async function fetchdata() {

  try {
     const response = await fetch("https://dummyjson.com/users")
    const data = await response.json()

    if (data) {
      setuser(data.users.map((prop)=>prop.firstName))
    }
  } catch (error) {
    seterror(error)
  }}

useEffect(() => {
 fetchdata()
}, [])

function handlechange(e) {
  let query = e.target.value.toLowerCase()
  setinputval(query)
  if (query.length > 1) {
   let data = user.filter((prop)=>prop.toLowerCase().startsWith(query))
    setfilterdata(data)
    setshowdropdown(true)
  } else {
    setshowdropdown(false)
  }
}

function handleclick(e) {
  let data = e.target.innerText
  setinputval(data)
  setshowdropdown(false)
  setfilterdata([])
}

if (loading) {
  return(<p>loading please wait</p>)
}
if (error!="") {
  return(<p>{error}</p>)
}

  
  return (
    <>
    <div>
      <input type="text" value={inputval} onChange={handlechange} placeholder="search" name="searchbar" />
      {showdropdown && <Layout data={filterdata} onclickfunc={handleclick}/>}
    </div>
     
    </>
  );
}

export default App;
