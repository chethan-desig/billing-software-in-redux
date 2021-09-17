import React,{useState,useEffect} from "react";
import { Route,Link } from "react-router-dom";
import { withRouter } from "react-router";
import PrivateRoute from '../helper/privateRoute'
import Home from '../component/home'
import Customers from '../component/customer/container'
import Product from '../component/product/container'
import Account from '../component/account/container'
import Billing from '../component/billing/container'
import Registerauth from "../Authentication/register/registerauth";
import Loginauth from "../Authentication/login/loginauth";
import userdetails from "../Authentication/userdetails";
import Dashboard from '../component/dashboard'
import Navbar from '../component/navbar/navbarauth'
const Routing=(props)=>{
   
      

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
           
               
                 
          <div>
                <PrivateRoute  path='/dashboard' component={Dashboard} />
               <PrivateRoute path='/customers' component={Customers} /> <PrivateRoute  path='/products' component={Product} />
                 <PrivateRoute  path='/billings' component={Billing} />
                <PrivateRoute path="/userdetails" component={userdetails}/>
                </div>
          <div><PrivateRoute  path='/register' component={Registerauth}/>
          <Route  path='/login' component={Loginauth}/> 
          </div>
      
            <PrivateRoute exact path='/' component={Home} />
      </div>
        </div>
    )
}
export default withRouter(Routing)