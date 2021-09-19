import React,{useState,useEffect} from "react"
import { useSelector } from "react-redux"
import moment from "moment"
import Productname from "./productname"
import { Details } from "@material-ui/icons"
import './cus.css'
const Pdf=(props)=>{
    const {detalis} = props
    const [customername,setCustomername] = useState([])
    const [productdetail,setProductdetail] = useState('')
    const [productname,setProductname] = useState([])
    const product = useSelector((state)=>{
        return state.products
    })
    const customerdata = useSelector((state)=>{
        return state.components
    })
    const filter=()=>{
        const fil = customerdata.filter((ele)=>{
           return  ele._id===detalis.customer
        })
        setCustomername(fil)
        return fil
    }
    const productid=()=>{
        const fil = detalis.lineItems
        const productid = fil.map((ele)=>{
            return ele.product
        })
        setProductdetail(productid)

    }
    const productfilter=(id)=>{
        const fil = product.filter((ele)=>{
            return id.includes(ele._id)
        })
       setProductname(fil)
        return fil
    }
    console.log(productname)
    useEffect(()=>{
        productid()
    },[detalis])
    useEffect(()=>{
        productfilter(productdetail)
    },[productdetail])
    useEffect(()=>{
        filter()
    },[detalis])
        return(
        <div>
            <h4>id-{detalis._id}</h4>
           <h4> date-{moment(detalis.date).add().toString()}</h4>
           <h4> customer-{customername&&customername.map((ele)=>{return ele.name})}</h4>
           {/* <h4> product:<table >{productname&&productname.map((ele)=>{return<tr><td>{ele.name}</td></tr>})}</table></h4>
           <h4>price:<table>{detalis.lineItems.map((ele)=>{return <tr><td>{ele.price}</td></tr>})}</table></h4>
           <h4>quantity:<table>{detalis.lineItems.map((ele)=>{return <tr><td>{ele.quantity}</td></tr>})}</table></h4>
           <h4>subTotal:<table>{detalis.lineItems.map((ele)=>{return <tr><td>{ele.subTotal}</td></tr>})}</table></h4> */}
          <table >
              <tr>
                 <th>product</th>
                 <th>quantity</th>
                 <th>price</th>
                 <th>subtotal</th>
              </tr>
              <tbody>
                  <tr>
                    {
                        productname.map((ele)=>{
                    return <tr><td>{ele.name}</td></tr>
                        })
                    }
                    <td>
                    {
                      detalis.lineItems.map((ele)=>{
                           return <tr><td>{ele.quantity}</td></tr>
                       })
                    }
                    </td>
                    <td>
                    {
                      detalis.lineItems.map((ele)=>{
                           return <tr><td>{ele.price}</td></tr>
                       })
                    }
                    </td>
                    <td>
                    {
                      detalis.lineItems.map((ele)=>{
                           return <tr><td>{ele.subTotal}</td></tr>
                       })
                    }
                    </td>
                
                   </tr>  
              </tbody>
          </table>
           <h4> total-{detalis.total}</h4>

           
           
        </div>
    )
}
export default Pdf