import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './cus.css'
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
             error.name='enter the name'
        }
        if(email.trim().length==0){
            error.email='enter the email'
        }
        if(password.trim().length==0){
             error.password='enter the password'
        }else if(password.length<8){
            error.password='enter password 8 letter atleast'
        }
        if(bussinessName.trim().length==0){
            error.bussiness='enter the bussiness'
       }
       if(address.trim().length==0){
        error.address='enter the address'
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
             <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label >name</label>
              <input type='text' className="form-control"  value={name} onChange={handleChange} name='name'placeholder='name'/>
                {validation.name&&<span className='span'>{validation.name}</span>}
                <br/>
            </div>
            <div className="form-group">
              <label >email</label>
              <input type='email' className="form-control"  value={email} onChange={handleChange} name='email' placeholder='email'/>
                {validation.email&&<span className='span'>{validation.email}</span>}<br/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type='password' className="form-control"  value={password} onChange={handleChange} name='password' placeholder='password' />
                {validation.password&&<span className='span'>{validation.password}</span>}<br/>
            </div>
            <div className="form-group">
              <label >business</label>
              <input type='text' className="form-control"  value={bussinessName} onChange={handleChange} name='bussinessname' placeholder='bussinessname'/>
                {validation.bussiness&&<span className='span'>{validation.bussiness}</span>}<br/>
            </div>
            <div className="form-group">
              <label >address</label>
              <input type='text' className="form-control"  value={address} onChange={handleChange} name='address' placeholder='address' />
                {validation.address&&<span className='span'>{validation.address}</span>}<br/>
            </div>
            
            <input type='submit' value='submit' className="btn btn-success btn-block"/><br/>
            already login? <Link to='/login'>login</Link>
          </form>
            </div>
            </div>
              
          </div>
    )
}
export default withRouter(Registerform)