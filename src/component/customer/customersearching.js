import React,{useState,useEffect} from "react"
import { useSelector } from "react-redux"
import Searchingui from './searchingui'
const Searching=()=>{
    const [filter,setFilter] = useState('')
    const [customer,setCustomer] = useState([])
    const [filterdata,setFilterData] =useState([])
    const state = useSelector((state)=>{
        return state.components
    })
    
    const handleChange=(e)=>{
        setFilter(e.target.value)
        const find = customer.filter((ele)=>{
            return ele.name.includes(filter.toLocaleLowerCase())
        })
        setFilterData(find)
    }
    useEffect(()=>{
        setCustomer(state)
    })
    
   
    return (
        <div>
            <input type="text" placeholder='serching' value={filter} onChange={handleChange}/>
            {
                filter.length==0?
                customer.map((ele)=>{return <Searchingui {...ele}/>}):
                filterdata.map((ele)=>{return <Searchingui {...ele}/>})
             }

        </div>
    ) 
}
export default Searching