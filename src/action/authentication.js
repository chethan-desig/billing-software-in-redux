import axios from 'axios'

export const startregister =(formdata,reset)=>{
  
    return (dispatch)=>{
        axios.post('https://dct-billing-app.herokuapp.com/api/users/register',formdata)
        .then((res)=>{
            const reg = res.data
            console.log(reg)
            if(reg.hasOwnProperty('errmsg')){
                alert(reg.errmsg)
            } else{
                 dispatch(registerauth(reg))
                 reset()
                 
                
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const registerauth=(reg)=>{
    return{
        type:"set_Register",
        payload:reg
    }
}
export const startloginauth=(formdata,reset)=>{
    return (dispatch)=>{
        axios.post('https://dct-billing-app.herokuapp.com/api/users/login',formdata)
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                localStorage.setItem('jwt',result.token)
                
                dispatch(loginauth(result))
                reset()
            
                
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const loginauth=(result)=>{
    return {
        type:'set_Login',
        payload:result
    }
}

export const startdetails=()=>{
    return (dispatch)=>{
        axios.get(' https://dct-billing-app.herokuapp.com/api/users/account',{
             headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`} 
        })
        .then((res)=>{
            
            const result = res.data
            dispatch(setdetails(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const setdetails=(result)=>{
    return {
        type:'SET_DETAILS',
        payload:result
    }
}