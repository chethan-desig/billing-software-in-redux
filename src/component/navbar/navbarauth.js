import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const Navbarauth=(props)=>{
    const {history} = props
      
   
    const cureentpath=(history,path)=>{
        if(history.location.pathname===path){
            return {color:'#50DBB4'}
        }else {
            return {color:'#EDC126'}
        }
    }
    return(
        <ul class="nav nav-tabs bg-light">
       
            <h3 class="navbar-brand">Billing software</h3>
         
            <li className="nav-item">
        <Link style={cureentpath(history,'/home')} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link style={cureentpath(history,'/register')} className="nav-link" to="/register">
          register
        </Link>
      </li>
      <li className="nav-item">
        <Link style={cureentpath(history,'/login')} className="nav-link" to="/login">
          login
        </Link>
      </li>
        </ul>
       
    )
}
export default withRouter(Navbarauth)