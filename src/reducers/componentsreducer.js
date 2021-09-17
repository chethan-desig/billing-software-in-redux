const intialstate=[]
const Componentreducer=(state=intialstate,action)=>{
    switch(action.type){
        case 'GET_DATAFULL':{
            return[...action.payload]
        }
        case "ADD_DATA":{
            return [action.payload,...state]
        }
        case 'SET_UPDATE':{
            
            return state.map((ele)=>{
                if(ele._id===action.payload._id){
                    return {...state,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        case 'DEL_CUS':{
          return state.filter((ele)=>{
              return ele._id!==action.payload._id
          })
          
               
        }

        default:{
            return [...state]
        }
    }
}
export default Componentreducer