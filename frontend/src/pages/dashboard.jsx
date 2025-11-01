import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/user"
import { useGetvalue } from "../Hooks/useGetvalue"
//Math.round(response.data.balance*100)/100
export const Dashboard =function(){
    const {amount,loading} = useGetvalue()
    // const value= 100
    return <div>
        <Appbar />
        <Balance value={loading?"Loading..." :amount}/>
        {/* <Balance value={value}/> */}
        <Users />
    </div>
}