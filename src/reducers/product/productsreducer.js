const intialstate=[]

const Productreducers=(state=intialstate,action)=>{
    switch (action.type){
        case 'GET_PRODUCTS':{
            return [...action.payload]
        }
        case 'SET_DATA':{
            return [action.payload,...state]
        }
        case 'SET_DELETE':{
            return state.filter((ele)=>{
                return ele._id !==action.payload._id
            })
        }
        case 'SET_EDIT':{
            return state.map((ele)=>{
                if(ele._id===action.payload._id){
                    return {...state,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        default:{
            return[...state]
        }
    }
}
export default Productreducers