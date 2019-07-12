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

const store = createStore(rootReducer);


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
