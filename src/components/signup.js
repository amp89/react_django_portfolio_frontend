import React, {Component} from "react";

import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";

import {signUp} from "../actions";
import { Redirect } from 'react-router-dom'

class SignupForm extends Component{
    
    onSubmit(values){
        console.log("onsubmit: values: ", values)
        this.props.signUp(values);
    }

    renderRedirect = (status) => {
        console.log("redir checK: ", this.props.signUp)
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
                <h1>Sign up</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    {/* U: <Field component="input" type="text" label="usr" name="usr" /> */}
                    f: <Field component="input"  type="text" label="first" name="firstname" />
                    l: <Field component="input"  type="text" label="lastname" name="lastname" />
                    e: <Field component="input"  type="email" label="email" name="email" />
                    P: <Field component="input"  type="password" label="pwd" name="pwd" />
                    Repeat P: <Field component="input"  type="password" label="pwd2" name="pwd2" />
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
export default reduxForm({validate,form:"LoginForm"})(connect(mapStateToProps,{signUp})(SignupForm));