import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducer';
import reduxThunk from 'redux-thunk';

const store  =createStore(reducers ,{},applyMiddleware(reduxThunk))
ReactDom.render(

<Provider store={store}>

    <App/>
</Provider>

    
    ,document.querySelector('#root'));
