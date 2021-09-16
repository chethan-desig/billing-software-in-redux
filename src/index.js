import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  {Provider}  from 'react-redux';
import config from './store/configstore'
import App from './App';
import {startcustomer} from './action/componentsaction'
import {startallproduct} from './action/productsaction'
import {asyncallbills} from './action/billingaction'
const store=config()

store.subscribe(()=>{
  console.log(store.getState())
})
if(localStorage.getItem('jwt')){
  store.dispatch(startcustomer())
  store.dispatch(startallproduct())
  store.dispatch(asyncallbills())
}

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

