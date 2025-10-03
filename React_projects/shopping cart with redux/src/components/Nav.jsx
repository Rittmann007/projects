import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {

  return (
   <>
   <div className='flex justify-evenly py-2 mb-5 sticky top-0 bg-amber-100'>
    <p className='font-bold'>Shopping cart app</p>
    <ul className='flex gap-10 hover:underline'>
      <NavLink to={"/"}><li>Home</li></NavLink>  
      <NavLink to={"/details"}> <li>Details</li></NavLink> 
    </ul>
   </div>
   </>
  )
}

export default Nav