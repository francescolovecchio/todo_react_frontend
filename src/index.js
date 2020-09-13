import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import promise from "redux-promise-middleware";
import {BrowserRouter} from 'react-router-dom'

let storetodos = {
    todos: [],
    activeFilter: 'ALL',
    lists: []
};

if (localStorage.getItem("mytodolist")) {
    let recoveredState = JSON.parse(localStorage.getItem("mytodolist"));
    if (recoveredState && ! recoveredState.hasError) {
        console.log(recoveredState);
        storetodos = recoveredState;
    }
}
const log = createLogger({duration: true});

const composeEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(storeReducer, {
    ...storetodos
}, composeEnhancers(applyMiddleware(log, promise)));


ReactDOM.render (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


store.subscribe(() => {
    const state = store.getState();
    if (! state.error.hasError) {
        localStorage.setItem("mytodolist", JSON.stringify(state));
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
