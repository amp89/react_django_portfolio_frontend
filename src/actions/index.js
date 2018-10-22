const axios = require("axios")

export const GET_PROJECTS = "GET_PROJECTS";

export const POST_LOGIN = "POST_LOGIN";
export const POST_SIGNUP = "POST_SIGNUP";
export const GET_LOGOUT = "GET_LOGOUT";
export const GET_CONTACT = "GET_CONTACT";
export const GET_SITEINFO = "GET_SITEINFO";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const POST_MESSAGE = "POST_MESSAGE";


export const getProjects = () => {

        let projects = axios.get("http://localhost:8000/projects/")
        console.log("this is what axios returns: ", projects)
        return {
            type:GET_PROJECTS,
            payload:projects
        }
        
}

export const postLogin = (values) => {
    console.log("posting to login: ", values)
    let userInfo = axios.post("http://localhost:8000/login/", values)
    console.log("USER INFO PROMISE: ", userInfo);
    return {
        type:POST_LOGIN,
        payload:userInfo
    }
}

export const getLogout = (atoken) => {
    
    console.log(`Loggint out with token ${atoken}`)
    let header = `Authorization: Token ${atoken}`
    // let r = axios.get("http://localhost:8000/logout/", {headers: {header}})
    let r = axios.get("http://localhost:8000/logout/", {"Authorization": `Authorization: Token ${atoken}`})
    return {
        type:GET_LOGOUT,
        payload:null
    }
}

export const signUp = (data) => {
    let r = axios.post("http://localhost:8000/signup/",data)
    return {
        type:POST_SIGNUP,
        payload: r
    }
}

export const getContact = (at) => {
    //set this on something that loads w/ the initial page load
    axios.defaults.headers.common['Authorization'] = `Token ${at}`;

    let r = axios.get("http://localhost:8000/connect/")
    return {
        type:GET_CONTACT,
        payload: r
    }
}

export const fetchSiteInfo = () => {
    let r = axios.get("http://localhost:8000/info/")
    return {
        type: GET_SITEINFO,
        payload: r
    }
}

export const sendMessage = (values) => {
    let r = axios.post("http://localhost:8000/message/", values)
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

// export function fetchThings(){
//     console.log("fetch action");
//     return {
        
//         type:FETCH_THINGS,
//         //no request or anything to put here since its pulling from local store
//     }
// }
