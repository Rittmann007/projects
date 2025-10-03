import React,{useState} from 'react'

function Layout({data,onclickfunc}) {
   
  return (
    <>
   <ul>
    {data ?data.map((prop,index)=>{
      return (<li onClick={onclickfunc} key={index}>{prop}</li>)
    }) :null}
   </ul>
   
    </>
  )
}

export default Layout