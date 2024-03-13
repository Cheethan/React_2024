import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  let [password,setPassword] = useState('');
  let [num,setNum] = useState(false);
  let [len,setLen] = useState(0);
  
  const passchange = useCallback(()=>{

    let pass = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(num) letters += "1234567890"

    for(let i=0;i<len;i++){
      let k = Math.floor(Math.random()*letters.length + 1);
      pass += letters.charAt(k);
    }

    setPassword(pass);
  },[len,num,setPassword])

  useEffect(()=>{
    passchange();
  },[len,num,passchange])

  const passref = useRef(null);

  const passwordcopy = useCallback(()=>{ 
    passref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    
    <>
      <div className='w-fit bg-gray-700 px-10 py-4 my-8 rounded-lg mx-auto'>
        <div className='flex gap-x-1 px-3 py-2 '>
          <input className='rounded-lg' type="text" value={password} placeholder='  Password'  readOnly/>
          <button className='bg-orange-500 rounded-lg text-white px-2 py-1' onClick={passwordcopy}>Copy</button>
        </div>

        <div className='flex gap-x-5 text-white'>
          <div className='flex align-middle justify-between'>
            <input type="range" min={0} max={10} value={len} onChange={(e)=> setLen(e.target.value)}/>Length: {len}
          </div>

          <div className='flex gap-1'>
            <input type="checkbox" defaultChecked={num} id = "x" onChange={()=>{setNum((pre)=>!pre)}}/><label htmlFor='x'>Numbers</label>
          </div>
          
          
        </div>

      </div>
    </>
  ) 
}

export default App
