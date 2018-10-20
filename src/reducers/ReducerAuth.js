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
            console.log("POST_LOGIN reducer: ", action.payload);
            let newstate_login =  {...state, ...action.payload.data}
            axios.defaults.headers.common['Authorization'] = `Token ${newstate_login.at}`;
            console.log(newstate_login)
            return newstate_login
        case GET_LOGOUT:
            console.log("GET_LOGOUT reducer: ", action.payload);
            let updates = {
                    loggedIn:false,
                    at:null,
                    username:null,
                    firstname:null,
                    lastname:null,
                    loggedIn:false
            }
            let newstate_logout =  {...state, ...updates}
            console.log("logged out: state: ", newstate_logout)
            axios.defaults.headers.common['Authorization'] = null;
            return newstate_logout
        case POST_SIGNUP:
            console.log("POST_SIGNUP reducer: ", action.payload);
            let signup_updates = action.payload.data
            let signup_state =  {...state, ...signup_updates}
            console.log("sign up state: ", signup_state)
            axios.defaults.headers.common['Authorization'] = null;
            return signup_state
        default:
            return state;
    }
}



// export default function(state={
//     loggedIn:false,
//     at:null,
//     username:null,
//     firstname:null,
//     lastname:null,
//     loggedIn:false
// }, action){
// switch(action.type){
//     case GET_LOGOUT:
//         console.log("GET_LOGOUT reducer: ", action.payload);
//         updates = {
            
//                 loggedIn:false,
//                 at:null,
//                 username:null,
//                 firstname:null,
//                 lastname:null,
//                 loggedIn:false
            
//         }
//         let newstate =  {...state, ...updates}
//         console.log("logged out: state: ", newstate)
//         axios.defaults.headers.common['Authorization'] = null;
//         return newstate
//     default:
//         return state;
// }
// }