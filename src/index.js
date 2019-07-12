import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const consoleMiddleware = store => {

    return next => {
        return action => {
            console.log('dispatching, dispatch Name :', action.type)
            const nextAction = next(action)
            console.log('next state...', store.getState())

            return nextAction
        }
    }
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    consoleMiddleware
];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

// si on n'utilise pas le dev tools mais vous utilisez uniquement les middlewares
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

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
