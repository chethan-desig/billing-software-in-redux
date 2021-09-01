import React,{useState} from 'react'
import { withRouter } from 'react-router'

const Loginform =(props)=>{
    const {logindata} = props
   const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [validation,setValidation] = useState({})
    
    const error={}
    const runValidation=()=>{
        
       
        if(email.trim().length==0){
            error.email='pls enter the email'
        }
        if(password.trim().length==0){
             error.password='pls enter the password'
        }else if(password.length<8){
            error.password='pls enter password 8 letter atleast'
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
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={handleChange} name='email' placeholder='email'/>
                {validation.email&&<span>{validation.email}</span>}
                <br/>
                <input type='password' value={password} onChange={handleChange} name='password' placeholder='password' />
                {validation.password&&<span>{validation.password}</span>}<br/>
              <input type='submit' value='submit'/>
            </form>
        </div>
    )
}
export default withRouter(Loginform)