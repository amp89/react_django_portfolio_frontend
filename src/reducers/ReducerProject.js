import {  GET_PROJECTS } from "../actions";

export default function(state={projects:[]}, action){
    switch(action.type){
        case GET_PROJECTS:

            return {...state, ...action.payload.data}
        default:
            return state;
    }
}