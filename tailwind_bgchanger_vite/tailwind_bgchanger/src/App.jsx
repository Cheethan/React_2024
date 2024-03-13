import { useState } from 'react'
import './App.css'

function App() {
  let [color, setcolor] = useState("BLACK")



  return (
    <>
      <div className="w-full h-screen flex justify-center" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            <button className='bg-red-500 rounded-3xl px-3 py-1 border-solid' onClick={() => setcolor("red")}>RED</button>
            <button className='bg-green-500 rounded-3xl px-3 py-1 border-solid' onClick={() => setcolor("green")} >GREEN</button>
            <button className='bg-pink-500 rounded-3xl px-3 py-1 border-solid' onClick={() => setcolor("pink")}>PINK</button>
            <button className='bg-yellow-500 rounded-3xl px-3 py-1 border-solid' onClick={() => setcolor("yellow")}>YELLOW</button>
            <button className='bg-indigo-500 rounded-3xl px-3 py-1 border-solid' onClick={() => setcolor("indigo")}>INDIGO</button>
          </div>
        </div>
      </div>
    </>


  )
}

export default App
