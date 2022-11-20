import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router'
import Profile from './Components/Profile'
import Search from './Components/Search'

const App = () => {
  const navigate = useNavigate();
  let login = localStorage.getItem('login');

  useEffect(() => {
    function islogged(){
        if(!login){
            navigate("/Twitter_Clone/login");
        }else{
          navigate("/Twitter_Clone/home")
        }
    }
    islogged();
}, [])
  return (
    <> 
    <div className="flex md:flex-col-reverse">
    <Navbar/>
    <Routes>
      <Route path="/Twitter_Clone/home" element={<Home/>}/>
      <Route path="/Twitter_Clone/login" element={<Login/>}/>
      <Route path="/Twitter_Clone/profile" element={<Profile/>}/>
      <Route path="/Twitter_Clone/search" element={<Search/>}/>      
    </Routes>
    </div>
    </>
  )
}

export default App