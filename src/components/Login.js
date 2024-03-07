import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const login = () => {
        localStorage.setItem('login',true)  
        navigate('/home')
    }
    
    useEffect(()=>{
    const login = localStorage.getItem('login')
    console.log(typeof(login))
    if(login === 'true') 
    {
        console.log("fjiof")
        navigate('/home')
    }
    

    },[])
  return (
    <div>
      <h1>this is a login page </h1>
      email :<input type="text" name="email" placeholder='email' />
      password : <input type="password" />
      <button onClick={login}>submit</button>
    </div>
  )
}

export default Login
