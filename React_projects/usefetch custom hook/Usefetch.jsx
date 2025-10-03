import React,{useEffect,useState} from 'react'

function Usefetch(url,options) {

    const [userdata, setuserdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")

    async function fetchdata() {
        setloading(true)
        try {
           const response = await fetch(url)
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
     fetchdata()
    }, [url])
    
  return [userdata,loading,error]

}

export default Usefetch