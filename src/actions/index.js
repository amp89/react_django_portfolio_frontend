const axios = require("axios")

export const GET_PROJECTS = "GET_PROJECTS";

export const POST_LOGIN = "POST_LOGIN";

function doaxios(){

}



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
    let userInfo = axios.post("http://localhost:8000/login/")
    console.log("USER INFO PROMISE: ", userInfo);
    return {
        type:POST_LOGIN,
        payload:userInfo
    }
}

// export function fetchThings(){
//     console.log("fetch action");
//     return {
        
//         type:FETCH_THINGS,
//         //no request or anything to put here since its pulling from local store
//     }
// }
