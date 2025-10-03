import { useState, useCallback, useEffect, useRef } from "react";
import Usefetch from "./Usefetch";

// learn to implement usefetch hook
function App() {

const [data,loading,error] = Usefetch("https://dummyjson.com/products")

console.log(data)

if (loading) {
  return(<p>Loading please wait ....</p>)
}
if (error != "") {
  return(<p>{error}</p>)
}
  return (
    <>
     <div>
      {data && data.products && data.products.length >0 ?data.products.map((prop,index)=>{
         return (<p key={index}>{prop.title}</p>)
      }) :null}
     </div>
    </>
  );
}

export default App;
