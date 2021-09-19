import React,{useState,useEffect} from "react"
import axios from "axios"
import {PieChart ,Pie,Tooltip,XAxis,YAxis,Legend,BarChart,Bar,CartesianGrid } from 'recharts'
import Chart from 'react-google-charts'
import moment from 'moment'
import Navbar from './navbar/navbarcomponent'
const Dashboard=()=>{
    const [customer,setCustomer] = useState([])
    const [product,setProduct] = useState([])
    const [bill,setBill] = useState([])
    useEffect(()=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/customers',{
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
        axios.get('https://dct-billing-app.herokuapp.com/api/products',{
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
        axios.get('https://dct-billing-app.herokuapp.com/api/bills',{
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
    const totalRevenue = bill.reduce((rev, bill) => {
        return rev + bill.total
    }, 0)
  
    const sales = {}

    for (let i = 0; i < 12; i++) {
        let monthSale = 0
        bill.forEach(ele => {
            if (moment(ele.date).month() === i) {
                monthSale += ele.total
            }
        })
        sales[moment(i + 1, "M").format('MMM')] = monthSale
    }

    const monthlySales = Object.entries(sales)
    monthlySales.unshift(["month", "sales"])
   
    const data=[
        {name:"customers",value:customer.length},
        {name:"products",value:product.length},
        {name:"bills",value:bill.length},
    ]
    
    return(
       <div>

        <Navbar />
        <div className='d-flex m-4 justify-content-around'>
        <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Customers</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Connected Customers</h5>
                            <p className="card-text text-center fs-1">{customer.length}</p>
                        </div>
           </div>  
           <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Customers</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Product Available</h5>
                            <p className="card-text text-center fs-1">{product.length}</p>
                        </div>
           </div>      
           <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Customers</div>
                        <div className="card-body">
                            <h5 className="card-title">Total bills Generated</h5>
                            <p className="card-text text-center fs-1">{bill.length}</p>
                        </div>
           </div>       
           <div className="card text-success bg-light mb-3" style={{ maxWidth: "200px" }}>
                        <div className="card-header">Customers</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Revenue Generated</h5>
                            <p className="card-text text-center fs-1">{totalRevenue}</p>
                        </div>
           </div>              
        </div>
      <div>
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
        <div className='container'>
        <Chart
            width={700}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={monthlySales}
            options={{
                title: '1 year Company sales',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { title: 'Sales', minValue: 0 },
                chartArea: { width: '70%', height: '70%' },
            }}
        />
        </div>
        </div>
    )
}
export default Dashboard