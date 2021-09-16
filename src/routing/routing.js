import React,{useState,useEffect} from "react";
import { Route,Link } from "react-router-dom";
import { withRouter } from "react-router";
import Home from '../component/home'
import Customers from '../component/customer/container'
import Product from '../component/product/container'
import Account from '../component/account/container'
import Billing from '../component/billing/container'
import Registerauth from "../Authentication/register/registerauth";
import Loginauth from "../Authentication/login/loginauth";
import userdetails from "../Authentication/userdetails";
import Dashboard from '../component/dashboard'

const Routing=(props)=>{
   const {history} = props
      
    const [handle,setHandle] = useState(false)
    const handlechange=()=>{
        setHandle(!handle) 

    }
    const cureentpath=(history,path)=>{
        if(history.location.pathname==path){
            return {color:'#50DBB4'}
        }else {
            return {color:'#EDC126'}
        }
    }
    return(
        <div>
          
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">+91 7026401173</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 14 17">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
            </div>
            </nav>
            <div>
            {
                handle?<div>
                        <ul class="nav justify-content-end bg-light">
                        <li class="nav-item">
                                <Link style={cureentpath(history,'/dashboard')}to='/dashboard' class="nav-link "  >dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link style={cureentpath(history,'/customers')}to='/customers' class="nav-link "  >customers</Link>
                            </li>
                            <li class="nav-item">
                                 <Link style={cureentpath(history,'/products')} to='/products' class="nav-link "  >products</Link> 
                             </li>
                           
                            <li class="nav-item">
                                  <Link style={cureentpath(history,'/billings')}  to='/billings'class="nav-link" >billings</Link>
                             </li>
                             <li class="nav-item">
                                    <Link style={cureentpath(history,'')}  to='' class="nav-link" onClick={()=>{
                                                        localStorage.removeItem('jwt')
                                                        handlechange()
                                                        }}>Logout</Link>
                             </li>
                            <li class="nav-item">
                                    <Link to='/userdetails' class="nav-link mr-auto" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                                </svg></Link>
                            </li>

                         </ul>
                      
                    </div>:<div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='container-fluid'>
                        <a class="navbar-brand" href="#">Billing software</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <Link style={cureentpath(history,'/home')}  to='/'class="nav-link active" >home</Link>
                        <Link style={cureentpath(history,'/register')} to='/register'class="nav-link" >register</Link>
                        <Link style={cureentpath(history,'/login')}  to='/login' class="nav-link" >login</Link>

                        </div>
                        </div>
                    </div>
                    </nav>
                    </div>

                   
            }
      
      {
          handle?<div>
                <Route exact path='/dashboard' component={Dashboard} ></Route> 
               <Route exact path='/customers' component={Customers} ></Route> <Route exact path='/products' component={Product} >
                </Route> <Route exact path='/billings' component={Billing} >
                </Route><Route path="/userdetails" component={userdetails}>
                </Route></div>
          :<div><Route exact path='/register' component={Registerauth} ></Route>  <Route exact path='/login' render={(props)=>{
            return <Loginauth {...props} handlechange={handlechange}/>
        }}></Route></div>
      }
            <Route exact path='/' component={Home} ></Route>
      </div>
        </div>
    )
}
export default withRouter(Routing)