import React, { useContext } from 'react'
import { Globalcontext } from '../Context'
import { Link } from 'react-router-dom'

function Home() {

    const {userdata,loading,error} = useContext(Globalcontext)

    if (userdata.length <=0) {
        return <p className='font-bold'>Search something else</p>
    }

    if (loading) {
        return <p>Loading please wait ...</p>
    }
    if (error != "") {
        return <p> error occured : {error.message}</p>
    }
  return (
    <div className='flex flex-col items-center text-sm w-full sm:grid sm:grid-cols-4 sm:px-2'>
       {
        userdata && userdata.length >0 ? userdata.map((prop,index)=>{
         return (
            <div key={index} className=' w-[80%] border p-2 mb-2 rounded-xl bg-amber-100'>
                <div><img className='h-[30vh] w-[80vw]' src={prop.image_url} alt="recipe image" /></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-blue-600'>{prop.title}</p>
                    <p className='font-bold'>{prop.publisher}</p> 
                  <Link to={`/details/${prop?.recipe_id}`}>  <button className='border bg-black text-white p-2 rounded-2xl'>See more</button></Link>
                </div>
               
            </div>
        )
        }) : null
       }
    </div>
  )
}

export default Home