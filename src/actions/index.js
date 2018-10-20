const axios = require("axios")

export const GET_PROJECTS = "GET_PROJECTS";
export const DELETE_THING = "DELETE_THING";
export const FETCH_THINGS = "FETCH_THINGS";

function doaxios(){

}

// export function getProjects(callback){
//     /*
//     axios.get("http://localhost:8000/projects").then(
//         (data) => {
//             console.log("getting stuffs")
//             return {
//                 type:GET_PROJECTS,
//                 payload:data
//             }
//         }
//     )
//     *///////////////////////////
//     return function(dispatch){
//         axios.get("http://localhost:8000/projects").then(
//             (data) => {
//                 console.log("getting stuffs")
//                 dispatch({
//                     type:GET_PROJECTS,
//                     payload:data
//                 })
//             }
//         )
//     }

//     //execute callback (its the history.push("/") thing)
// };

export const getProjects = () => {

        let projects = axios.get("http://localhost:8000/projects/")
        console.log("this is what axios returns: ", projects)
        return {
            type:GET_PROJECTS,
            payload:projects
        }
        
        // return (dispatch){
        //     return fetch("http://localhost:8000/projects").then(
        //         r => dispatch()
        //     )
        // }



}

// export function fetchThings(){
//     console.log("fetch action");
//     return {
        
//         type:FETCH_THINGS,
//         //no request or anything to put here since its pulling from local store
//     }
// }
