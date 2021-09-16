import React,{useState} from 'react'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import './cus.css'
const Loginform =(props)=>{
    const {logindata} = props
   const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [validation,setValidation] = useState({})
    
    const error={}
    const runValidation=()=>{
        
       
        if(email.trim().length==0){
            error.email='enter the email'
        }
        if(password.trim().length==0){
             error.password='enter the password'
        }else if(password.length<8){
            error.password='password 8 letter atleast'
        }
       
    }
    
    const handleChange=(e)=>{
       
        if(e.target.name=='email'){
             setEmail(e.target.value)
        }
        if(e.target.name=='password'){
            setPassword(e.target.value)
        }
        
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        runValidation()
        if(Object.keys(error)==0){
            setValidation({})
            const formdata={
                email:email,
                password:password,
            }
            const reset=()=>{
               
                setEmail('')
                setPassword('')
                
                props.history.push('/customers');
            }
            logindata(formdata,reset)
        }else{
            setValidation(error)
        }
       
    }

    return(
        <div>
            <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label >Email</label>
              <input type='email' className="form-control" value={email} onChange={handleChange} name='email' placeholder='email'/>
                {validation.email&&<span className='span'>{validation.email}</span>}
                <br/>
            </div>

            <div className="form-group">
              <label >Password</label>
              <input type='password' className="form-control" value={password} onChange={handleChange} name='password' placeholder='password' />
                {validation.password&&<span className='span'>{validation.password}</span>}<br/>
            </div>
            <input type='submit' value='submit' className="btn btn-success btn-block"/><br/>
            if you not register?<Link to='/register'>register</Link>
            
          </form>
        </div>
      </div>
            {/* <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={handleChange} name='email' placeholder='email'/>
                {validation.email&&<span>{validation.email}</span>}
                <br/>
                <input type='password' value={password} onChange={handleChange} name='password' placeholder='password' />
                {validation.password&&<span>{validation.password}</span>}<br/>
              <input type='submit' value='submit'/>
            </form> */}
        </div>
    )
}
export default withRouter(Loginform)