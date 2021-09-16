import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { startdetails } from "../action/authentication"
import moment from 'moment'
const Userdetails=()=>{

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startdetails())
    },[])
    const data = useSelector((state)=>{
        return state.auth
    })
    
    
    return (
        <div className='container'>
            <h1>user- information</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5'>
          <div class="card">
  <div class="card-body">
  
  name-{data.userdetails.username}<br/>
  email-{data.userdetails.email}<br/>
  bussinessname-{data.userdetails.businessName}<br/>
  address-{data.userdetails.address}<br/>
  created at={moment(data.userdetails.createdAt).add().toString()}<br/>
  </div>
</div>
</div>
    </div>
        </div>
        </div>
    )
}
export default Userdetails
