import React,{useState,useEffect} from 'react'

function Uselocalstorage(key,defaultvalue) {

    const [value, setvalue] = useState(()=>{
        let currentval
        try {

            currentval = JSON.parse(localStorage.getItem(key) || String(defaultvalue))
            
        } catch (error) {
            console.log(error)
            currentval = defaultvalue
        }
        return currentval
    })

    useEffect(() => {
     localStorage.setItem(key,JSON.stringify(value))
    }, [value,key])
    

  return [value,setvalue]
}

export default Uselocalstorage