import { useDispatch } from 'react-redux'
import Loginform from './loginform'
import { startloginauth } from '../../action/authentication'
const Loginauth=(props)=>{
    const {handlechange} = props
    const dispatch = useDispatch()
    const logindata=(formdata,reset)=>{
        dispatch(startloginauth(formdata,handlechange,reset))
    }
    return (
        <div>
           <Loginform logindata={logindata} />
        </div>
    )
}
export default Loginauth