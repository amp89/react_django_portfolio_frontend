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
        if (this.props.loggedIn) {
          return <Redirect to='/' />
        }
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

    return {
        loggedIn:state.login.loggedIn,
        at:state.login.at,
        username:state.login.username,
        firstname:state.login.firstname,
        lastname:state.login.lastname,
        result:state.login.result,
    }
}

export default connect(mapStateToProps)(Auth)