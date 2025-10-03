import React, { useContext,useState,useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {addtocart,remove } from "../Redux/dataslice"
import {Circles} from "react-loader-spinner"


function Home() {
    const [loading, setloading] = useState(false)
    const [userdata, setuserdata] = useState([])
    const [error, seterror] = useState("")
    const dispatch = useDispatch()
    const cartdata  = useSelector((state) => state.cartdata.value)

    async function fetchdata() {
         setloading(true)
         try {
             const response = await fetch("https://fakestoreapi.com/products")
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
    }, [])
    
    function handleclick(item) {
       
        const index = cartdata.findIndex(itemdata => itemdata.id === item.id)

        if (index===-1) {
           dispatch(addtocart(item))
        } else {
            dispatch(remove(item.id))
        }
        
    }

  return (
    <>
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center py-2">
      {userdata && userdata.length>0 ?
           userdata.map((prop,index)=>{
            return (
                <div key={index} className='flex flex-col items-center border rounded-xl h-72 w-60 p-2 gap-1'>
                    <img className='w-40 h-40' src={prop.image} alt="product image" />
                    <div>
                        <p className='w-40 line-clamp-2'>{prop.title}</p>
                        <p className='font-bold'>{prop.price}</p>
                    </div>
                    <button onClick={()=>handleclick(prop)} className='text-white rounded-xl bg-black px-10 py-1'>
                      {cartdata.some(item=>item.id === prop?.id)  ?"Remove" : "Add"}
                    </button>
                </div>
            )
           })
       :   <Circles
      height={'120'} 
      width={'120'}
      visible ={true}
      />}
    </div>
    </>
  )
}

export default Home