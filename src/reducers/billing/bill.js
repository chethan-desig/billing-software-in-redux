const intialstate={
    bill:{}
}

 const BillReducer=(state=intialstate,action)=>{
    switch (action.type) {
        case 'SET_BILL':{
            return {...state,bill:action.payload}
        }
        default :{
            return {...state}
        }
    }
}

export default BillReducer