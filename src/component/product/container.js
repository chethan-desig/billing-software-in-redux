import React,{useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { startallproduct } from "../../action/productsaction"
import { startsendingproduct } from "../../action/productsaction"
import {asyncdelete} from '../../action/productsaction'
import Productform from "./productform"
import Productlisting from './productlisting'
import Navbar from '../navbar/navbarcomponent'
const Container =()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startallproduct())
    },[])
    const productdata=(formdata,reset)=>{
        dispatch(startsendingproduct(formdata,reset))
    }
    const data=useSelector((state)=>{
        return state.products
    })
    const deletingdata=(id)=>{
        dispatch(asyncdelete(id))
    }
    return(
        <div>
            <Navbar />
            <div className='row'>
            <div className='col-5 mt-4 ' >
            <Productlisting data={data} deletingdata={deletingdata}/>
            </div>
            <div className='col-7 mt-4'>
                <h1><span class="badge bg-secondary">ADD Product</span></h1>
            <Productform productdata={productdata}/>
                </div>
            </div>
        </div>
    )
}
export default Container