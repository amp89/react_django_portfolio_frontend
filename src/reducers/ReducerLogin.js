import {  POST_LOGIN } from "../actions";

export default function(state={
    loggedIn:false,
    at:null,
    username:null,
    firstname:null,
    lastname:null,
    loggedIn:false,
    usernameInput:null,
    passwordInput:null
    }, action){
    switch(action.type){
        case POST_LOGIN:
            console.log("POST_LOGIN reducer: ", action.payload);
            return {...state, ...action.payload.data}
        default:
            return state;
    }
}