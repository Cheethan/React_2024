import { useState } from 'react'
import './App.css'

import useCurrency from './custom_hooks/useCurrency'
import Inputbox from './assets/Inputbox'




function App() {
  
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyinfo = useCurrency(from);
  console.log(currencyinfo);
  const options = currencyinfo ? Object.keys(currencyinfo) : [];



  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setTo(from);
    setFrom(to);
  }

  const convert = () => {
    setConvertedAmount(amount*currencyinfo[to]);
  }



  return (
    <>
      <div>
        <div>
          <Inputbox label={from} amount={amount} selectCurrency={from}  selectOptions={options}
          onAmountChange={(amount) => setFrom(amount)}
          onCurrencyChange={(x) => setAmount(amount)}
          />
        </div>
        <button className='bg-red-700' onClick={swap}>SWAP</button>
        <div>
        <Inputbox label={to} amount={convertedAmount} selectCurrency={to}  selectOptions={options}
          onAmountChange={(amount) => setTo(amount)}
          onCurrencyChange={(x) => setAmount(amount)}
          />       
        </div>
        <button onClick={convert}>Convert {from} to {to}</button>
      </div>
    </>

  )
}

export default App
