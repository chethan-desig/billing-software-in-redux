import axios from 'axios'

export const startallproduct=()=>{
    return (dispatch)=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/products',{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(allproducts(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const allproducts=(result)=>{
    return{
        type:'GET_PRODUCTS',
        payload:result
    }
}

export const startsendingproduct=(formdata,reset)=>{
    return (dispatch)=>{
        axios.post('https://dct-billing-app.herokuapp.com/api/products',formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                return(alert(result.message))
            }else{
                dispatch(sendingdata(result))
                reset()
            }
               
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const sendingdata=(result)=>{
        return{
            type:'SET_DATA',
            payload:result
        }
}
export const asyncdelete=(id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            alert('Are you sure')
            dispatch(deleting(result))
        })
    }

}
export const deleting=(result)=>{
    return {
        type:"SET_DELETE",
        payload:result
    }
}
export const asyncedit=(formdata,reset,id,handletoggle)=>{
    return (dispatch)=>{
        axios.put(`https://dct-billing-app.herokuapp.com/api/products/${id}`,formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
            const result = res.data
            dispatch(edting(result))
            handletoggle()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const edting=(result)=>{
    return{
        type:'SET_EDIT',
        payload:result
    }
}
