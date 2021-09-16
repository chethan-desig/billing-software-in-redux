import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import Authentication from '../reducers/authreducer'
import Componentreducer from "../reducers/componentsreducer";
import Productreducers from "../reducers/product/productsreducer";
import BillsReducers from "../reducers/billing/bills";
import BillReducer from "../reducers/billing/bill";
const Store=()=>{
    const store=createStore(combineReducers({
        auth:Authentication,
        components:Componentreducer,
        products:Productreducers,
        bills:BillsReducers,
        bill:BillReducer
    }),applyMiddleware(thunk))
    return store
}
export default Store