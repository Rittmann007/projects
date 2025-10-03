import { useState, useCallback, useEffect, useRef } from "react";


// learn to build a weather app
function App() {

  const [search, setsearch] = useState("kolkata")
  const [userdata, setuserdata] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")
  

  async function fetchdata(search) {
    setloading(true)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7828dbd913d469e0e2c77178da94ea8e`)
      const data = await response.json()
      

      if (data) {
        setuserdata(data)
        setloading(false)
        
      }
    } catch (error) {
      seterror(error)
    }
  }

  useEffect(() => {
   fetchdata(search)
  }, [])
  
  function handleclick() {
    fetchdata(search)
  }

  if (loading) {
    return <div>loading please wait ...</div>
  }
  if (error != "") {
    return <div>some error occured : {error}</div>
  }


  return (
    <>
     <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-2xl w-[40vw] flex justify-between my-5">
        <input className="border rounded-2xl p-2 w-[80%]" name="searchfield" type="text" value={search} placeholder="search your city ..." onChange={(e)=>setsearch(e.target.value)} />
        <button className="bg-blue-600 text-white rounded-2xl p-1.5" onClick={handleclick}>search</button>
      </div>
      {userdata?.name ?<div className="bg-[#ccccff] w-[40vw] h-[60vh] rounded-xl flex flex-col items-center">
        <div className="font-bold text-2xl my-2">{userdata?.name},{userdata?.sys?.country}</div>
        <div className="font-bold text-4xl my-2">temp : {userdata?.main?.temp} ,  feels like : {userdata?.main?.feels_like}</div>
        <div className="font-bold text-gray-600 text-4xl my-[10%]">{userdata?.weather?.[0]?.description}</div>
        <div className="flex justify-evenly w-[80%] my-[5%]">
          <div className="font-bold text-2xl">Humidity : {userdata?.main?.humidity}</div>
          <div className="font-bold text-2xl">Pressure : {userdata?.main?.pressure}</div>
        </div>
      </div> : <p>Name your city correctly</p>}
     </div>
    </>
  );
}

export default App;
