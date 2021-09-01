import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  {Provider}  from 'react-redux';
import config from './store/configstore'
import App from './App';

const store=config()

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

