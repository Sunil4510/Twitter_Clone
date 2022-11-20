import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Profile = () => {

    const navigate = useNavigate();
    const[profile,setprofile] = useState({
        "id": 1,
        "first_name": "Jolie",
        "last_name": "Ferne",
        "email": "jferne0@wesbite.com",
        "gender": "Female",
        "country": "Sweden"
        })

    useEffect(() => {
      if(!localStorage.getItem('login')){
            navigate('/login')
            return;
      }
      /*async function prof(){
        const data = await fetch("https://tweets.free.beeceptor.com/profile")
        const info = data.json();
        setprofile(info);
      }*/
      //prof(); It works as expected but maximum requests can be 50 only that's why I am using static data. 
    }, [])
    return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className=" w-96 h-96 rounded-2xl p-6 shadow-2xl shadow-sky-300">
        <div className="flex items-center flex-col">
            <div className="flex items-center ">
                <img src="./avatar.png" alt="avt" className="w-24 h-24"/>
            </div>
            <div className="mt-10 font-bold">
                    <p className="text-red-600">const<span className="text-indigo-600"> aboutme</span> = function{" () {"}</p> 
                    <div className="profile_js ml-10 mt-2 space-y-1">
                        <p>first_name:<span>{`'${profile.first_name}',`}</span></p>
                        <p>last_name:<span> {`'${profile.last_name}',`}</span></p>
                        <p>email:<span> {`'${profile.email}',`}</span></p>
                        <p> gender:<span> {`'${profile.gender}',`}</span></p>
                        <p> country:<span>{`'${profile.country}',`}</span></p>  
                    </div>
                    <p className="text-red-600">{"}"}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

//<h1>{profile.first_name +" " + profile.last_name}</h1>
            // <h2>{profile.email}</h2>
            // <h2>{profile.country}</h2>
            // <h2>{profile.gender}</h2>
