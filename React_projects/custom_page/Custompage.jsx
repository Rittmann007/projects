import React,{useState} from 'react'

function Custompage({header,body,footer,onchange}) {
   

  return (
    <>
   <div className='flex flex-col justify-center items-center bg-gray-400 h-[50%] w-[50%] rounded-2xl'>
    <header className='flex flex-col justify-center items-center w-[80%] text-5xl border py-5 px-20 bg-emerald-200 mx-2 rounded-2xl'>
        <p onClick={onchange} className='cursor-pointer'>×</p>
        {header?header :<p>sample header</p>}</header>
    <body className='flex flex-col justify-center items-center w-[80%] text-5xl border py-5 px-20 bg-emerald-300 my-2 rounded-2xl'>{body?body:<p>sample body</p>}</body>
    <footer className='flex flex-col justify-center items-center w-[80%] text-5xl border py-5 px-20 bg-emerald-400 my-2 rounded-2xl'>{footer?footer:<p>sample footer</p>}</footer>
   </div>
    </>
  )
}

export default Custompage