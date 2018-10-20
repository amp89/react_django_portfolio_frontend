// import {  GET_LOGOUT } from "../actions";
// const axios = require("axios")

// export default function(state={
//         loggedIn:false,
//         at:null,
//         username:null,
//         firstname:null,
//         lastname:null,
//         loggedIn:false
//     }, action){
//     switch(action.type){
//         case GET_LOGOUT:
//             console.log("GET_LOGOUT reducer: ", action.payload);
//             updates = {
                
//                     loggedIn:false,
//                     at:null,
//                     username:null,
//                     firstname:null,
//                     lastname:null,
//                     loggedIn:false
                
//             }
//             let newstate =  {...state, ...updates}
//             console.log("logged out: state: ", newstate)
//             axios.defaults.headers.common['Authorization'] = null;
//             return newstate
//         default:
//             return state;
//     }
// }