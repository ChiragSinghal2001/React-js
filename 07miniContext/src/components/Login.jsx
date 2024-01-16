import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser} = useContext(UserContext)

 const HandleSubmit = (e)=>{
    e.preventDefault();
    setUser({username,password});
 }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{
            setUsername(e.target.value);
        }} />{"  "}
        <input type="text" placeholder='password' value={password} onChange={(e)=>{
            setPassword(e.target.value);
        }} />
        <button onClick={HandleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login
