import React, {Component} from "react";

import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";

import {signUp} from "../actions";
import { Redirect } from 'react-router-dom'
import { Z_FIXED } from "zlib";

class SignupForm extends Component{
    
    onSubmit(values){

        this.props.signUp(values);
    }

    renderRedirect = (status) => {

        if (this.props.loggedIn) {
          return <Redirect to='/' />
        }
      }
    
    render(){
        return (
            
            <div className="text-center container text-center">
                {this.renderRedirect(this.props.loggedIn)}
                <h1>Sign up</h1>
                <form 
                    onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
 
                    >
                    <div>
                        <label 
                            for="first"
                        >Firstname:</label>
                        <Field
                            component="input"
                            type="text"
                            label="first"
                            name="firstname" required autofocus/>
                    </div>
                    <label 
                            for="lastname"
                        >Lastname:</label>
                        <Field
                            component="input"
                            className="formcontrol"
                            type="text" label="lastname" name="lastname" requried/>
                    <div>
                    <label 
                            for="email"
                        >Email:</label>
                        <Field 
                        component="input" className="formcontrol" type="email" label="email" name="email" required/>
                    </div>
                    <div>
                    <label 
                            for="pwd1"
                        >Password:</label>
                    <Field component="input" className="formcontrol"  type="password" label="pwd1" name="pwd1" />
                    </div>
                    <div>
                    <label 
                            for="pwd2"
                        >Repeat Password:</label>
                        <Field component="input" className="formcontrol" type="password" label="pwd2" name="pwd2" />
                    </div>
                    <Field component="input" type="text" label="abc" name="abc" style={{zIndex:"-100000", position:"fixed", right:10000}} />
                    <div><button className="btn btn-lg btn-primary" type="submit">Sign Up</button></div>
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
    return {
        loggedIn:state.login.loggedIn,
    }
}

export default reduxForm({validate,form:"LoginForm"})(connect(mapStateToProps,{signUp})(SignupForm));