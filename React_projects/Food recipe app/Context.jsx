import {createContext,useState,useEffect} from "react"


export const Globalcontext = createContext(null)

export default function Globalstate({children}) {
    const [search, setsearch] = useState("")
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")
    const [userdata, setuserdata] = useState([])
    const [detailsdata, setdetailsdata] = useState([])
    const [favorites, setfavorites] = useState([])

   async function fetchdata(e) {
        e.preventDefault()
        setloading(true)
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
            const data = await response.json()
            

            if (data?.recipes) {
                setuserdata(data?.recipes)
                setloading(false)
                setsearch("")
            }
            
        } catch (error) {
            seterror(error)
        }
    }

    function handleaddtofavorites(itemdata) {
        let cpyfavorites = [...favorites]
        const index = cpyfavorites.findIndex(item => item.recipe_id === itemdata.recipe_id)

        if (index===-1) {
            cpyfavorites.push(itemdata)
        } else {
            cpyfavorites.splice(index,1)
        }
        setfavorites(cpyfavorites)
    }
    

    return (
        <Globalcontext.Provider value={{search,setsearch,loading,error,userdata,fetchdata,detailsdata, setdetailsdata,favorites,handleaddtofavorites}}>
            {children}
        </Globalcontext.Provider>
    )
}