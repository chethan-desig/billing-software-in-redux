import React,{useState,useEffect} from "react"
import axios from "axios"
import {PieChart ,Pie,Tooltip,XAxis,YAxis,Legend,BarChart,Bar,CartesianGrid } from 'recharts'
const Dashboard=()=>{
    const [customer,setCustomer] = useState([])
    const [product,setProduct] = useState([])
    const [bill,setBill] = useState([])
    useEffect(()=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
           setCustomer(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    useEffect(()=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
           setProduct(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    useEffect(()=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
           setBill(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const data=[
        {name:"customers",value:customer.length},
        {name:"products",value:product.length},
        {name:"bills",value:bill.length},
    ]
    
    return(
        <div className='container mt-4'>
                    <div class="card">
            <div class="card-body">
               <h2>Total customers</h2>
                <h4>{customer.length}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
               <h2>Total Products</h2>
                <h4>{product.length}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
               <h2>total Bill generated</h2>
                <h4>{bill.length}</h4>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-6'>
             <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
               
            </BarChart>
            </div>
            <div className='col-6'>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip/>
            </PieChart>
            </div>
            </div>
        </div>
    )
}
export default Dashboard