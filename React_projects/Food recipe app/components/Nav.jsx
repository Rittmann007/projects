import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Globalcontext } from '../Context'

function Nav() {
const {search,setsearch,fetchdata} = useContext(Globalcontext)
  return (
    <div className='bg-orange-100 flex justify-between p-3 mb-2'>
        <h1 className='font-bold'>Food recipe app</h1>
        <form name='submitform' onSubmit={(e)=>fetchdata(e)}>
            <input type="text"
            value={search}
            placeholder='search recipe'
            name='recipe search'
            onChange={(e)=>setsearch(e.target.value)}
            className='drop-shadow-xl bg-white rounded-2xl w-[40vw] py-2 px-1'
             />
            </form>
        <ul className='flex flex-col sm:flex-row w-[20vw] justify-evenly hover:underline'>
         <li> <NavLink to={"/"}> Home</NavLink> </li>
           <li><NavLink to={"/favorites"}> Favorites</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav