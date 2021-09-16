import Customerform from "./customerform"


const Editform=(props)=>{
    const {handletoggle,id,name,mobile,email,sendingupdate} = props
  
    const handlecancel=()=>{
        handletoggle()
    }
    const addingcustomer=(formdata,reset,id,handletoggle)=>{
        sendingupdate(formdata,reset,id,handletoggle)
        
    }
    return(
        <div className='container'>
             <h1><span class="badge bg-secondary">Edit customer</span></h1>
            <Customerform id={id} handletoggle={handletoggle} name={name} mobile={mobile} email={email} addingcustomer={addingcustomer}/>
            <div className='container'>
            <button onClick={handlecancel} className='btn btn-danger mp-5'>cancel</button>
            </div>
        </div>
    )
}
export default Editform
/*
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Customerform id={id} handletoggle={handletoggle} name={name} mobile={mobile} email={email} addingcustomer={addingcustomer}/>
      </div>
      <div class="modal-footer">
         <button onClick={handlecancel} className='btn btn-danger'>cancel</button>
      </div>
    </div>
  </div>
</div>
*/