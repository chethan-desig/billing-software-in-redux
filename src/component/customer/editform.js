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
        <div>
            <h1>edit form</h1>
            <Customerform id={id} handletoggle={handletoggle} name={name} mobile={mobile} email={email} addingcustomer={addingcustomer}/>
            <button onClick={handlecancel}>cancel</button>
        </div>
    )
}
export default Editform