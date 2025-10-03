import React,{useState} from 'react'

function Tabs({contents}) {
    const [tabindex, settabindex] = useState(0)

    function handlechange(currentindex) {
        settabindex(currentindex)
    }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
        <div>
            {contents.length>0 ? contents.map((prop,index)=>{
                return (<button onClick={()=>handlechange(index)} key={index} className={`mx-2 px-2 text-2xl ${tabindex==index? "bg-amber-300":"bg-red-500"}`}>{prop.label}</button>)
            }) :null}
        </div>
        <div className='font-bold text-3xl my-2'>
            {contents[tabindex] && contents[tabindex].content}
        </div>
    </div>
    </>
  )
}

export default Tabs