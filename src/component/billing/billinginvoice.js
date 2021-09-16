import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
const Billing=(props)=>{

    const [productids,setProductid] = useState('')
    const [productname,setProductname] = useState([])
    const product = useSelector((state)=>{
        return state.products
    })
   const filterproductname=()=>{
       const fill = props.productid.map((ele)=>{
           return ele.product
       })
       setProductid(fill)
       return fill
   }
   const productfilter=(id)=>{
    const fil = product.filter((ele)=>{
        return id.includes(ele._id)
    })
   setProductname(fil)
    return fil
}
    console.log(productids)
    useEffect(()=>{
        filterproductname()
        
    },[])
    useEffect(()=>{
        productfilter(productids)
    },[productids])

    return (
        <div>
          <h1> product name</h1>:{
                productname.map((ele)=>{
                    return <ul>
                        <li>{ele.name}</li>
                    </ul>
                })
            }
           <h1> quantity</h1>:{
                props.productid.map((ele)=>{
                   return <ul>
                        <li>
                            {ele.quantity}
                        </li>
                    </ul>
                })
            }
           <h1> price</h1>:{
                props.productid.map((ele)=>{
                    return <ul>
                        <li>
                            {ele.price}
                        </li>
                    </ul>
                })
            }
           <h1>  subtotal</h1>:{
                props.productid.map((ele)=>{
                    return <ul>
                        <li>
                            {ele.subTotal}
                        </li>
                    </ul>
                })
            }
        </div>
    )
}
export default Billing