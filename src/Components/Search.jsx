import React, { useState } from 'react'
import { useLocation } from 'react-router';
import Tweets from './Tweets';

const Search = () => {
    const location = useLocation(); 
    const[search,setsearch] = useState(location.search.substring(1));
    const res = location.state
    const[info,setinfo] = useState(res);
    const newD = info.filter((item)=>item.text.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()))
    console.log(newD)
    const[data,setdata] = useState(newD);

    const handlesearch = (e)=>{
        setsearch(e.target.value)
        const newD = info.filter((item)=>item.text.toLowerCase().includes(e.target.value.toLowerCase()) || item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setdata(newD)
    }
   return (
    <div className="m-10">
        <div className="border-2 w-96 flex items-center rounded-2xl pl-2"> 🔍<input type="text" className="p-2 outline-none w-80 pl-2" onChange={handlesearch} value={search} placeholder="Search Twitter"/></div>
           {console.log(data.length)} 
        {(data.length!==0 && data[0].length!==0) && data.map((item,i)=><Tweets key={i} name={item.name} username={item.username} text={item.text}/>)}
    </div>
  )
}

export default Search

