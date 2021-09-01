import React,{useState,useEffect} from 'react'
import { startdeletecustomer } from '../../action/componentsaction'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import Edittask from './editform'
import { startupdatecustomer } from '../../action/componentsaction'
const Customerui=(props)=>{
    const {_id,name,email,mobile} = props
    
    const [toggle,setToggle] = useState(false)
   
   
   const dispatch=useDispatch()
    const handleRemove=(id)=>{
        dispatch(startdeletecustomer(id))
    }
    const handletoggle=()=>{
        setToggle(!toggle)
    }
    const sendingupdate=(formdata,reset,id,handletoggle)=>{
        
        dispatch(startupdatecustomer(formdata,reset,id,handletoggle))
    }   
    
    return(
        <div>
            {
                    toggle?<Edittask  id={_id}name={name} mobile={mobile} email={email} sendingupdate={sendingupdate} handletoggle={handletoggle}/>
                :
                <ul>
                   <li>{`${name}-${mobile}-${email}`}</li>
                   <button onClick={()=>{handleRemove(_id)}}>remove</button>-<button onClick={handletoggle}>edit</button>
                   
                </ul>

            }
           
        </div>
        
    )
}
export default withRouter(Customerui)