import {useState, useEffect} from "react"

const useCurrency = ({currency}) => {
    console.log(currency);
    const [data,setdata] = useState({});
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            setdata(data)
        });
    },[currency])
    return data.currency
}

export default useCurrency; 