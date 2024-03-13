import React, { useState, useContext } from 'react'
import x from "../Context/UserContext"

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {user,setUser} = useContext(x);


  const submit_btn = () => {
    setUser(username);
    console.log("user :", user);
  }

  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit_btn}>Submit</button>

    </div>
  )
}

export default Login
