import React,{useEffect} from 'react'
import { useDispatch } from "react-redux"
import Routing from "./routing/routing"
import { withRouter } from "react-router"
import { startallproduct } from "../src/action/productsaction"
import { startcustomer } from "../src/action/componentsaction"
import {asyncallbills} from "../src/action/billingaction"
const App=(props)=>{
  const  dispatch = useDispatch()
  useEffect(()=>{
    dispatch(startcustomer())
    dispatch(startallproduct())
    dispatch(asyncallbills())
    
},[])
  return(
    <Routing/>
  )
}
export default withRouter(App)