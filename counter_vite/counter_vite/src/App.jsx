import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [count, setCount] = useState(-1 );

  const Inc = () => {
    console.log(`${count} is incremented by 1`);
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)

  }

  const Dec = () => {
    console.log(`${count} is reduced by 1`);
    setCount(count-1)
  }


  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={Inc}>+</button><p> </p><button onClick={Dec}>-</button>
    </>
  )
}

export default App
