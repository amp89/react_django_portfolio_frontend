import React, {Component} from "react";

import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";

import {postLogin} from "../actions";

class LoginForm extends Component{
    
    onSubmit(values){
        console.log("onsubmit: values: ", values)
        this.props.postLogin(values);
    }
    
    render(){
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    U: <Field component="textarea" label="usr" name="usr" />
                    P: <Field component="textarea" label="pwd" name="pwd" />
                    <button type="submit">Lets Go!</button>
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
    console.log(state.loggedIn)
    return {
        usernameInput:state.usernameInput,
        passwordInput:state.passwordInput,
    }
}

// export default reduxForm({validate,form:"LoginForm"})(connect(null,{postLogin})(LoginForm));
export default reduxForm({form:"LoginForm"})(connect(null,{postLogin})(LoginForm));