import axios from "axios";
import { useEffect, useState } from "react";

export function useGetvalue(){
    const [amount,setAmount] = useState(0)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const intervalVal = setInterval(()=>{
            axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    Authorization: "Bearer "+localStorage.token
                }
            })
            .then(res=>{
                console.log("timeout call")
                var val = res.data.balance.toFixed(2)
                setAmount(val)
                setLoading(false)
            })
        },60000)
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: "Bearer "+localStorage.token
            }
        })
        .then(res=>{
            console.log("first call")
            var val = res.data.balance.toFixed(2)
            setAmount(val)
            setLoading(false)
        })
        return ()=>{
            clearInterval(intervalVal)
        }
    },[])
    return {amount,loading}
}