import {combineReducers} from "redux";
import ReducerProject from "./ReducerProject"
import ReducerLogin from "./ReducerLogin"
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    // state: (state={}) => state,//default
    projects: ReducerProject,
    login: ReducerLogin,
    form: formReducer
    // form: formReducer,

});

export default rootReducer;