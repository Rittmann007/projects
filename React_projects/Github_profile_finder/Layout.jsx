import React,{useState} from 'react'

function Layout({data}) {
    const readableTime = new Date(data.created_at).toLocaleString();

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <a href={`https://github.com/${data.login}`}><img className='h-64 w-64 rounded-full' src={data.avatar_url} alt="profile image" /></a>
      <div className='flex my-2'>
        <p className='mx-10'>Name : {data.name?data.name:"null"}</p>
        <p>Username : {data.login}</p>
      </div>
      <div>Created at : {readableTime}</div>
      <div className='flex my-2'>
        <p className='mx-10'>Followers : {data.followers}</p>
        <p>Following : {data.following}</p>
      </div>
      <div>Public gists : {data.public_gists}</div>
      <div>Public repos : {data.public_repos}</div>

    </div>
   
    </>
  )
}

export default Layout