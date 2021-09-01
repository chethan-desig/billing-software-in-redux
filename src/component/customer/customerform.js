import React,{useState} from 'react'
import { withRouter } from 'react-router'

const Loginform =(props)=>{
    const {handletoggle,addingcustomer,id,name:cusname,mobile:cusmobile,email:cusemail} = props
    const [name,setName] = useState(cusname?cusname:'')
   const [email,setEmail] = useState(cusemail?cusemail:'')
    const [mobile,setMobile] = useState(cusmobile?cusmobile:'')
   
    const [validation,setValidation] = useState({})
    
    const error={}
    const runValidation=()=>{
        
       
        if(name.trim().length==0){
            error.name='pls enter the name'
        }
        if(mobile.trim().length==0){
             error.mobile='pls enter the mobilenumber'
        }
        if(email.trim().length==0){
            error.email='pls enter the email'
       }

        
    
    }
    
    const handleChange=(e)=>{
       
        if(e.target.name=='name'){
             setName(e.target.value)
        }
        if(e.target.name=='mobile'){
            setMobile(e.target.value)
        }
        if(e.target.name=='email'){
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
            addingcustomer(formdata,reset,id,handletoggle)
            
        }else{
            setValidation(error)
        }
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChange} name='name' placeholder='name'/>
                {validation.name&&<span>{validation.name}</span>}
                <br/>
                <input type='text' value={mobile} onChange={handleChange} name='mobile' placeholder='mobile'/>
                {validation.mobile&&<span>{validation.mobile}</span>}
                <br/>
                <input type='email' value={email} onChange={handleChange} name='email' placeholder='email' />
                {validation.email&&<span>{validation.email}</span>}<br/>
              <input type='submit' value='submit'/>
            </form>
        </div>
    )
}
export default withRouter(Loginform)