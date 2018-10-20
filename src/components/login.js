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
            <div>
                {this.renderRedirect(this.props.loggedIn)}
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
    console.log("State of login: ", state.login.loggedIn)
    return {
        loggedIn:state.login.loggedIn,
    }
}

// export default reduxForm({validate,form:"LoginForm"})(connect(null,{postLogin})(LoginForm));
// export default reduxForm({form:"LoginForm"})(connect(null,{postLogin})(LoginForm));
export default reduxForm({form:"LoginForm"})(connect(mapStateToProps,{postLogin})(LoginForm));