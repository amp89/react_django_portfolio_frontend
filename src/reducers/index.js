import {combineReducers} from "redux";
import ReducerProject from "./ReducerProject"

const rootReducer = combineReducers({
    // state: (state={}) => state,//default
    projects: ReducerProject,
    // form: formReducer,

});

export default rootReducer;