import React,{useState,useEffect} from "react"
import { useSelector} from 'react-redux'
import axios from 'axios'
import Billdetails from './billfulldetail'

const Billuielements=(props)=>{
    const {_id,customer,lineItems,removebill,product} = props
    
    const [name,setName]=useState([])
    const [togle,setToggle]=useState(false)
    const [detailtoggle,setDetailtoggle]=useState(false)

    const [productname,setProductname] = useState([])
    const [detailbill,setBill] = useState({})
    const state = useSelector((state)=>{
        return state.components
    }) 
    // const productinfo = useSelector((state)=>{
    //     return state.products
    // })
  
    const filter=(id)=>{  
        const fil = state.filter((ele)=>{
            return ele._id===id
        })
        return fil
    } 

    // const productfilter=(id)=>{
    //     const fil = productinfo.filter((ele)=>{
    //         return ele._id ===id
    //     })
    //     return fil
    // }

//   const products =()=>{
//         setToggle(true)
//       const fiol = lineItems.map((ele)=>{
//           return ele.product
//       })
//       return fiol
//   }
//   const filtering=(id)=>{
      
//   const get= productinfo.filter((arr)=>{return id.includes(arr._id)})
    
//     return get
    
//   }  
//   useEffect(()=>{ 
   
//     setProductname(filtering(product))
//   },[])
  
//   useEffect(()=>{ 
//     // setProduct(products)
//     setProductname(filtering(product))
//   },[togle])
    useEffect(()=>{
            
            setName(( filter(customer)))
          
            
             
     },[_id])
    const handleRemove=(id)=>{
        removebill(id)
    }
    // const Showmore=(id)=>{

    //     axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
    //         headers:{
    //             'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    //         }
    //     })
    //     .then((res)=>{
    //         const result = res.data
            
    //         setBill(result)
    //         setDetailtoggle(true)
          
    //     })
    //     .catch((err)=>{
    //         alert(err.message)
    //     })
    // }
    // const cancel=()=>{
    //     setDetailtoggle(false)
    // }
    return(
        <div>
           {/* {
               detailtoggle?<Billdetails bill={detailbill} cancel={cancel}/>: <table>
               <tr>
              {`
                   ${date}-${total}-${name.map((ele)=>{return ele.name})}--${lineItems&&productname.map((ele)=>{return ele.name})}
              `}
              <button onClick={()=>{handleRemove(_id)}}>remove</button><button onClick={()=>{Showmore(_id)}}>show more</button>
              </tr>
           </table>
           }
             */}
             {name.map((ele)=>{return ele.name})}

             
        </div>

    )
} 
export default Billuielements