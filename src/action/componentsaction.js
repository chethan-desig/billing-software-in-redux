import axios from 'axios'


export const startcustomer=()=>{
    return (dispatch)=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/customers',{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(gettingdata(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const gettingdata=(result)=>{
    return{
        type:'GET_DATAFULL',
        payload:result
    }
}
export const startingaddingcustomer=(formdata,reset)=>{
    return (dispatch)=>{
        axios.post('https://dct-billing-app.herokuapp.com/api/customers',formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(addingcustomer(result))
                reset()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const addingcustomer=(result)=>{
    return{
        type:'ADD_DATA',
        payload:result
    }
}   

export const startdeletecustomer=(id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            alert('Are you sure')
            dispatch(deleting(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
export const deleting=(result)=>{
    console.log(result._id)
    return{
        type:"DEL_CUS",
        payload:result
    }
}

export const startupdatecustomer=(formdata,reset,id,handletoggle)=>{
    
    return (dispatch)=>{
        axios.put(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(updating(result))
            handletoggle()

        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const updating=(result)=>{
    return{
        type:"SET_UPDATE",
        payload:result
    }
}