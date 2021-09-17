import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import {startupdatecustomer} from '../../action/componentsaction'
import './cus.css'
const Loginform =({handletoggle,addingcustomer,id,editData,handleToggleFalse})=>{
    const { _id,name:cusname,email:cusemail,mobile:cusmobile } = editData ? editData : {}
    const [name,setName] = useState(cusname?cusname:'')
   const [email,setEmail] = useState(cusemail?cusemail:'')
    const [mobile,setMobile] = useState(cusmobile?cusmobile:'')
   
    const [validation,setValidation] = useState({})
    const error={}
    const runValidation=()=>{
        
       
        if(name.trim().length===0){
            error.name='enter the name'
        }
        if(mobile.trim().length===0){
             error.mobile='enter the mobilenumber'
        }
        if(email.trim().length===0){
            error.email='enter the email'
       }

        
    
    }
    const dispatch=useDispatch()
    const handleChange=(e)=>{
       
        if(e.target.name==='name'){
             setName(e.target.value)
        }
        if(e.target.name==='mobile'){
            setMobile(e.target.value)
        }
        if(e.target.name==='email'){
            setEmail(e.target.value)
        }
        
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        runValidation()
        if(Object.keys(error)==0){
            setValidation({})
            const formdata={
                name:name,
                mobile:mobile,
                email:email
            }
            
            const reset=()=>{
               
                setName('')
                setMobile('')
                setEmail('')
                
               
            }
            if(_id){
                dispatch(startupdatecustomer(formdata,reset,_id,handleToggleFalse))
                
            }else{
                addingcustomer(formdata,reset,id,handletoggle)
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
                <input type='text' class="form-control" value={name} onChange={handleChange} name='name' placeholder='name'/>
                {validation.name&&<span className='span'>{validation.name}</span>}
                <br/>
                </div>
                <div class="mb-3">
                <label  class="form-label">mobile</label>
                <input type='text' class="form-control" value={mobile} onChange={handleChange} name='mobile' placeholder='mobile'/>
                {validation.mobile&&<span className='span'>{validation.mobile}</span>}
                <br/>
                </div>
                <div class="mb-3">
                <label class="form-label">Email</label>
                <input type='email' class="form-control" value={email} onChange={handleChange} name='email' placeholder='email' />
                {validation.email&&<span className='span'>{validation.email}</span>}<br/>
                </div>
              <input type='submit' value='submit' class="btn btn-warning" />
              {
                  _id&&<button onClick={handlecancel} className='btn btn-light'>cancel</button>
              }
              
              </div>
            </form>
           
        </div>
       </div>
    )
}
export default withRouter(Loginform)
/*
 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>*/