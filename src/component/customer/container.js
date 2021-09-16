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
        <div >
          <div className='row'>
              <div className='col-8 mt-4 ' >

            <Customerlist data={data} />
            </div>
                <div className='col-4 mt-4'>
                <h1><span class="badge bg-secondary">ADD customer</span></h1>
            <Customerform addingcustomer={addingcustomer} />
           
            </div>
            </div>
        </div>
    )
}
export default Container