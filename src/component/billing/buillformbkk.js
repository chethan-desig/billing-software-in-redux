import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import { useSelector } from 'react-redux'
const Loginform =(props)=>{
    const {sendform} = props
    const [date,setDate] = useState('')
    const [customer,setCustomer] = useState('')
    const [product,setProduct] = useState([])
    const [productname,setProductname] = useState([])
    const [modal,setModal] = useState(false)
   
    
    const [validation,setValidation] = useState({})
 
    const customerdata = useSelector((state)=>{
        return state.components
    })
    const productdata=useSelector((state)=>{
        return state.products
    })

    const error={}
    const runValidation=()=>{
        
       
        if(date.length==0){
            error.date='pls enter the date'
        }
        if(customer.length==0){
            error.customer='pls enter customer'
        }
       
    
    }
    const handleminus=(id)=>{
        console.log(id)
        const pro = product.map((ele)=>{
            if(ele.product==id){
                return {...ele,...{quantity:ele.quantity-1}}
            }else{
                return {...ele}
            }
        })
        setProduct(pro)
    }
    const handlepius=(id)=>{
        const pro = product.map((ele)=>{
            if(ele.product==id){
                return {...ele,...{quantity:ele.quantity+1}}
            }else{
                return {...ele}
            }
        })
        setProduct(pro)
    }
    const handleChange=(e)=>{
       
        if(e.target.name=='date'){
             setDate(e.target.value)
        }
        if(e.target.name=='customer'){
            setCustomer(e.target.value)
        }  


    }
    
    const handleproduct=(e)=>{
        const result = e.target.value
        setProduct([...product,{product:result,quantity:1}])
        const fil = productdata.filter((ele)=>{
            return ele._id === result
        })
        setProductname([...productname,...fil])
        return fil
    }
    // useEffect(()=>{

    // },[data])
    console.log(product)
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
             
             
            }
         
            sendform(formdata,reset)
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
                {validation.date&&<span>{validation.date}</span>}
                <label class="form-label">Customer</label>
                   <select value={customer}  class="form-control"name='customer' onChange={handleChange}>
                       <option>customers</option>

                       {
                           customerdata.map((ele)=>{
                               return<option value={ele._id}>{ele.name}</option>
                           })
                       }
                   </select>
                   <label class="form-label">Product</label>
                            <select value={product} class="form-control" name='product' onChange={handleproduct}>
                        <option>products</option>
                        {
                            productdata.map((ele)=>{
                                return<option value={ele._id}>{ele.name}</option>
                            })
                        }

                    
                    </select>
                    <input type='submit' value='submit'  className='btn btn-success mt-4' />
                    </form>
            </div>

          
            <div className='col-8'>
            {
                           productname.map((ele)=>{
                               return <table border='1px solid'>
                               <tbody>
                                   <tr>
                                       <td>{ele.name}</td>
                                   </tr>
                                   <tr>
                                       <td><button onClick={()=>{handleminus(ele._id)}}>-</button>quality<button onClick={()=>{handlepius(ele._id)}}>+</button> </td>
                                   </tr>
                               </tbody>
                               <button onClick={()=>{handleRemove(ele._id)}}>remove</button>
                           </table>
                           })
                        }

            </div>

        </div>
    )
}
export default withRouter(Loginform)

/*
<div className='container'>
             <div className='row'>
            <form onSubmit={handleSubmit}>
            <div >
            <div class="mb-3">
            <label class="form-label">Date</label>
                <input type='date' value={date} class="form-control" onChange={handleChange} name='date' placeholder='date'/>
                {validation.date&&<span>{validation.date}</span>}
                <br/>
                </div>
                <div class="mb-3">
                <label class="form-label">Customer</label>
                   <select value={customer} class="form-control"name='customer' onChange={handleChange}>
                       <option>customers</option>

                       {
                           customerdata.map((ele)=>{
                               return<option value={ele._id}>{ele.name}</option>
                           })
                       }
                   </select>
                  </div>
                <br/>
                <div class="mb-3">
              
                <label class="form-label">Product</label>
                            <select value={product} class="form-control" name='product' onChange={handleproduct}>
                        <option>products</option>
                        {
                            productdata.map((ele)=>{
                                return<option value={ele._id}>{ele.name}</option>
                            })
                        }


                    </select>
                    <div >
                        {
                            productname.map((ele)=>{return ele.map((ele)=>{
                                return <div>{ele.name}-<button onClick={()=>{handleminus(ele._id)}}>-</button>quantity<button onClick={()=>{handlepius(ele._id)}}>+</button></div>
                            })})
                        }
                    
                    </div>
                
                </div>
              <input type='submit' value='submit' className='btn btn-success'/>
           </div>
  */
           {
               
            lineItem.map((ele,i)=>{
                return <div>
                      <label class="form-label">Product</label>
                    <select value={ele.product} class="form-control" name='product' onChange={e => handleInputChange(e, i)}>
                <option>products</option>
                {
                    productdata.map((ele)=>{
                        return<option value={ele._id}>{ele.name}</option>
                    })
                }
            </select>
               
         <br/>
         <label class="form-label">quality</label>
         <input type='number' class="form-control" value={ele.quantity} name='quantity' onChange={e=>handleInputChange(e,i)} placeholder='quantity'/>
         {lineItem.length>1&&<button className='btn btn-danger'  onClick={() => handleRemoveClick(i) }>remove</button>}
         {lineItem.length-1==i&&<button  className='btn btn-info' onClick={handleAddClick}>Add another</button>}
         </div>
            })
        }