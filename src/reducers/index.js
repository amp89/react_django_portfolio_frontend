import {combineReducers} from "redux";
import ReducerProject from "./ReducerProject"
import ReducerAuth from "./ReducerAuth"
// import ReducerLogout from "./ReducerLogout"
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    // state: (state={}) => state,//default
    projects: ReducerProject,
    login: ReducerAuth,
    form: formReducer
    // form: formReducer,

});

export default rootReducer;