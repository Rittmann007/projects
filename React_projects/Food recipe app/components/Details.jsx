import React, { useContext,useEffect } from 'react'
import { Globalcontext } from '../Context'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams()

    const {detailsdata,setdetailsdata,handleaddtofavorites,favorites} = useContext(Globalcontext)

    async function fetchdetailsdata() {
        
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
            const data = await response.json()
            if (data?.recipe) {
                setdetailsdata(data.recipe)
            }
            console.log(data.recipe)
        
    }

    useEffect(() => {
     fetchdetailsdata()
    }, [])
    
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center sm:justify-evenly'>
        <div className='px-2'><img className='rounded-2xl h-80 w-80' src={detailsdata.image_url} alt={detailsdata.title} /></div>
        <div className='flex flex-col gap-1 py-2 px-2 items-center'>
            <div>
                <p className='text-xl text-blue-700'>{detailsdata.title}</p>
                <p className='font-bold'>{detailsdata.publisher}</p>
            </div>
            <div className='flex flex-col gap-1 font-semibold'>
                <button className='border bg-black text-white p-2 rounded-2xl' onClick={()=>handleaddtofavorites(detailsdata)}>{
                       favorites.findIndex(item=>item.recipe_id === detailsdata?.recipe_id) !== -1 ?"Remove from favorites" : "Add to favorites"
                    }</button>
                {
                    detailsdata && detailsdata.ingredients && detailsdata.ingredients.length >0 ? detailsdata.ingredients.map((prop,index)=>{
                        return (<p key={index}>{prop}</p>)
                    }) : <p>some thing went wrong</p>

                }
            </div>
        </div>
    </div>
  )
}

export default Details