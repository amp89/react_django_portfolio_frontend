import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import Nav from './components/nav';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promiseMiddleware from "redux-promise";


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    // <Provider store={createStoreWithMiddleware(reducers)}>

        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    {/* <Route exact path="/default" component={App} /> */}

                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    // </Provider>


    //{/* <App />, */}

    ,document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
