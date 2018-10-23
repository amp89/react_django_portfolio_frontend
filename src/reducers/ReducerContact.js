import {  POST_LOGIN, RESET_MESSAGE } from "../actions";
import {  GET_LOGOUT } from "../actions";
import {  GET_CONTACT } from "../actions";
import {  POST_MESSAGE } from "../actions";



const axios = require("axios")

export default function(state={
        github:null,
        linkedin:null,
        blog:null,
        email:null,
        phone:null,
    }, action){
    switch(action.type){
        case GET_CONTACT:

            let contact_state =  {...state, ...action.payload.data}

            return contact_state
        case POST_MESSAGE:
            let message_state = {...state, ...action.payload.data}
            
            return message_state
        case RESET_MESSAGE:

            let newSTuff = {"result":[]}
            let reset_state =  {...state, ...newSTuff}
            return reset_state
        default:
            return state;
    }
}
