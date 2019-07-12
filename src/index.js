import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import counterA from './reducers/counterA';
import counterB from './reducers/counterB';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    counterA,
    counterB
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer, composeEnhancers);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
