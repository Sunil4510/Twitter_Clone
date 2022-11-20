import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const[emails,setemail]=useState("");
    const[passwords,setpassword]=useState("");
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const[eborders,setborders] = useState("focus:ring-red-600 focus:border-red-600")
    const[pborder,setpborder] = useState("focus:ring-red-600 focus:border-red-600")

    const handleEmail = (e)=>{
        setemail(e.target.value); //stroing gmail 
         if(isVerifyE(e.target.value)){
            setborders("focus:ring-green-600 border-green-400 focus:border-green-600")
        }else{
            setborders("focus:ring-green-600 focus:border-red-600")
        }
    }
    const handlePassword = (e)=>{
        setpassword(e.target.value) //storing password
        if(isVerifyP(e.target.value)){
            setpborder("focus:ring-green-600 border-green-400 focus:border-green-600")
        }else{
            setpborder("focus:ring-green-600 focus:border-red-600")
        }
    }
    const isVerifyE = (value)=>{
        let checker = value.length-value.indexOf('@');
        return value.includes('@gmail.com') && checker === 10 && (value.indexOf('@')-1)!==-1;
    }

    const isVerifyP = (value)=>{
        return re.test(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!emails || !passwords)alert("Please enter your email and password")
        else if(!isVerifyE(emails)){
            alert("email is not correct")
        }else if(!isVerifyP(passwords)){
            alert("password is not correct")
        }else{
            alert("logged in successfully")
            localStorage.setItem("login","success");
            navigate("/home")
        }
    }
    useEffect(() => {
      function islogged(){
        if(localStorage.getItem("login")){
            //console.log("me")
            navigate("/home")
      }
    }
    islogged();
    },[])
    
  return (
    <section className="flex-1 bg-gray-50 dark:bg-gray-900 h-screen">
     <div className="h-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen sm:h-screen lg:py-0">
        <div className="w-2/5 p-2 bg-white rounded-lg shadow dark:border md:mt-0 sm:w-auto md:w-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-2 md:space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email"  value={emails} onChange={handleEmail} className={`${eborders} bg-gray-50 outline-none border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password"  placeholder="••••••••" value={passwords} onChange={handlePassword} className={`${pborder} bg-gray-50 outline-none border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} required=""/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login