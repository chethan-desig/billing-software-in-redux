import React,{useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
const Productname=(props)=>{
    const {id,product} = props
    const [productname,setProductname] = useState([])   
    const productinfo = useSelector((state)=>{
        return state.products
    })
    const productfilter=(id)=>{
        const fil = productinfo.filter((ele)=>{
            return ele._id === id
        })
        return fil
    }
    useEffect(()=>{
            
       
        setProductname((productfilter(product)))
        
         
 },[id])
    return (
        <div>
          {productname.map((ele)=>{return ele.name})}
        </div>
    )
}
export default Productname