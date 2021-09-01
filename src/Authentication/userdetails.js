import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { startdetails } from "../action/authentication"
const Userdetails=()=>{

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startdetails())
    },[])
    const data = useSelector((state)=>{
        return state.auth
    })
    
    
    return (
        <div>
            <h1>user details</h1>
            <h1>name-{data.userdetails.username}</h1>
            <h1>email-{data.userdetails.email}</h1>
            <h1>bussinessname-{data.userdetails.businessName}</h1>
            <h1>address-{data.userdetails.address}</h1>
            <h1>created at={data.userdetails.createdAt}</h1>
        </div>
    )
}
export default Userdetails