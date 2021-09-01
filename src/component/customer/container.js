import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { startcustomer } from '../../action/componentsaction'
import Customerlist from './customerslist'
import { startingaddingcustomer } from '../../action/componentsaction'

import Customerform from './customerform'

const Container =()=>{
   
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startcustomer())
        
    },[])
    const data=useSelector((state)=>{
        return state.components
    })

    
   
   
    const addingcustomer=(formdata,reset)=>{
        
         dispatch(startingaddingcustomer(formdata,reset))
    }
    
    return(
        <div>
            <Customerlist data={data} />
        <Customerform addingcustomer={addingcustomer} />
        
        </div>
    )
}
export default Container