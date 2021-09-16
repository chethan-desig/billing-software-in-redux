const intialstate=[]
const BillsReducers=(state=intialstate,action)=>{
    switch (action.type){
        case 'SET_ALLBILLS':{
            return [...action.payload]
        }
        case 'SET_DATA':{
            return[action.payload,...state]
        }
        case 'SET_DELETE':{
            return state.filter((ele)=>{
                return ele._id!==action.payload._id
            })
        }
        default:{
           return [...state]
        }
    }
}
export default BillsReducers