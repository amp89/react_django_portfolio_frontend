import React, {Component} from "react";
import { Link } from "react-router-dom";

import { postLogin } from "../actions"
import {connect} from "react-redux";

import LoginForm from "./login"

class Auth extends Component{
    render(){
        
            if(this.props.loggedIn == true){
                return <div>
                                       
                {this.props.loggedIn} | {this.props.at} | {this.props.username} | {this.props.firstname} | {this.props.lastname}
                </div>
            }else{
                return <div>
                    <div onClick={this.props.postLogin}>CLICK ME</div>
                    <LoginForm /> <br /> {this.props.loggedIn} {this.props.loggedIn} | {this.props.at} | {this.props.username} | {this.props.firstname} | {this.props.lastname}

                    </div>
            }

        
    }
}

function mapStateToProps(state){
    console.log(state.loggedIn)
    return {
        loggedIn:state.loggedIn,
        at:state.at,
        username:state.username,
        firstname:state.firstname,
        lastname:state.lastname,
        usernameInput:state.usernameInput,
        passwordInput:state.passwordInput,
    }
}


// export default connect(mapStateToProps, {getProjects})(Portfolio)
export default connect(mapStateToProps)(Auth)