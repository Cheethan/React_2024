import React from "react"

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = 'usd',
    selectOptions = []

}) {

    return (
        <>
            <div className='bg-black flex rounded-2xl gap-x-44 py-10 px-11'>
                <div className='flex flex-col w-1/2 items-start bg-red-700'>
                    <label>{label}</label>
                    <input type="number"
                        className='bg-transparent  text-white'
                        value={amount}
                        placeholder='0'
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                </div>
                <div className='bg-green-700 flex flex-col w-1/2 items-center gap-y-3'>
                    <label>Currency Option</label>
                    <select className="rounded-lg px-1 py-1" value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                            {selectOptions.map((currency)=>{
                                <option key={currency} value={currency}> {currency} </option>
                            })}
                    </select>
                    
                </div>
            </div>
        </>
    )
}

export default Inputbox;