import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Tweets from './Tweets';
import info from './info'

const Home = () => {

  const navigate = useNavigate();
  const[search,setsearch] = useState();
  const [data,setdata] = useState([]);
  let login = localStorage.getItem('login');
  const[input,setinput] = useState();

useEffect(() => {
     async function islogged(){
        if(login===null){
            navigate("/login");
        }
        else{
          //const res = await fetch("https://tweets.free.beeceptor.com/tweets/all");
          //const info = await res.json();
          //console.log(info)
          info.includes.users.map((item,i)=>{
            //console.log(item)
            setdata(prev=>[{
              'text':info.data[i].text,
              'username':item.username,
              'name':item.name
            },...prev])
          })
        }
      }
    islogged();
}, [])

const handletweet = (e)=>{
  if(!input){
    alert("please type something")
  }
  else{
  setdata(prev=>[{
    'text':input,
    'username':"anonymus",
    'name':"anonymus"
  },...prev])
}
}
let btn = "w-20 rounded-xl p-2 font-bold"

const handleEdit = (i)=>{
let txt = prompt("please enter new text","");
if(txt==="" || txt===null){
  alert("you have cancelled the edit")
}else{
  const newD = data.map((item,j)=>{
    if(j===i){
      return {...item,text:txt}
    }
    return item
  })

  setdata(newD)
}
}
const handledelete = (i)=>{
  const newD = data.filter((d,j)=>j!==i)
  setdata([])
  setdata(newD)
}
const handlesearch = ()=>{
  navigate(`/search?${search}`,{state:data})
}

  return (
    <>
    <div className="home flex flex-col min-h-screen h-auto mr-auto border-r-2">
        <h1 className="m-4 font-bold text-2xl">Home</h1>
          <br/>
            <div className="flex items-center ml-2">
              <img src="/avatar.png" className="w-10 h-10" alt="avatar"/>
              <input type="text" placeholder="What's  happening?" className="ml-2 outline-none text-xl w-auto" onChange={(e)=>setinput(e.target.value)}/>
            </div>
          <hr className="mt-10 mx-10"/>
        <button onClick={handletweet} className="w-20 font-bold p-2 text-white text-center ml-auto mr-10  mt-4 rounded-3xl bg-sky-400">Tweet</button>
        <hr className="mt-4"/>
        {data.map((item,i)=>{
          
          if(item && item.text.length > 0){
           return(
            <div key={i}>
              <Tweets key={i} name={item.name} username={item.username} text={item.text}/>
                <div className="flex items-center justify-evenly">
                  <button onClick={()=>handleEdit(i)} className={`${btn} bg-gray-300`}>Edit</button>
                  <button onClick={()=>handledelete(i)} className={`${btn} bg-red-600`}>Delete</button>
                </div>
          </div>
          )}}
          )}
    </div>
      <div className="search">
          <div className="flex items-center m-5 justify-start">
          <div className="border-2 w-80 flex items-center rounded-2xl pl-2"> 🔍<input type="text" className="p-2 outline-none w-40 pl-2" onChange={(e)=>setsearch(e.target.value)} value={search} placeholder="Search Twitter"/></div>
            {search && <button className="w-auto ml-auto p-2 rounded-2xl bg-sky-400" onClick={handlesearch}>Search</button>}
          </div>
      </div>
    </>
  )
}

export default Home