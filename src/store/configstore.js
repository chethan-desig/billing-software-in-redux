import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import Authentication from '../reducers/authreducer'
import Componentreducer from "../reducers/componentsreducer";
const Store=()=>{
    const store=createStore(combineReducers({
        auth:Authentication,
        components:Componentreducer
    }),applyMiddleware(thunk))
    return store
}
export default Store