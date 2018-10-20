import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Nav from './components/nav';

import Auth from './components/auth';
import Connect from './components/connect';
import Portfolio from './components/portfolio';
import Home from './components/home';

import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers"
import { PersistGate } from 'redux-persist/integration/react'
 
const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, reducers)
// let store = createStore(persistedReducer)
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
let store = createStoreWithMiddleware(persistedReducer)
let persistor = persistStore(store)



ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    {/* <Route exact path="/default" component={App} /> */}                    
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/connect" component={Connect} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
        </PersistGate>
     </Provider>
    ,document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
