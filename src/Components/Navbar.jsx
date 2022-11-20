import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const imgs = ['./home.svg','./user.png']
    const link = ['/Twitter_Clone/home','/Twitter_Clone/profile']
    const handlelogout = ()=>{
        localStorage.removeItem('login');
        alert("logout successfully");
        navigate("/Twitter_Clone/login");
      }
  return (
    <div className="navbar 2xl:h-auto border-r-2 md:max-h-10 md:w-auto md:bottom-0 md:sticky md:bg-white md:border-r-0 ">
        <div className="flex items-center flex-col md:flex-row ml-20 md:ml-0 md:mt-0 md:justify-between">
            <img src="./twitter.svg" className="h-12 w-12 mt-10 md:mt-0" alt="logo"/>
            {imgs.map((item,i)=><Link to={link[i]} key={i}><img src={item} className="w-8 h-8 mt-10 md:mt-0 cursor-pointer" alt={i}/></Link>)}
           {localStorage.getItem('login')!==null && <button className="mt-10 md:mt-0 h-auto p-2 mr-2 rounded-3xl w-20 font-bold hover:bg-sky-300 bg-sky-400" onClick={handlelogout}>Logout</button>}
        </div>
    </div>
  )
}

export default Navbar