import React,{useState} from 'react'
import App from './App'

function Listitem({item}) {

    const [displaycurrent, setdisplaycurrent] = useState({})

    function handletoggle(label) {
        setdisplaycurrent({
            ...displaycurrent,
            [label] : !displaycurrent[label]
        })
    }
  return (
    <>
     <li>
        <div className='flex items-center'>
            <p>{item.label}</p>
             {item && item.children && item.children.length>0 ?

             <span className='mx-3 text-2xl font-bold bg-gray-300 rounded-full border w-5 h-5 flex justify-center items-center' onClick={()=>handletoggle(item.label)}>
                {displaycurrent[item.label] ?"-": "+" }
             </span>
             
             :null}
        
        </div>
        

        {item && item.children && item.children.length>0 && displaycurrent[item.label] ?<App list={item.children}/> :null}
        
        </li>
     </>
   
  )
}

export default Listitem