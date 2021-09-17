import { withRouter } from "react-router"
import { Link } from "react-router-dom";
const Navbarcomponent=(props)=>{
    const {history} = props
      
   
    const cureentpath=(history,path)=>{
        if(history.location.pathname===path){
            return {color:'#50DBB4'}
        }else {
            return {color:'#EDC126'}
        }
    }
    return(
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
                                                        props.history.push('/login')
                                                        }}>Logout</Link>
                             </li>
                            <li class="nav-item">
                                    <Link to='/userdetails' class="nav-link mr-auto" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                                </svg></Link>
                            </li>

                         </ul>
                      
                    
    )
}
export default withRouter(Navbarcomponent)