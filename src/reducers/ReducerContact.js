import {  POST_LOGIN } from "../actions";
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
            console.log("GET_CONTACT reducer: ", action.payload);
            let contact_state =  {...state, ...action.payload.data}
            console.log(contact_state)
            return contact_state
        case POST_MESSAGE:
            let message_state = {...state, ...action.payload.data}
            console.log("AFTER MSG STATE: ", message_state)
            return message_state
        default:
            return state;
    }
}
