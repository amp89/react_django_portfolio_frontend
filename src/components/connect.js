import React, {Component} from "react";
import { Link } from "react-router-dom";
import {getContact} from "../actions";
import {sendMessage} from "../actions";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import MessageErrorList from "./message_errors"
import { Redirect } from 'react-router-dom'

class Connect extends Component{

    componentDidMount(){
        console.log("connect mounted")
        this.props.getContact()
    }

    sendMessage(values){
        this.props.sendMessage(values)
    }

    render(){
            console.log("LOGGED IN ORRRRRRRRR.... ", this.props.login.loggedIn)
            if(this.props.login.loggedIn == true){
                return(<div>
                    Blog: {this.props.contactInfo.blog}
                    Email: {this.props.contactInfo.email}
                    Github: {this.props.contactInfo.github}
                    Linkedin: {this.props.contactInfo.linkedin}
                    Phone: {this.props.contactInfo.phone}
                    <form onSubmit={this.props.handleSubmit(this.sendMessage.bind(this))}>
                        {/* U: <Field component="input" type="text" label="usr" name="usr" /> */}
                        {this.props.login.loggedIn ? <div>
                            u: <Field component="input" label="subject" name="subject" />
                            f: <Field component="textarea" label="body" name="body" />
                            <button type="submit">Send!</button>
                        </div> : <div><Link to="/auth">Login</Link></div>}
                        
                        
                    </form>
                </div>)
            }else{
                return(<div>
                    
                    Blog: {this.props.contactInfo.blog}
                    Email: You have to <Link to="/auth">Login</Link> to see this :)
                    Github: {this.props.contactInfo.github}
                    Linkedin: {this.props.contactInfo.linkedin}
                    Phone: You have to <Link to="/auth">Login</Link> to see this :)
                    <form onSubmit={this.props.handleSubmit(this.sendMessage.bind(this))}>
                        {/* U: <Field component="input" type="text" label="usr" name="usr" /> */}
                            <h1>You have to <Link to="/auth">login</Link> before sending me a message :)</h1>
                            u: <Field component="input" label="subject" name="subject" disabled={!this.props.login.loggedIn}/>
                            f: <Field component="textarea" label="body" name="body" disabled={!this.props.login.loggedIn}/>
                            <button type="submit">Send!</button>
                        
                        
                    </form>
                    <MessageErrorList />
                </div>)
            }
            
        
    }
}

function validate(values){
    const errors = {}
    return errors;
}

function mapStateToProps(state){
    console.log("contact... state: ", state)
    return {
        contactInfo:state.contact,
        login:state.login
    }
}


export default reduxForm({validate,form:"ConnectForm"})(connect(mapStateToProps,{sendMessage,getContact})(Connect));
