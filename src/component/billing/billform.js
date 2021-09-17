import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import { useSelector } from 'react-redux'
import {Modal} from 'react-bootstrap'
import Pdf from 'react-to-pdf'
import moment from 'moment'
import Billing from './billinginvoice'
import './cus.css'
const ref = React.createRef();
const Loginform =(props)=>{
    const {sendform} = props
    const [date,setDate] = useState('')
    const [customer,setCustomer] = useState('')
    const [product,setProduct] = useState([])
    const [productname,setProductname] = useState([])
    const [modal,setModal] = useState(false)
    const [productselect,setProductselected] = useState('')
    const [modaldata,setModaldata] = useState([])
    const [custername,setCustomername] = useState([])
    const [minus,setMinus] = useState(0)
    const [productid,setProductid] = useState([])
    
    const [validation,setValidation] = useState({})
 
    const customerdata = useSelector((state)=>{
        return state.components
    })
    const productdata=useSelector((state)=>{
        return state.products
    })

    const error={}
    const runValidation=()=>{
        
       
        if(date.length===0){
            error.date='enter the date'
        }
        if(customer.length===0){
            error.customer='enter customer'
        }
        if(product.length===0){
            error.product='enter the product'
        }
       
    
    }
   
    //show modal data
    const filercustomer=()=>{
        const filter=customerdata.filter((ele)=>{
            return ele._id===modaldata.customer
        })
        setCustomername(filter)
        return filter
    }
    useEffect(()=>{
        filercustomer()
    },[modaldata])

    const handleminus=(id)=>{
        const pro = product.map((ele)=>{
            if(ele.product===id){ 
                setMinus(minus-1)
                return {...ele,...{quantity:ele.quantity-1}}
            }else{
                setMinus(minus)
                return {...ele}
            }
        })
        setProduct(pro)
  
    }
    
    const handlepius=(id)=>{
        const pro = product.map((ele)=>{
            if(ele.product===id){
                setMinus(minus+1)
                return {...ele,...{quantity:ele.quantity+1}}
            }else{
                setMinus(minus)
                return {...ele}
            }
        })
        setProduct(pro)
        
    }
  
    const handleChange=(e)=>{
       
        if(e.target.name==='date'){
             setDate(e.target.value)
        }
        if(e.target.name==='customer'){
            setCustomer(e.target.value)
        }  
        if(e.target.name==='product'){
            setProductselected(e.target.value)
        }

    }
    
    const handleproduct=(e)=>{
        const result = e.target.value
         setProductselected(result)
        
        setProduct([...product,{product:result,quantity:1}])
        const fil = productdata.filter((ele)=>{
            return ele._id === result
        })
        setProductname([...productname,...fil])
        return fil
    }
    const filterproduct=()=>{
        const fill=modaldata.lineItems
        setProductid(fill)
        return fill
   
    }
    useEffect(()=>{
        filterproduct()
    },[modaldata])
    const handleCancle=()=>{
        setModal(false)
    }
    const handleRemove=(id)=>{
        const removename=productname.filter((ele)=>{
            return ele._id!==id
        })
      
        setProductname(removename)
        const remove=product.filter((ele)=>{
            return ele.product!==id
        })
            setProduct(remove)
       
    }   
  
    
    
    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...lineItem];
    //     list[index][name] = value;
    //     setlineItem(list);
    //   };
    //   const handleRemoveClick = index => {
    //     const list = [...lineItem];
    //     list.splice(index, 1);
    //     setlineItem(list);
    //   };
    //   const handleAddClick = () => {
    //     setlineItem([...lineItem, { product:'',quantity:"" }]);
    //   };
        
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        runValidation()
        if(Object.keys(error)==0){
            setValidation({})
            const formdata={
              date:date,
              customer:customer,
              lineItems:product
              
            }
    
            const reset=()=>{
              setDate('')
              setCustomer('')
              setProductname([])
              setProduct([])

             
             
            }
            const showmodal=(result)=>{ 
                setModaldata(result)
                setModal(true)
            }
            sendform(formdata,reset,showmodal)
        }else{
            setValidation(error)
        }
       

    }
    
    return(
       
        <div className='row'>
            <div className='col-4'>
                <form onSubmit={handleSubmit}>
            <label class="form-label">Date</label>
                <input type='date' value={date}  class="form-control"  onChange={handleChange} name='date' placeholder='date'/>
                {validation.date&&<span className='span'>{validation.date}</span>}<br/>
                <label class="form-label">Customer</label>
                   <select value={customer}  class="form-control"name='customer' onChange={handleChange}>
                       <option>customers</option>

                       {
                           customerdata.map((ele)=>{
                               return<option value={ele._id}>{ele.name}</option>
                           })
                       }
                   </select>
                   {validation.customer&&<span className='span'>{validation.customer}</span>}<br/>
                   <label class="form-label">Product</label>
                            <select value={productselect} class="form-control" name="product" onChange={handleproduct}>
                        <option>products</option>
                        {
                            productdata.map((ele)=>{
                                return<option value={ele._id}>{ele.name}</option>
                            })
                        }

                    
                    </select>
                    {validation.product&&<span className='span'>{validation.product}</span>}<br/>
                    <input type='submit' value='submit'  className='btn btn-success mt-4' />
                    </form>
            </div>
            <Modal show={modal}>
            <div ref={ref}>
            <Modal.Header>bill invoice</Modal.Header>
                <Modal.Body>
                    <div>
                    <h1>id</h1>-{modaldata._id}<br/>
                   <h1>date</h1>- {
                       moment( modaldata.date).add().toString()
                    }<br/>
                  <h1> customer name</h1>- {
                        custername?custername.map((ele)=>{
                            return ele.name
                        }):''
                    }
                   
                    <Billing productid={productid}/>
                  <h1> total</h1>- {
                        modaldata.total
                    }<br/>
                    <h1>updated at</h1> - {modaldata.updatedAt}<br/>
                    <h1>user </h1>- {modaldata.user}
                </div>
                    
                </Modal.Body>

                
        </div> 
        <Pdf targetRef={ref} filename='bill.pdf'>
            {({ toPdf })=><button onClick={toPdf}>Download</button>}
        </Pdf>
         <button onClick={handleCancle}>cancel</button>
            </Modal>
          
            <div className='col-8'>
            {
                        //   <table border='1px'>
                        //        <tbody>
                        //            <td>
                        //            </td>
                        //            {/* <td>
                        //                <tr><button onClick={()=>{handleminus(ele._id)}}>-</button><button onClick={()=>{handlepius(ele._id)}}>+</button></tr>
                        //            </td> */}
                        //            <td>
                        //            <tr>
                           
                        //     {
                        //         productname.map((ele)=>{return <li><button onClick={()=>{handleminus(ele._id)}}>-</button>{ele.name}</li>})
                        //     }
                           
                        //    </tr>
                        //                <tr>  <td>
                        //         {
                        //     product.map((ele)=>{
                        //         return <li>{ele.quantity}</li>

                        //     })
                        // }
                        
                        //     </td>
                        //     <tr>
                         
                        //     {
                        //         productname.map((ele)=>{return <li><button onClick={()=>{handlepius(ele._id)}}>+</button></li>})
                        //     }
                          
                        //    </tr>
                        //     </tr>

                        //            </td>
                        //        </tbody>

                        //        {/* <button onClick={()=>{handleRemove(ele._id)}}>remove</button> */}
                               
                        //    </table>
                           
                       
                         
                       
                    }

                    {
                        product.length===0?'add product ': <table >
                        <thead>
                            <td><tr>minus</tr></td>
                            <td><tr>name</tr></td> 
                            <td><tr>quantity</tr></td> 
                            <td><tr>plus</tr></td> 
                            <td><tr>delete</tr></td> 
                        </thead>
                      
                            {
                                 
                                <td className='td'>     {
                                        minus>=1? productname.map((ele)=>{return <tr className='tr'><button 
                                          className='button' onClick={()=>{handleminus(ele._id)}}>-</button></tr>}): productname.map((ele)=>{return <tr className='tr'><button 
                                          className='button'>-</button></tr>})
                                     }
                                    
                                    </td>
                            }
                           
                             {
                                 
                                 <td className='td'> 
                                     {
                                        productname.map((ele)=>{return <tr className='tr'>
                                              <button className='button'>{ele.name}</button>
                                          </tr>})
                                      }
                                     
                                     </td>
                             }
                          
                            {
                                <td className='td'>
                                    {
                                 product.map((ele)=>{
                                             return <tr className='tr'><button className='button'>{ele.quantity}</button></tr>
                                         })
                                    }
                                </td>
                            }
                       
                            {
                                <td className='td'>
                                    {
                                    productname.map((ele)=>{return <tr className='tr'><button
                                    className='button' onClick={()=>{handlepius(ele._id)}}>+</button></tr>})
                                    }
                                    </td>
                            }
                            
                            {
                                 
                                 <td className='td'>     {
                                          productname.map((ele)=>{return <tr className='tr'><button 
                                           className='button' onClick={()=>{handleRemove(ele._id)}} >remove</button></tr>})
                                      }
                                     
                                     </td>
                             }

                    </table>
                    }
                        

            </div>
                        
                          
                        

        </div>
    )
}
export default withRouter(Loginform)

