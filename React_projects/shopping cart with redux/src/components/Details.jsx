import React, { useContext,useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addtocart,remove } from "../Redux/dataslice"




function Details() {
  const [totalcart, settotalcart] = useState(0)
    const cartdata  = useSelector((state) => state.cartdata.value)
const dispatch = useDispatch()
    
    function handleremove(item) {
      dispatch(remove(item.id))
    }

    useEffect(() => {
     settotalcart(cartdata.reduce((acc,curr)=>acc+curr.price,0))
    }, [cartdata])
    
  return (
   <>
   <div className='flex items-start'>
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center py-2">
        {cartdata && cartdata.length>0 ?
             cartdata.map((prop,index)=>{
              return (
                  <div key={index} className='flex flex-col items-center border rounded-xl h-72 w-60 p-2 gap-1'>
                      <img className='w-40 h-40' src={prop.image} alt="product image" />
                      <div>
                          <p className='w-40 line-clamp-2'>{prop.title}</p>
                          <p className='font-bold'>{prop.price}</p>
                      </div>
                      <button onClick={()=>handleremove(prop)} className='text-white rounded-xl bg-black px-10 py-1'>
                        Remove
                      </button>
                  </div>
              )
             })
         :   <div>Nothing to show</div>}
      </div>
      <div className='w-[20vw] bg-amber-100 flex flex-col items-center px-1 py-2'>
        <p>Total items</p>
        <p>{cartdata.length}</p>
        <p>Total amount</p>
        <p>{totalcart}</p>
      </div>
      
      </div>
  
   </>
  )
}

export default Details