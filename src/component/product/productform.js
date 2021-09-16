import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import {asyncedit} from '../../action/productsaction'
import './cus.css'
const Productform =({id,handletoggle,productdata,editData,handleToggleFalse})=>{
    const { _id,name:cusname,price:cusprice} = editData ? editData : {}
    const [name,setName] = useState(cusname?cusname:'')
   const [price,setPrice] = useState(cusprice?cusprice:'')
  const [validation,setValidation] = useState({})

    const error={}
    const runValidation=()=>{
        
       
        if(name.trim().length==0){
            error.name='enter the name'
        }
        if(price.length==0){
             error.price='enter the price'
        }
       

        
    
    }
    
    const handleChange=(e)=>{
       
        if(e.target.name=='name'){
             setName(e.target.value)
        }
        if(e.target.name=='price'){
            setPrice(e.target.value)
        }
       
        
    }
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        runValidation()
        if(Object.keys(error)==0){
            setValidation({})
            const formdata={
                name:name,
                price:price
            }
            
            const reset=()=>{
               
                setName('')
                setPrice('')              
               
            }
            if(_id){
                dispatch(asyncedit(formdata,reset,_id,handleToggleFalse))
            }else{
                productdata(formdata,reset,id,handletoggle)
            }
            
        }else{
            setValidation(error)
        }
       
    }
    const handlecancel=()=>{
        handleToggleFalse()
    }

    return(
        <div className='container'>
             <div className='row'>
            <form onSubmit={handleSubmit}>
            <div className='col-6'>
            <div class="mb-3">
            <label class="form-label">name</label>
                <input type='text'class="form-control"  value={name} onChange={handleChange} name='name' placeholder='name'/>
                {validation.name&&<span className='span'>{validation.name}</span>}
                <br/>
              </div>
                <div class="mb-3">
                <input type='number' class="form-control"  value={price} onChange={handleChange} name='price' placeholder='price'/>
                {validation.price&&<span className='span'>{validation.price}</span>}
                <br/>
              </div>
              <input type='submit' value='submit' className='btn btn-warning'/>
              {
                  _id&&<button onClick={handlecancel} className='btn btn-light'>cancel</button>
              }
            
        
              </div>
            </form>
         
              </div>
        </div>
    )
}
export default withRouter(Productform)
