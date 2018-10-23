import {GET_SITEINFO }from "../actions"



const axios = require("axios")

export default function(state={
        photo_1_link:null,
        photo_2_link:null,
        photo_3_link:null,
        about:null,
        site_title:null,
        site_author:null,
    }, action){
    switch(action.type){
        case GET_SITEINFO:

            let contact_state =  {...state, ...action.payload.data}

            // so it can have the token 
            // axios.defaults.headers.common['Authorization'] = `Token ${contact_state.at}`
            return contact_state
        default:
            return state;
    }
}
