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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
            <h3 class="navbar-brand">Billing software</h3>
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
       
    )
}
export default withRouter(Navbarauth)