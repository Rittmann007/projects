import React,{useEffect,useState} from 'react'

function Usewindowresize() {

    const [windowsize, setwindowsize] = useState({
      width:0,
      height:0
    })

    function handleresize() {
      setwindowsize({
        width : window.innerWidth,
        height : window.innerHeight
      })
    }
    
  useEffect(() => {
    handleresize()

    window.addEventListener("resize",handleresize)
  
    return () => {
     window.removeEventListener("resize",handleresize)
    }
  }, [])
  
  return (windowsize)
  

}

export default Usewindowresize