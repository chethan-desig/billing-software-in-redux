import React,{useState} from 'react'

import { withRouter } from 'react-router'

const Registerform =(props)=>{
    const {registerdata} = props
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [bussinessName,setBussinessName] = useState('')
    const [address,setAddress] = useState('')
    const [validation,setValidation] = useState({})
    
    const error={}
    const runValidation=()=>{
        
        if(name.trim().length==0){
             error.name='pls enter the name'
        }
        if(email.trim().length==0){
            error.email='pls enter the email'
        }
        if(password.trim().length==0){
             error.password='pls enter the password'
        }else if(password.length<8){
            error.password='pls enter password 8 letter atleast'
        }
        if(bussinessName.trim().length==0){
            error.bussiness='pls enter the bussiness'
       }
       if(address.trim().length==0){
        error.address='pls enter the address'
   }

    }
    
    const handleChange=(e)=>{
        if(e.target.name=='name'){
            setName(e.target.value)
        }
        if(e.target.name=='email'){
             setEmail(e.target.value)
        }
        if(e.target.name=='password'){
            setPassword(e.target.value)
        }
        if(e.target.name=='bussinessname'){
            setBussinessName(e.target.value)
        }
        if(e.target.name=='address'){
            setAddress(e.target.value)
        }
    }
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        runValidation()
        if(Object.keys(error)==0){
            setValidation({})
            const formdata={
                username:name,
                email:email,
                password:password,
                businessName:bussinessName,
                address:address
            }
            const reset=()=>{
                setName('')
                setEmail('')
                setPassword('')
                setBussinessName('')
                setAddress('')
                props.history.push('/login')
            }
           
            registerdata(formdata,reset)
        }else{
            setValidation(error)
        }
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChange} name='name'placeholder='name'/>
                {validation.name&&<span>{validation.name}</span>}
                <br/>

                <input type='email' value={email} onChange={handleChange} name='email' placeholder='email'/>
                {validation.email&&<span>{validation.email}</span>}
                <br/>
                <input type='password' value={password} onChange={handleChange} name='password' placeholder='password' />
                {validation.password&&<span>{validation.password}</span>}<br/>
                <input type='text' value={bussinessName} onChange={handleChange} name='bussinessname' placeholder='bussinessname'/>
                {validation.bussiness&&<span>{validation.bussiness}</span>}<br/>
                <input type='text' value={address} onChange={handleChange} name='address' placeholder='address' />
                {validation.address&&<span>{validation.address}</span>}<br/>
                <input type='submit' value='add'/>
            </form>
        </div>
    )
}
export default withRouter(Registerform)