import React, {Component} from "react";

import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";

import {postLogin} from "../actions";
import { Redirect } from 'react-router-dom'

class LoginForm extends Component{
    
    onSubmit(values){
        console.log("onsubmit: values: ", values)
        this.props.postLogin(values);
    }

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
    
    render(){
        return (
            <div className="text-center">
                {this.renderRedirect(this.props.loggedIn)}
                <h1>Login</h1>
                <form 
                    onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
                    className="form-signin"
                    >
                    <div>
                        <label 
                            for="usr"
                        >Email address:</label>
                        <Field
                            component="input"
                            type="text"
                            label="usr"
                            name="usr"
                            className="formcontrol"
                            required
                            autoFocus/>
                    </div>
                    <div>
                        <label 
                            for="pwd"
                        >Password:</label>
                        <Field
                            component="input"
                            type="password"
                            label="pwd"
                            name="pwd"
                            className="formcontrol"
                            required/>
                        
                    </div>
                    <div><button className="btn btn-lg btn-primary" type="submit">Sign In</button></div>
                    
                </form>
            </div>
        )
    }
}


function validate(values){
    const errors = {}
    return errors;
}

function mapStateToProps(state){
    console.log("State of login: ", state.login.loggedIn)
    return {
        loggedIn:state.login.loggedIn,
    }
}

// export default reduxForm({validate,form:"LoginForm"})(connect(null,{postLogin})(LoginForm));
// export default reduxForm({form:"LoginForm"})(connect(null,{postLogin})(LoginForm));
export default reduxForm({form:"LoginForm"})(connect(mapStateToProps,{postLogin})(LoginForm));