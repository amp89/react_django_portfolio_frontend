import {combineReducers} from "redux";
import ReducerProject from "./ReducerProject"
import ReducerAuth from "./ReducerAuth"
import ReducerContact from "./ReducerContact"
import {reducer as formReducer} from "redux-form";
import ReducerSiteInfo from "./ReducerSiteInfo";

const rootReducer = combineReducers({
    
    projects: ReducerProject,
    login: ReducerAuth,
    contact: ReducerContact,
    form: formReducer,
    siteInfo: ReducerSiteInfo
    

});

export default rootReducer;