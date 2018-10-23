const axios = require("axios")
const config = require("../config/config")
export const GET_PROJECTS = "GET_PROJECTS";

export const POST_LOGIN = "POST_LOGIN";
export const POST_SIGNUP = "POST_SIGNUP";
export const GET_LOGOUT = "GET_LOGOUT";
export const GET_CONTACT = "GET_CONTACT";
export const GET_SITEINFO = "GET_SITEINFO";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const POST_MESSAGE = "POST_MESSAGE";


export const getProjects = () => {

        let projects = axios.get(`${config.api}/projects/`)
        return {
            type:GET_PROJECTS,
            payload:projects
        }
        
}

export const postLogin = (values) => {
    let userInfo = axios.post(`${config.api}/login/`, values)
    return {
        type:POST_LOGIN,
        payload:userInfo
    }
}

export const getLogout = (atoken) => {
    
    let header = `Authorization: Token ${atoken}`
    // let r = axios.get("http://localhost:8000/logout/", {headers: {header}})
    let r = axios.get(`${config.api}/logout/`, {"Authorization": `Authorization: Token ${atoken}`})
    return {
        type:GET_LOGOUT,
        payload:null
    }
}

export const signUp = (data) => {
    let r = axios.post(`${config.api}/signup/`,data)
    return {
        type:POST_SIGNUP,
        payload: r
    }
}

export const getContact = (at) => {
    //set this on something that loads w/ the initial page load
    axios.defaults.headers.common['Authorization'] = `Token ${at}`;

    let r = axios.get(`${config.api}/connect/`)
    return {
        type:GET_CONTACT,
        payload: r
    }
}

export const fetchSiteInfo = () => {
    let r = axios.get(`${config.api}/info/`)
    return {
        type: GET_SITEINFO,
        payload: r
    }
}

export const sendMessage = (values) => {
    let r = axios.post(`${config.api}/message/`, values)
    return {
        type: POST_MESSAGE,
        payload: r
    }
}

export const resetMessage = (values) => {
    return {
        type: RESET_MESSAGE,
        payload: null
    }
}
