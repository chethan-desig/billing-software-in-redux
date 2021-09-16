import React,{useState} from "react"
import Editform from "./editProduct"
import { useDispatch } from "react-redux"
import { asyncedit } from "../../action/productsaction"
const Productui=(props)=>{
    const {_id,name,price,deletingdata} = props
    const [toggle,setToggle] = useState(false)
    const dispatch=useDispatch()
    const handletoggle=()=>{
        setToggle(!toggle)
    }
    const handleRemove=(id)=>{
        deletingdata(id)
    }
    const productdata=(formdata,reset,id,handletoggle)=>{
        dispatch(asyncedit(formdata,reset,id,handletoggle))
    }
    return(
        <div>
            {
              
                toggle?<Editform id={_id} name={name} price={price} productdata={productdata} handletoggle={handletoggle}/>: <ul>
                <li>{`${name}-${price}`}</li>
                <button onClick={()=>{handleRemove(_id)}}>remove</button> <button onClick={handletoggle}>edit</button>
            </ul>
          
            }
           
        </div>
    )
}
export default Productui