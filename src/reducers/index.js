import {combineReducers} from "redux";
import ReducerProject from "./ReducerProject"
import ReducerAuth from "./ReducerAuth"
import ReducerContact from "./ReducerContact"
// import ReducerLogout from "./ReducerLogout"
import {reducer as formReducer} from "redux-form";
import ReducerSiteInfo from "./ReducerSiteInfo";

const rootReducer = combineReducers({
    // state: (state={}) => state,//default
    projects: ReducerProject,
    login: ReducerAuth,
    contact: ReducerContact,
    form: formReducer,
    siteInfo: ReducerSiteInfo
    // form: formReducer,

});

export default rootReducer;