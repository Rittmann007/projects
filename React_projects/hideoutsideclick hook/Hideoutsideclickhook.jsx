import React,{useEffect,useState} from 'react'

function Hideoutsideclickhook(ref,handleclick) {

    
    
  useEffect(() => {
   function listener(event) {
     if (!ref.current || ref.current.contains(event.target)) {
        return
     }

     handleclick()
   }

   document.addEventListener("mousedown",listener)
   document.addEventListener("touchstart",listener)
  
    return () => {
      document.removeEventListener("mousedown",listener)
   document.removeEventListener("touchstart",listener)
  
    }
  }, [ref])
  

}

export default Hideoutsideclickhook