import axios from "axios"

export const asyncallbills =()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers:{
            'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(allbills(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const allbills=(result)=>{
    return{
        type:'SET_ALLBILLS',
        payload:result
    }
}
export const asyncsendbills=(formdata,reset,showmodal)=>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                return alert(result.message)
            }else{
                dispatch(sendbills(result))
                showmodal(result)
                reset()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const sendbills=(result)=>{
    return{
        type:'SET_DATA',
        payload:result
    }
}
export const asyncbilldelete=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(billdelete(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const billdelete=(result)=>{
    return{
        type:"SET_DELETE",
        payload:result
    }
}
export const asyncBill=(id)=>{
    return (dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(getbill(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const getbill=(result)=>{
    return {
        type:"SET_BILL",
        payload:result
    }
}