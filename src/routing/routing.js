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


const Routing=(props)=>{
   
      
    const [handle,setHandle] = useState(false)
    const handlechange=()=>{
        setHandle(!handle) 

    }
    return(
        <div>

            {
                handle?<div>
                    <Link to='/customers'>customers</Link>\
                    <Link to='/products'>products</Link>\
                    <Link to='/account'>accounts</Link>\
                    <Link to='/billings'>billings</Link>\
                    <Link to='/userdetails'>userdetails</Link>\
                    <Link to='' onClick={()=>{
                      localStorage.removeItem('jwt')
                     handlechange()
                     }}>Logout</Link>/
                      </div>:<div>
                     <Link to='/'>home</Link>\
                     <Link to='/register'>register</Link>\
                     <Link to='/login'>login</Link>\
                     </div>
            }
      
      {
          handle?<div> 
               <Route exact path='/customers' component={Customers} ></Route> <Route exact path='/products' component={Product} >
                </Route>  <Route exact path='/account' component={Account} >
                </Route><Route exact path='/billings' component={Billing} >
                </Route><Route path="/userdetails" component={userdetails}>
                </Route></div>
          :<div><Route exact path='/register' component={Registerauth} ></Route>  <Route exact path='/login' render={(props)=>{
            return <Loginauth {...props} handlechange={handlechange}/>
        }}></Route></div>
      }
            <Route exact path='/' component={Home} ></Route>
   
        </div>
    )
}
export default withRouter(Routing)