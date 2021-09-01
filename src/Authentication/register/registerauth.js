import { useDispatch } from 'react-redux'
import Registerform from './registerform'

import { startregister } from '../../action/authentication' 

const Registerauth=(props)=>{
    const dispatch = useDispatch()
    const registerdata = (formdata,reset,)=>{
        
        dispatch(startregister(formdata,reset))
    }
    return (
        <div>
            <Registerform registerdata={registerdata}/>
        </div>
    )
}
export default Registerauth