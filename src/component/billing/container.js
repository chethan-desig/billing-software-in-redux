import React,{useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { asyncallbills } from "../../action/billingaction"
import Billform from './billform'
import { asyncsendbills } from "../../action/billingaction"
import Billui from './billui'
import { asyncbilldelete } from "../../action/billingaction"
import Navbar from '../navbar/navbarcomponent'

const Container =()=>{
    const  dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.bills
    })
    useEffect(()=>{
        dispatch(asyncallbills())
        
    },[])
    const sendform =(formdata,reset,showmodal)=>{
        dispatch(asyncsendbills(formdata,reset,showmodal))
    }
    const removebill=(id)=>{
        dispatch(asyncbilldelete(id))
    }

    
    
    return(
        <div >
            <Navbar />
            <div className='row'>
            <div className='col-6 mt-4 ' >
            <Billui data={data} removebill={removebill} />
            </div>
            <div className='col-6 mt-4 ml-auto'>
            <h1><span class="badge bg-secondary">ADD bill</span></h1>
            <Billform sendform={sendform}/>
            </div>
            </div>
        </div>
    )
}
export default Container