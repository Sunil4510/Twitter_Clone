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
            navigate("/login");
        }else{
          navigate("/home")
        }
    }
    islogged();
}, [])
  return (
    <> 
    <div className="flex md:flex-col-reverse">
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/search" element={<Search/>}/>      
    </Routes>
    </div>
    </>
  )
}

export default App