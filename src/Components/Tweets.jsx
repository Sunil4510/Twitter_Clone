import React from 'react'

const Tweets = ({username,name,text}) => {
  return (
    <div className="flex flex-col m-5">
        <div className="flex items-center">
        <img src="/avatar.png" alt="ava" className="border-2 rounded-full w-12 h-12"/> 
        <h1 className="ml-2 text-2xl font-bold">{name}<span className="font-light"> @{username}</span></h1>
        </div>
        <p className="ml-14 mt-4">{text}</p>
    </div>
  )
}

export default Tweets