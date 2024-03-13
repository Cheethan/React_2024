import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'


function App() {

  return (
    <>
      
      <UserContextProvider>
        <h1>App</h1>
        <Login/>
      </UserContextProvider>
      
    </>
  )
}

export default App
