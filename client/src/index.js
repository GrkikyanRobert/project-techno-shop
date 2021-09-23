import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./store/reducers"
import createSagaMiddleware from "redux-saga"
import  watchers from "./store/sagas"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const saga=createSagaMiddleware()
const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga))
    )
saga.run(watchers)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Provider>,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
