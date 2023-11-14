import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App/AppContainer';
import thunk from "redux-thunk";
import reducers from './reducers'

import './index.css';

import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import getProducts from "./Middleware/ProductList";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const composeEnhancers = composeWithDevTools({name: 'Sneakers'})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            thunk,
            getProducts
        )
    )
)

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
