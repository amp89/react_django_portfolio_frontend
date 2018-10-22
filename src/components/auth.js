import React, {Component} from "react";
import { Link } from "react-router-dom";

import { postLogin } from "../actions"
import {getLogout } from "../actions"
import {connect} from "react-redux";

import LoginForm from "./login"
import SignupForm from "./signup"
import ErrorList from "./errors"
import { Redirect } from 'react-router-dom'

class Auth extends Component{

    renderRedirect = (status) => {
        console.log("redir checK: ", this.props.loggedIn)
        // console.log("redir checK: ", state.loggedIn)
        console.log("redir checK stat: ", status)
        if (this.props.loggedIn) {
            console.log("redir")
          return <Redirect to='/' />
        }else{
            console.log('no redir')
        }
      }

    logout(){
        console.log("no imp.")
    }

    render(){
        
            if(this.props.loggedIn == true){
                return <div>
                    {this.renderRedirect()}
                </div>
            }else{
                return (
                <div>
                    
                    <LoginForm />
 
                    <SignupForm />

                    <ErrorList />
                </div>)
            }

        
    }
}

function mapStateToProps(state){
    console.log("all state: ", state);
    console.log("login state? ", state.login.loggedIn);
    return {
        loggedIn:state.login.loggedIn,
        at:state.login.at,
        username:state.login.username,
        firstname:state.login.firstname,
        lastname:state.login.lastname,
        result:state.login.result,
    }
}


// export default connect(mapStateToProps, {getProjects})(Portfolio)
export default connect(mapStateToProps)(Auth)