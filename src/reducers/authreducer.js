const intialstate={
    register:{},
    Login:{},
    userdetails:{}
}

const authReducer=(state=intialstate,action)=>{
    switch (action.type){
        case 'set_Register':{
            return {...state,register:action.payload}
        }
        case 'set_Login':{
            return {...state,Login:action.payload}
        }
        case 'SET_DETAILS':{
            return {...state,userdetails:action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default authReducer