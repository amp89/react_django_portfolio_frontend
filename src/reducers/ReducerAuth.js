import {  POST_LOGIN } from "../actions";
import {  GET_LOGOUT } from "../actions";
import {  POST_SIGNUP } from "../actions";


const axios = require("axios")

export default function(state={
        loggedIn:false,
        at:null,
        username:null,
        firstname:null,
        lastname:null,
        loggedIn:false,
        result:[]
    }, action){
    switch(action.type){
        case POST_LOGIN:

            let newstate_login =  {...state, ...action.payload.data}
            axios.defaults.headers.common['Authorization'] = `Token ${newstate_login.at}`;

            return newstate_login
        case GET_LOGOUT:

            let updates = {
                    loggedIn:false,
                    at:null,
                    username:null,
                    firstname:null,
                    lastname:null,
                    loggedIn:false
            }
            let newstate_logout =  {...state, ...updates}

            axios.defaults.headers.common['Authorization'] = null;
            return newstate_logout
        case POST_SIGNUP:

            let signup_updates = action.payload.data
            let signup_state =  {...state, ...signup_updates}
            axios.defaults.headers.common['Authorization'] = null;
            return signup_state
        default:
            return state;
    }
}


